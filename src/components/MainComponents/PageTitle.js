import {CustomContext} from "../../contexts/CustomContext";
import React, {useContext} from "react";

export default function PageTitle(props) {
    const {result, isAuthenticated} = useContext(CustomContext);

    return (
        <h1 className="page-title">
            {props.title}
            {/* if authenticated */}
            {isAuthenticated && <span> ({result.username})</span>}
            {/* if not */}
            {!isAuthenticated && <span> (Guest)</span>}
        </h1>
    )
}

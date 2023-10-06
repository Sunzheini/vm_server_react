import AllSectionsContainer from "../MainComponents/AllSectionsContainer";
import React from "react";

export default function Users(props) {
    return (
        <div>
            <AllSectionsContainer
                data={props.data}
                onDeleteHandler={props.onDeleteHandler}
            />
        </div>
    )
}
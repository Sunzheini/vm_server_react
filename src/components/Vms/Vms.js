import AllSectionsContainer from "../MainComponents/AllSectionsContainer";
import React from "react";

export default function Vms(props) {
    return (
        <div>
            <AllSectionsContainer
                data={props.data}
                onDeleteHandler={props.onDeleteHandler}
            />
        </div>
    )
}
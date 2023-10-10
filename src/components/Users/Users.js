import AllSectionsContainer from "../MainComponents/AllSectionsContainer";
import React from "react";
import HorizontalDivider from "../MainComponents/HorizontalDivider";
import AddUserForm from "../Forms/AddUserForm";

export default function Users(props) {
    return (
        <div>
            <AllSectionsContainer
                data={props.data}
                titleField="username"
                contentField="is_admin"
                onDeleteHandler={props.onDeleteHandler}
                onShowHandler={props.onShowHandler}
                onUpdateHandler={props.onUpdateHandler}
                onCreateHandler={props.onCreateHandler}
            />

            <HorizontalDivider/>

            <AddUserForm
                onCreateHandler={props.onCreateHandler}
            />
        </div>
    )
}

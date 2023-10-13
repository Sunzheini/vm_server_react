import AllSectionsContainer from "../MainComponents/AllSectionsContainer";
import HorizontalDivider from "../MainComponents/HorizontalDivider";
import AddUserForm from "../Forms/AddUserForm";
import {useState} from "react";

export default function Users(props) {
    const [showForm, setShowForm] = useState(false);

    return (
        <div>
            <AllSectionsContainer
                data={props.data}
                titleField="username"

                contentField={props.contentField}
                onDeleteHandler={props.onDeleteHandler}
                onShowHandler={props.onShowHandler}
                onUpdateHandler={props.onUpdateHandler}
                onCreateHandler={props.onCreateHandler}

                page="user"
            />

            <HorizontalDivider/>

            <button onClick={() => setShowForm(!showForm)}>Show / Hide Form</button>

            {showForm ? (
                <AddUserForm
                    onCreateHandler={props.onCreateHandler}
                />
            ) : null}
        </div>
    )
}

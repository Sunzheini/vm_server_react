import AllSectionsContainer from "../MainComponents/AllSectionsContainer";
import HorizontalDivider from "../MainComponents/HorizontalDivider";
import AddPyscriptForm from "../Forms/AddPyscriptForm";
import {useState} from "react";

export default function Pyscripts(props) {
    const [showForm, setShowForm] = useState(false);

    return (
        <div>
            <AllSectionsContainer
                data={props.data}
                titleField="script_name"

                contentField={props.contentField}
                onDeleteHandler={props.onDeleteHandler}
                onShowHandler={props.onShowHandler}
                onUpdateHandler={props.onUpdateHandler}
                onCreateHandler={props.onCreateHandler}

                page="pyscript"
            />

            <HorizontalDivider/>

            <div className={"menu-container"}>
                <button className={"card-btn"} onClick={() => setShowForm(!showForm)}>Show / Hide Form</button>
            </div>

            {showForm ? (
                <AddPyscriptForm
                    onCreateHandler={props.onCreateHandler}
                />
            ) : null}
        </div>
    )
}
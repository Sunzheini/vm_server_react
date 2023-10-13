import AllSectionsContainer from "../MainComponents/AllSectionsContainer";
import HorizontalDivider from "../MainComponents/HorizontalDivider";
import AddVmForm from "../Forms/AddVmForm";
import {useState} from "react";

export default function Vms(props) {
    const [showForm, setShowForm] = useState(false);

    return (
        <div>
            <AllSectionsContainer
                data={props.data}
                titleField="vm_name"

                contentField={props.contentField}
                onDeleteHandler={props.onDeleteHandler}
                onShowHandler={props.onShowHandler}
                onUpdateHandler={props.onUpdateHandler}
                onCreateHandler={props.onCreateHandler}

                page="vm"
            />

            <HorizontalDivider/>

            <button onClick={() => setShowForm(!showForm)}>Show / Hide Form</button>

            {showForm ? (
                <AddVmForm
                    onCreateHandler={props.onCreateHandler}
                />
            ) : null}
        </div>
    )
}

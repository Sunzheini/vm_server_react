export default function AddVmForm(props) {
    return (
        <div className="add-vm-form">
            <form>
                <div>
                    {/* Label */}
                    <label htmlFor="vm_name">VM Name: </label>

                    {/* Input */}
                    <input
                        type="text"
                        name="vm_name"
                        id="vm_name"
                        placeholder="Enter VM name"
                    />
                </div>

                <div>
                    {/* Button */}
                    <input
                        type="button"
                        value="Add VM"
                        // onClick={props.onCreateHandler}
                        onClick={() => {
                            const formData = {
                                vm_name: document.getElementById('vm_name').value,
                            };
                            props.onCreateHandler(formData);
                        }}
                    />
                </div>
            </form>
        </div>
    );
}
export default function NewItemForm(props) {
    return (
        <div className="new-item-form">
            <form>
                <div>
                    {/* Label */}
                    <label htmlFor="name">Name</label>

                    {/* Input */}
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder={props.placeholder}

                        // use this
                        value={props.formValues.name}
                        onChange={props.onChange}
                    />
                </div>

                <div>
                    {/* Label */}
                    <label htmlFor="description">Description</label>

                    {/* Select */}
                    <select
                        name="description"
                        id="description"
                        value={props.formValues.description}
                        onChange={props.onChange}
                    >
                        <option value="1">Desc1</option>
                        <option value="2">Desc2</option>
                        <option value="3">Desc3</option>
                    </select>

                </div>

                <div>
                    {/* Button */}
                    <input
                        type="button"
                        value="Create"
                        onClick={props.onSubmit}
                    />
                </div>
            </form>
        </div>
    )
}

export default function NewItemForm(props) {
    return (
        <div className="new-item-form">
            <form>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder={props.placeholder}

                        // use this
                        value={props.value}
                        onChange={props.onChange}
                    />
                </div>

                <div>
                    <input
                        type="submit"
                        value="Create"
                    />
                </div>
            </form>
        </div>
    )
}

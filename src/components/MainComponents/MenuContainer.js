import MenuContainerButton from "./MenuContainerButton";

export default function MenuContainer({onButtonClick, onButtonSelect, menuItems,}) {
    let elementsList = menuItems.map((menuItem) => {
        return <MenuContainerButton
            key={menuItem.id}
            {...menuItem}
            onButtonClick={() => onButtonClick(menuItem.id)}
            onButtonSelect={() => onButtonSelect(menuItem.id)}
        />
    })

    return (
        <div className="menu-container">
            <ul className="ul-menu-list" role="list">
                {elementsList}
            </ul>
        </div>
    )
}

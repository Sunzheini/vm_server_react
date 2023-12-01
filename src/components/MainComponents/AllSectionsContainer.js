import CardDisplayTitle from "./CardDisplayTitle";
import CardDisplayContent from "./CardDisplayContent";
import {Link} from "react-router-dom";
import React, {useContext} from "react";
import {CustomContext} from "../../contexts/CustomContext";

export default function AllSectionsContainer(props) {
    const isUserPage = props.page === "user";
    const isVMPage = props.page === "vm";
    const isPyscriptPage = props.page === "pyscript";
    const {result, isAuthenticated} = useContext(CustomContext);

    return (
        <div className="all-sections-container">
            <section className="display-content-section">
                <div className="all-display-content-container">
                    <div className="card-display">

                        {props.data.map((item) => (
                            <div key={item.id}>
                                 {/*check if this is not the first item in the list */}
                                {item.id !== props.data[0].id && <hr className={"horizontal-divider"}/>}

                                <CardDisplayTitle title={item[props.titleField]} />
                                <CardDisplayContent
                                    content={Object.keys(props.contentField).map((field) => (
                                        <div
                                            key={field}
                                            style={
                                            item[field] ? {color: 'green'} : {color: 'grey'}
                                        }>
                                            {/*{props.contentField[field] + ': ' + item[field]}*/}
                                            {props.contentField[field] + ': '
                                                + (item[field] ? item[field] : 'No')}
                                        </div>
                                    ))}
                                />

                                {/* show only if auth */}
                                {isAuthenticated &&
                                    <div className={"menu-container"}>
                                        <button className={"card-btn"} onClick={() => props.onDeleteHandler(item.id)}>Delete</button>
                                    </div>
                                }

                                {isUserPage &&
                                    (
                                        <Link className={"link-next_to_card-btn"} to={`/user/${item.id}`}>
                                            <div className={"menu-container"}>
                                                <button className={"card-btn"}>Update User</button>
                                            </div>
                                        </Link>
                                    )
                                }

                                {isVMPage &&
                                    (
                                        <Link className={"link-next_to_card-btn"} to={`/vm/${item.id}`}>
                                            <div className={"menu-container"}>
                                                <button className={"card-btn"}>Update VM</button>
                                            </div>
                                        </Link>
                                    )
                                }

                                {isPyscriptPage &&
                                    (
                                        <Link className={"link-next_to_card-btn"} to={`/pyscript/${item.id}`}>
                                            <div className={"menu-container"}>
                                                <button className={"card-btn"}>Update Pyscript</button>
                                            </div>
                                        </Link>
                                    )
                                }
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

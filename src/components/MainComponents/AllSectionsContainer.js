import CardDisplayTitle from "./CardDisplayTitle";
import CardDisplayContent from "./CardDisplayContent";
import {Link} from "react-router-dom";
import React from "react";

export default function AllSectionsContainer(props) {
    const isUserPage = props.page === "user"; // Replace "user" with the appropriate page name
    const isVMPage = props.page === "vm"; // Replace "vm" with the appropriate page name

    return (
        <div className="all-sections-container">
            <section className="display-content-section">
                <div className="all-display-content-container">
                    <div className="card-display">

                        {props.data.map((item) => (
                            <div key={item.id}>
                                <CardDisplayTitle title={item[props.titleField]} />
                                <CardDisplayContent
                                    content={Object.keys(props.contentField).map((field) => (
                                        <div
                                            key={field}
                                            style={
                                            item[field] ? {color: 'green'} : {color: 'grey'}
                                        }>
                                            {props.contentField[field] + ': ' + item[field]}
                                        </div>
                                    ))}
                                />

                                 {/*delete button*/}
                                <button onClick={() => props.onDeleteHandler(item.id)}>Delete</button>

                                {
                                    isUserPage && (
                                        <Link to={`/user/${item.id}`}>
                                            <button>Update User</button>
                                        </Link>
                                    )
                                }

                                {
                                    isVMPage && (
                                        <Link to={`/vm/${item.id}`}>
                                            <button>Update VM</button>
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

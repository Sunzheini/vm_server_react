import CardDisplayTitle from "./CardDisplayTitle";
import CardDisplayContent from "./CardDisplayContent";
import {Link} from "react-router-dom";
import React from "react";

export default function AllSectionsContainer(props) {
    console.log(props.titleField);

    return (
        <div className="all-sections-container">
            <section className="display-content-section">
                <div className="all-display-content-container">
                    <div className="card-display">

                        {props.data.map((item) => (
                            <div key={item.id}>
                                {/*<Link to={`/item/${item[props.titleField]}`}>*/}
                                {/*    {item[props.titleField]}*/}
                                {/*</Link>*/}
                                <CardDisplayTitle title={item[props.titleField]} />
                                {/*<CardDisplayContent content={item[props.contentField]}/>*/}
                                <CardDisplayContent content={item[props.contentField] ? 'Admin' : 'Regular'} />

                                {/* delete button */}
                                {/*<button onClick={() => props.onDeleteHandler(item.id)}>Delete</button>*/}

                                <Link to={`/user/${item.id}`}>
                                    <button>Show User</button>
                                </Link>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </div>
    );
}

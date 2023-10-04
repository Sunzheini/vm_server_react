import CardDisplayTitle from "./CardDisplayTitle";
import CardDisplayContent from "./CardDisplayContent";
import {Link} from "react-router-dom";
import React from "react";

export default function AllSectionsContainer(props) {
    return (
        <div className="all-sections-container">
            <section className="display-content-section">
                <div className="all-display-content-container">
                    <div className="card-display">

                        {props.data.map((item) => (
                            <div key={item.id}>
                                {/* Pass the item's name as a route parameter */}
                                <Link to={`/item/${item.name}`}>
                                    {item.name}
                                </Link>
                                <CardDisplayTitle title={item.name}/>
                                <CardDisplayContent content={item.created_at}/>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </div>
    );
}
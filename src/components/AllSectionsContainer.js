import CardDisplayTitle from "./CardDisplayTitle";
import CardDisplayContent from "./CardDisplayContent";

export default function AllSectionsContainer(props) {
    return (
        <div className="all-sections-container">
            <section className="display-content-section">
                <div className="all-display-content-container">
                    <div className="card-display">

                        {props.data.map((item) => (
                            <div key={item.id}>
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
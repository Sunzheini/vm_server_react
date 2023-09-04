import CardDisplayTitle from "./CardDisplayTitle";
import CardDisplayContent from "./CardDisplayContent";

export default function AllSectionsContainer(props) {
    return (
        <div className="all-sections-container">
            <section className="display-content-section">
                <div className="all-display-content-container">
                    <div className="card-display">
                        <CardDisplayTitle title="Some Title"/>
                        <CardDisplayContent content="Some Content 123"/>
                    </div>
                </div>
            </section>
        </div>
    )
}

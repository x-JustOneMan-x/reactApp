const Comp = (props) => {

    const count = (arr) => arr.reduce((acc, num) => +acc + +num, 0);
    let boxes = props.company.boxes;

    let boxesCount = count(boxes.split(','));

    let cargo = Math.ceil(boxesCount / 10);

    return (
        <div className="company__item">
            <h2>{props.company.name}</h2>
            <a href={"mailto:" + props.company.email}>{props.company.email}</a>
            <p>Number of required cargo bays <strong>{cargo}</strong></p>
            <div className="company__boxes">
                <h3>Cargo boxes</h3>
                <input type="text" readOnly name="boxes" value={props.company.boxes} />
            </div>
        </div>
    );
}

export default Comp;
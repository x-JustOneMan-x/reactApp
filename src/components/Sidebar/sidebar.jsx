const Sidebar = (props) => {
    let state = props.state;

    let cllients = state.cllients;

    let res = cllients.map((item) => {
        return (
            <li>
                <a href={item.id}>
                    {item.name}
                </a>
            </li>
        )
    });
    return (
        <section className="section sidebar">
            <div className="sidebar__content">
                <ul>
                    {res}
                </ul>
            </div>
        </section>
    )
}

export default Sidebar;
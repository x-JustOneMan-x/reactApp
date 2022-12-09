import { NavLink } from "react-router-dom";

const Sidebar = (props) => {
    let state = props.state;

    let cllients = state.cllients;

    let res = cllients.map((item, key) => {
        if (props.search === '' || item.name.includes(props.search)) {
            return (
                <li key={item.id}>
                    <NavLink to={item.id}>{item.name}</NavLink>
                </li>
            )
        }
        // return (
        //     <li key={item.id}>
        //         <NavLink to={item.id}>{item.name}</NavLink>
        //     </li>
        // )
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
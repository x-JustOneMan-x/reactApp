import { NavLink } from "react-router-dom";
import Comp from "../company/comp/comp";

const Sidebar = (props) => {
    let state = props.state;

    let cllients = state.cllients;

    let res = cllients.map((item, key) => {
        return (
            <li key={item.id}>
                <NavLink to={item.id}>{item.name}</NavLink>
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
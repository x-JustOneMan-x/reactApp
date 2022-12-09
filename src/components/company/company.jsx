import { useLocation } from "react-router-dom";
import Comp from "./comp/comp";

const Company = (props) => {

    let id = useLocation().pathname.slice(1);

    const getCompany = (id) => {
        let needMap;
        props.state.cllients.map((item, key) => {
            let thisId = item.id;
            if (thisId === id) {
                needMap = item;
            }
            return item;
        });
        return needMap;
    }

    //let company = getCompany(id);
    let company = getCompany(id);

    return (
        <section className="section company">
            <div className="company__content">
                <Comp company={company} />
            </div>
        </section>
    )
}

export default Company;
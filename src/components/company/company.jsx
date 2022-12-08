import Comp from "./comp/comp";

const Company = (props) => {
    let company = {
        "id": "e40b72",
        "name": "Walmart",
        "email": "contact@walmart.com",
        "boxes": "3.3,3,3.2,1.6,5.4,2.1,2.7,4.6"
    };
    return (
        <section className="section company">
            <div className="company__content">
                <Comp company={company} />
            </div>
        </section>
    )
}

export default Company;
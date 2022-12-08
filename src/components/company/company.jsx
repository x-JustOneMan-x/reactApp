const Company = () => {
    return (
        <section className="section company">
            <div className="company__content">
                <h2>Company A</h2>
                <a href="mailto:info@companya.com">info@companya.com</a>
                <p>Number of required cargo bays 2</p>
                <div className="company__boxes">
                    <h3>Cargo boxes</h3>
                    <input type="text" readOnly name="boxes" value="1,2.2,5,10" />
                </div>
            </div>
        </section>
    )
}

export default Company;
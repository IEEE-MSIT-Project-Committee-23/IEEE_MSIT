import './style.css';

function HomeComponent() {
    return (
        <div id="home">
            <header className="home">
                <img src="https://raw.githubusercontent.com/IEEE-MSIT-Project-Committee-23/IEEE_MSIT/main/client/src/Assets/Image3.png" alt="error in loading image" className="homeImage float-sm-end float-lg-end float-md-end float-xl-end img-fluid " height="500px" width="500px"></img>

                <div className="d-flex lh-lg flex-column justify-content-around p-5 text-sm-start text-md-start text-l-start bd-highlight fs-1 text-dark-emphasis ">Home
                    <section className="homeText">
                        <h1 className="homeFont">Lead a wave of</h1>
                        <h1 className="text-primary homeFont">change</h1>
                        <p className="homeFont">Technical society for <strong>Engineering, Computing, </strong>and <strong>Technology Information.</strong></p>
                        <p className="text-primary homeFont">Effective networking channel</p>
                        <p className="homeFont">While the World benefits from what's new, <strong>IEEE </strong>focuses on what's <strong>next</strong></p>
                    </section>
                </div>
            </header>
        </div>
    );
}
export default HomeComponent;
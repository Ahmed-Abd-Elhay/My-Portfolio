import "./project.css";
import github_icon from "../../assets/github-icon.png";
import site_icon from "../../assets/link-icon.png";
import project_1 from "../../assets/markety-site.png";
import project_2 from "../../assets/MyFood-site.png";
import project_3 from "../../assets/abdelhay-site.png";
import project_4 from "../../assets/Kasper-Template.png";

function Project() {

    function handelClass(e) {

        let buttonsToggle = document.querySelectorAll(".card");

        buttonsToggle.forEach(e => {
            e.classList.remove("active");
        });

        e.target.parentElement.classList.add("active");

    }


    return (
        <div className='project'>
            <h2 className="main-title">Projects</h2>

            <div className="portfolio">
                <p>It is a Link of Github Repo of My Portfolio</p>
                <a href="https://github.com/Ahmed-Abd-Elhay/My-Portfolio">
                    Github Portfolio
                    <img src={github_icon} alt="" /></a>
            </div>

            <div className="wrapper">
                <div className="container">

                    <div className="card active">
                        <img className="main-img"
                            src={project_1}
                            onClick={(e) => handelClass(e)}
                            alt="" />

                        <div className="row" >
                            <div className="icon">1</div>
                            <div className="description">
                                <h4>E-Commerce</h4>
                                <p>
                                    The ultimate destination for all things tech!, from headphones and laptops  and more...
                                </p>
                            </div>
                            <div className="image">
                                <a href="https://github.com/Ahmed-Abd-Elhay/E-Commerce" ><img src={github_icon} alt="" /></a>
                                <a href="https://markety-site.web.app/" ><img src={site_icon} alt="" /></a>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <img className="main-img"
                            src={project_2} onClick={(e) => handelClass(e)}
                            alt="" />

                        <div className="row">
                            <div className="icon">2</div>
                            <div className="description">
                                <h4>My Food</h4>
                                <p>
                                    Indulge in the rich flavors of Egypt from the comfort of your home with Online Restaurant.
                                </p>
                            </div>
                            <div className="image">
                                <a href="https://github.com/Ahmed-Abd-Elhay/My-Food-React-App-" ><img src={github_icon} alt="" /></a>
                                <a href="https://my-food-s.web.app/" ><img src={site_icon} alt="" /></a>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <img className="main-img"
                            src={project_3}
                            onClick={(e) => handelClass(e)}
                            alt="" />

                        <div className="row">
                            <div className="icon">3</div>
                            <div className="description">
                                <h4>Life Journey</h4>
                                <p>
                                    The journey that reviews everything you have experienced , like books you have read, projects you have worked on, and more.
                                </p>
                            </div>
                            <div className="image">
                                <a href="https://github.com/Ahmed-Abd-Elhay/AbdElhay-Site" ><img src={github_icon} alt="" /></a>
                                <a href="https://ahmed-abd-elhay.github.io/AbdElhay-Site/" ><img src={site_icon} alt="" /></a>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <img className="main-img"
                            src={project_4}
                            onClick={(e) => handelClass(e)}
                            alt="" />

                        <div className="row">
                            <div className="icon">4</div>
                            <div className="description">
                                <h4>We Kasper</h4>
                                <p>
                                    We Are Kasper We Make different and modern types of Art, Visit us if you are an art lover.
                                </p>
                            </div>
                            <div className="image">
                                <a href="https://github.com/Ahmed-Abd-Elhay/We-Kasper" ><img src={github_icon} alt="" /></a>
                                <a href="https://we-kasper.web.app/" ><img src={site_icon} alt="" /></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default Project;

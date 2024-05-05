import "./about.css";
import profile_image from "../../assets/profile-imag.png";
import user_icon from "../../assets/user-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import email_icon from "../../assets/email-icon.png";
import linkedin_icon from "../../assets/linkedin-icon.png";
import github_icon from "../../assets/github-icon.png";



const About = () => {
    return (
        <div className="about">
            <h2 className="main-title">About Me</h2>
            <div className="container">
                <div className="image">
                    <img src={profile_image} alt="" />
                </div>

                <div className="contain-text">
                    <h3>Hi,</h3>
                    <p>
                        I am Front-end developer with one year of experience
                        crafting user-friendly websites using HTML, CSS, JavaScript and <mark> React</mark>.
                        Let's bring your digital vision to life!
                    </p>

                    <div className="info">

                        <div>
                            <div className="box">
                                <img src={user_icon} alt="" />
                                <p>Ahmed Elsayed Abd Elhay</p>
                            </div>

                            <div className="box">
                                <img src={phone_icon} alt="" />
                                <p>+20 01110559364</p>
                            </div>
                            <div className="box">
                                <img src={email_icon} alt="" />
                                <p>alngm.8765@gmil.com</p>
                            </div>
                        </div>

                        <div>


                            <div className="box first">
                                <img src={location_icon} alt="" />
                                <p>Ismailia, Egypt</p>
                            </div>

                            <div className="box">
                                <a href="https://www.linkedin.com/in/%D9%90ahmed-elsayed-0a9404249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                                    <img src={linkedin_icon} alt="" />
                                </a>
                                <a className="link" href="https://www.linkedin.com/in/%D9%90ahmed-elsayed-0a9404249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                                    <p>Linkedin/Abd Elhay</p>
                                </a>
                            </div>

                            <div className="box">
                                <a href="https://github.com/Ahmed-Abd-Elhay">
                                    <img src={github_icon} alt="" />
                                </a>
                                <a className="link" href="https://github.com/Ahmed-Abd-Elhay">
                                    <p>Github/Abd Elhay</p>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default About

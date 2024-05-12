import "./hero.css";
import Linkedin_logo from "../../assets/linkedin-logo.png";
import github_logo from "../../assets/github-logo.png";
import send_img from "../../assets/send-icon-removebg-preview.png";
import download_img from "../../assets/pngtree-white-download-icon-png-image_4560347-removebg-preview.png";
import profile_image from "../../assets/profile-imag.png";
import resume_png from "../../assets/Ahmed El Sayed Abd Elhay.pdf";
import arrow_png from "../../assets/arrow-red.png";
import { Link } from "react-scroll";

const Hero = () => {
    return (
        <div className="hero">
            <div className="container">
                <div className="info">
                    <p className="front-end">Front-End Developer</p>
                    <div className="name">Hello, I`m </div>
                    <h2>Ahmed Elsayed Abd Elhay</h2>
                    <p className="content">
                        Passionate front-end developer dedicated to crafting visually stunning and user-friendly websites,
                        committed to delivering innovative digital experiences that exceed expectations.
                    </p>

                    <div className="buttons">
                        <Link
                            to="contact-us"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                        >
                            <button className="contact-me">
                                Contact Me
                                <img src={send_img} alt="" />
                            </button>
                        </Link>

                        <a href={resume_png} download className="link">
                            <button className="resume">Download CV <img src={download_img} alt="" /></button>
                        </a>
                    </div>

                    <div className="links">
                        <a href="https://www.linkedin.com/in/%D9%90ahmed-elsayed-0a9404249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src={Linkedin_logo} alt="" /></a>
                        <a href="https://github.com/Ahmed-Abd-Elhay"><img src={github_logo} alt="" /></a>
                    </div>
                </div>


                <div className="image">
                    <img src={profile_image} alt="" />
                </div>

            </div>

            <Link
                to="about"
                spy={true}
                smooth={true}
                offset={50 - 80}
                duration={500}
            >
                <img src={arrow_png} alt="" className="arrow" />
            </Link>
        </div>
    )
}

export default Hero;

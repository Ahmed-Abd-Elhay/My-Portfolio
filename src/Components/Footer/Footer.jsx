import "./footer.css";
import { Link } from "react-scroll";

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <ul className="links">
                    <Link className='link'
                        to="header"
                        spy={true}
                        smooth={true}
                        offset={50 - 50}
                        duration={500}
                    >
                        <li>
                            Home
                        </li>
                    </Link>

                    <Link className='link'
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={50 - 100}
                        duration={500}
                    >
                        <li>
                            About
                        </li>
                    </Link>

                    <Link
                        to='skills'
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        <li>
                            Skills
                        </li>
                    </Link>
                    <Link
                        to='project'
                        spy={true}
                        smooth={true}
                        offset={50 - 50}
                        duration={500}
                    >
                        <li>
                            Projects
                        </li>
                    </Link>
                </ul>
                <hr />
                <div className="copyrite">
                    made with ❤️ by <span>Abd Elhay</span>
                </div>
            </div>

        </div>
    )
}

export default Footer

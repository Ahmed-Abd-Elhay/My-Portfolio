import { useState } from 'react';
import "./header.css";
import { Link } from 'react-scroll';


const Header = () => {

    const [burgerClass, setBurgerClass] = useState("overflow");
    const [closeIcon, setCloseIcon] = useState("icon");

    function updateIcon() {
        if (burgerClass === "overflow") {
            setBurgerClass("overflow checked");
            setCloseIcon("icon close");
        } else {
            setBurgerClass("overflow");
            setCloseIcon("icon");
        }
    }

    return (
        <div className='header'>
            <div className="container">

                <div className="logo">
                    <Link className='link'
                        to="header"
                        spy={true}
                        smooth={true}
                        offset={50 - 50}
                        duration={500}
                    >
                        Abd El Hay
                    </Link>
                </div>

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

                <div className="contact-me">
                    <Link
                        to="contact-us"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                    >
                        <button>
                            Contact Me
                        </button>
                    </Link>
                </div>

                <div className="burger-icon">
                    <div className={closeIcon} onClick={updateIcon} >
                        <div className='first'></div>
                        <div className='second'></div>
                        <div className='last'></div>
                    </div>
                    <div className={burgerClass}>
                        <ul className="burger-links" >

                            <Link className='link'
                                to="header"
                                spy={true}
                                smooth={true}
                                offset={50 - 50}
                                duration={500}
                            >
                                <li onClick={() => {
                                    setBurgerClass("overflow");
                                    setCloseIcon("icon");
                                }}>
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
                                <li onClick={() => {
                                    setBurgerClass("overflow");
                                    setCloseIcon("icon");
                                }}>
                                    About
                                </li>
                            </Link>

                            <Link className='link'
                                to='skills'
                                spy={true}
                                offset={50 - 50}
                                duration={500}
                            >
                                <li onClick={() => {
                                    setBurgerClass("overflow");
                                    setCloseIcon("icon");
                                }}>
                                    Skills
                                </li>
                            </Link>

                            <Link className='link'
                                to='project'
                                spy={true}
                                offset={50 - 50}
                                duration={500}
                            >
                                <li onClick={() => {
                                    setBurgerClass("overflow");
                                    setCloseIcon("icon");
                                }}>
                                    Projects
                                </li>
                            </Link>

                            <div className="contact">
                                <Link
                                    to="contact-us"
                                    spy={true}
                                    smooth={true}
                                    offset={50 - 50}
                                    duration={500}
                                >
                                    <button
                                        onClick={() => {
                                            setBurgerClass("overflow");
                                            setCloseIcon("icon");
                                        }}
                                    >
                                        Contact Me
                                    </button>
                                </Link>
                            </div>

                        </ul>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Header;

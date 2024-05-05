import "./skills.css";
import html_icon from "../../assets/html.png";
import css_icon from "../../assets/css.png";
import js_icon from "../../assets/js.png";
import react_icon from "../../assets/react.png";
import git_icon from "../../assets/git-icon.png";
import github_icon from "../../assets/github-icon.png";

function Skills() {
    return (
        <div className='skills'>
            <h2 className="main-title">Skills</h2>

            <div className="container">
                <div className="box">
                    <div className="conten-icon">
                        <div className="image">
                            <img src={html_icon} alt="" />
                        </div>
                        <p>Html</p>
                    </div>
                    <div className="conten-icon">
                        <div className="image">
                            <img src={js_icon} alt="" />
                        </div>
                        <p>JavaScript</p>
                    </div>
                    <div className="conten-icon">
                        <div className="image">
                            <img src={git_icon} alt="" />
                        </div>
                        <p>Git</p>
                    </div>
                </div>

                <div className="box">
                    <div className="conten-icon">
                        <div className="image">
                            <img src={css_icon} alt="" />
                        </div>
                        <p>css</p>
                    </div>
                    <div className="conten-icon">
                        <div className="image">
                            <img src={react_icon} alt="" />
                        </div>
                        <p>React</p>
                    </div>
                    <div className="conten-icon">
                        <div className="image">
                            <img src={github_icon} alt="" />
                        </div>
                        <p>Github</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Skills;

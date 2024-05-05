import "./Contact-me.css";
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import doneAnimation from "../../Animation/done.json";
import emailAnimation from "../../Animation/email.json";

function ContactMe() {

    const [state, handleSubmit] = useForm("mgegdndr");

    return (
        <div className="contact-us">
            <h2 className="main-title">Contact Me</h2>

            <div className="container">

                <div className="info">
                    <h3>please feel free and let's talk</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="input-area">
                            <p>User Name:</p>
                            <input
                                placeholder="Name"
                                type="text"
                                name="name"
                                autoComplete="off"
                            />
                        </div>
                        <ValidationError
                            prefix="Name"
                            field="name"
                            errors={state.errors}
                        />

                        <div className="input-area">
                            <p>Email Address:</p>
                            <input
                                placeholder="Email"
                                type="email"
                                name="email"
                                autoComplete="off"
                            />
                        </div>
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />

                        <div className="input-area">
                            <p>Your Message:</p>
                            <textarea
                                cols="30"
                                rows="10"
                                placeholder="Message"
                                name="message"
                            ></textarea>
                        </div>
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />

                        <input
                            className="button"
                            type="submit"
                            value={state.submitting ? "Submitting..." : "Send Message"}
                            disabled={state.submitting}
                        />

                        {state.succeeded && <p style={{ display: "flex", alignItems: "center", margin: "30px 0 0", fontSize: "20px", fontWeight: "500" }}>
                            <Lottie style={{ width: "60px", marginTop: "7px" }} animationData={doneAnimation} loop={false} />
                            Your Message has been sent Successfully 👌
                        </p>}
                    </form>
                </div>

                <div className="image">
                    <Lottie className="animation-img" animationData={emailAnimation} loop={true} />
                </div>

            </div>

        </div>
    )
}

export default ContactMe;

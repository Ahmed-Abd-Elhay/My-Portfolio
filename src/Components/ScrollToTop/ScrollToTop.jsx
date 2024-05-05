import { useEffect, useState } from "react";
import "./scroll-to-top.css";
import arrow_to_Top from "../../assets/arrow-to-top.png";

function ScrollToTop() {

    const [scrolltoTop, setScrolltoTop] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 500) {
                setScrolltoTop(true);
            } else {
                setScrolltoTop(false);
            }
        });

    }, []);


    function scrrollToTop() {
        window.scrollTo(0, 0);
    }

    return (
        <img
            style={{ opacity: scrolltoTop ? 1 : 0, cursor: scrolltoTop ? "pointer" : "unset" }}
            className="scroll-to-top" src={arrow_to_Top} alt=""
            onClick={scrrollToTop}
        />
    )
}

export default ScrollToTop;

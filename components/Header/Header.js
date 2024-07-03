
'use client'
import React, { useState, useEffect } from "react";
import "./header.css";
import { CSSTransition } from "react-transition-group";
import { useSelector } from "react-redux";

export default function Header() {
    const [isNavVisible, setNavVisibility] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 700px)");
        mediaQuery.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);

        return () => {
            mediaQuery.removeListener(handleMediaQueryChange);
        };
    }, []);

    const handleMediaQueryChange = mediaQuery => {
        if (mediaQuery.matches) {
            setIsSmallScreen(true);
        } else {
            setIsSmallScreen(false);
        }
    };

    const toggleNav = () => {
        setNavVisibility(!isNavVisible);
    };


    const count = useSelector((state) => state.counter.value)

    return (
        <header className="Header">
            {/* <img src={require("../assets/logo.png")} className="Logo" alt="logo" /> */}
            <CSSTransition
                in={!isSmallScreen || isNavVisible}
                timeout={350}
                classNames="NavAnimation"
                unmountOnExit
            >
                <nav className="Nav">
                    <a href="/#">Home</a>
                    <a href="/#">{count}</a>
                    <a href="/#">Articles</a>
                    <a href="/#">About</a>
                    {/* <button>Logout</button> */}
                </nav>
            </CSSTransition>
            <button onClick={toggleNav} className="Burger">
                🍔
            </button>
        </header>
    );
}

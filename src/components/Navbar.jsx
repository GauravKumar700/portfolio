import React, { useEffect, useRef, useState } from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const container = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 30)
        }
        window.addEventListener('scroll', handleScroll)
        handleScroll()
        return () => { window.removeEventListener('scroll', handleScroll) }
    }, [])

    const toggleMenu = () => {
        setMenuVisible(prev => !prev)
    }

    const closeMenu = () => {
        setMenuVisible(false)
    }

    gsap.registerPlugin(useGSAP); // register any plugins, including the useGSAP hook
    useGSAP(() => {
        // gsap code here...
        gsap.from('.nav__logo, .nav__toggle', { opacity: 0, duration: 2, delay: 1.5, y: 25, ease: 'expo.out', stagger: .2 })
        gsap.from('.nav__item', { opacity: 0, duration: 2, delay: 1.8, y: 25, ease: 'expo.out', stagger: .2 })
    }, { scope: container });

    useEffect(() => {
        const sections = document.querySelectorAll('section[id]');

        const scrollActive = () => {
            const scrollY = window.pageYOffset;

            sections.forEach(current => {
                const sectionHeight = current.offsetHeight;
                const sectionTop = current.offsetTop - 50;
                const sectionId = current.getAttribute('id');

                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    setActiveSection(sectionId);
                }
            });
        };

        window.addEventListener('scroll', scrollActive);

        scrollActive();

        return () => {
            window.removeEventListener('scroll', scrollActive);
        };
    }, []);

    return (
        <header className={`l-header ${isScrolled ? 'scroll-header' : ''}`} id="header">
            <nav ref={container} className="nav bd-container">
                <a href="/" className="nav__logo">Gaurav Kumar</a>
                <div className={`nav__menu ${menuVisible ? 'show-menu' : ''}`} id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#home" className={`nav__link ${activeSection === 'home' ? 'active-link' : ''}`} onClick={closeMenu}>Home</a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className={`nav__link ${activeSection === 'about' ? 'active-link' : ''}`} onClick={closeMenu}>About</a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" className={`nav__link ${activeSection === 'skills' ? 'active-link' : ''}`} onClick={closeMenu}>Skills</a>
                        </li>
                        <li className="nav__item">
                            <a href="#portfolio" className={`nav__link ${activeSection === 'portfolio' ? 'active-link' : ''}`} onClick={closeMenu}>Portfolio</a>
                        </li>
                        <li className="nav__item">
                            <a href="#services" className={`nav__link ${activeSection === 'services' ? 'active-link' : ''}`} onClick={closeMenu}>Services</a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className={`nav__link ${activeSection === 'contact' ? 'active-link' : ''}`} onClick={closeMenu}>Contactme</a>
                        </li>
                    </ul>
                </div>

                <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
                    <i className="bx bx-menu"></i>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
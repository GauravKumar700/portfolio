import React, { useEffect, useRef } from 'react'
import homImage from '../assets/home.png'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Home = () => {
    gsap.registerPlugin(useGSAP); // register any plugins, including the useGSAP hook

    const container = useRef(null);
    useGSAP(() => {
        // gsap code here...
        gsap.from('.home__img', { opacity: 0, duration: 2, delay: .5, x: 60 })
        gsap.from('.home__data', { opacity: 0, duration: 2, delay: .8, y: 25 })
        gsap.from('.home__greeting, .home__name, .home__profession, .home__button', { opacity: 0, duration: 2, delay: 1, y: 25, ease: 'expo.out', stagger: .2 })
        gsap.from('.home__social-icon', { opacity: 0, duration: 2, delay: 2.3, y: 25, ease: 'expo.out', stagger: .2 })
    }, { scope: container });

    const textRef = useRef(null);
    useEffect(() => {
        const role = ["Fullstack Developer", "Freelancer", "Backend Developer", "Frontend Developer"]
        let charIndex = 0
        let index = 0
        let currentRole = role[index]
        let timeoutId;
        const typingSpeed = 100
        const erasingSpeed = 50
        const delayBetweenRoles = 2000

        const type = () => {
            if (!textRef.current) return
            if (charIndex === 0) textRef.current.textContent = ""
            if (charIndex < currentRole.length) {
                textRef.current.textContent += currentRole.charAt(charIndex)
                charIndex++;
                timeoutId = setTimeout(type, typingSpeed)
            } else {
                timeoutId = setTimeout(erase, delayBetweenRoles)
            }
        }

        const erase = () => {
            if (!textRef.current) return
            if (charIndex > 0) {
                textRef.current.textContent = currentRole.substring(0, charIndex - 1)
                charIndex--;
                timeoutId = setTimeout(erase, erasingSpeed)
            } else {
                index = (index + 1) % role.length
                currentRole = role[index]
                timeoutId = setTimeout(type, 500)
            }
        }

        timeoutId = setTimeout(type, 1000)
        return () => clearTimeout(timeoutId)
    }, [])


    return (
        <section className="home" id="home">
            <div ref={container} className="home__container bd-container bd-grid">
                <div className="home__data">
                    <span className="home__greeting">Hello, My name is</span>
                    <h1 className="home__name">Gaurav Kumar</h1>
                    {/* <span className="home__profession">Web Developer</span> */}
                    <span className="home__profession">
                        <span ref={textRef} id="typewriter-text" className="home__profession-text"></span>
                    </span>
                    <div className="home__button">
                        <a download="" href="assets/Gaurav-Kumar-Cv.pdf" className="button button-light">Download Cv</a>
                    </div>
                </div>

                <div className="home__social">
                    <a href="https://www.linkedin.com/in/gaurav700/" target="_blank" className="home__social-icon"><i
                        className="bx bxl-linkedin"></i></a>
                    <a href="https://github.com/GauravKumar700" target="_blank" className="home__social-icon"><i
                        className="bx bxl-github"></i></a>
                    <a href="mailto:gauravkumar70045415@gmail.com" target="_blank" className="home__social-icon"><i
                        className="bx bxl-gmail"></i></a>
                </div>

                <div className="home__img">
                    <img src={homImage} rel="preload" as="image" alt="Home Image" />
                </div>
            </div>
        </section>
    )
}

export default Home
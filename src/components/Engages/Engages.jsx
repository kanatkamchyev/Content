import React, { useEffect, useState } from 'react'
import first from '../assets/imgs/Rectangle (5).png'
import second from '../assets/imgs/Rectangle (6).png'
import third from '../assets/imgs/Rectangle (7).png'
import four from '../assets/imgs/Rectangle (8).png'
import five from '../assets/imgs/Rectangle (10).png'
import six from '../assets/imgs/Rectangle (9).png'

import './Engages.scss'
import { Element } from 'react-scroll'

export const Engages = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const sectionPosition = document.getElementById('engages-section').getBoundingClientRect();
            setIsVisible(sectionPosition.top <= window.innerHeight / 2);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Element id="engages-section">
            <div className="Engages__big" id='Engages__big'>
                <div className='Engages'>
                    <div className="container">
                        <div className="Engages__inside">
                            <div className="Engages__title">
                                <h1>
                                    Engage your audience with exclusive content.
                                </h1>
                            </div>
                            <div className="Engages__describe">
                                From virtual classes and workshops to newsletters, podcasts, and video series, Member Areas help you build, harness, and monetize the power of your online community.
                            </div>
                            <div className="Engages__boxes">
                                <div className="box">
                                    <div className={`left ${isVisible ? 'active' : ''}`}>
                                        <div className="left__title">
                                            <h1>Promote premium content.</h1>
                                        </div>
                                        <div className="left__describe">
                                            Whether you’re a chef selling recipes and cooking videos or a financial planner sharing newsletters and podcasts, Squarespace has the tools you need to protect and share your content.
                                        </div>
                                    </div>
                                    <div className={`right ${isVisible ? 'active' : ''}`}>
                                        <div className="card__item">
                                            <div className="card__img">
                                                <img src={first} alt="" />
                                            </div>
                                            <div className="card__text">
                                                A chef selling
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="box">
                                    <div className={`left ${isVisible ? 'active' : ''}`}>
                                        <div className="card__item">
                                            <div className="card__img">
                                                <img src={second} alt="" />
                                            </div>
                                            <div className="card__text">
                                                Yoga classes
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`right ${isVisible ? 'active' : ''}`}>
                                        <div className="left__title">
                                            <h1>Promote premium content.</h1>
                                        </div>
                                        <div className="left__describe">
                                            Whether you’re a chef selling recipes and cooking videos or a financial planner sharing newsletters and podcasts, Squarespace has the tools you need to protect and share your content.
                                        </div>
                                    </div>
                                </div>
                                <div className="box">
                                    <div className={`left ${isVisible ? 'active' : ''}`}>
                                        <div className="left__title">
                                            <h1>Promote premium content.</h1>
                                        </div>
                                        <div className="left__describe">
                                            Whether you’re a chef selling recipes and cooking videos or a financial planner sharing newsletters and podcasts, Squarespace has the tools you need to protect and share your content.
                                        </div>
                                    </div>
                                    <div className={`right ${isVisible ? 'active' : ''}`}>
                                        <div className="card__item">
                                            <div className="card__img">
                                                <img src={third} alt="" />
                                            </div>
                                            <div className="card__text">
                                                Help members
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="box">
                                    <div className={`left ${isVisible ? 'active' : ''}`}>
                                        <div className="card__item">
                                            <div className="card__img">
                                                <img src={four} alt="" />
                                            </div>
                                            <div className="card__text">
                                                Member areas
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`right ${isVisible ? 'active' : ''}`}>
                                        <div className="left__title">
                                            <h1>Promote premium content.</h1>
                                        </div>
                                        <div className="left__describe">
                                            Whether you’re a chef selling recipes and cooking videos or a financial planner sharing newsletters and podcasts, Squarespace has the tools you need to protect and share your content.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Protect">
                    <div className="container">
                        <div className="Protect__inside">
                            <div className="box">
                                <div className="left">
                                    <div className="card__item"> <div className="card__img">
                                        <img src={five} alt="" />
                                    </div>
                                        <div className="card__text">
                                            Member areas
                                        </div></div>
                                </div>
                                <div className="right">
                                    <div className="right__title">
                                        <h1>
                                            Protect your content.
                                        </h1>
                                    </div>
                                    <div className="right__describe">
                                        Other platforms allow users to bypass paywalls. Our tools ensure a seamless and secure member experience.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Engages">
                    <div className="container">
                        <div className="engage__box">
                            <div className="box">
                                <div className="right">
                                    <div className="right__title">
                                        “Member Areas provide the virtual clubhouse our community needs with weekly content, a virtual library and tools to guide new visitors and potential students into the community.”
                                    </div>
                                    <div className="right__describe">
                                        Kanda Yoga School
                                    </div>
                                    <div className="right__bottom">
                                        <a href=""> Kanda Yoga School</a>
                                    </div>
                                </div>
                                <div className="left">
                                    <div className="card__item">
                                        <div className="card__img">
                                            <img src={six} alt="" />
                                        </div>
                                        <div className="card__text">
                                            Provide the virtual
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    )
}

import React from 'react'
import  one  from '../assets/imgs/1.png'
import  two  from '../assets/imgs/2.png'
import  tri from '../assets/imgs/3.png'
import './Tools.scss'
export const ToolsHide = () => {
    return (
        <div className='ToolsHide'>
            <div className="container">
                <div className="ToolsHide__inside">
                    <div className="title">
                        <h1>All-in-one tools.</h1>
                    </div>
                    <div className="describe">
                        Get everything you need to create, share, and manage paid content with our versatile Member Areas.
                    </div>
                    <div className="Tools__boxes">
                        <div className="box">
                            <div className="image">
                                <img src={one} alt="" />
                            </div>
                            <div className="box__text">
                                <div className="title">
                                Share your expertise.
                                </div>
                                <div className="descrbe">
                                Create classes, training, and packages for people of all skill levels and communities.
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="image">
                                <img src={two} alt="" />

                            </div>
                            <div className="box__text">
                                <div className="title">
                                Choose how you charge.
                                </div>
                                <div className="descrbe">
                                Charge a fee every week, month, or all at once. You can also make it completely free.
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="image">
                                <img src={tri} alt="" />

                            </div>
                            <div className="box__text">
                                <div className="title">
                                Everything in one place.
                                </div>
                                <div className="descrbe">
                                Send emails, get insights, manage members, and choose where visitors sign up.
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

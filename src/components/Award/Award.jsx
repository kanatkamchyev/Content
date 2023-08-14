import React from 'react'
import main from '../assets/imgs/main.png'
import './Award.scss'


export const Award = () => {
    return (
        <div className='Award'>
            <div className="container">
                <div className="Award__inside">
                    <div className="Award__left">
                        <img src={main} alt="" />
                    </div>

                    <div className="Award__left">
                        <div className="left__inside">

                            <div className="left__title">
                                <h1>
                                    Award-winning customer support
                                </h1>
                            </div>
                            <div className="left__text">
                                Think of Squarespace as your very own IT department. Alongside unlimited hosting and enterprise-grade infrastructure, we offer dedicated 24/7 support.
                            </div>
                            <div className="left__help">
                                Visit Help Center
                            </div>
                            <div className="left__help">
                                Contact Support
                            </div>
                            <div className="left__help">
                                Webinars
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

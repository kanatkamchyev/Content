import React from 'react'
import {AiOutlineCheck} from 'react-icons/ai'
import './Plans.scss'

export const Plans = () => {
  return (
    <div className='Plans'>
        <div className="container">
            <div className="Plans__inside">
                <div className="Plans__left">
                    <div className="title">
                        <h1>Features included with all plans</h1>
                    </div>
                </div>
                <div className="Plans__right">
                    <div className="Plans__bars">
                        <div className="left__bar">
                            <ul>
                                <li><AiOutlineCheck/>Free, one-time, or recurring fee structure</li>
                                <li><AiOutlineCheck/>Seamless and secure member experience</li>
                                <li><AiOutlineCheck/>Member management</li>
                                <li><AiOutlineCheck/>Integrated analytics</li>
                            </ul>
                        </div>
                        <div className="left__bar">
                            <ul>
                            <li><AiOutlineCheck/>Members can pay with PayPal or credit card</li>
                            <li><AiOutlineCheck/>24/7 customer support</li>
                            <li><AiOutlineCheck/>Squarespace Extensions to manage your business</li>
                                
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

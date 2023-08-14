import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';

import './Member.scss'

export const Member = () => {
  return (
    <div className='Member' id='Member'>
        <div className="container">
            <div className="Member__inside">
                <div className="Member__left">
                    <div className="Member__title">
                    How to get started with Member Areas
                    </div>
                    <div className="Member__link">
                    Get Started
                  <HiArrowNarrowRight />
                    </div>
                </div>
                <div className="Member__right">
                    <div className="Member__lists">
                        <ul>
                            <li>01. Create a website with Squarespace, and decide on a name for your member area.</li>
                            <li>02. Add members-only content, from classes to newsletters, guides to videos.</li>
                            <li>03. Customize your member area landing and sign-up page with details about what you offer.</li>
                            <li>04. Connect your preferred processor so you can start receiving fees.</li>
                            <li>05. Add a Member Areas subscription to your existing Squarespace website plan.</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>

    </div>
  )
}

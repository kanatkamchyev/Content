import React from 'react'
import { Logo } from '../assets/svg'
import { HiArrowLongDown } from 'react-icons/hi2'
import './Footer.scss'

export const Footer = () => {
  return (
    <div className='Footer'>
      <div className="container">
        <div className="Footer__inside">
          <div className="Footer__top">
            <div className="bottom__left">
              <div className="Footer__logo">
                <Logo />
              </div>
              <div className="Footer__select">
                <div className="select__top">
                  $ USD
                  <HiArrowLongDown />
                </div>

              </div>
              <div className="Footer__select">
                <div className="select__top">
                  English
                  <HiArrowLongDown />
                </div>
              </div>
            </div>
            <div className="bottom__right">
              <div className="Footer__nav">
                <ul>
                  <li>
                    Products
                  </li>
                  <li>
                    Customers
                  </li>
                  <li>
                    Company
                  </li>
                  <li>
                    Community
                  </li>
                  <li>
                    Follow
                  </li>
                </ul>
              </div>
              <div className="Footer__nav">
                <ul>
                  <li>
                    Website Templates
                  </li>
                  <li>
                    Websites
                  </li>
                  <li>
                    Domains
                  </li>
                  <li>
                    Online Stores
                  </li>
                  <li>
                    Point of Sale
                  </li>
                </ul>
              </div>

              <div className="Footer__nav">
                <ul>
                  <li>
                    Featured
                  </li>
                  <li>
                    Small Businesses
                  </li>
                  <li>
                    Photographers
                  </li>
                  <li>
                    Bloggers
                  </li>
                  <li>
                    Artists
                  </li>
                </ul>
              </div>

              <div className="Footer__nav">
                <ul>
                  <li>
                    About
                  </li>
                  <li>
                    Careers
                  </li>
                  <li>
                    Our Brand
                  </li>
                  <li>
                    Affiliates
                  </li>
                  <li>
                    Press & Media
                  </li>
                </ul>
              </div>

              <div className="Footer__nav">
                <ul>
                  <li>
                    Help & Support
                  </li>
                  <li>
                    Hire an Expert
                  </li>
                  <li>
                    Forum
                  </li>
                  <li>
                    Webinars
                  </li>
                  <li>
                    Developer Platform
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import './Header.scss'
import { Logo } from '../assets/svg'
import { Button } from '../button/Button'
import {AiOutlineClose} from 'react-icons/ai'
import {GiHamburgerMenu} from 'react-icons/gi'

export const Header = () => {

    const [active, setActive] = useState(false)

    useEffect(() => {
        if (active) {
          document.body.classList.add('active-body-overflow');
        } else {
          document.body.classList.remove('active-body-overflow');
        }
      }, [active]);

    const handleScrollToProduct = (event) => {
        event.preventDefault();
        const templatesComponent = document.getElementById('Tools'); 
        if (templatesComponent) {
            templatesComponent.scrollIntoView({ behavior: 'smooth' }); 
            setActive(false);
        }
    };

    const handleScrollToTemplates = (event) => {
        event.preventDefault();
        const templatesComponent = document.getElementById('Engages__big'); 
        if (templatesComponent) {
            templatesComponent.scrollIntoView({ behavior: 'smooth' }); 
            setActive(false);
        }
    };

    const handleScrollToMember = (event) => {
        event.preventDefault();
        const templatesComponent = document.getElementById('Member'); 
        if (templatesComponent) {
            templatesComponent.scrollIntoView({ behavior: 'smooth' });
            setActive(false);
        }
    };

    return (
        <div className='Header'>
            <div className="container">
                <div className={active ? 'Header__inside active' : 'Header__inside'}>
                    <div className="Header__logo">
                        <a href="/">
                            <Logo/>
                        </a>
                    </div>
                    <div className={active? 'Header__menu active': 'Header__menu'}>
                        <ul>
                            <li><a href="#" onClick={handleScrollToProduct} >Products</a></li>
                            <li><a href="#" onClick={handleScrollToTemplates}>Templates </a></li>
                            <li><a href="#" onClick={handleScrollToMember}>Resources</a></li>
                        </ul>
                    </div>
                    <div className={active ? 'Header__autorization active' : 'Header__autorization'}>
                        <div className="Header__login">
                            <a href="#">Log in</a>
                        </div>
                        <div className="Header__getStarted">
                            <Button text= 'Get Started'/>
                        </div>
                    </div>
                    <div className="Header__burger" onClick={() => setActive(!active)}>
                        {
                            active ?
                            <AiOutlineClose/>
                            :
                            <GiHamburgerMenu/>
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Element } from 'react-scroll';
import './Imagine.scss';

export const Imagine = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const sectionElement = document.getElementById('imagine-section');
            if (sectionElement) {
                const sectionPosition = sectionElement.getBoundingClientRect();
                setIsVisible(sectionPosition.top <= window.innerHeight / 2);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const animation = useSpring({
        from: { transform: 'scale(0.8)', opacity: 0 },
        to: { transform: 'scale(1)', opacity: isVisible ? 1 : 0 },
        config: { duration: 500 },
    });

    return (
        <Element id="imagine-section">
            <animated.div className='Imagine' style={animation}>
                <div className="container">
                    <div className="Imagine__inside">
                        <div className="Imagine__title">
                            <h1>
                                Imagine the possibilities.
                            </h1>
                        </div>
                        <div className="Imagine__describe">
                            Member Areas give you the power to educate and inspire your audience.
                        </div>
                        <div className="Imagine__video">
                            <a href="#">Watch the Video</a>
                        </div>
                    </div>
                </div>
            </animated.div>
        </Element>
    )
}
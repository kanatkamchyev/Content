import React from 'react';
import { useTrail, animated } from 'react-spring';
import './Content.scss';
import { Button } from '../button/Button';

export const Content = () => {
    const elements = ['Sell Online', 'Member Areas', 'Create', 'members‑only', 'content.', 'Get Started', 'Monetize your content with Member Areas. Add paid areas to an existing Squarespace site or build a new one with our award-winning templates.'];

    const trail = useTrail(elements.length, {
        from: { transform: 'translateX(-100%)', opacity: 0 },
        to: { transform: 'translateX(0)', opacity: 1 },
        config: { tension: 100, friction: 20 },
    });

    return (
        <div className='Content'>
            <div className="container">
                <div className="Content__inside">
                    <div className="Content__top-titles">
                        {trail[0] && <animated.p style={trail[0]}>{elements[0]}</animated.p>}
                        {trail[1] && <animated.p style={trail[1]}>{elements[1]}</animated.p>}
                    </div>
                    <div className="Content__texts">
                        {trail.slice(2, 5).map((style, index) => (
                            <animated.div key={index} className='Text' style={style}>
                                {elements[index + 2]}
                            </animated.div>
                        ))}
                    </div>
                    <animated.p style={trail[6]} className="Content__describe">
                        {elements[6]}
                    </animated.p>
                    <animated.div style={trail[5]} className="Content__btn">
                        <Button text={elements[5]} />
                    </animated.div>
                </div>
            </div>
        </div>
    );
};
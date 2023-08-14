import React, { useState } from 'react';
import './Questions.scss';
import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai';
import { animated, useSpring } from 'react-spring';

export const QuestionItem = ({ item, index }) => {
  const [hide, setHide] = useState(false);

  // Определите анимацию для высоты контента
  const contentAnimation = useSpring({
    maxHeight: hide ? '1000px' : '0',
    opacity: hide ? 1 : 0,
    overflow: 'hidden',
  });

  return (
    <div className="Questions_box" key={index}>
      <div className="Questions__box__title" onClick={() => setHide(!hide)}>
        <h2>{item.title}</h2>
        <div className="Questions_box__icon">
          {hide ? <AiOutlineClose /> : <AiOutlinePlus />}
        </div>
      </div>
      <animated.div style={contentAnimation} className="Questions_box__content">
        <p>{item.answer}</p>
      </animated.div>
    </div>
  );
};







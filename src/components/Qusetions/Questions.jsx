import React, { useState } from 'react'
import './Questions.scss'
import { QuestionItem } from './QuestionItem'

const Question = [
    {
        title: 'Can I use Member Areas with any Squarespace website plan?',
        answer: 'Yes, you can use Member Areas with any Squarespace website plan.'
    },
    {
        title: 'Do Member Areas integrate with Squarespace Email Campaigns?',
        answer: 'Yes, Member Areas integrates with Squarespace Email Campaigns.'
    },
    {
        title: 'Can I protect everything on my website?',
        answer: 'Yes, Member Areas'
    },
    {
        title: 'Can I create Member Areas but not charge a fee to users?',
        answer: 'Lorem Ipsum is simply dummy text and     it is never used.'
    },
]

export const Questions = () => {



    return (
        <div className='Questions'>
            <div className="container">
                <div className="Questions__inside">
                    <div className="Questions__asks">
                        <div className="Questions__title">
                            <h1>Frequently Asked Questions</h1>
                        </div>
                        <div className="Questions__more">
                            <div className="Questions__all">
                                {
                                    Question.map((item, index) => <QuestionItem item={item} key={index}/>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

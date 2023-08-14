import React from 'react'
import {Button} from '../button/Button'

import './Trial.scss'

export const Trial = () => {
  return (
    <div className='Trial'>
        <div className="container">
            <div className="Trial__inside">
                <div className="Trial__left">
                    <h1>
                    Squarespace is the all‑in‑one platform to build a beautiful website.
                    </h1>
                </div>
                <div className="Trial_right">
                <Button text ='Start a Free Trial'/>
                </div>
            </div>
        </div>

    </div>
  )
}

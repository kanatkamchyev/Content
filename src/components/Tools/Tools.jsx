import React, { useState } from 'react'
import { AiOutlinePlus, AiOutlineClose } from 'react-icons/ai'
import './Tools.scss'
import { Logo } from '../assets/svg'
import { ToolsHide } from './ToolsHide'

export const Tools = () => {

    const [hide, setHide] = useState(true)

    return (
        <div className='Tools' id='Tools'>
            <div className="container">
                <div className="Tools__inside">
                    <div className="Tools__top">
                        <div className="Tools__logo">
                            <Logo />
                        </div>
                        <div className="Tools__show" onClick={() => setHide(!hide)}>
                            {
                                hide ?
                                    <AiOutlineClose />
                                    :
                                    <AiOutlinePlus />
                            }
                        </div>
                    </div>
                    {
                        hide ?
                            <ToolsHide />
                            : null
                    }

                </div>
            </div>
        </div>
    )
}

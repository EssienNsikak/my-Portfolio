import {useEffect, useRef } from 'react';
import './intro.scss';
import { init } from 'ityped';
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';

export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ['Web Developer', 'Product Designer', 'Content Creator']
        })
    }, [])
    return (
        <div className='intro' id='intro'>

            <div className='left'>
                <div className='imgContainer'>
                    <img src='assets/man' alt='' />
                </div>
            </div>

            <div className='right'>
                <div className='wrapper'>
                    <h2>Hi there, I am</h2>
                    <h1>Essien Nsikak</h1>
                    <h3>Full Time <span ref={textRef}></span></h3>
                </div>
                <a href='#portfolio'>
                    <KeyboardArrowDownOutlinedIcon className='downArrow' />
                </a>
            </div>

        </div>
    )
}

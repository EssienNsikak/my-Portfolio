import { useState } from 'react';
import './works.scss';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export default function Works() {

    const [currentSlide, setCurrentSlide] = useState(0)

    const data = [
        {
            id: 1,
            icon: 'assets/mobile.png',
            title: 'Web Application',
            desc: 'Building a Responsive Portfolio Website using React Hooks, HTML, Material UI & SCSS.',
            img: 'assets/portfolio.png'
        },
        {
            id: 2,
            icon: 'assets/globe',
            title: 'Social Media Application',
            desc: 'Building a Responsive Social Media/Chatting Application using React Hooks, HTML, Material UI, Nodejs, MongoDB, Express & SCSS.',
            img: 'assets/Blooom2.jpg'
        },
        {
            id: 3,
            icon: 'assets/writing.jpg',
            title: 'Virtual Office Space',
            desc: 'Building a Responsive Virtual Office Space using React Hooks, HTML, Material UI, Nodejs, MongoDB, Express & SCSS.',
            img: 'assets/pockit.jpg'
        },
        {
            id: 4,
            icon: 'assets/shake.png',
            title: 'Social Media App.',
            desc: 'Building a Responsive Social Media/Chatting Application using React Hooks, HTML, Material UI, Nodejs, MongoDB, Express & SCSS.',
            img: 'assets/Blooom.jpg'
        },
        {
            id: 5,
            icon: 'assets/mobile.png',
            title: 'Web Application',
            desc: 'Building a Responsive Virtual Classroom Application using React Hooks, HTML, Material UI, Nodejs, MongoDB, Express & SCSS.',
            img: 'assets/Pockit2.jpg'
        },
    ];

    const handleClick = (direction) => {
        direction === 'left' ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 4) : 
        setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
    }
    return (
        <div className='works' id='works'>
            <div className='slider' style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
                { data.map(d => (
                    <div className='container'>
                        <div className='item'>
    
                            <div className='left'>
                                <div className='leftContainer'>
                                    <div className='imgContainer'>
                                        <img src={d.icon} alt='' />
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>{d.desc}</p>
                                    <span>Projects</span>
                                </div>
                            </div>
    
                            <div className='right'>
                                <img src={d.img} alt='' />
                            </div>
    
                        </div>
                    </div>
                ))}
            </div>                
            
            <ArrowBackIosIcon 
                className='arrow left' 
                onClick={() => handleClick('left')} 
            />
            <ArrowForwardIosIcon 
                className='arrow right' 
                onClick={() => handleClick()} 
            />
            
            
        </div>
    )
}

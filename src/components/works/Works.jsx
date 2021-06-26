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
        {
            id: 6,
            icon: 'assets/mobile.png',
            title: 'e-commerce Application',
            desc: 'Building a Responsive e-commerce Application using React Hooks, HTML, Material UI, Nodejs, MongoDB, Express & SCSS.',
            img: 'assets/e-comm4.png'
        },
        {
            id: 7,
            icon: 'assets/mobile.png',
            title: 'Indecision Application',
            desc: 'Building a Responsive Indecision Application using React Hooks, HTML, Material UI, Nodejs, MongoDB, Express & SCSS.',
            img: 'assets/indc2.png'
        },
        {
            id: 8,
            icon: 'assets/mobile.png',
            title: 'e-commerce Application',
            desc: 'Building a Responsive e-commerce Application using React Hooks, HTML, Material UI, Nodejs, MongoDB, Express & SCSS.',
            img: 'assets/e-comm2.png'
        },
        {
            id: 9,
            icon: 'assets/mobile.png',
            title: 'Web Application',
            desc: 'Building a Responsive Hotel Booking Application using React Hooks, HTML, Material UI, Nodejs, MongoDB, Express & SCSS.',
            img: 'assets/hotel-tour.png'
        },
        {
            id: 10,
            icon: 'assets/mobile.png',
            title: 'Web Application',
            desc: 'Building a Responsive City Tour Guide Application using React Hooks, HTML, Material UI, Nodejs, MongoDB, Express & SCSS.',
            img: 'assets/city-tour.png'
        },
        {
            id: 11,
            icon: 'assets/mobile.png',
            title: 'Budget Application',
            desc: 'Building a Responsive Budget Tracking Application using React Hooks, HTML, Material UI, Nodejs, MongoDB, Express & SCSS.',
            img: 'assets/bugt.png'
        },
        {
            id: 12,
            icon: 'assets/mobile.png',
            title: 'Weather Application',
            desc: 'Building a Responsive Weather Forecast Application using React Hooks, HTML, Material UI, Nodejs, MongoDB, Express & SCSS.',
            img: 'assets/weather-app.png'
        },
        {
            id: 13,
            icon: 'assets/mobile.png',
            title: 'e-Commerce Application',
            desc: 'Building a Responsive e-Commerce Application using React Hooks, HTML, Material UI, Nodejs, MongoDB, Express & SCSS.',
            img: 'assets/e-comm4.png'
        },
        {
            id: 14,
            icon: 'assets/mobile.png',
            title: 'Web Application',
            desc: 'Building a Responsive Expense Tracking Application using React Hooks, HTML, Material UI, Nodejs, MongoDB, Express & SCSS.',
            img: 'assets/exp-tracker.png'
        },
        {
            id: 15,
            icon: 'assets/mobile.png',
            title: 'News Blog',
            desc: 'Building a Responsive News Blog Application using React Hooks, HTML, Material UI, Nodejs, MongoDB, Express & SCSS.',
            img: 'assets/newsapp.png'
        },
    ];

    const handleClick = (direction) => {
        direction === 'left' ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 14) : 
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

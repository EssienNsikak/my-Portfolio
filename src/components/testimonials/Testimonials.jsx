import './testimonials.scss';

export default function Testimonials() {

    const data = [
        {
            id: 1,
            name: 'Emmanuel Patrick',
            title: 'Senior Full-stack Dev. Travis CI',
            img: 'assets/emma.jpg',
            icon: 'assets/youtube.png',
            desc: 'He is a resourceful, dynamic, and result-oriented individual with the potential to learn fast, and an exquisite gentleman with problem-solving abilities.',

        },
        {
            id: 2,
            name: 'Nsikak Essien',
            title: 'Senior Full-stack Dev. Reftify.Hq',
            img: 'assets/me.jpg',
            icon: 'assets/twitter.png',
            desc: 'He is a resourceful, dynamic, hardworking and dutiful and result-oriented individual.',
            featured: true
        },
        {
            id: 3,
            name: 'Patrick Emmanuel',
            title: 'Senior Full-stack Dev. Sezzle',
            img: 'assets/emma2.jpg',
            icon: 'assets/lnk2.jpg',
            desc: 'He is an exquisite gentleman who is resourceful, dynamic, hardworking. He will be a great asset to you organization.',
        }
    ];

    return (
        <div className='testimonials' id='testimonials'>
            <h1>Testimonials</h1>
            <div className='container'>
                {
                    data.map(d => (
                        <div className={d.featured ? 'card featured' : 'card'}>

                            <div className='top'>
                                {/*<img src='assets/right-arrow' className='left' alt='' />*/}
                                <img src={d.img} alt='' />
                                <img src={d.icon} alt='' />
                            </div>

                            <div className='center'>
                            {d.desc}
                            </div>

                            <div className='bottom'>
                                <h3>{d.name}</h3>
                                <h4>{d.title}</h4>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}

import React, { useEffect } from 'react'
import './Home.css'
import { GrLocation } from 'react-icons/gr'
import { HiFilter } from 'react-icons/hi'
import { BsFacebook } from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'
import { TbApps } from 'react-icons/tb'
import Aos from 'aos'
import video_header from "../../assets/video.mp4"
import 'aos/dist/aos.css'

const Home = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <section className='home'>
            <div className='overlay' > </div>

            <video muted autoPlay loop src={video_header}>

            </video>
            <div className='homeContent container'>

                <div className='textDiv'>

                    <span data-aos="fade-up" className='smallText'>
                        Our Packages
                    </span>

                    <h1 data-aos="fade-up" className='homeTitle pb-3'>
                        Search your Hohiday
                    </h1>
                </div>

                <div data-aos="fade-up" className='cardDiv grid'>
                    <div className='dateInput'>
                        <label htmlFor='city'> Search your destination :  </label>
                        <div className='input flex'>
                            <input className='' type='text' placeholder='Enter your name here ....' />
                            <GrLocation className='icon' />
                        </div>
                    </div>
                    <div className='destinaltionInput'>
                        <label htmlFor='date'> Select your date :  </label>
                        <div className='input flex'>
                            <input className='' type='date' />
                        </div>
                    </div>
                    <div className='priceInput'>
                        <div className='label_total flex'>
                            <label htmlFor='price'>
                                Max price :
                            </label>
                            <h3 className='total'> $5000</h3>
                        </div>
                        <div className='input flex'>
                            <input type='range' max="5000" min="1000" />
                        </div>
                    </div>
                    {/*  */}
                    <div className='searchOption flex'>
                        <HiFilter className='icon' />
                        <span> MORE FILTERS</span>
                    </div>
                </div>

                <div className='homeFooter flex'>
                    <div data-aos="fade-up" className='rightIcon'>
                      
                    </div>

                    <div data-aos="fade-up" className='leftIcon'>
                        <TbApps className="cursor-pointer"  size={30}/>
                    </div>
                </div>
            </div>





        </section>
    )
}

export default Home
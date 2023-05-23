import React, { useState } from 'react'
import './Navbar.css'
import { FaPlaneDeparture } from 'react-icons/fa'
import { AiFillCloseCircle } from 'react-icons/ai'
import { TbGridDots } from 'react-icons/tb'
import Footer from '../footer/Footer'
import Home from '../home/Home'
const Navbar = () => {
    const [active, setActive] = useState('navBar')
    const shownav = () => {
        setActive('navBar activeNavBar')
    }
    const removeNav = () => {
        setActive('navBar ')
    }
    return (
        <section className='navBarSection'>
            <header className='header flex'>
                <div className='logoDiv flex gap-5'>
                    <a  className='logo flex gap-4 pb-2 items-center'>
                      <FaPlaneDeparture size={30} className="icon" />  <h1 className='text-2xl pt-2'>  Travel.</h1>
                    </a>
                    
                </div>
                <div className={active}>
                    <ul className='navLists flex'>
                       
                         <li className='navItem'>
                            <a  className='navLink'>Trợ Giúp</a>
                        </li>
                        <li className='navItem'>
                            <a  className='navLink'></a>
                        </li>
                        <li className='navItem'>
                            <a  className='navLink cursor-pointer'>USD</a>
                        </li>
                        <button style={{backgroundColor:"rgba(0,0,0,0.2)"}} className='text-white mr-3 p-2 font-medium rounded-md '>
                                Tìm Kiếm Đặt Chỗ
                        </button>
                         <button className='btn'>
                            <a>
                                Đăng Nhập / Đăng Ký
                            </a>
                        </button>
                    </ul>
                    <div onClick={removeNav} className='closeNavBar'>
                        <AiFillCloseCircle className='icon' />
                    </div>
                </div>
                <div onClick={shownav} className='toggle'>
                    <TbGridDots className='icon' />
                </div>
            </header>
            <Home/>
            <Footer/>
        </section>  
    )
}

export default Navbar
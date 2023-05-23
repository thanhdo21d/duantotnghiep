import React, { useEffect } from 'react'
import './Footer.css'
import videoo from '../../assets/video2.mp4'
import { BsFillSendCheckFill } from 'react-icons/bs'
import { FaPlaneDeparture } from 'react-icons/fa'
import { FiChevronRight } from 'react-icons/fi'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Footer = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <section className='footer'>
            <div data-aos="fade-up" className='videoDiv'>
                <video src={videoo} loop autoPlay muted type="video/mp4"></video>
            </div>


            <div className='secContent container'>
                <div data-aos="fade-up" className='contactDiv flex'>
                    <div className='text'>

                        <small> KEEP IN TOUCH</small>
                        <h2> Travel with us</h2>
                    </div>

                    <div className='inputDiv flex'>
                        <input type='text' className='lg:w-[400px] xl:w-[555px]' placeholder='Enter Email Address' />
                        <button className='btn flex' type='submit'> SEND <BsFillSendCheckFill className='icon' /> </button>
                    </div>
                </div>
                {/*  */}

                <div className='footerCard flex'>

                    <div data-aos="fade-up" className='footerIntro flex'>
                        <div className='logoDiv'>
                            <a  className='logo flex'>
                                <FaPlaneDeparture className='icon' />  Travel.
                            </a>
                        </div>

                        {/*  */}
                        <div className='footerPara'>
                            Bắt đầu với việc nhập thông tin điểm đến tại mục “Tìm khách sạn”, hàng trăm kết quả sẽ được hiển thị trong tích tắc theo nhu cầu của bạn. Ứng dụng Traveloka sẽ phân loại kết quả theo hai phân khúc – Tiết kiệm và Cao cấp, giúp rút ngắn thời gian tìm kiếm. Đặc biệt, khi lựa chọn ngày nhận phòng, Traveloka sẽ thông báo đâu là những ngày có mức giá thấp nhất. Không cần so sánh ngược xuôi, đặt phòng khách sạn giá rẻ giờ đây chỉ cần vài bước tùy chỉnh.

                            Mọi thông tin chi tiết nhất về khách sạn luôn được cập nhật thường xuyên. Các tiện nghi, khu vực lân cận, và phần nhận xét từ các khách hàng trước sẽ giúp bạn có một đánh giá tổng quan về khách sạn đang cân nhắc. Mức giá hiển thị cũng là mức giá cuối cùng bạn phải thanh toán, đã bao gồm thuế, không phí giao dịch hoặc chi phí ẩn. Bạn chỉ cần một giao diện duy nhất để so sánh nhiều sự lựa chọn và dễ dàng đặt phòng khách sạn giá rẻ với đầy đủ tiện nghi nhất.
                        </div>
                    </div>
                    {/*  */}
                    <div data-aos="fade-up" className='footerLinks grid'>
                        <div className='linkGroup'>
                            <span className='groupTitle'> OUR AGENCY</span>

                            <li className='footerList flex'>
                                <FiChevronRight className="icon" /> Services
                            </li>

                            <li className='footerList flex'>
                                <FiChevronRight className="icon" /> Insurance
                            </li>

                            <li className='footerList flex'>
                                <FiChevronRight className="icon" /> Agency
                            </li>

                            <li className='footerList flex'>
                                <FiChevronRight className="icon" /> Tourism
                            </li>

                            <li className='footerList flex'>
                                <FiChevronRight className="icon" /> Payment
                            </li>

                        </div>
                        {/*  */}
                        <div className='linkGroup'>
                            <span className='groupTitle'> OUR AGENCY</span>

                            <li className='footerList flex'>
                                <FiChevronRight className="icon" /> Services
                            </li>

                            <li className='footerList flex'>
                                <FiChevronRight className="icon" /> Insurance
                            </li>

                            <li className='footerList flex'>
                                <FiChevronRight className="icon" /> Agency
                            </li>

                            <li className='footerList flex'>
                                <FiChevronRight className="icon" /> Tourism
                            </li>

                            <li className='footerList flex'>
                                <FiChevronRight className="icon" /> Payment
                            </li>

                        </div>
                        {/*  */}
                        <div className='linkGroup'>
                            <span className='groupTitle'> PARTNERS</span>

                            <li className='footerList flex'>
                                <FiChevronRight className="icon" /> Bookings
                            </li>

                            <li className='footerList flex'>
                                <FiChevronRight className="icon" /> Rentcars
                            </li>

                            <li className='footerList flex'>
                                <FiChevronRight className="icon" /> HotelWorks
                            </li>

                            <li className='footerList flex'>
                                <FiChevronRight className="icon" /> Trivago
                            </li>

                            <li className='footerList flex'>
                                <FiChevronRight className="icon" /> TripAdvisor
                            </li>

                        </div>
                    </div>
                    {/*  */}
                    <div className='footerDiv pt-1'>
                        <small> BEST TRAVEL WEBSITE THEME</small>
                        <small> COPYRIGHTS RESERVED  -  ISRATECH 2023</small>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
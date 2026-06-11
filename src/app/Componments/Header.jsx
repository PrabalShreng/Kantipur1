import Link from 'next/link';
import React from 'react'
import { IoReorderThreeSharp } from "react-icons/io5";
import { IoPersonCircleOutline } from "react-icons/io5";



function Header() {
    return (
        <>
        <section>
            <img className='w-100' src="https://assets-cdn.ekantipur.com/uploads/source/ads/xtreme-banner-see-1352026054853.jpg" alt="" />
        </section>
            <section className='py-2'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2">
                            <p>१७ जेष्ठ २०८२ शनिबार<br />
                                Saturday, May 31, 2025</p>
                        </div>
                        <div className="col-lg-8 text-center">
                            <img className='w' src="https://jcss-cdn.ekantipur.com/kantipurdaily/images/logo.png" alt="" />
                        </div>
                        <div className="col-lg-2">
                            <p>२८.४४°C काठमाडौं
                                काठमाडौंमा वायुको गुणस्तर: १३५</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='py-2'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-1">
                            <h2><IoReorderThreeSharp />
                            </h2>
                        </div>
                        <div className="col-lg-9">
                            <ul className='d-flex gap-4 a,'>
                               <li><Link href='/prabal/'>समाचार</Link></li>
                               <li><Link href='/prabal/'>अर्थ /वाणिज्य</Link></li>
                                <li><Link href='/prabal/'>विचार</Link></li>
                                <li><Link href='/prabal/'>विचार</Link></li>
                                <li><Link href='/prabal/'>खेलकुद</Link></li>
                                <li><Link href='/prabal/'>उपत्यका</Link></li>
                                <li><Link href='/prabal/'>मनोरञ्जन</Link></li>
                                <li><Link href='/prabal/'>फोटोफिचर</Link></li>
                                <li><Link href='/prabal/'>फिचर</Link></li>
                                <li><Link href='/prabal/'>विश्व</Link></li>
                                <li><Link href='/prabal/'>ब्लग</Link></li>
                                <li><Link href='/prabal/'>कोसेली</Link></li>
                                <li><Link href='/prabal/'>प्रवास</Link></li>
                                <li><Link href='/prabal/'>शिक्षा</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 d-flex">
                            <h2 ><IoPersonCircleOutline />
                            </h2>Login
                        </div>
                    </div>
                    <hr />
                </div>
            </section>

            <section>
                <div className="container">
                    <ul className='d-flex gap-4 a b'>
                       <Link href='/prabal/'><li> बजेट २०८२/८३</li></Link>
                       <Link href='/prabal/'><li>भिजिट भिसा प्रकरण</li></Link>
                        <Link href='/prabal/'><li>गभर्नर नियुक्ति</li></Link>
                        <Link href='/prabal/'><li>कान्तिपुर इकोनोमिक समिट–२०२५</li></Link>
                        <Link href='/prabal/'><li>महालेखापरीक्षकको वार्षिक प्रतिवेदन</li></Link>
                        <Link href='/prabal/'><li>निर्भिक नारी</li></Link>
                        <Link href='/prabal/'><li>नीति तथा कार्यक्रम</li></Link>
                        <Link href='/prabal/'><li>कान्तिपुर अर्काइभv</li></Link>
                   </ul>
                   <hr />
                </div>
            </section>
        </>
    )
}

export default Header

import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { MdCall } from "react-icons/md";



function Footer() {
    return (
        <>
            <section>
                <div className="container">
                    <p>कान्तिपुरका स्तम्भहरु</p>
                    <ul>
                        कोशी | मधेश | बाग्मती | गण्डकी | लुम्बिनी | कर्णाली | सुदूरपश्चिम | सम्पादकलाई | चिठीवार्षिकोत्सव | विशेषांकरोचकमधेश | मन्थनफड्कोप्रिन्ट | संस्करणनारी | नेपालीदसैं | विशेषगन्तब्यकोपिलाकला
                    </ul>
                    <hr />
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        <p className='fw-bold'>
                            हाम्रो बारेमा</p>
                        <div className="col-lg-4">
                            <p>यो वेबसाइट कान्तिपुर राष्ट्रिय दैनिकको आधिकारिक न्युज पोर्टल हो । नेपाली भाषाको यो पोर्टलले समाचार, विचार, मनोरञ्जन, खेल, विश्व, सूचना प्रविधि, भिडियो तथा जीवनका विभिन्न आयामका समाचार र विश्लेषणलाई समेट्छ।</p>
                            <p>पूरा पढ्नुहोस् »</p>
                        </div>
                        <div className="col-lg-4 a">
                            <li className='fw-bold'>उपयोगी लिंकहरु</li>
                            <li>विज्ञापन - पत्रिका</li>
                            <li>सल्लाह सुझाव</li>
                            <li>सम्पर्क गर्नुहोस्</li>
                            <FaTwitter /> <CiFacebook /> <FaYoutube />
                            <div className='p-2'>
                                <img className='w' src="https://jcss-cdn.ekantipur.com/kantipurdaily/images/play-store.png" alt="" />
                                <img className='w' src="https://jcss-cdn.ekantipur.com/kantipurdaily/images/app-store.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <p className='fw-bold'>सम्पर्क ठेगाना</p>
                            <p>कान्तिपुर पब्लिकेशन्स् लि.<br />
                                सेन्ट्रल बिजनेस पार्क, थापाथली<br />
                                काठमाडौं, नेपाल</p>
                            <p><MdCall />
                                +977-01-5135000<br />
                                <MdCall />
                                +977-01-5135001</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer

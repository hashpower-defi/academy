import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import ClassComponent from '../components/Class'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'

import Script from 'next/script'

import { useState } from 'react'

const Home: NextPage = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)
    const onSubmit = (event: any) => {
        event.preventDefault()
        setIsSubmitted(true)

        let formData = new FormData()
        formData.append('name', event.target.name.value)
        formData.append('email', event.target.email.value)
        formData.append('subject', event.target.subject.value)
        formData.append('message', event.target.message.value)

        fetch('https://script.google.com/macros/s/AKfycbwT3617nVXhjrgOEgJaUgk3ZmSaYg7zUURMXjZHANxP-2hYn6yETMLzMJTiHsjm7BXK5g/exec', {
            method: 'post',
            body: formData,
        })
            .then(res => res.json())
            .then(res => {
                if (res.result == 'success') {
                    alert('전송 완료')
                } else {
                    alert('저장 실패')
                }
            })
    }

    return (
        <div>
            {/* <Script data-cfasync="false" type="text/javascript" src="https://cdn.rawgit.com/dwyl/html-form-send-email-via-google-script-without-server/master/form-submission-handler.js" /> */}
            <Head>
                {/* <script src="http://localhost:8097"></script> */}
                <title>HashPower Academy</title>

                <link rel="icon" href="/HP_symbol_Poly.png" />
                {/* material icons */}
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
                {/* bootsrap-icons */}
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"></link>

                {/* Font - Montserrat */}
                {/* <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"></link>
                 */}
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap" rel="stylesheet"></link>

                {/* Script */}
                {/* <script>
                    const abc = document.getElementyById("#id");
                </script> */}
            </Head>

            <main>
                {/* Header */}
                <section>
                    <Header />
                </section>

                {/* Title */}
                <section className="section__main__title" id="title">
                    <div className="">
                        <div className="flex flex-col items-center">
                            <div className="flex flex-col gap-6 items-center pb-8 lg:pb-20">
                                <div className="text-2xl md:text-5xl lg:text-8xl font-black">DeFi Academy</div>
                                <div className="text-2xl md:text-5xl lg:text-8xl font-black gradient-border-text">HashPower Finance&nbsp;</div>
                            </div>
                            <img src="/HP_symbol_Poly.png" alt="logo" className="pb-8 lg:pb-20 w-1/12" />
                            <div className="lg:text-2xl font-light pb-20">We help you understand blockchain finance</div>
                        </div>
                    </div>
                </section>

                {/* Classes */}
                <section className="section" id="class">
                    <div id="section__title">
                        <p>Classes</p>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-10">
                        <ClassComponent title="[TOUR] Crypto Farm & Mining Rigs" imgSrc="/class1.jpg" hours="30 min" fee="₩10,000" />
                        <ClassComponent title="[VIP] DeFi 1:1 Session" imgSrc="/class2.jpg" hours="1 hr" fee="₩50,000" />
                        <ClassComponent title="[CLASS] Intro to Crypto & DeFi" imgSrc="/class3.jpg" fee="₩30,000" discountFee="Free" />
                    </div>
                </section>

                {/* Explanation - 1 */}
                <section className="section" id="explanation">
                    <div id="section__title">
                        <p>Korea No.1 Crypto Farm</p>
                    </div>
                    <div id="explanation__text">
                        <p>POW Mining has never been so profitable.</p>
                        <p>S19 provides most energy efficient SHA256 hashrate at 29J per TH.</p>
                        <p>Everything is done by Hashpower, all you need is to sit back and enjoy lucrative profit.</p>
                    </div>
                </section>

                {/* Products */}
                <section className="section" id="product">
                    <div id="section__title">
                        <p>Product</p>
                    </div>
                    <div className="flex justify-center ">
                        <img src="/rig_product.jpg" alt="products" className="rig-height" />
                        <div className="flex flex-col justify-center items-center w-1/2 bg-white text-black">
                            <div className="rig-text font-bold">ASIC-S19J PRO-96TH</div>
                            <div className="m-10">_____</div>
                            <div className="text-xl">₩15,000,000</div>
                            <a href="https://hashpower.finance">
                                <div className="border-2 mt-20 px-20 py-4 text-2xl border-[#666CF9] text-[#666CF9] cursor-pointer hover:bg-[#666CF9] hover:text-white">View Details</div>
                            </a>
                        </div>
                    </div>
                </section>

                {/* Contact */}
                <section className="section" id="contact">
                    <div>
                        <div className="flex gap-10">
                            <div className="w-1/2 pl-40">
                                <div className="font-bold text-4xl text-[#666CF9]">GET IN TOUCH</div>
                                <div className="pt-8">59, Seongsuil-ro 8-gil, Seongdong-gu, Seoul, Republic of Korea</div>
                            </div>
                            {/* <div className="flex flex-col w-1/3 gap-4"> */}
                            <form
                                className="gform flex flex-col w-1/3 gap-4"
                                method="POST"
                                data-email="cs@dazim.io"
                                action="https://script.google.com/macros/s/AKfycbwT3617nVXhjrgOEgJaUgk3ZmSaYg7zUURMXjZHANxP-2hYn6yETMLzMJTiHsjm7BXK5g/exec"
                                onSubmit={onSubmit}
                            >
                                <div>
                                    <div>Name *</div>
                                    <input className="contact__input" name="name" placeholder="Enter your name" required></input>
                                </div>
                                <div>
                                    <div>Email *</div>
                                    <input className="contact__input" name="email" placeholder="Enter your email" required></input>
                                </div>
                                <div>
                                    <div>Subject</div>
                                    <input className="contact__input" name="subject" placeholder="Type the subject"></input>
                                </div>
                                <div>
                                    <div>Message *</div>
                                    <input className="contact__input__box" name="message" placeholder="Type your message here..." required></input>
                                </div>
                                <button className="bg-[#7483F5] h-12 flex justify-center items-center font-semibold disabled:opacity-50" disabled={isSubmitted}>
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Home

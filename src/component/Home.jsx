import React from 'react'
import './Home.css'
import logo from '../constent/logo.png'
import tropyimg from '../constent/1.png'
import grouppic from '../constent/2.png'
import instrument from '../constent/3.png'
import phone from '../constent/phone.png'
import facebook from '../constent/facbook.png'
import world from '../constent/world.png'

const Home = () => {
    return (
        <>
            <div className='main'>
                <div className="above-logo">
                    <img src={logo} width={'25%'} alt="" />
                </div>
                <div className="detail">
                    <div className="tropy-img">
                        <img src={tropyimg} alt="" />
                    </div>
                    <div className="subdetail-page">
                        <h3> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h3>
                        <ul>
                            <li>
                                C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                            <li> C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
                        </ul>
                        <img width={'100%'} height={'60%'} src={grouppic} alt="" />
                        <p>Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
                    </div>
                </div>
                <div className="below-detail">
                    <h3>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </h3>
                    <div className="instrument">
                        <img src={instrument} alt="" />
                    </div>
                    <p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
                </div>
                <hr style={{ border: ' 1px solid red' }}></hr>
                <div className='footer-above'>
                    <h3>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h3>
                    <p>CHEMICALS & PROCESS POWER WATER & WASTE WATER OILS & GAS PHARMA SUGARS & DISTILLERIES PAPER & PULP MARINE & DEFENCE METAL & MINING FOOD & BEVERAGE PETROCHEMICAL & REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE & RESIDENTIAL</p>
                </div>
                <div className="footer">
                    <li> <img src={phone} alt="" /> Toll free 1800 200 1234</li>
                    <li><img src={facebook} alt="" /> www.facbook.com/cripumps</li>
                    <li><img src={world} alt="" /> www.crigroups.com</li>
                </div>
            </div>

        </>
    )
}

export default Home
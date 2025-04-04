import React from 'react';
import './home.css';
import { assets } from '../../assets/assets'
const Home = () => {
    return (
        <>
            <div className="header-container">
                <header className="header-content">
                    <nav className="nav-container">
                        <a href="#" className="link-content">होम</a>
                        <a href="#" className="link-content">कविता</a>
                        <a href="#" className="link-content">मेरी कविताएँ</a>
                    </nav>
                    <div className="searchbar-container">
                        <span className="search-icon">&#x1F50D;</span>
                        <input type="text" className="search-input" placeholder="खोज..."/>
                    </div>
                    <div className="button-container">
                        <button className="auth-button">लॉग इन</button>
                        <button className="auth-button">साइन अप</button>
                    </div>
                </header>
                <div className="heading-container">
                    <div className="heading-content">
                        <img src={assets.feather_icon} alt="Logo" className="heading-logo"/>
                        <p className="heading">hindi</p>
                    </div>
                </div>
            </div>

            <div className="poemOfTheDay">
                <div className="pod-content">
                    <div className="pod-heading">
                        <p>आज की कविता</p>
                    </div>
                    <div className="pod-desc">
                        <div className="left-box">
                            <p>वंदना</p>
                            <p>हे मातृभूमि! तेरी गोद में पला हूँ मैं, तेरे ही आँचल की छाँव में पला हूँ मैं।
                                तेरी ही मिट्टी से बना मेरा यह शरीर, तेरी ही गाथा से सजा मेरा यह अधीर।
                                तेरी ही सेवा में सदा लीन रहूँगा मैं, तेरी ही जय-गाथा सदा गाऊँगा मैं</p>
                            <div id="poetname"><p>(मुंशी प्रेमचंद)</p></div>
                        </div>
                        <div className="right-box">
                            <img src={assets.munshi_icon} alt="Munshi Premchand" className="premchand"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="famous-poem">
                <div className="fp-content">
                    <div className="fp-heading">
                        <p className="fp-title">प्रसिद्ध कविता</p>
                    </div>
                    <div className="fp-poems">
                        <div className="fpoem">
                            <p>माना कि बड़ा मगरूर हूँ मैं
                                छोटी सी बात का बड़ा कसूर हूँ मैं
                                अगर तुम्हारा नजरिया होता सच्चाई भरा
                                जान जाते कि फिर भी बेकसूर हूँ मैं।</p>
                        </div>
                        <div className="fpoem">
                            <p>मानता हूँ कि गलतियों का पुतला हूँ मैं,
                                नहीं कहता कि दूध का धुला हूँ मैं,
                                दाने की तलाश में निकला वो पंछी हूँ मैं,
                                जो ख्वाहिशों के लिए शिकार हो गया।</p>
                        </div>
                        <div className="fpoem">
                            <p>निर्णय लेने से पहले सोचते तो सही
                                कौन सही है, कौन गलत है, तोलते तो सही
                                शिकायत बिल्कुल भी नहीं होती आपसे अगर
                                आप कभी मेरे मन को टटोलते तो सही है।</p>
                        </div>
                        <div className="fpoem">
                            <p>जब चाहिए था आपका साथ, साथ तो देते
                                मांगा था जब आपका हाथ, हाथ तो देते
                                मंजिल की तलाश तो मैं अकेले ही कर लेता
                                आप मंजिल पाने के हालात तो देते।</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="writing-container">
                <div className="button-content">
                    <p className="button-p">अपनी कविता साझा कर</p>
                </div>
            </div>

            <div className="genre">
                <div className="genre-content">
                    <div className="genre-title">
                        <p>शैली</p>
                    </div>
                    <div className="genre-types">
                        <div className="gtype">भक्ति</div>
                        <div className="gtype">हास्य</div>
                        <div className="gtype">देशभक्ति</div>
                        <div className="gtype">प्रगतिवादी</div>
                        <div className="gtype">साहित्यिक</div>
                        <div className="gtype">छायावादी</div>
                    </div>
                </div>
            </div>

            <div className="footer-container">
                <footer className="footer">
                    <div className="footer-top">
                        <div className="comp-logo">
                            <a className="logo-link" href="#">
                                <img className="logo-svg" src={assets.feather_icon} alt="Logo"/>
                                StudySync
                            </a>
                        </div>
                        <p className="filler-text">Seamless Learning for Brighter Futures.</p>
                        <div className="social">
                            <a className="social-link" href="#">
                                <img src={assets.micro_icon} alt="Microsoft" className="social-icon"/>
                            </a>
                            <a className="social-link" href="#">
                                <img src={assets.linkedin_icon} alt="LinkedIn" className="social-icon"/>
                            </a>
                            <a className="social-link" href="#">
                                <img src={assets.insta_icon} alt="Instagram" className="social-icon"/>
                            </a>
                            <a className="social-link" href="#">
                                <img src={assets.twitter_icon} alt="Twitter" className="social-icon"/>
                            </a>
                        </div>
                    </div>

                    <div className="footer-grid">
                        <div className="footer-grid-column">
                            <div className="footer-grid-heading">Products</div>
                            <ul className="footer-links-list">
                                <li><a href="#" className="footer-link">Overview</a></li>
                                <li><a href="#" className="footer-link">Solutions</a></li>
                                <li><a href="#" className="footer-link">Pricing</a></li>
                                <li><a href="#" className="footer-link">Customers</a></li>
                            </ul>
                        </div>
                        <div className="footer-grid-column">
                            <div className="footer-grid-heading">Company</div>
                            <ul className="footer-links-list">
                                <li><a href="#" className="footer-link">About</a></li>
                                <li><a href="#" className="footer-link">Investor Relations</a></li>
                                <li><a href="#" className="footer-link">Jobs</a></li>
                                <li><a href="#" className="footer-link">Press</a></li>
                                <li><a href="#" className="footer-link">Blog</a></li>
                            </ul>
                        </div>
                        <div className="footer-grid-column">
                            <div className="footer-grid-heading">Support</div>
                            <ul className="footer-links-list">
                                <li><a href="#" className="footer-link">Contact</a></li>
                                <li><a href="#" className="footer-link">Documentation</a></li>
                                <li><a href="#" className="footer-link">Chat</a></li>
                                <li><a href="#" className="footer-link">FAQ</a></li>
                            </ul>
                        </div>
                    </div>
                </footer>
                <div className="footer-copyright">
                    © 2021 - Present StudySync. All rights reserved.
                </div>
            </div>
        </>
    );
}

export default Home;

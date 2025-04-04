import React from 'react';
import './home.css';
import { assets } from '../../assets/assets'
import { useState, useEffect } from 'react';

const Home = () => {
    const [signup, setSignup] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [startFadeOut, setStartFadeOut] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        city: "",
        address: "",
        username: "",
        password: "",
        email: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted Data:", formData);
    };

    useEffect(() => {

        const fadeOutTimer = setTimeout(() => {
            setStartFadeOut(true);
        }, 2000);

        const removeSplashTimer = setTimeout(() => {
            setIsVisible(false);
            if (onFinish) onFinish();
        }, 3000);

        return () => {
            clearTimeout(fadeOutTimer);
            clearTimeout(removeSplashTimer);
        };
    }, []);

    return (
        <>
            <div className={`splash-screen ${startFadeOut ? "hide-splash" : ""}`}>
                <h1 className="shlok-text">काव्यधारा</h1>
            </div>
            {isOpen && <div className="modal-overlay" onClick={() => setIsOpen(false)}></div>}
            {isOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close-btn" onClick={() => setIsOpen(false)}>&times;</span>
                        <h2>LOGIN</h2>
                        <label>Username</label>
                        <input type="text" className="input-box" placeholder="Type Here" />
                        <label>Password</label>
                        <input type="password" className="input-box" placeholder="Type Here" />
                        <button className="login-btn">Submit</button>
                    </div>
                </div>
            )}
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
                        <button className="auth-button" onClick={() => setIsOpen(true)}>लॉग इन</button>
                        <button className="auth-button" onClick={() => setSignup(!signup)}>साइन अप</button>
                    </div>
                </header>
                <div className="heading-container">
                    <div className="heading-content">
                        <img src={assets.feather_icon} alt="Logo" className="heading-logo"/>
                        <p className="heading">काव्यधारा</p>
                    </div>
                </div>
            </div>
            <div>
                {signup ?
                    <>
                            <div className="signup-container">
            <h1 className="signup-title">साइन अप</h1>
            <form className="signup-form" onSubmit={handleSubmit}>
                <label>पहला नाम:</label>
                <input type="text" name="firstName" onChange={handleChange} required />
                
                <label>अंतिम नाम:</label>
                <input type="text" name="lastName" onChange={handleChange} required />
                
                <label>फोन नंबर:</label>
                <input type="tel" name="phone" onChange={handleChange} required />
                
                <label>शहर:</label>
                <input type="text" name="city" onChange={handleChange} required />
                
                <label>पता:</label>
                <input type="text" name="address" onChange={handleChange} required />
                
                <label>उपयोगकर्ता नाम:</label>
                <input type="text" name="username" onChange={handleChange} required />
                
                <label>पासवर्ड:</label>
                <input type="password" name="password" onChange={handleChange} required />
                
                <label>ईमेल:</label>
                <input type="email" name="email" onChange={handleChange} required />
                
                <button type="submit" className="signup-btn">रजिस्टर करें</button>
            </form>
        </div>
                    </>
                  :
                  <div>
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
                  </div>
                }
            </div>
            

            <div className="footer-container">
                <footer className="footer">
                    <div className="footer-top">
                        <div className="comp-logo">
                            <a className="logo-link" href="#">
                                <img className="logo-svg" src={assets.feather_icon} alt="Logo" />
                                काव्यधारा
                            </a>
                        </div>
                        <p className="filler-text">बाधारहित शिक्षा उज्जवल भविष्य के लिए।</p>
                        <div className="social">
                            <a className="social-link" href="#">
                                <img src={assets.micro_icon} alt="Microsoft" className="social-icon" />
                            </a>
                            <a className="social-link" href="#">
                                <img src={assets.linkedin_icon} alt="LinkedIn" className="social-icon" />
                            </a>
                            <a className="social-link" href="#">
                                <img src={assets.insta_icon} alt="Instagram" className="social-icon" />
                            </a>
                            <a className="social-link" href="#">
                                <img src={assets.twitter_icon} alt="Twitter" className="social-icon" />
                            </a>
                        </div>
                    </div>

                    <div className="footer-grid">
                        <div className="footer-grid-column">
                            <div className="footer-grid-heading">उत्पाद</div>
                            <ul className="footer-links-list">
                                <li><a href="#" className="footer-link">अवलोकन</a></li>
                                <li><a href="#" className="footer-link">समाधान</a></li>
                                <li><a href="#" className="footer-link">मूल्य निर्धारण</a></li>
                                <li><a href="#" className="footer-link">ग्राहक</a></li>
                            </ul>
                        </div>
                        <div className="footer-grid-column">
                            <div className="footer-grid-heading">कंपनी</div>
                            <ul className="footer-links-list">
                                <li><a href="#" className="footer-link">हमारे बारे में</a></li>
                                <li><a href="#" className="footer-link">निवेशक संबंध</a></li>
                                <li><a href="#" className="footer-link">नौकरियाँ</a></li>
                                <li><a href="#" className="footer-link">प्रेस</a></li>
                                <li><a href="#" className="footer-link">ब्लॉग</a></li>
                            </ul>
                        </div>
                        <div className="footer-grid-column">
                            <div className="footer-grid-heading">सहायता</div>
                            <ul className="footer-links-list">
                                <li><a href="#" className="footer-link">संपर्क करें</a></li>
                                <li><a href="#" className="footer-link">दस्तावेज़ीकरण</a></li>
                                <li><a href="#" className="footer-link">चैट</a></li>
                                <li><a href="#" className="footer-link">अक्सर पूछे जाने वाले प्रश्न</a></li>
                            </ul>
                        </div>
                    </div>
                </footer>     
                    <div className="footer-copyright">
                        © 2025 - काव्यधारा. सर्वाधिकार सुरक्षित।
                    </div>
                   
            </div>
        </>
    );
}

export default Home;
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// Import your profile image
import profileImage from '../assets/images/profile.jpg';
// Import the CSS
import '../styles/index.css';

const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true
        });
    }, []);

    return (
        <div className="container-fluid p-0">
            {/* About Section */}
            <div className="row mb-5 profile-section" data-aos="fade-in">
                <div className="col-10 mx-auto text-center">
                    <h1 className="Title">About Me</h1>
                    <img
                        src={profileImage}
                        className="profile-image rounded-circle d-block mx-auto"
                        alt="Profile"
                    />
                    <p className="mt-4">
                        Final Year in Singapore Management University, studying Information Systems
                        and majoring in Business Analytics. This website is to provide insights into the
                        projects I have worked on and hopefully allow you to get to know me better.
                    </p>
                    <p className="mt-5">Scroll down for more</p>
                    <i className="fa-solid fa-arrow-down text-light"></i>
                </div>
            </div>

            {/* Data Analytics Section */}
            <div className="row mb-5" data-aos="fade-right">
                <div className="col-md-6 col-10 mx-auto text-start">
                    <h2 className="Title data">Data Analytics</h2>
                    <p className="data-text">
                        Data Analytics allows me to extract valuable insights to make sound decisions
                    </p>
                    <span className="data-text">
                        Here are some of the Data Analytics projects I have worked on
                    </span>
                    <a href="/data" className="d-block mt-3">
                        <i className="fa-solid fa-arrow-right data-text"></i>
                    </a>
                </div>
                <div className="col-md-4 col-10 mx-auto">
                    <dotlottie-player
                        src="https://lottie.host/3576a12e-d08d-4d57-806a-17f57d89648d/sKlgXD67fe.json"
                        background="transparent"
                        speed="1"
                        style={{ width: '100%', height: 'auto' }}
                        loop
                        autoplay
                    ></dotlottie-player>
                </div>
            </div>

            {/* Software Development Section */}
            <div className="row mb-5" data-aos="fade-left">
                <div className="col-md-4 col-10 mx-auto order-md-1 order-2">
                    <dotlottie-player
                        src="https://lottie.host/aac058ac-0bed-4389-bcc7-7e39e77babdd/bH5jX7yBNU.json"
                        background="transparent"
                        speed="1"
                        style={{ width: '100%', height: 'auto' }}
                        loop
                        autoplay
                    ></dotlottie-player>
                </div>
                <div className="col-md-6 col-10 mx-auto text-start order-md-2 order-1">
                    <h2 className="Title software">Software Development</h2>
                    <p className="software-text">
                        Software Development allows me to come up with creative solutions to solve interesting problems
                    </p>
                    <span className="software-text">
                        These are the Software Development projects I have worked on
                    </span>
                    <a href="/software" className="d-block mt-3">
                        <i className="fa-solid fa-arrow-right software-text"></i>
                    </a>
                </div>
            </div>

            {/* Volunteering Section */}
            <div className="row mb-5" data-aos="fade-right">
                <div className="col-md-6 col-10 mx-auto text-start">
                    <h2 className="Title volunteer">Volunteering</h2>
                    <p className="volunteer-text">
                        Giving back to my community is something I enjoy participating in.
                    </p>
                    <span className="volunteer-text">
                        Here are some volunteer work I have done
                    </span>
                    <a href="/volunteer" className="d-block mt-3">
                        <i className="fa-solid fa-arrow-right volunteer-text"></i>
                    </a>
                </div>
                <div className="col-md-4 col-10 mx-auto">
                    <dotlottie-player
                        src="https://lottie.host/a5324c2b-4518-400a-9d26-ba19be393f86/QxGB01YepV.json"
                        background="transparent"
                        speed="1"
                        style={{ width: '100%', height: 'auto' }}
                        loop
                        autoplay
                    ></dotlottie-player>
                </div>
            </div>
        </div>
    );
};

export default Home;
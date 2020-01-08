import React from 'react';
import NavBar from '../components/NavBar';
import '../styles/Home.scss'


const Home = () => {

    return (
        <div className="home">
            <NavBar />
            <div className="home-center">
            <img className="banner" src="https://res.cloudinary.com/dfulxq7so/image/upload/v1578436889/asasdasd_ls3sll.png" alt="banner"/>
            <div className="services">
                <div className="each-service">
                    <div className="icon">
                        <img id="cleaning-icon" src="https://res.cloudinary.com/dfulxq7so/image/upload/c_scale,h_219/v1578439023/d47c5362a369f945d1edd6ca13c9afb4_kckp3h.png" alt="icon"/>
                    </div>
                    <div className="text">
                        <p>Cleaning</p>
                    </div>
                </div>
                <div className="each-service">
                    <div className="icon">
                        <img src="https://res.cloudinary.com/dfulxq7so/image/upload/v1578439038/39c5df853a7f2b4dad3c239424fe1b2e_wegodu.png" alt="icon"/>
                    </div>
                    <div className="text">
                        <p>Hair Cut</p>
                    </div>
                </div>
                <div className="each-service">
                    <div className="icon">
                        <img src="https://res.cloudinary.com/dfulxq7so/image/upload/v1578439057/7f1f21c35daf03b671ba301b9e2c973e_1_ejxzz9.png" alt="icon"/>
                    </div>
                    <div className="text">
                        <p>Personal Trainer</p>
                    </div>
                </div>
                <div className="each-service">
                    <div className="icon">
                        <img src="https://res.cloudinary.com/dfulxq7so/image/upload/v1578439080/a6b93c33ec7ec5f7823b894c9119cf38_erts1v.png" alt="icon"/>
                    </div>
                    <div className="text">
                        <p>Moving Buddy</p>
                    </div>
                </div>
                <div className="each-service">
                    <div className="icon">
                        <img src="https://res.cloudinary.com/dfulxq7so/image/upload/v1578439103/ae6d39b555d61c8cb6135bd5e7bc75d7_kuaaha.png" alt="icon"/>
                    </div>
                    <div className="text">
                        <p>laundry</p>
                    </div>
                </div>
                <div className="each-service">
                    <div className="icon">
                        <img src="https://res.cloudinary.com/dfulxq7so/image/upload/v1578439122/c21ea7036eaef219e81ab364d6e622f3_ld1ryl.png" alt="icon"/>
                    </div>
                    <div className="text">
                        <p>Pet Sitting/Walking</p>
                    </div>
                </div>
                <div className="each-service">
                    <div className="icon">
                        <img src="https://res.cloudinary.com/dfulxq7so/image/upload/v1578439142/0e5cd02a978baa406c0f279ffdd57000_vlticr.png" alt="icon"/>
                    </div>
                    <div className="text">
                        <p>Anything Else</p>
                    </div>
                </div>

            </div>
            </div>
        </div>
    )
}

export default Home;
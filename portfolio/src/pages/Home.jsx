import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Home = () => {
    // Slider settings
    const settings = {
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        speed: 2000,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1290,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    return (
        <div
            id="home"
            className="min-h-screen bg-gradient-to-b from-[#EEF7FB] to-[#48AFDE]"
        >
            {/* Hero Section */}
            <div className="container mx-auto py-16 px-5 md:px-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="text-center md:text-left">
                        <p className="text-3xl text-[#47AEDE]">Hi There!</p>
                        <h1
                            className="text-5xl font-extrabold text-[#223740] mt-4"
                        >
                            I&apos;m NIsha Chaudhary
                        </h1>
                        <h2
                            className="text-xl font-bold mt-2 uppercase text-[#223740]"
                        >
                            Web Developer and Designer
                        </h2>
                        <div className="mt-6 flex justify-center md:justify-start space-x-4">
                            <Link
                                to="#portfolio"
                                className="px-6 py-3 bg-[#47AEDE] text-white font-bold rounded-lg shadow-lg hover:bg-[#223740]"
                            >
                                Projects
                            </Link>
                            <Link
                                to="/CV.pdf"
                                download="BibashCV.pdf"
                                className="px-6 py-3 bg-[#223740] text-white font-bold rounded-lg shadow-lg hover:bg-[#47AEDE]"
                            >
                                My Resume
                            </Link>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <img
                            src="/bil.png"
                            alt="Bibash"
                            width={400}
                            height={400}
                            className="rounded-full shadow-lg"
                        />
                    </div>
                </div>
            </div>

            {/* Slider Section */}
            <div className="bg-white shadow-lg py-8">
                <div className="max-w-6xl mx-auto">
                    <Slider {...settings}>
                        <img
                            src="/reactjs.png"
                            alt="ReactJS"
                            width={100}
                            height={50}
                            className="mx-auto"
                        />
                        <img
                            src="/nextjs.png"
                            alt="NextJS"
                            width={100}
                            height={50}
                            className="mx-auto"
                        />
                        <img
                            src="/expressjs.png"
                            alt="ExpressJS"
                            width={100}
                            height={50}
                            className="mx-auto"
                        />
                        <img
                            src="/nodejs.png"
                            alt="NodeJS"
                            width={100}
                            height={50}
                            className="mx-auto"
                        />
                        <img
                            src="/mongodb.png"
                            alt="MongoDB"
                            width={100}
                            height={50}
                            className="mx-auto"
                        />
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Home;

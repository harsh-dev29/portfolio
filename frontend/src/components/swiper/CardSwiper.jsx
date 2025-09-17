import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import '../Main/main.css'
import './cardswiper.css'

const CardSwiper = ({ sundown, project1, miranda1 }) => {
    return (
        <>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div class="swiper-card color-container swiper-card">
                        <div class="article-container">
                            <img src={sundown} alt="project 1" class="project-img" />
                        </div>

                        <h2 class="experience-sub-title project-title">Sundown Studio-Clone</h2>
                        <div class="btn-container">
                            <button class="btn btn-color-2 project-btn"
                                onclick="location.href='https://github.com/harsh-dev29/sundown-studio-clone'">GitHub</button>
                            <button class="btn btn-color-2 project-btn"
                                onclick="location.href='https://stalwart-gingersnap-28d947.netlify.app/'">Demo</button>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="swiper-card color-container">
                        <div class="article-container">
                            <img src={project1} alt="project 1" class="project-img" />
                        </div>

                        <h2 class="experience-sub-title project-title">Nike landig page </h2>
                        <div class="btn-container">
                            <button class="btn btn-color-2 project-btn"
                                onclick="location.href='https://github.com/harsh-dev29/nike-shoes-landing-page'">GitHub</button>
                            <button class="btn btn-color-2 project-btn"
                                onclick="location.href='https://harsh-dev29.github.io/nike-shoes-landing-page/'">Demo</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="swiper-card color-container ">
                        <div class="article-container">
                            <img src={miranda1} alt="project 1" class="project-img" />
                        </div>

                        <h2 class="experience-sub-title project-title">Miranda Paper portfolio-Clone</h2>
                        <div class="btn-container">
                            <button class="btn btn-color-2 project-btn"
                            ><a href="https://github.com/harsh-dev29">GitHub</a></button>
                            <button class="btn btn-color-2 project-btn"
                                onclick="location.href='https://teal-lamington-98b067.netlify.app/'">Demo</button>
                        </div>
                    </div>
                </SwiperSlide>
                {/* <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide> */}
            </Swiper>
        </>
    )
}

export default CardSwiper
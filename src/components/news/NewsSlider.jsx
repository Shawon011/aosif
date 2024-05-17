
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import "./slide.css"

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import LeftBox from './LeftBox';
import RightBox from './RightBox';

import 'swiper/css/autoplay'

export default function NewsSlider() {
  return (
    <>
      <Swiper navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        loop="true"
        autoplay={{
            delay: 3000
        }}
        className="mySwiper">
        <SwiperSlide>
            <div className='md:flex block gap-7'>
                <div className='w-full'>
                    <LeftBox leftImg="/assets/slideImg1.jpg"
                    leftTitle="The Mid-Autumn festival" leftDate1="01-18"
                    leftDate2="2021"/>
                </div>
                <div className='w-full md:mt-0 mt-5 rightArea flex flex-col gap-5'>
                    <div>
                        <RightBox img="/assets/slideImg101.jpg" title="Dragon Boat Festival, Healthy & Safe"
                        subTitle="The Dragon Boat Festival" Rightdate="2021-06-11"/>
                    </div>
                    <div>
                        <RightBox img="/assets/slideImg102.jpg" title="Exhibition Review | The 129th Canton Fair ended successfully!" 
                        subTitle="The 129th Canton Fair ended successfully!" 
                        Rightdate="2021-04-27"/>
                    </div>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='md:flex block gap-7'>
                <div className='w-full'>
                    <LeftBox leftImg="/assets/slideImg2.jpg" 
                    leftTitle="Happy Women's Day !"
                    leftDate1="03-08"
                    leftDate2="2021"/>
                </div>
                <div className='w-full md:mt-0 mt-5 rightArea flex flex-col gap-5'>
                    <div>
                        <RightBox img="/assets/slideImg201.jpg" title="Dragon Boat Festival, Healthy & Safe"
                        Rightdate="2021-01-20"/>
                    </div>
                    <div>
                        <RightBox img="/assets/slideImg202.jpg" title="Exhibition Review | The 129th Canton Fair ended successfully!"
                        Rightdate="2021-01-12"/>
                    </div>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='md:flex block gap-7'>
                <div className='w-full'>
                    <LeftBox leftImg="/assets/slideImg3.jpg" 
                    leftTitle="Cummins New Products Presented on  GPOWER Show"
                    leftDate1="03-08"
                    leftDate2="2021"/>
                </div>
                <div className='w-full md:mt-0 mt-5 rightArea flex flex-col gap-5'>
                    <div>
                        <RightBox img="/assets/slideImg301.jpg" title="Happy Women's Day!" 
                        subTitle="Because of woman, the world becomes more beautiful!"
                        Rightdate="2022-03-08"/>
                    </div>
                    <div>
                        <RightBox img="/assets/slideImg302.jpg" title="Review of AOSIF 2022"
                        Rightdate="2022-01-26"/>
                    </div>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

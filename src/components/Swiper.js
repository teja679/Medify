// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Carousel = ({ list }) => {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            {list && list.length > 0 && list.map(item =>
                <SwiperSlide key={item.name} className='specialist-div'>
                    <img src={item.img} alt={item.name} />
                    <h3>{item.name}</h3>
                    <p>{item.specialized}</p>
                </SwiperSlide>
            )}
        </Swiper>
    );
};

export default Carousel;

/* 
<div key={item.name} className='specialist-div'>
                            <img src={item.img} alt={item.name} />
                            <h3>{item.name}</h3>
                            <p>{item.specialized}</p>
                        </div>
                         */
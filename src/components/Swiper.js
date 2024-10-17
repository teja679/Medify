// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Box, Tab, Typography } from '@mui/material';

const TabContent = ({ index, item, selectedTab, setSelectedTab }) => {
    return (
        <Box onClick={(() => setSelectedTab(index))} sx={{ padding: '0.8rem', borderBottom: index === selectedTab && '4px solid #2AA7FF' }}>
            <Typography sx={{ fontWeight: 600, /* color: index === selectedTab ? '#2AA7FF' : '#444', */ }}>
                {index === 0 ? 'Today' : index === 1 ? 'Tomorrow' : item.title}
            </Typography>
            <Typography sx={{ fontSize: '10px', color: '#00A500' }}>
                {item.size} slots available
            </Typography>
        </Box>
    );
}

const Carousel = ({ list, isCarouselOnHomePage = false, setSelectedTab, selectedTab }) => {
    return (
        <Swiper
            style={{ width: isCarouselOnHomePage ? "100%" : "100vh", textAlign: 'center', cursor: 'pointer' }}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={isCarouselOnHomePage ? 5 : 3}
            navigation
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            {list && list.length > 0 && list.map((item, index) =>
                <SwiperSlide key={item.name + index} className='specialist-div' >
                    {isCarouselOnHomePage ?
                        <>
                            <img width='100%' src={item.img} alt={item.name} />
                            <h3>{item.name}</h3>
                            <p>{item.specialized}</p>
                        </>
                        :
                        <TabContent index={index} item={item} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
                        // <Tab
                        //     key={index}
                        //     sx={{ display: 'flex', flexDirection: 'column' }}
                        //     label={<TabContent index={index} item={item} />}
                        // />
                    }
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
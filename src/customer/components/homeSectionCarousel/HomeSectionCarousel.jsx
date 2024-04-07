import React, { useState } from 'react';
import HomeSectionCard from '../homeSectionCard/HomeSectionCard';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from '@mui/material';
import { mens_kurta } from '../../../data/men/MenKurta';

const HomeSectionCarousel = ({data,sectionName}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5 },
    };

    const slidePrev = () => {
        if (activeIndex > 0) {
            setActiveIndex(activeIndex - 1);
        }
    };

    // const slideNext = () => {
    //     if (activeIndex < mens_kurta.length - responsive[1024].items) {
    //         setActiveIndex(activeIndex + 1);
    //     }
    // };

    const slideNext = () => {
        // Calculate the number of slides in the current row based on the window width
        const slidesInRow = responsive[1024].items;
        
        // Calculate the total number of slides
        const totalSlides = data.length;
    
        // Calculate the index of the last slide in the current row
        const lastSlideIndexInRow = activeIndex * slidesInRow + slidesInRow - 1;
    
        // Calculate the index of the next slide
        let nextIndex = activeIndex + 1;
    
        // Check if the next slide exceeds the number of available slides in the current row
        if (lastSlideIndexInRow + 1 >= totalSlides) {
            // If yes, reset to the beginning of the row
            nextIndex = 0;
        }
    
        // Set the new activeIndex
        setActiveIndex(nextIndex);
    };
    

    const syncActiveIndex = ({ isNext }) => {
        if (isNext) {
            slideNext();
        } else {
            //slidePrev();
        }
    };

    const startIndex = activeIndex * responsive[1024].items;
    const endIndex = startIndex + responsive[1024].items;
    const items = data.slice(startIndex, endIndex).map((item) => <HomeSectionCard key={item.id} product={item} />);

    return (
        <div className="border">
            <h2 className='text-2x1 font-extrabold text-gray-800 py-5'>{sectionName}</h2>
            <div className="relative p-5">
                <AliceCarousel
                    items={items}
                    disableButtonsControls
                    responsive={responsive}
                    disableDotsControls
                    activeIndex={0}
                    slideToIndex={0}
                    onSlideChanged={syncActiveIndex}
                />
                {activeIndex !== 0 && (
                    <Button
                        variant="contained"
                        className="z-50"
                        onClick={slidePrev}
                        sx={{
                            position: 'absolute',
                            top: '8rem',
                            left: '0rem',
                            transform: 'translateX(-50%) rotate(90deg)',
                            bgcolor: 'white',
                        }}
                        aria-label="prev"
                    >
                        <KeyboardArrowLeftIcon sx={{ transform: 'rotate(-90deg)', color: 'black' }} />
                    </Button>
                )}
                {activeIndex !== Math.floor(data.length / responsive[1024].items) &&  (
                    <Button
                        variant="contained"
                        className="z-50"
                        onClick={slideNext}
                        sx={{
                            position: 'absolute',
                            top: '8rem',
                            right: '0rem',
                            transform: 'translateX(50%) rotate(90deg)',
                            bgcolor: 'white',
                        }}
                        aria-label="next"
                    >
                        <KeyboardArrowLeftIcon sx={{ transform: 'rotate(90deg)', color: 'black' }} />
                    </Button>
                )}
            </div>
        </div>
    );
};

export default HomeSectionCarousel;

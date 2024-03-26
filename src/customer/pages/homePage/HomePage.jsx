import React from 'react'
import MainCarousel from '../../components/homeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/homeSectionCarousel/HomeSectionCarousel'

const HomePage = () => {
    return (
        <div>
            <MainCarousel></MainCarousel>
            <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
                <HomeSectionCarousel></HomeSectionCarousel>
                <HomeSectionCarousel></HomeSectionCarousel>
                <HomeSectionCarousel></HomeSectionCarousel>
                <HomeSectionCarousel></HomeSectionCarousel>
                <HomeSectionCarousel></HomeSectionCarousel>
                <HomeSectionCarousel></HomeSectionCarousel>
            </div>
        </div>
    )
}

export default HomePage
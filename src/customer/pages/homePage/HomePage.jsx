import React from 'react'
import MainCarousel from '../../components/homeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/homeSectionCarousel/HomeSectionCarousel'

const HomePage = () => {
    return (
        <div>
            <MainCarousel></MainCarousel>
            <div>
                <HomeSectionCarousel></HomeSectionCarousel>
            </div>
        </div>
    )
}

export default HomePage
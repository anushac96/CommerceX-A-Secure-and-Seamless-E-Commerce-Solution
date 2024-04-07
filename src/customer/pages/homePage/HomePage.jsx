import React from 'react'
import MainCarousel from '../../components/homeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/homeSectionCarousel/HomeSectionCarousel'
import { mens_kurta } from '../../../data/men/MenKurta'

const HomePage = () => {
  return (
    <div>
        <MainCarousel></MainCarousel>
        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Men\'s Kurta"}></HomeSectionCarousel>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Men\'s Shoes "}></HomeSectionCarousel>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Men\'s Shirt"}></HomeSectionCarousel>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Women\'s Saare"}></HomeSectionCarousel>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Women\'s Dress"}></HomeSectionCarousel>
        </div>
    </div>
  )
}

export default HomePage
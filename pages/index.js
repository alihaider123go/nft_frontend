import React from 'react'

import Style from '../styles/index.module.css'
import { HeroSection,Service,BigNFTSlider,Subscribe,Title,Category } from '@/components/componentsIndex'

const index = () => {
  return (
    <div className={Style.homePage}>
        <HeroSection />
        <Service />
        <BigNFTSlider />
        <Title
            heading="Browse by category"
            paragraph="Explore the NFTs in the most featured categories."
        />
        <Category />
        <Subscribe />
        
    </div>
  )
}

export default index
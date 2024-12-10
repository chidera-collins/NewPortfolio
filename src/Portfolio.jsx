import React from 'react'
import Portfoliocomponent from './PortfolioComponents/Portfoliocomponent'
import HeaderComponent from './HeaderComponent'
import AboutComponent from './AboutComponent/AboutComponent'
import Projectss from './ProjectComponent/Projectss'
import Testimonial from './TestimonialComponent/Testimonial'
import ContactComponent from './ContactComponent/ContactComponent'
import FooterComponent from './FooterComponent/FooterComponent'

function Portfolio() {
  return (
    <div>
        <HeaderComponent/>
        <Portfoliocomponent/>
        <AboutComponent/>
        <Projectss/>
        <Testimonial/>
        <ContactComponent/>
        <FooterComponent/>
    </div>
  )
}

export default Portfolio
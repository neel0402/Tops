import React from 'react'
import Header from '../../Component/Header/Header'
import Slider1 from '../../Component/Sliders/Slider1/Slider1'
import Section1 from '../../Component/Sections/Section1/Section1'
import Section2 from '../../Component/Sections/Section2/Section2'
import Section3 from '../../Component/Sections/Section3/Section3'
import Section4 from '../../Component/Sections/Section4/Section4'
import Section5 from '../../Component/Sections/Section5/Section5'
import Section6 from '../../Component/Sections/Section6/Section6'
import Section7 from '../../Component/Sections/Section7/Section7'
import Slider2 from '../../Component/Sliders/Slider2/Slider2'
import Section8 from '../../Component/Sections/Section8/Section8'
import Section9 from '../../Component/Sections/Section9/Section9'
import Footer from '../../Component/Footer/Footer'
import SubHeader from '../../Component/Header/SubHeader'


export default function Home() {
    return (
        <div>
            <Header />
            <SubHeader/>
            <Slider1 />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Section7 />
            <Slider2 />
            <Section8 />
            <Section9 />
            <Footer/>
        </div>
    )
}

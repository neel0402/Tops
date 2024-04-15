import React, { useState } from 'react';
import { Card, CardBody, CardText, CardTitle } from 'reactstrap';
import img5 from '../../Sections/Images/img5.webp';
import img6Hover from '../Images/img6.webp';
import img7 from '../../Sections/Images/img7.webp';
import img8Hover from '../Images/img8.webp';
import img9 from '../../Sections/Images/img9.webp';
import img10Hover from '../Images/img10.webp';
import img11 from '../../Sections/Images/img11.webp';
import img12Hover from '../Images/img12.webp';

export default function Section3() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const images = [img5, img7, img9, img11];
    const hoverImages = [img6Hover, img8Hover, img10Hover, img12Hover]; // Add hover images
    const titles = ['G 9001', 'L E-677', 'G 4142', 'G E-449',];
    const price = ['₹1,995.00', '₹695.00 – ₹895.00', '₹2,495.00', '₹1,695.00',];

    return (
        <div>
            <div className='grid grid-cols-4 pl-36 pr-20'>
            {images.map((image, index) => (
                <Card
                    key={index}
                    style={{
                        width: '18rem',
                        border: 'none',
                    }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <img alt="Sample" src={hoveredIndex === index ? hoverImages[index] : image} />
                    <CardBody>
                        <CardTitle style={{ fontSize: '16px' }}>
                            <h1 className='font-bold text-center'>{titles[index]}</h1>
                        </CardTitle>
                        <CardText style={{ fontSize: '16px' }}>
                            <h1 className='font-bold text-center pt-2'>{price[index]}</h1>
                        </CardText>
                    </CardBody>
                </Card>
            ))}
            </div>
        </div>
    );
}

import React, { useState } from 'react';
import { Card, CardBody, CardText, CardTitle } from 'reactstrap';
import img1 from '../Section6/Images/img1.webp';
import img2 from '../Section6/Images/img2.webp';
import img3Hover from '../Section6/Images/img3.webp';
import img4 from '../Section6/Images/img4.webp';
import img5Hover from '../Section6/Images/img5.webp';
import img6 from '../Section6/Images/img6.webp';
import img7Hover from '../Section6/Images/img7.webp';

export default function Section6() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const images = [img1, img2, img4, img6];
    const hoverImages = [img1, img3Hover, img5Hover, img7Hover]; // Add hover images
    const titles = ['G 1960', 'G 4133', 'G 1959', 'G 1956',];
    const price = ['', '₹1,895.00', '₹3,295.00 – ₹3,495.00', '₹3,295.00 – ₹3,495.00',];

    return (
        <div className='pt-10'>
            <div className='text-center font-medium text-2xl pb-10'>
                NEW ARRIVAL
            </div>
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

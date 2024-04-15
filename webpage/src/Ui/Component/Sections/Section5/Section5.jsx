import React, { useState } from 'react';
import { Card, CardBody, CardText, CardTitle } from 'reactstrap';
import img1 from '../Section5/Images/img1.webp';
import img2 from '../Section5/Images/img2.webp';
import img3Hover from '../Section5/Images/img3.webp';
import img4 from '../Section5/Images/img4.webp';
import img5Hover from '../Section5/Images/img5.webp';
import img6 from '../Section5/Images/img6.webp';
import img7Hover from '../Section5/Images/img7.webp';
import img8 from '../Section5/Images/img8.webp';
import img9Hover from '../Section5/Images/img9.webp';

export default function Section5() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const images = [img2, img4, img6, img8];
  const hoverImages = [img3Hover, img5Hover, img7Hover, img9Hover];
  const titles = ['G 1956', 'G 2067', 'G 1962', 'G 1969'];
  const price = ['₹3,295.00–₹3,495.00', '₹1,595.00', '₹2,995.00–₹3,295.00', '₹3,995.00'];

  return (
    <div className='pl-10'>
      <div className='text-center pb-5 pt-9'>
        <h1 className='text-2xl font-medium'>BEST PRODUCTS</h1>
      </div>
      <div className='flex'>
        <div className='pl-32'>
          <img src={img1} alt="" className='' style={{ width: "550px", height: "760px" }} />
        </div>
        <div className='grid grid-cols-2 gap-4 pl-10'>
          {images.map((image, index) => (
            <Card
              key={index}
              className="w-72 border-none"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                alt="Sample"
                className={`w-full ${hoveredIndex === index ? 'opacity-0' : 'opacity-100'}`}
                src={image}
              />
              <img
                alt="Sample"
                className={`w-full absolute transition-opacity duration-700 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}
                src={hoverImages[index]}
              />
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
    </div>
  );
}

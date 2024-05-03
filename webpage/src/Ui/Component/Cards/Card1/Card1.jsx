import React from 'react'
import { Card, CardBody, CardText, CardTitle } from 'reactstrap'

export default function Card1({ data }) {
  return (
    <>
      <div style={{
        paddingTop: "10px",
        paddingBottom: "10px",
      }}>
        <Card
          style={{
            width: '18rem',
            gap: "10px",
            border: "2px solid black"
          }}
        >
          <img
            className='text-sm'
            alt="Sample"
            src={data?.thumbnail}
          />
          <CardBody>
            <CardTitle className='font-bold text-xl text-center'>
              {data?.title}
            </CardTitle>
            <CardText className='text-base text-red-600 font-bold text-center'>
              {data?.price}
            </CardText>
          </CardBody>
        </Card>
      </div>
    </>
  )
}

import React from 'react'
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap'

export default function Card1({data}) {
  return (
    <>
      <Card
        style={{
          width: '18rem'
        }}
      >
        <img
          alt="Sample"
          src={data?.thumbnail}
        />
        <CardBody>
          <CardTitle>
            {data?.title}
          </CardTitle>
          <CardText>
            {data?.price}
          </CardText>
        </CardBody>
      </Card>
    </>
  )
}

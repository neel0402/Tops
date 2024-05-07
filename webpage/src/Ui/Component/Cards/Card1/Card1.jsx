import React from 'react'
import { Card, CardBody, CardText, CardTitle } from 'reactstrap'
import { useNavigate } from 'react-router-dom'

export default function Card1({ data }) {
  let navigate = useNavigate()
  let redirect = (id) => {
    navigate(`/user-card/${id}`)
  }

  return (
    <>
      <div style={{
        paddingTop: "10px",
        paddingBottom: "10px",
      }}
        onClick={() => redirect(data._id)}>
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

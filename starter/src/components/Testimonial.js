import React from 'react'
import Card from './Card'

export default function Testimonial(props) {
    let reviews = props.reviews;
  return (
    <div>
        <Card reviews = {reviews[0]}></Card>
    </div>
  )
}

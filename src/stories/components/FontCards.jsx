import React from 'react'
import DefaultExample from './Typography'

const typography = [
  {
    id: 1, 
    heading: 'Heading 1 | 2xl' , 
    textName: 'Display h1 ',
    textSize: 'Regular'
  }, 
  {
    id: 2, 
    heading: 'Heading 2 | xl' , 
    textName: 'Display h1', 
    textSize: 'Medium'
  }, 
  {
    id: 3, 
    heading: 'Heading 3 | lg' , 
    textName: 'Display h1', 
    textSize: 'Semibold'
  }, 

]

export default function FontCards() {
  return (

    <div>{typography.map(typography => <DefaultExample heading={typography.heading} textName={typography.textName} textSize={typography.textSize} /> )}</div>
  )
}

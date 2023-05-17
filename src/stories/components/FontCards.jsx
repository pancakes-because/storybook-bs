import React from 'react'
import ListGroupExample from './Typography'

const typography = [
  {
    id: 1, 
    wcag: 'AA 5.31' , 
    number: 25, 
    hexcode: "#039855"
  }, 
  {
    id: 2, 
    wcag: 'AA 5.31' , 
    number: 25, 
    hexcode: "#DC6803"
  }, 
  {
    id: 3, 
    wcag: 'AA 5.31' , 
    number: 25, 
    hexcode: "#D92D20"
  }, 

]

export default function FontCards() {
  return (

    <div>{typography.map(typography => <ListGroupExample wcag={typography.wcag} number={typography.number} hexcode={typography.hexcode} /> )}</div>
  )
}

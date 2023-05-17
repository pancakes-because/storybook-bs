import React from 'react'
import ColorsExample from './Colors'

const colors = [
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

export default function ColorCards() {
  return (

    <div>{colors.map(color => <ColorsExample wcag={color.wcag} number={color.number} hexcode={color.hexcode} /> )}</div>
  )
}

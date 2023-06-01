import React from "react"
import Pixel from "./Pixel"

export default function Pixels () {
  const pixels = []
  for (let i = 0; i < 100; i++) pixels.push(<Pixel key={i} />)
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', width: '210px', margin: '20px auto' }}>
      {pixels}
    </div>
  )
}
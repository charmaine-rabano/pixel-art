import React, { useState } from "react"
import { useColor } from "../ColorContext"

export default function Pixel () {
  const { currentColor } = useColor();
  const [ thisPixel, setThisPixel ] = useState('white');
  return <div style={{ height: '20px', width: '20px', backgroundColor: thisPixel, margin: '1px' }} onClick={() => setThisPixel(currentColor)} />
}
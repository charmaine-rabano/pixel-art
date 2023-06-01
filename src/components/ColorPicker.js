import React from "react"
import { useColor } from "../ColorContext";

export default function ColorPicker () {
  const { currentColor, setCurrentColor } = useColor();
  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'black', 'white']
  return (
    <>
      <div>
        <h3 style={{ marginBottom: '5px' }}>Choose a color</h3>
        {colors.map(color => <button key={color} style={{ backgroundColor: color, height: '20px', width: '20px', margin: '1px' }} onClick={() => setCurrentColor(color)} />)}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
        <p>Current Color:</p>
        <div style={{ height: '20px', width: '20px', backgroundColor: currentColor, margin: '1px' }} />
      </div>
    </>
  )
}
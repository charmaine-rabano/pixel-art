import React from "react"
import { ColorProvider } from "../ColorContext"
import ColorPicker from "./ColorPicker"
import Pixels from "./Pixels"

export default function PixelArt () {
  return (
    <ColorProvider>
      <div>
        <h1 style={{ marginBottom: '0' }}>Pixel Art</h1>
        <p style={{ marginTop: '0' }}>by Charmaine Eunice Rabano</p>
        <ColorPicker />
        <Pixels />
      </div>
    </ColorProvider>
  )
}
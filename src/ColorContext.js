import React, { createContext, useContext, useState } from "react"

const ColorContext = createContext(undefined);

export function ColorProvider ({ children }) {
  const [currentColor, setCurrentColor] = useState('white');
  return <ColorContext.Provider value={{ currentColor, setCurrentColor }}>{children}</ColorContext.Provider>
};

export const useColor = () => useContext(ColorContext);
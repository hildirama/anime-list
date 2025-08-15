"use client"

import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRef } from "react"

const InputSearch = () => {
  const searchRef = useRef ()
  return (
    <div className="relative">
        <input placeholder="search anime..." 
        className="w-full p-2 rounded"/>
        <button className="absolute top-2 end-2">
          <MagnifyingGlass size={24} />
        </button>
    </div>

  )
}

export default InputSearch
"use client"

import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const InputSearch = () => {
  const searchRef = useRef ()
  const router = useRouter ()
  const handleSearch = (event) => {
    event.preventDefault()
    const keyword = searchRef.current.value
    router.push(`/search/${keyword}`)
  }
  return (
    <form className="relative">
        <input placeholder="search anime..." 
        className="w-full p-2 rounded bg-white text-black"
        ref={searchRef}/>
        <button type="submit" className="absolute top-2 end-2" onClick={handleSearch}>
          <MagnifyingGlass size={24} />
        </button>
    </form>

  )
}

export default InputSearch
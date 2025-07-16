import React from 'react'

export default function SearchBtn( { onSearch }) {
  return (
    <div>
      <div className="w-[100%] mt-5  flex justify-content-center">
       <button
        onClick={onSearch}
        className="m-auto border bg-blue-800 text-white font-medium text-[20px] p-3 w-full rounded-3xl"
      >
        Search
      </button>
      </div>
    </div>
  )
}

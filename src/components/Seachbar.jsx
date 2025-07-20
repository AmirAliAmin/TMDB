import { FaSearch } from "react-icons/fa";

export default function Seachbar() {
  return (
    <>
     <div className='w-[100%] bg-white border flex align-items-center rounded-2xl'>
        <input className='px-5 w-[95%] h-[40px] focus:outline-none' type="text"  placeholder="Sreach for a movie,tv show,person"/>
        <div className="mt-3">
          <FaSearch />
          
        </div>
     </div>
      
    </>
  )
}

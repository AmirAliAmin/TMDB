import { RiArrowDropDownLine } from "react-icons/ri";
export default function Filter() {
    const Genres = {
        movie1:{
            id:1,
            title: "Action"
        },
        movie2:{
            id:2,
            title: "Adventure"
        },
        movie3:{
            id:3,
            title: "Animation"
        },
        movie4:{
            id:4,
            title: "Comedy"
        },
        movie5:{
            id:5,
            title: "Crime"
        },
        movie6:{
            id:6,
            title: "Documentary"
        },
        movie7:{
            id:7,
            title: "Drama"
        },
        movie8:{
            id:8,
            title: "Family"
        },
        movie9:{
            id:9,
            title: "Fantasy"
        },
        movie10:{
            id:10,
            title: "History"
        },
        movie11:{
            id:11,
            title: "Horror"
        },
        movie12:{
            id:12,
            title: "Music"
        },
        movie13:{
            id:13,
            title: "Mystery"
        },
        movie14:{
            id:14,
            title: "Romance"
        },
        movie15:{
            id:15,
            title: "Science Fiction"
        },
        movie16:{
            id:16,
            title: "Tv Movie"
        },
        movie17:{
            id:17,
            title: "Thriller"
        },
        movie18:{
            id:18,
            title: "War"
        },
        movie19:{
            id:19,
            title: "West"
        }
    }
  return (
    <>
      <div className="flex font-medium gap-[170px]">
        <h1>Filter</h1>
        <div className='absolute left-[220px] text-[30px]'>< RiArrowDropDownLine /></div> 
      </div>
      <div className="Show me">
        <h1>Show me</h1>
        <ul>
            <li><input type="radio" name="radio" id="" />Everthing</li>
            <li><input type="radio" name="radio" id="" />Movies I Haven't Seen</li>
            <li><input type="radio" name="radio" id="" />Movies I have Seen</li>
        </ul>
      </div>
      <div>
        <h1>Genres</h1>
        <div>
            <button>Action</button> 
        </div>
      </div>
    </>
  )
}

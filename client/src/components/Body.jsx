import { useState } from "react";
import Card from "./Card";
import restaurants from "./data";
const Body = () => {
    const [resList,setResList] = useState(restaurants)
    function filter(num){
        setResList(resList.filter((res)=>res.avgRating > num))
    }
    return (
        <>
            <div className="">
                <div className="p-2.5 text-center">
                    <button className="border p-2 cursor-pointer rounded-xl" onClick={()=>filter(4)}
                        >Top Rated Restaurant</button>
                </div>
                <div className="flex flex-wrap justify-evenly mb-2 p-2">
                {
                    resList.map((restaurant,index)=>(
                        <Card key={index} resData={restaurant}/>
                    ))
                }hj                    
                </div>
            </div>
        </>
    )
}
export default Body;
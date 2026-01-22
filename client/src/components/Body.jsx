import { useState } from "react";
import Card from "./Card";
import axios from "axios";
import restaurants from "./data";
import { useEffect } from "react";
const Body = () => {
    const [resList,setResList] = useState(restaurants)
    const [search,setSearch] = useState("biryani");
    const [inSearch, setInSearch] = useState('')

    async function apiCall(){
        try {
            const response = await axios.get(`https://www.swiggy.com/dapi/restaurants/search/v3?lat=17.3974397&lng=78.4489062&str=${search}&trackingId=undefined&submitAction=ENTER&queryUniqueId=28a781b7-c1f3-18fe-481d-d7de175d92ad&selectedPLTab=RESTAURANT`)
            const incomingRes = response.data.data.cards[0].groupedCard.cardGroupMap.RESTAURANT.cards;
            const finalRes = incomingRes.map((x)=>x.card.card.info);
            setResList(finalRes)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        apiCall();
    },[])

    function insideSearch(){
        try {
            let filter = resList.filter((x)=> x.name.toLowerCase().includes(inSearch.toLowerCase()));
            setResList(filter)
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <>
            <div className="">
                <div className="p-2.5 text-center">
                    <input type="text" onChange={(e)=>setSearch(e.target.value)} className="border m-2 p-2 w-auto" placeholder="Search food" />
                    <button onClick={apiCall} className="border m-2 p-2 bg-orange-500 text-white">Search</button>
                </div>
                <div className="p-2.5 text-center">
                    <input type="text" onChange={(e)=>setInSearch(e.target.value)} className="border m-2 p-2 w-auto" placeholder="search restaurant" />
                    <button onClick={insideSearch} className="border m-2 p-2 bg-orange-500 text-white">Search</button>
                </div>
                <div className="flex flex-wrap justify-evenly mb-2 p-2">
                {
                    resList.map((restaurant,index)=>(
                        <Card key={index} resData={restaurant}/>
                    ))
                }                 
                </div>
            </div>
        </>
    )
}
export default Body;
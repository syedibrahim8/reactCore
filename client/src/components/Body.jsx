import Card from "./Card";
import restaurants from "./data";
const Body = () => {
    const resList = restaurants
    return (
        <>
            <div className="">
                <div className="p-2.5 text-center">
                    <input type="text" className=" border rounded-xl p-2 m-2" placeholder="search food"/>
                    <button type="submit" className=" border rounded-xl p-2 m-2">Search</button>
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
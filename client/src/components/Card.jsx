const Card = (props)=>{
    const {resData} = props
    let image = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${resData.cloudinaryImageId}`
    return(
        <>
        <div className="w-50 h-75 m-2 text-center rounded-xl hover:border cursor-pointer bg-pink-300">
        <img className="p-1.25 w-100% rounded-xl" src={image} alt="cafe" />
        <h3 className="text-xl font-bold">{resData.name}</h3>
        <h4>{resData.areaName}</h4>
        <h4>{resData.avgRating}</h4>
        <h4>{resData.costForTwoMessage}</h4>
        </div>
        </>
    )
}
export default Card;
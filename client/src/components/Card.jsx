const Card = ({ resData, bgcolor }) => {
    const image = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_400,h_300,c_fill/${resData.cloudinaryImageId}`;

    return (
        <div
            className="w-64 m-2 rounded-2xl text-center hover:border cursor-pointer overflow-hidden shadow-sm flex flex-col"
            style={{ backgroundColor: bgcolor }}
        >
            <div className="w-full h-40">
                <img
                    className="w-full h-full object-cover"
                    src={image}
                    alt={resData?.name || "restaurant"}
                    loading="lazy"
                />
            </div>
            <div className="p-3 flex flex-col gap-1">
                <h3 className="text-lg font-bold line-clamp-1">{resData.name}</h3>
                <h4 className="text-sm text-gray-700 line-clamp-1">{resData.areaName}</h4>

                <div className="flex justify-between text-sm mt-1">
                    <div className="flex justify-around text-yellow-500 text-sm mb-1">
                        {Array.from({length:5}).map((_,i)=>(
                            <span key={i}>{i<Math.floor(resData.avgRating)?"★":"☆"}</span>
                        ))}
                        <span className="ml-1 text-gray-500">({resData.avgRating})</span>
                    </div>
                    <span>{resData.costforTwoMessage}</span>
                </div>
            </div>
        </div>
    );
};

export default Card;
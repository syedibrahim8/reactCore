const Header = ()=>{
    return(
        <>
        <div className="flex justify-between border-black bg-[#b3b3b3]">
            <div>
                <img className="w-20" src="food.png" alt="food-logo" />
            </div>
            <div className="p-[0px 20px] flex">
                <ul className="flex gap-10 p-5 items-center">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
        </>
    )
}
export default Header
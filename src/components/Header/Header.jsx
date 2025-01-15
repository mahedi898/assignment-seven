const Header = ({ price }) => {

    return (
            <div className="flex justify-between p-10  px-24">
                <div>
                    <img src="https://i.ibb.co.com/74WT3Y1/Group-1.png" alt="" />
                </div>
                <div className="flex gap-6 font-bold text-slate-500 items-center">
                    <p>Home</p>
                    <p>Fixture</p>
                    <p>Teams</p>
                    <p>Schedules</p>
                    <p className="flex items-center gap-2 border-[1px] rounded-md p-2 px-3 text-black ">{price} Coin<img src='https://i.ibb.co.com/L8LHLnY/Currency.png' alt="" /></p>
                </div>
            </div>
            
    )
};

export default Header;
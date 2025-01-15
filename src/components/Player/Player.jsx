import PropTypes from 'prop-types';
import './player.css'
import { IoPersonSharp } from "react-icons/io5";
import { FaFlag } from "react-icons/fa6";
import { MdOutlineAttachMoney } from "react-icons/md";
const Player = ({player, handelSelectedPlayers}) => {
    const {name, image, country, role, battingType, bowlingType, biddingPrice} = player;    
    
    return (
        <div className='player-card space-y-2'>
            <img className='player-img-style' src={image} alt="" />
           <div className='flex items-center gap-2'>
            <IoPersonSharp></IoPersonSharp>
           <h2 className='text-xl font-bold'>{name}</h2>
           </div>
           <div className='flex justify-between'>
            <div className='flex items-center gap-2 text-gray-500'>
                <FaFlag></FaFlag>
                <p>{country}</p>
            </div>
            <p className='border-[1px] border-slate-500 p-1 rounded-md'>
                {role}
            </p>
           </div>
           <hr className='mt-2' />
           
            <h1 className='font-bold'>Rating</h1>
           <div className='flex justify-between'>
            <p>{bowlingType}</p>
            <p>{battingType}</p>
           </div>
           <div className='flex items-center justify-between'>
            <p className='flex items-center'>Price: {biddingPrice}<MdOutlineAttachMoney></MdOutlineAttachMoney></p>
            <button onClick={()=>handelSelectedPlayers(player)} className="button">Choose Player</button>
           </div>

        </div>
    );
};

Player.propTypes = {
    player: PropTypes.object.isRequired
}

export default Player;
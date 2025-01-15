import { AiTwotoneDelete } from "react-icons/ai";
const SelectedPlayers = ({ selectedPlayers ,handleDelete}) => {
  return (
    <div>
      {selectedPlayers.map((player) => (
        <div key={player.playerId}>
          <div className="flex mt-4 mb-4 p-5 rounded-lg gap-5 border-[1px] border-slate-400 w-[85%] mx-auto justify-between items-center">
          <div className=" flex gap-5">
          <img className="w-16 rounded-lg" src={player.image} alt="" />
          <div>
          <p className="text-lg font-bold">{player.name}</p>
          <p className="text-md">{player.battingType}</p>
          </div>
          </div>
            <button onClick={()=>handleDelete(player.playerId)}><AiTwotoneDelete></AiTwotoneDelete></button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SelectedPlayers;

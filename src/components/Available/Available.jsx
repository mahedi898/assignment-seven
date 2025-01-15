const Available = ({ handleIsActiveState, selectedPlayers }) => {
    return (
      <div className="available-container flex justify-between p-10 px-32 items-center">
        <h1 className="available-title text-2xl font-bold text-gray-800">
          Available Players
        </h1>
        <div className="button-group border-[1px] border-slate-400 rounded-lg overflow-hidden flex">
          <button
            onClick={() => handleIsActiveState("card")}
            className="bg-[#E7FE29] button-claim text-black mt-5 mb-5 p-2 text-sm font-bold rounded-md border-black'"
          >
            Available
          </button>
          <button
            onClick={() => handleIsActiveState("about")}
            className="bg-[#E7FE29] button-claim text-black mt-5 mb-5 p-2 text-sm font-bold rounded-md border-[1px] border-black'"
          >
            Selected ({selectedPlayers.length})
          </button>
        </div>
      </div>
    );
  };
  
  export default Available;
  
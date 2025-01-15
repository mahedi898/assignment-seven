import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Available from "./components/Available/Available";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";
import Players from "./components/Players/Players";
import Subscribe from "./components/Subscribe/Subscribe";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

function App() {
  const [price, setPrice] = useState(0);

  const [isActive, setIsActive] = useState({
    card: true,
    status: "active",
  });

  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const handleIncreasePrice = () => {
    setPrice(price + 7000000);
  };

  const handleUpdatePrice = (tk) => {
    setPrice(price - tk);
  };

  const handleNewPrice = (playerId) => {
    const player = selectedPlayers.find((p) => p.playerId === playerId);
    setPrice(price + player.biddingPrice);
  };

  const handleIsActiveState = (status) => {
    setIsActive({
      card: status === "card",
      status: "active",
    });
  };

  const handleDelete = (playerId) => {
    handleNewPrice(playerId); 
    const newPlayers = selectedPlayers.filter((p) => p.playerId !== playerId);
    setSelectedPlayers(newPlayers);
  };

  const handelSelectedPlayers = (player) => {
    const isExist = selectedPlayers.find((p) => p.playerId === player.playerId);

    if (isExist) {
      return;
    }

    if (player.biddingPrice > price) {
      alert("You cannot afford this player!");
    } else {
      handleUpdatePrice(player.biddingPrice);
      const newPlayer = [...selectedPlayers, player];
      setSelectedPlayers(newPlayer);
    }
  };

  return (
    <>
      <div>
        <Header price={price}></Header>
        <Hero handleIncreasePrice={handleIncreasePrice}></Hero>
        <Available
          isActive={isActive}
          selectedPlayers={selectedPlayers}
          handleIsActiveState={handleIsActiveState}
        ></Available>
        {isActive.card ? (
          <Players handelSelectedPlayers={handelSelectedPlayers}></Players>
        ) : (
          <SelectedPlayers
            handleDelete={handleDelete}
            selectedPlayers={selectedPlayers}
          ></SelectedPlayers>
        )}
        <Subscribe></Subscribe>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;

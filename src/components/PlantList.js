import React, {useEffect} from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, setPlants, search}) {

  useEffect(() => {
  fetch("http://localhost:6001/plants")
    .then((data) => data.json())
    .then((data) => setPlants(data))
  }, []);

  const searchablePlants = plants.filter((plant) =>{
    if(search === "") return true;

    return plant.name.includes(search)
  })

  return (
    <ul className="cards">{searchablePlants.map((plant) => {
      return (<PlantCard key = {plant.id} plant ={plant} />)
    })}</ul>
  );
}

export default PlantList;

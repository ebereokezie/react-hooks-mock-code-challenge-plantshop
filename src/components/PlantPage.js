import React, {useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plants, setPlants}) {

const [search, setSearch] = useState("")

  return (
    <main>
      <NewPlantForm plants = {plants} setPlants = {setPlants}/>
      <Search search = {search} setSearch = {setSearch} />
      <PlantList plants = {plants} setPlants = {setPlants} search = {search}/>
    </main>
  );
}

export default PlantPage;

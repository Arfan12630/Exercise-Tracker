import { useState, useEffect } from "react";
import ExerciseDisplay from "./ExerciseDisplay";
//import CardHeader from "@mui/material/CardHeader";
const Chest = () => {
 
  const [chestData, setChestData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    fetch("/chest")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setChestData(data);
      })
      .catch((error) => setError(error));  
  }, []);

  if (chestData === undefined) return <h1> </h1>;
  if (error) console.log(error);




 const chestExercise = chestData.map((chest) => (
    <ExerciseDisplay
    id = {chest.metadata.uuid}
    key={chest.metadata.uuid}
    name ={chest.metadata.name}
    image = {chest.metadata.image}
    shortDescription={chest.metadata.description.short}        
    />

  )) 
  return (
    <>
      {/* {chestData.map((chest) => (
        <Card key={chest.metadata.uuid}>
            <h1>{chest.metadata.name}</h1>
            <p>{chest.metadata.tags[0]}</p>
            <p>{chest.metadata.description.short}</p>
            <p>{chest.metadata.description.long}</p>
        </Card>
      ))} */}
 
    <ul> {chestExercise}</ul>
  
   
    </>
  );
};

export default Chest;

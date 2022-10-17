import { useState, useEffect } from "react";
import ExerciseDisplay from "../ExerciseDisplay";
import classes from "../SearchBar.module.css";
//import CardHeader from "@mui/material/CardHeader";
const Chest = () => {
  const [chestData, setChestData] = useState();
  const [chestSearchQuery, setChestSearchQuery] = useState("");

  // TODO add a key array

  useEffect(() => {
    const chestExercises = async () => {
      const response = await fetch("/chest");
      const data = await response.json();

      setChestData(data);

     
    };
    
    const routineExercises = [];
    for (const key in chestData) {
     
      routineExercises.push({
        id: key,
        name: chestData[key].metadata.name,
        description: chestData[key].metadata.description,
      });

   
    }
    chestExercises();
  }, [chestData]);

  if (chestData === undefined) return <h1> Loading... </h1>;

  const filterChestExercise = chestData
    .filter((chest) => {
      if (chestSearchQuery === "") {
        return chest;
      } else if (
        chest.metadata.name
          .toLowerCase()
          .includes(chestSearchQuery.toLowerCase())
      ) {
        return chest.metadata.name;
      }
    })
    .map((chest) => (
      <ExerciseDisplay
        id={chest.metadata.uuid}
        key={chest.metadata.uuid}
        name={chest.metadata.name}
        image={chest.metadata.image}
        tags={chest.metadata.benefits}
        description={chest.metadata.description}
        instructions={chest.metadata.instructions}
        
      />
    ));

  const chestSearchHandler = (event) => {
    setChestSearchQuery(event.target.value);
  };
  return (
    <>
      <div className={classes.container}>
        <input
          className={classes.searchBar}
          style={{ textAlign: "center" }}
          placeholder="Search Exercise"
          onChange={chestSearchHandler}
          value={chestSearchQuery}
        />
      </div>
      {filterChestExercise}
    </>
  );
};

export default Chest;

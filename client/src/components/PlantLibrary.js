import { useEffect, useState } from "react";
import PlantCard from "./PlantCard";
import { useOutletContext } from "react-router-dom"

function PlantLibrary(){

    const {allPlantItems}= useOutletContext()

    // render plant library items
    const renderPlantItems = allPlantItems.map((plant) => (
        <PlantCard 
        key={plant.id}
        name={plant.name}
        image={plant.image}
        nickname={plant.nickname}
        water={plant.water}
        extraInfo={plant.extra_info}
        size={plant.size}
        ownerName={plant.owner.name}
        location={plant.location.room}
        />
    ))


    // display
    return (
        <div>
            <h2>Plant Library</h2>
            <div className='container' >
                {renderPlantItems}
            </div>
        </div>
    )
}

export default PlantLibrary;
import { useState } from "react"

function OwnerCard({id, name ,plants}) {

    
    return (
        <div className="owner-card">
            <h2>{name}</h2>
        </div>
    )
}

export default OwnerCard;
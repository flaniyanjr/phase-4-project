function OwnerCard({id, name , onClick}) {
    
    return (
        <div className="card">
            <h2>{name}</h2>
            <button onClick={() => onClick(name)}>View user's plants</button>
        </div>
    )
}

export default OwnerCard;
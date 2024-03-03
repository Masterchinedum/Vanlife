import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import

function VanDetail() {
    const params = useParams();
    const [van, setVan] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => {
                setVan(data.vans);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching van details:", error);
                setLoading(false);
            });
    }, [params.id]);

    return (
        <div className="van-detail-container">
            {loading ? (
                <h2>Loading...</h2>
            ) : van ? (
                <div className="van-detail">
                    <img src={van.imageUrl} alt={van.name} />
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                    <h2>{van.name}</h2>
                    <p className="van-price"><span>${van.price}</span>/day</p>
                    <p>{van.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            ) : (
                <h2>Van not found</h2>
            )}
        </div>
    );
}


export default VanDetail
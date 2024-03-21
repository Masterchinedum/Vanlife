// VanDetail.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import './VanDetail.css'

function VanDetail() {
    const params = useParams();
    const [van, setVan] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`/api/vans/${params.vanId}`)
            .then(res => res.json())
            .then(data => {
                if (data && data.vans) {
                    setVan(data.vans);
                } else {
                    console.error("Van details not found");
                }
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching van details:", error);
                setLoading(false);
            });
    }, [params.vanId]);

    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (!van) {
        return <h2>Van not found</h2>;
    }

    const { imageUrl, type, price, description } = van;

    return (
        <div className="van-detail-main-container ">
            <div className="van-detail-card">
                <img src={imageUrl} alt={van.name} className="van-detail-img" />
                <i className={`van-type ${type} selected`}>{type}</i>
                <h2 className="van-name">{van.name}</h2>
                <p className="van-price"><span>${price}</span>/day</p>
                <p className="van-description">{description}</p>
                <button className={`rent-button ${type} rent-button-${params.vanId}`}>Rent this van</button>
            </div>
        </div>
    );
}

export default VanDetail

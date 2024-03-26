import { useOutletContext } from "react-router-dom";

const [van, setVan] = useOutletContext();
const price = () => setVan(van.price);

const DvDPrice = () => {
  return (
    <div>
        <h3>Pricing is described here</h3>
        <p>${price}</p>
    </div>
  )
}

export default DvDPrice
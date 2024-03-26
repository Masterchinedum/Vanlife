import { useOutletContext } from "react-router-dom";

const van = useOutletContext().data.van;

const DvDPrice = () => {
  return (
    <div>
        <h3>Pricing is described here</h3>
        <p>${van.price}</p>
    </div>
  )
}

export default DvDPrice
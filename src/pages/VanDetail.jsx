import { useParams } from "react-router-dom";

function VanDetail() {
  const params = useParams();
  console.log(params);
  return (
    <div>
        <h1>Van Detail Page Goes Here </h1>
    </div>
  )
}

export default VanDetail
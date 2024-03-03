import { useParams } from "react-router-dom";

function VanDetail() {
  const params = useParams();
  console.log(params);

  useEffect(() => {
    fetch("/vans/:id")
      .then((response) => response.json())
      .then((data) => setVans(data.vans))
      .catch((error) => console.error("Error fetching vans:", error));
  }, []);


  return (
    <div>
        <h1>Van Detail Page Goes Here </h1>
    </div>
  )
}

export default VanDetail
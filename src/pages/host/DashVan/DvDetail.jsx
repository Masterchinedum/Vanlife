import { useOutletContext } from 'react-router-dom';

const DvDetail = () => {
  const {van} = useOutletContext();
  // const { description } = van;

  return (
    <div>
      {/* <p>{description}</p> */}
      <p> {van.description} </p>
    </div>
  );
};

export default DvDetail;
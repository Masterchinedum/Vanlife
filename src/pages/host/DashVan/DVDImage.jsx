import { useOutletContext } from 'react-router-dom';

const DvDetail = () => {
  const {van} = useOutletContext();
  const { imageUrl } = van;

  return (
    <div>
      <img src={imageUrl} alt={van.name} className="dash-vandet-img" />
    </div>
  );
};

export default DvDetail;
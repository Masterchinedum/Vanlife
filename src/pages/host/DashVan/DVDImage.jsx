import { useOutletContext } from 'react-router-dom';

const DvDetail = () => {
  const [van] = useOutletContext();
  const { imageUrl } = van;

  return (
    <div>
      <p>{imageUrl}</p>
    </div>
  );
};

export default DvDetail;
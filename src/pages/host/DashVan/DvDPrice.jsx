import { useOutletContext } from 'react-router-dom';

const DvDetail = () => {
  const [van] = useOutletContext();
  const { price } = van;

  return (
    <div>
      <p>${price}/day</p>
    </div>
  );
};

export default DvDetail;
import { PropagateLoader } from 'react-spinners';
import { WrapperLoader } from './Loader.styled';

const Loader = () => {
  return (
    <WrapperLoader>
      <PropagateLoader color={'#973eef'} size={18} speedMultiplier={1.5} />
    </WrapperLoader>
  );
};

export default Loader;

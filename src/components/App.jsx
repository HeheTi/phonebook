import AllRouts from 'routs/AllRouts';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from 'redux/auth/authOperation';
import { selectAuthLoadingUser } from 'redux/selectors';

const App = () => {
  const loadingUser = useSelector(selectAuthLoadingUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <>
      {!loadingUser && <AllRouts />}
      <ToastContainer />
    </>
  );
};

export default App;

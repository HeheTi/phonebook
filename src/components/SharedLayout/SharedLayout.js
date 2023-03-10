import Navigation from 'components/Navigation';
import { Box } from 'common/Box';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <Box as="header" p="20px" boxShadow="0 10px 6px -6px #777">
        <Navigation />
      </Box>

      <Box
        ml="auto"
        mr="auto"
        width="500px"
        pt="30px"
        pb="30px"
        pl="15px"
        pr="15px"
      >
        <Outlet />
      </Box>
    </>
  );
};

export default SharedLayout;

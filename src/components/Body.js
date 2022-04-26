import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Box } from '@chakra-ui/react';
import Navbar from '../components/Navbar.js'

const Body = (props) => {
  useEffect(() => {

  }, []);

  return (
    <>
      <Navbar/>
      <Box
        pb='47px' backgroundColor='white'
        maxW='425px' borderWidth='1px'
        borderRadius='10px' overflow='hidden'
        display='block' margin='0 auto'
      >
        {props.children}
      </Box>
    </>
  );
};

const mapStateToProps = (state) => ({
  // isLoading: loadingSelector(state),
  // error: errorSelector(state),
  // subreddits: subredditsSelector(state),
  // user: userSelector(state),
});

const mapDispatchToProps = (dispatch) => ({

  
});

export default connect(mapStateToProps, mapDispatchToProps)(Body);

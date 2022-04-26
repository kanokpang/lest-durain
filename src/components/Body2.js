import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Box, Image } from '@chakra-ui/react';
import Navbar from '../components/Navbar.js'
import Asset1 from '../asset/img/Asset1.png'

const Body = (props) => {
  useEffect(() => {

  }, []);

  const matches = window.matchMedia("(max-width: 425px)").matches

  return (
    <>
      <Navbar/>
      {!matches && <>
        <Box maxW='300px' display='block' margin='0 auto' padding='16px 0'>
          <Image textAlign='center' width={'300px'} src={Asset1} />
        </Box>
      </>
      }
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

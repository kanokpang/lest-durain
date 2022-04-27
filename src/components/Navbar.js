import { connect } from 'react-redux';
import { Center, Image } from '@chakra-ui/react';
import Logo from '../asset/img/logo.png'

const Navbar = (props) => {
  return (
    <div>
      <Center bg='#a8dad7' h='70px'>
        <Image w='105px' h='auto' src={Logo} onClick={() => props.props.history.push('/')}/>
      </Center>
    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

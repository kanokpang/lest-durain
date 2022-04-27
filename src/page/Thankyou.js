import { connect } from 'react-redux';
import Body from '../components/Body3.js'
import { Box, Image } from '@chakra-ui/react';
import { Typography } from '@mui/material';
import Thankyou from '../asset/img/thankyou.png'

const CommentsPage = (props) => {
  // const { id } = useParams();

  return (
    <Body>
      {/* <Image width={'100%'} src={Rectangle_4936} /> */}
      <Box
        textAlign='center'
        margin='32px'
      >
        <Image width={'100%'} src={Thankyou} />
      </Box>
    </Body>
  );
};

const mapStateToProps = (state) => ({
  // isLoading: loadingSelector(state),
  // error: errorSelector(state),
  // post: postSelector(state),
  // comments: commentsSelector(state),
  // user: userSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  // getPostAndComments: (id) => dispatch(getPostAndComments(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentsPage);

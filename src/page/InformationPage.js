import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import Body from '../components/Body.js'
import { Box, Image, Divider } from '@chakra-ui/react';
import { Button, Typography } from '@mui/material';
import Rectangle_4936 from '../asset/img/Rectangle_4936.png'

const CommentsPage = (props) => {
  // const { id } = useParams();
  return (
    <Body props={props}>
      <Image width={'100%'} src={Rectangle_4936} />
      <Box>
        <Box
          mt='1'
          fontWeight='bold'
          fontSize='16px'
          as='p'
          lineHeight='tight'
          textAlign='center'
          isTruncated
        >
          ✨เปิดรับเถ้าแก่ตัวจริง มาร่วมธุรกิจขายทุเรียน<br/>
          Let's Do Rian<br/>
          ✨หากท่านมีความสนใจที่จะร่วมธุรกิจกับเราสามารถ<br/>
          กดสมัครเข้าร่วมได้ที่ลิ้งด้านใต้นี้ได้เลย
        </Box>
        <Divider w='80%' border="0.5px solid #D5D5D5" />
        <Box
          mt='1'
          pl='16px'
          pr='16px'
          as='p'
          fontSize='16px'
          lineHeight='tight'
        >
          💰ธุรกิจขายทุเรียน Let’s Do Rian ที่คุณห้ามพลาด 💰 เพราะเราอยากให้คนไทยได้ทานผลไม้รสชาติอร่อยที่มีคุณภาพมาตรฐาน นั่นก็คือ "อร่อยแบบไม่ต้องลุ้น" สะอาด และปลอดภัย ในปีนี้เราจึงสร้างธุรกิจ Let’s Do Rian ขึ้นมา 
        </Box>
        <Box
          mt='1'
          pl='16px'
          pr='16px'
          as='p'
          fontSize='16px'
          lineHeight='tight'
        >
          <b>โดยมีเหตุผล 3 ข้อ คือ</b>
          <ul>
            <li>อยากให้ผู้บริโภคได้รับประทานทุเรียนคุณภาพดี รสชาติอร่อย หวาน มัน</li>
            <li>อยากสร้างอาชีพให้คนในท้องถิ่นในสภาวะเศรษฐกิจตกต่ำ</li>
            <li>อยากช่วยเหลือเกษตรกรไทยในสถานการณ์ทุเรียนล้นตลาด</li>
          </ul>
        </Box>
        <Box
          mt='1'
          lineHeight='tight'
          textAlign='center'
        >
          <Button onClick={() => props.history.push('/consent')} variant="contained"
            style={{width:'80%', backgroundColor:'#18b79b', height:'47px', borderRadius:'10px', color:'#ffffff'}}>
            <Typography>สมัคร</Typography>
          </Button>
        </Box>
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

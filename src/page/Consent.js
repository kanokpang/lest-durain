import { useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import Body from '../components/Body2.js'
import { Box, Grid, GridItem, Text } from '@chakra-ui/react';
import { Button, Checkbox, FormControlLabel, Typography, Modal} from '@mui/material';
import Asset1 from '../asset/img/Asset1.png'
import { db } from '../services/firestore'
import { async } from '@firebase/util';

import { ArrowBackIcon } from '@chakra-ui/icons'

import { collection, addDoc } from "firebase/firestore"; 

const CommentsPage = (props) => {

  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Body props={props}>
      <Box maxW='425px' display='block' margin='0 auto' p='16px'>
        <Grid mt='14px' templateColumns='repeat(5, 1fr)' gap={4}>
          <GridItem colSpan={1} h='10' onClick={() => props.history.push('/')} ><ArrowBackIcon w={20} h={20} /></GridItem>
          <GridItem colSpan={4} h='10' pl='10px'>
            <Text m='0' fontWeight="bold">ข้อตกลงเเละเงื่อนไขการรับสมัคร</Text>
          </GridItem>
        </Grid>
        <Box mt='32px'>
        <p>ผู้สมัครต้องตกลงปฏิบัติตามข้อกำหนดหลักเกณฑ์และเงื่อนไขในการสมัคร ดังต่อไปนี้</p>
        <ol>
          <li>บริษัท เจริญโภคภัณฑ์เมล็ดพันธุ์ จำกัด จะดำเนินการคัดเลือกทำเลที่เหมาะสม โดยทีมงานจะประเมิน และวิเคราะห์สถานที่จากข้อมูลที่ลูกค้ากรอกในใบสมัคร</li>
          <li>หากผลการประเมินใบสมัคร &ldquo;ผ่านเกณฑ์&rdquo; บริษัทฯ จะแจ้งผลผ่านทางเบอร์โทรศัพท์ ที่ได้ท่านได้ให้ไว้</li>
          <li>เจ้าหน้าที่โทรนัดสัมภาษณ์ หากผลการสัมภาษณ์ &ldquo;ผ่าน&rdquo; บริษัทฯจะแจ้งรายละเอียดของเอกสาร/หลักฐานที่จะต้องจัดเตรียมเพื่อใช้ในการทำสัญญาธุรกิจให้กับผู้ที่ได้รับสิทธิทราบ</li>
          <li>ชำระเงินค่าธุรกิจ ภายใน 5 วันทำการ และนัดหมายทำสัญญา</li>
          <li>เข้าอบรมการบริหารจัดการร้าน</li>
          <li>เริ่มดำเนินการเข้าสู่กระบวนการเปิดร้านข้อควรทราบ: บริษัทฯ ขอแจ้งให้ทราบว่า สิทธิดังกล่าวเป็นสิทธิเฉพาะตัวไม่สามารถโอนให้กับผู้อื่นได้ ไม่ว่าทั้งหมดหรือ บางส่วน เว้นแต่ จะได้รับความเห็นชอบจากบริษัทฯ เป็นลายลักษณ์อักษรก่อน หมายเหตุ : ผู้ที่ได้รับสิทธิ์ธุรกิจ และผู้ที่จะเป็นคนขายจะต้องเข้ารับการอบรมล่วงหน้าก่อนดำเนินการเปิดร้าน</li>
          <li>หากมีกรณีนอกเหนือหลักเกณฑ์และเงื่อนไขข้างต้นบริษัทฯ ขอสงวนสิทธิ์ในการพิจารณาตามที่เห็นสมควร โดยคำตัดสินของบริษัทฯ ถือเป็นที่สิ้นสุด<br /><br /></li>
        </ol>
        </Box>
        <Box mb='16px'>
          <FormControlLabel
            control={
                <Checkbox
                    onChange={handleChange}
                    name="accept"
                />
            }
            label={<Text m='0' fontWeight="bold">ข้าพเจ้ารับทราบและยอมรับ</Text>}/>
        </Box>
        <Button onClick={() => props.history.push('/information')} variant="contained" disabled={!checked}
          style={{width:'100%', backgroundColor: checked ? '#18b79b' : '#ededed', height:'47px', borderRadius:'10px', color:'#ffffff'}}>
          <Typography>ยอมรับ</Typography>
        </Button>
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

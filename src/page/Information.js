import { useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import Body from '../components/Body3.js'
import { Box, Grid, GridItem, Text } from '@chakra-ui/react';
import { Button, Checkbox, FormControlLabel, Typography, FormControl, TextField, MenuItem, Select, FormLabel, RadioGroup, Radio} from '@mui/material';
import Asset1 from '../asset/img/Asset1.png'
import { db } from '../services/firestore'
import { async } from '@firebase/util';
import { styled } from '@mui/material/styles';
import { ArrowBackIcon } from '@chakra-ui/icons'

import { doc, setDoc } from "firebase/firestore"; 
import { height } from '@mui/system';

const CssTextField = styled(TextField)({
  '& .MuiOutlinedInput-input' : {
    padding: '8px'
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#73D0C1',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: '1px solid #D9D9D9',
      boxSizing: 'border-box',
      borderRadius: '10px',
      height: '38px'
    },
    '&.Mui-focused fieldset': {
      borderColor: '#73D0C1',
    },
  },
});

const CssSelect = styled(Select)({
  '& .MuiSelect-nativeInput' : {
    background: '#FFFFFF',
    border: '1px solid #D9D9D9',
    boxSizing: 'border-box',
    borderRadius: '10px',
    height: '38px'
  },
  '& .MuiSelect-select': {
    padding: '8px',
    background: '#FFFFFF',
    border: '1px solid #D9D9D9',
    boxSizing: 'border-box',
    borderRadius: '10px',
    height: '38px'
  },
  '& fieldset': {
    border: 'none',
  }
});
const CommentsPage = (props) => {

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [idLine, setIDLine] = useState('');
  const [facebook, setFacebook] = useState('');
  const [model, setModel] = useState('');
  const [branch, setBranch] = useState('');
  const [channel, setChannel] = useState('');
  const [otherDes, setOtherDes] = useState('');
  
  const nextPage = async () => {
    try {
      await setDoc(doc(db, "user-lets-do-rian", name), {
        name,
        phone,
        idLine,
        facebook,
        model,
        branch,
        channel,
        otherDes,
      });
      props.history.push('/thankyou')
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <Body>
      <Box maxW='425px' display='block' margin='0 auto' p='16px'>
        <Text m='0' textAlign={'center'} fontWeight="bold">ลงทะเบียนเพื่อสอบถามรายละเอียดเพิ่มเติม<br/>สำหรับผู้ที่สนใจเข้าร่วมธุรกิจขายทุเรียน Let's Do Rian</Text>
        <Box mt='32px'>
          <FormControl
            fullWidth={true}
            sx={{
              '& .MuiTextField-root': { width: '100%' },
            }}
          >
            <label style={{marginLeft: '8px'}}>ชื่อ-นามสกุล  <span style={{color: 'red'}}>*</span></label>
            <CssTextField id="name" onChange={(e) => setName(e.target.value)} />
            <label style={{marginLeft: '8px', marginTop: '16px'}}>เบอร์โทรศัพท์มือถือที่สามารถติดต่อได้  <span style={{color: 'red'}}>*</span></label>
            <CssTextField id="phone" onChange={(e) => setPhone(e.target.value)} />
            <label style={{marginLeft: '8px', marginTop: '16px'}}>ID line  <span style={{color: 'red'}}>*</span></label>
            <CssTextField id="idLine" onChange={(e) => setIDLine(e.target.value)}/>
            <label style={{marginLeft: '8px', marginTop: '16px'}}>Facebook  <span style={{color: 'red'}}>*</span></label>
            <CssTextField id="facebook" onChange={(e) => setFacebook(e.target.value)} />
            <label style={{marginLeft: '8px', marginTop: '16px'}}>รูปแบบการขาย <span style={{color: 'red'}}>*</span></label>
            <CssSelect id="model" onChange={(e) => setModel(e.target.value)}>
            {/*  */}
              <MenuItem value="เปิดหน้าร้านร่วมกับเรา">เปิดหน้าร้านร่วมกับเรา</MenuItem>
              <MenuItem value="รถขายทุเรียน">รถขายทุเรียน</MenuItem>
            </CssSelect>
            <label style={{marginLeft: '8px', marginTop: '16px'}}>สาขาโลตัสที่อยากขาย/รับทุเรียน  <span style={{color: 'red'}}>*</span></label>
            <CssSelect id="branch" onChange={(e) => setBranch(e.target.value)}>
              <MenuItem value="สาขารามอินทรา">สาขารามอินทรา</MenuItem>
              <MenuItem value="สาขาหลักสี่">สาขาหลักสี่</MenuItem>
              <MenuItem value="สาขาศรีนครินทร์">สาขาศรีนครินทร์</MenuItem>
              <MenuItem value="สาขาสุขุมวิท50">สาขาสุขุมวิท 50</MenuItem>
              <MenuItem value="สาขารัตนาธิเบศร์">สาขารัตนาธิเบศร์</MenuItem>
              <MenuItem value="สาขาสุขาภิบาล1">สาขาสุขาภิบาล1</MenuItem>
              <MenuItem value="สาขาสุพรรณบุรี">สาขาสุพรรณบุรี</MenuItem>
            </CssSelect>
            <label style={{marginLeft: '8px', marginTop: '16px'}}>ท่านรู้จัก Let’s DoRian ได้อย่างไร</label>
            <RadioGroup
              style={{marginLeft: '8px'}}
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={(e) => setChannel(e.target.value)}
            >
              <FormControlLabel value="ป้ายโฆษณาใน Lotus's" control={<Radio />} label="ป้ายโฆษณาใน Lotus's" />
              <FormControlLabel value="Facebook" control={<Radio />} label="Facebook" />
              <FormControlLabel value="Instagram" control={<Radio />} label="Instagram" />
              <FormControlLabel value="บูธ" control={<Radio />} label="บูธ" />
              <FormControlLabel value="การแนะนำ/การบอกต่อ" control={<Radio />} label="การแนะนำ/การบอกต่อ" />
              <FormControlLabel value="Website" control={<Radio />} label="Website" />
              <FormControlLabel value="Tiktok" control={<Radio />} label="Tiktok" />
              <FormControlLabel value="Youtube" control={<Radio />} label="Youtube" />
              <FormControlLabel value="other" control={<Radio />} label="อื่นๆ" />
            </RadioGroup>
            {channel === 'other' && <>
              <label style={{marginLeft: '8px'}}>โปรดระบุ  <span style={{color: 'red'}}>*</span></label>
              <CssTextField id="model" onChange={(e) => setOtherDes(e.target.value)}/>
            </>}
          </FormControl>
        </Box>
        <Button onClick={() => nextPage()} variant="contained"
          style={{marginTop:'20px', width:'100%', backgroundColor: '#18b79b', height:'47px', borderRadius:'10px', color:'#ffffff'}}>
          <Typography>สมัครร่วมธุรกิจ</Typography>
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

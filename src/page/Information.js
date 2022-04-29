import { useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import Body from '../components/Body3.js'
import { Box, Text } from '@chakra-ui/react';
import { Button, FormControlLabel, Typography, FormControl, TextField, MenuItem, Select, FormHelperText, RadioGroup, Radio} from '@mui/material';
import { db } from '../services/firestore'
import { styled } from '@mui/material/styles';
import moment from 'moment';
import { doc, setDoc } from "firebase/firestore"; 
import _ from "lodash"

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
      height: '42px'
    },
    '&.Mui-focused fieldset': {
      borderColor: '#73D0C1',
    },
  }
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
    borderRadius: '10px',
    borderColor: '#00000000',
  },
  '& fieldset .Mui-error': {
    borderColor: '#d32f2f',
    borderRadius: '10px'
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
  const [isShoweErorField, setIsShowError] = useState(false)
  const [errorPhone, setErrorPhone] = useState(false)
    const [errorField, setErrorField] = useState({
    'name': _.isEmpty(name),
    'phone':_.isEmpty(phone),
    'idLine':_.isEmpty(idLine),
    'facebook': _.isEmpty(facebook),
    'model': _.isEmpty(model),
    'branch': _.isEmpty(branch),
    'otherDes': _.isEmpty(otherDes)
  });
  
  const nextPage = async () => {
    if(_.isEmpty(name) || _.isEmpty(phone) || _.isEmpty(idLine) || _.isEmpty(facebook) || _.isEmpty(model) || _.isEmpty(branch) || ( _.isEmpty(otherDes) && channel === 'other')) {
      setIsShowError(true)
    } else {
      setIsShowError(false)
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
          createAt: moment().format("L")
        });
        props.history.push('/thankyou')
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  };

  const onChangTextField = (id,inputtxt) => {
    setIsShowError(false)
    switch (id) {
      case 'name': 
        setName(inputtxt)
        setErrorField({...errorField, 'name': _.isEmpty(id)})
      break;
      case 'phone':
        const regexNumber = /^\d+$/;
        setErrorPhone(inputtxt.length > 0 && !regexNumber.test(inputtxt))
        setPhone(inputtxt)
        setErrorField({...errorField, 'phone': _.isEmpty(id) || inputtxt.length < 10})
      break;
      case 'idLine':
        setIDLine(inputtxt)
        setErrorField({...errorField, 'idLine': _.isEmpty(id)})
      break;
      case 'facebook':
        setFacebook(inputtxt)
        setErrorField({...errorField, 'facebook': _.isEmpty(id)})
      break;
      case 'model':
        setModel(inputtxt)
        setErrorField({...errorField, 'model': _.isEmpty(id)})
      break;
      case 'branch':
        setBranch(inputtxt)
        setErrorField({...errorField, 'branch': _.isEmpty(id)})
      break;
      case 'otherDes':
        setOtherDes(inputtxt)
        setErrorField({...errorField, 'otherDes': _.isEmpty(id)}) 
      break;
      default:
        break;
    }
  }

  return (
    <Body props={props}>
      <Box maxW='600px' display='block' margin='0 auto' p='16px'>
        <Text m='0' textAlign={'center'} fontWeight="bold">ลงทะเบียนเพื่อสอบถามรายละเอียดเพิ่มเติม<br/>สำหรับผู้ที่สนใจเข้าร่วมธุรกิจขายทุเรียน Let's Do Rian</Text>
        <Box mt='32px'>
          <FormControl
            fullWidth={true}
            sx={{
              '& .MuiTextField-root': { width: '100%' },
            }}
          >
            <FormControl >
              <label style={{marginLeft: '8px'}}>ชื่อ-นามสกุล  <span style={{color: 'red'}}>*</span></label>
              <CssTextField id="name" helperText={(isShoweErorField && errorField?.name) && 'โปรดกรอกชื่อ-นามสกุล'} error={isShoweErorField && errorField?.name} onChange={(e) => onChangTextField("name", e.target.value)} required />
            </FormControl>
            <FormControl >
              <label style={{marginLeft: '8px', marginTop: '16px'}}>เบอร์โทรศัพท์มือถือที่สามารถติดต่อได้  <span style={{color: 'red'}}>*</span></label>
              <CssTextField id="phone" inputProps={{ inputMode: 'numeric', minLength: 1, maxLength: 10 }} helperText={(isShoweErorField && errorField?.phone) && 'โปรดกรอกเบอร์โทรศัพท์มือถือที่สามารถติดต่อได้'} error={(isShoweErorField && errorField?.phone) || errorPhone} onChange={(e) => onChangTextField("phone", e.target.value)} required />
              {!isShoweErorField && errorPhone && <Typography style={{fontSize:'0.6428571428571428rem' ,color: '#d32f2f', textAlign: 'left', marginTop: '3px', marginLeft: '14px'}}>กรุณากรอกเบอร์โทรศัพท์มือถือให้ถูกต้อง</Typography>}
            </FormControl>
            <FormControl >
              <label style={{marginLeft: '8px', marginTop: '16px'}}>ID line  <span style={{color: 'red'}}>*</span></label>
              <CssTextField id="idLine" helperText={(isShoweErorField && errorField?.idLine) && 'โปรดกรอก ID line'} error={isShoweErorField && errorField?.idLine} onChange={(e) => onChangTextField("idLine", e.target.value)} required/>
            </FormControl>
            <FormControl >
              <label style={{marginLeft: '8px', marginTop: '16px'}}>Facebook  <span style={{color: 'red'}}>*</span></label>
              <CssTextField id="facebook" helperText={(isShoweErorField && errorField?.facebook) && 'โปรดกรอก Facebook'} error={isShoweErorField && errorField?.facebook} onChange={(e) => onChangTextField("facebook", e.target.value)} required />
            </FormControl>
            <FormControl >
              <label style={{marginLeft: '8px', marginTop: '16px'}}>รูปแบบการขาย <span style={{color: 'red'}}>*</span></label>
              <CssSelect error={isShoweErorField && errorField?.model} id="model" onChange={(e) => onChangTextField("model", e.target.value)} required >
              {/*  */}
                <MenuItem value="เปิดหน้าร้านร่วมกับเรา">เปิดหน้าร้านร่วมกับเรา</MenuItem>
                <MenuItem value="รถขายทุเรียน">รถขายทุเรียน</MenuItem>
                <MenuItem value="ซื้อทุเรียนในรูปแบบค้าส่ง">ซื้อทุเรียนในรูปแบบค้าส่ง</MenuItem>
              </CssSelect>
              {(isShoweErorField && errorField?.model) && <FormHelperText style={{color: '#d32f2f'}}>โปรดเลือกรูปแบบการขาย</FormHelperText>}
            </FormControl>
            <FormControl>
              <label style={{marginLeft: '8px', marginTop: '16px'}}>สาขาโลตัสที่อยากขาย/รับทุเรียน  <span style={{color: 'red'}}>*</span></label>
              <CssSelect id="branch" error={isShoweErorField && errorField?.branch} onChange={(e) => onChangTextField("branch", e.target.value)} required >
                <MenuItem value="สาขารามอินทรา">สาขารามอินทรา</MenuItem>
                <MenuItem value="สาขาหลักสี่">สาขาหลักสี่</MenuItem>
                <MenuItem value="สาขาศรีนครินทร์">สาขาศรีนครินทร์</MenuItem>
                <MenuItem value="สาขาสุขุมวิท50">สาขาสุขุมวิท 50</MenuItem>
                <MenuItem value="สาขารัตนาธิเบศร์">สาขารัตนาธิเบศร์</MenuItem>
                <MenuItem value="สาขาสุขาภิบาล1">สาขาสุขาภิบาล1</MenuItem>
                <MenuItem value="สาขาสุพรรณบุรี">สาขาสุพรรณบุรี</MenuItem>
              </CssSelect>
              {(isShoweErorField && errorField?.branch) && <FormHelperText style={{color: '#d32f2f'}}>โปรดเลือกสาขาโลตัสที่อยากขาย/รับทุเรียน</FormHelperText>}
            </FormControl>
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
              <CssTextField id="otherDes" helperText={(isShoweErorField && errorField?.otherDes) && 'โปรดกรอก'} error={isShoweErorField && errorField?.otherDes} onChange={(e) => onChangTextField("otherDes", e.target.value)} />
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

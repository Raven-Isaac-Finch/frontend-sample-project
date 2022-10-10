import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { TextField, Typography } from '@mui/material';
import { UserContext } from '../context/UserContext';
import LocalizedStrings from 'react-localization';
import { translationData } from '../data/translationData';
import { countryList } from '../data/countriesData';
import Autocomplete from '@mui/material/Autocomplete';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

export default function ContactPage() {
  let history = useNavigate();
  // ----------------------------------------------------------------
  // Context: User & Language
  // ----------------------------------------------------------------
  const { user, userEmail, userLang } = React.useContext(UserContext);
  const [userValue] = user;
  const [userEmailValue] = userEmail;
  const [userLangValue] = userLang;

  let strings = new LocalizedStrings( translationData );
  
  strings.setLanguage(userLangValue);
  // ----------------------------------------------------------------
  // Form
  // ----------------------------------------------------------------
  function requiredField(e) {
    if(!e) {
      let alert = document.querySelector('#required-alert');
      alert.style.transform = 'translateY(0)'
      setTimeout(() => alert.style.transform = 'translateY(-50px)', 3000); 
    }
  };
  // ----------------------------------------------------------------
  // Form Submit
  // ----------------------------------------------------------------
  const [formName, setFormName] = React.useState('');
  const [formEmail, setFormEmail] = React.useState('');
  const [formPhoneNum, setFormPhoneNum] = React.useState('');
  const [formCountry, setFormCountry] = React.useState('');
  const [formTextField, setFormTextField] = React.useState('');

  function handleFormSubmit() {
    let successAlert = document.querySelector('#success-alert');
    successAlert.style.transform = 'translateY(0)'
    setTimeout(() => successAlert.style.transform = 'translateY(-50px)', 3000); 
    console.log(
      {
        "name": { formName },
        "email": { formEmail },
        "phonenumber": { formPhoneNum },
        "country": { formCountry },
        "text": { formTextField }
      }
    )
    setFormName('');
    setFormEmail('');
    setFormPhoneNum('');
    setFormCountry('');
    setFormTextField('');
  }
  // ----------------------------------------------------------------
  // Name Field
  // ----------------------------------------------------------------
  function handleNewName(e) {
    setFormName(e);
  }
  // ----------------------------------------------------------------
  // E-mail Field 
  // ----------------------------------------------------------------
  function handleNewEmail(e){
    setFormEmail(e);
  };
  const validateEmail = (mail) => {
    if(!mail) {
      requiredField(mail);
    } else {
      //eslint-disable-next-line
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        setFormEmail(mail);
        return
      } else {
       alert("Invalid email address!")
       return (false)
      }
    }
  };
  // ----------------------------------------------------------------
  // Phone Field 
  // ----------------------------------------------------------------
  const handleChange = (e) => {
    e.preventDefault();
    e.currentTarget.value = e.target.value.replace(/[\D\s]/, '');
    if(e.currentTarget.value.length > 12){
      return
    } else{
      setFormPhoneNum(e.currentTarget.value);
    }
  };
  // ----------------------------------------------------------------
  // Country Select Field 
  // ----------------------------------------------------------------
  let enCountries = countryList.en;
  let trCountries = countryList.tr;
  let shownList;
  if(userLangValue === 'en'){
    shownList = enCountries;
  } else {
    shownList = trCountries;
  }
  function handleCountry(e) {
    setFormCountry(e);
  };
  // ----------------------------------------------------------------
  // TextArea Field 
  // ----------------------------------------------------------------
  function handleTextArea(e) {
    setFormTextField(e);
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Box sx={{ borderRight: '1px solid gray', borderLeft: '1px solid gray', height: '100vh', display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'column', boxShadow: '0px 0px 50px 10px rgba(0,0,0,0.4)', position: 'relative' }} >
          <Alert 
            id='required-alert'
            severity="error" 
            sx={{ position: 'absolute', top: 0, width: '50%', transform: 'translateY(-50px)', transition: '0.2s ease-in-out'}}>
              This field is required!
          </Alert>
          <Alert 
            id='success-alert'
            severity="success" 
            sx={{ position: 'absolute', top: 0, width: '50%', transform: 'translateY(-50px)', transition: '0.2s ease-in-out'}}>
              Thank you for contacting us!
          </Alert>

          <ArrowBackIosNewIcon 
            sx={{
              position: 'absolute', 
              left: 10,
              top: 15,
              fontSize: 40,
              cursor: 'pointer'}}
              onClick={() => history(-1)}/>
          <Typography variant='h4' component='h4'>
            { strings.pageTitle }
          </Typography>
          <TextField
              id="outlined-name-input"
              label={ strings.loginLabelName }
              type="name"
              value={ userValue ? userValue : formName }
              sx={{ width: 300 }}
              onChange={ e => handleNewName(e.target.value) }
              onBlur={ e => requiredField(e.target.value) }
          />
          <TextField
              id="outlined-email"
              label="E-mail"
              type="email"
              sx={{ width: 300 }}
              value={ userEmailValue ? userEmailValue : formEmail }
              onChange={ e => handleNewEmail(e.target.value) }
              onBlur={e => validateEmail(e.target.value)}
          />
          <TextField
              id="outlined-number-input"
              label={ strings.phoneNumber }
              type="text"
              value={ formPhoneNum }
              sx={{ width: 300 }}
              onChange={ handleChange }
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={ shownList }
            sx={{ width: 300 }}
            value= { formCountry }
            renderInput={(params) => <TextField {...params} label={ strings.country } 
            onBlur={ e => handleCountry(e.target.value) } />}
          />
          <TextareaAutosize
            aria-label="minimum height"
            minRows={3}
            placeholder={ strings.textAreaField }
            value={ formTextField }
            style={{ maxWidth: 300, minWidth: 300, minHeight: 50, maxHeight: 100, borderRadius: 5, border: '1px solid lightgray' }}
            onChange={ e => handleTextArea(e.target.value) }
          />
          <Button 
            variant="contained" 
            sx={{ width: 300 }}
            onClick={ handleFormSubmit }
          >
              Send
          </Button>
        </Box>
      </Container>
    </React.Fragment>
  );
}

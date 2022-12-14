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
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

const StyleforTextArea = {
  maxWidth: 300, 
  minWidth: '25%', 
  minHeight: 50, 
  maxHeight: 100, 
  borderRadius: 5, 
  border: '1px solid lightgray',
}

export default function ContactPage() {
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
      alert.style.transform = 'translateY(-115px)'
      setTimeout(() => alert.style.transform = 'translateY(-180px)', 3000); 
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
    if(formEmail && formName){
      successAlert.style.transform = 'translateY(-115px)'
      setTimeout(() => successAlert.style.transform = 'translateY(-180px)', 3000); 
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
    } else if(userValue && userEmailValue) {
      successAlert.style.transform = 'translateY(0)'
      setTimeout(() => successAlert.style.transform = 'translateY(-180px)', 3000); 
      console.log(
        {
          "name": { userValue },
          "email": { userEmailValue },
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
    } else {
      alert("Required fields are empty!");
    }

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
       alert("Invalid email address!");
       setFormEmail('');
       return
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
      <Container sx={{ width: { xs: '90%', md: '100%'}, height: '95%' }} >
        <Box sx={{ borderRadius: 3, display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'column', boxShadow: '0px 10px 30px 5px rgba(0,0,0,0.2)', position: 'relative', gridRow: '2 / 3', gridColumn: '2 / 3', width: '100%', height: '100%' }} >
          <Alert 
            id='required-alert'
            severity="error" 
            sx={{ position: 'absolute', top: 0, width: { xs: '90%', md: '50%'}, transform: 'translateY(-200px)', transition: '0.2s ease-in-out'}}>
              { strings.requiredFieldAlert }
          </Alert>
          <Alert 
            id='success-alert'
            severity="success" 
            sx={{ position: 'absolute', top: 0, width: { xs: '90%', md: '50%'}, transform: 'translateY(-200px)', transition: '0.2s ease-in-out'}}>
              { strings.successAlert }
          </Alert>
          <Typography variant='h4' component='h4' align='center'>
            { strings.pageTitle }
          </Typography>
          <TextField
              id="outlined-name-input"
              label={ strings.loginLabelName }
              type="name"
              value={ userValue ? userValue : formName }
              sx={{ width: { xs: 200, md: 300} }}
              onChange={ e => handleNewName(e.target.value) }
              onBlur={ e => requiredField(e.target.value) }
          />
          <TextField
              id="outlined-email"
              label="E-mail"
              type="email"
              sx={{ width: { xs: 200, md: 300}  }}
              value={ userEmailValue ? userEmailValue : formEmail }
              onChange={ e => handleNewEmail(e.target.value) }
              onBlur={e => validateEmail(e.target.value)}
          />
          <TextField
              id="outlined-number-input"
              label={ strings.phoneNumber }
              type="text"
              value={ formPhoneNum }
              sx={{ width: { xs: 200, md: 300}  }}
              onChange={ handleChange }
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={ shownList }
            sx={{ width: { xs: 200, md: 300}  }}
            value= { formCountry }
            renderInput={(params) => <TextField {...params} label={ strings.country } 
            onBlur={ e => handleCountry(e.target.value) } />}
          />
          <TextareaAutosize
            aria-label="minimum height"
            minRows={3}
            placeholder={ strings.textAreaField }
            value={ formTextField }
            style={ StyleforTextArea }
            onChange={ e => handleTextArea(e.target.value) }
          />
          <Button 
            variant="contained" 
            sx={{ width: { xs: 200, md: 300} }}
            onClick={ handleFormSubmit }
          >
              Send
          </Button>
        </Box>
      </Container>
    </React.Fragment>
  );
}

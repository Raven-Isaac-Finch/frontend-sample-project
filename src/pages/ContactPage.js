import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { TextField, Typography } from '@mui/material';
import { UserContext } from '../context/UserContext';
import LocalizedStrings from 'react-localization';
import { data } from '../data';

export default function ContactPage() {
  // ----------------------------------------------------------------
  // Context: User & Language
  // ----------------------------------------------------------------
  const { user, userEmail, userLang } = React.useContext(UserContext);
  const [userValue, setUserValue] = user;
  const [userEmailValue, setUserEmailValue] = userEmail;
  const [userLangValue, setUserLang] = userLang;

  let strings = new LocalizedStrings( data );
  
  strings.setLanguage(userLangValue);

  // ----------------------------------------------------------------
  // E-mail Field 
  // ----------------------------------------------------------------
  const [emailValue, setEmailValue] = React.useState('');
  function validateEmail(e) {
    // LEFT OFF, regex e-mail validation!!!
  }

  // ----------------------------------------------------------------
  // Phone Field 
  // ----------------------------------------------------------------
  const [phoneValue, setPhoneValue] = React.useState('');
  const handleChange = (e) => {
    e.preventDefault();
    e.currentTarget.value = e.target.value.replace(/[\D\s]/, '');
    if(e.currentTarget.value.length > 10){
      return
    } else{
      setPhoneValue(e.currentTarget.value);
    }
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh', display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'column' }} >
          <Typography variant='h4' component='h4'>
            { strings.pageTitle }
          </Typography>
          <TextField
              id="outlined-name-input"
              label={ strings.loginLabelName }
              type="name"
              value={ userValue }
          />
          <TextField
              id="outlined-email"
              label="E-mail"
              type="email"
              value={ userEmailValue ? userEmailValue : emailValue }
              onKeyUp={ validateEmail }
          />
          <TextField
              id="outlined-number-input"
              label={ strings.phoneNumber }
              type="text"
              value={ phoneValue }
              onChange={ handleChange }
          />
        </Box>
      </Container>
    </React.Fragment>
  );
}

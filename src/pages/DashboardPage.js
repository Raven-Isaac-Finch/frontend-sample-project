import { translationData } from '../data/translationData';
import LocalizedStrings from 'react-localization';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MediaCard from '../components/mediaCard';
import WeekendIcon from '@mui/icons-material/Weekend';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import StoreIcon from '@mui/icons-material/Store';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ProductCard from '../components/Product';
import product1 from '../assets/product-1.jpg';
import product2 from '../assets/product-2.jpg';
import product3 from '../assets/product-3.jpg';
import { useContext } from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { UserContext } from '../context/UserContext';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '75%', md: 400},
  bgcolor: 'background.paper',
  border: '1px solid #000',
  borderRadius: 3,
  boxShadow: 24,
  p: 4,
  '& .MuiTextField-root': { m: 1, width: '95%' },
};

const languages = [
  {
    value: 'en',
    label: 'English',
  },
  {
    value: 'tr',
    label: 'Türkçe',
  }
];

function DashboardPage() {
  // ----------------------------------------------------------------
  // Context: User & Language
  // ----------------------------------------------------------------
  const { user, userEmail, userLang, modalState } = useContext(UserContext);
  const [userValue, setUserValue] = user;
  const [userEmailValue, setUserEmailValue] = userEmail;
  const [userLangValue, setUserLang] = userLang;

  const handleChange = (event) => {
    setUserLang(event.target.value);
  };

  let strings = new LocalizedStrings( translationData );



  // ----------------------------------------------------------------
  // Login Modal
  // ----------------------------------------------------------------
  const [open, setOpen] = modalState;
  const handleProfileClose = () => setOpen(false);

  strings.setLanguage(userLangValue);
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', width: { xs: '90%', md: '95%'}, gridRow: '2 / 3', gridColumn: '2 / 3', justifySelf: 'center' }}>
      <div>
        <Modal
          open={open}
          onClose={handleProfileClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} component="form" >
            <Typography id="modal-modal-title" variant="h5" component="h4" mb={4} sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              { strings.loginTitle }
            </Typography>
            <div>
              <TextField
                  id="outlined-name-input"
                  label={ strings.loginLabelName }
                  type="name"
                  autoComplete="current-name"
              />
              <TextField
                  id="outlined-email-input"
                  label="E-mail"
                  type="email"
                  autoComplete="current-email"
              />
              <TextField
                  id="outlined-password-input"
                  label={ strings.loginLabelPassword }
                  type="password"
                  autoComplete="current-password"
              />
              <TextField
                id="standard-select-language"
                select
                label={ strings.loginLabelLanguage }
                value={ userLangValue }
                onChange={ handleChange }
                SelectProps={{
                  native: true,
                }}
                helperText={ strings.loginLanguageHelper }
              >
                {languages.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </div>
            <Box mt={4} sx={{ width: '100%', display: 'flex', justifyContent: 'space-around' }}>
              <Button 
                variant="contained" 
                size='large'
                sx={{ textTransform: 'none', }}
                onClick={ () => {
                  let currentUserName = document.querySelector('#outlined-name-input');
                  setUserValue(currentUserName.value);
                  let currentUserEmail = document.querySelector('#outlined-email-input');
                  setUserEmailValue(currentUserEmail.value);
                  handleProfileClose();
                  if(userEmailValue){
                    console.log(userEmailValue);
                    console.log(userValue);
                  }
                } }
              >
                  { strings.btnLogin }
              </Button>
              <Button 
                variant="contained" 
                size='large' 
                onClick={ handleProfileClose } 
                color="error"
                sx={{ textTransform: 'none', }}
              >
                  { strings.btnClose }
              </Button>
            </Box>
          </Box>
        </Modal>
      </div>
      <Grid sx={{ position: 'relative' }}>
        <Grid className='grid-container'>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={3}>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }} >
                  <MediaCard 
                    img={ <WeekendIcon sx={{ color: 'white', backgroundColor: '#1e211f', padding: 2, borderRadius: 3, position: 'absolute', top: -15, left: 20, boxShadow: '0px 5px 50px -15px rgba(0,0,0,1)' }} /> } 
                    title={strings.title1} 
                    value="281" 
                    percent="+55%" 
                    timeText={strings.timeText1} />
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }} >
                  <MediaCard  
                    img={ <EqualizerIcon sx={{ color: 'white', backgroundColor: '#1479cc', padding: 2, borderRadius: 3, position: 'absolute', top: -15, left: 20, boxShadow: '0px 5px 50px -15px rgba(0,0,0,1)' }} /> } 
                    title={strings.title2}  
                    value="2,300" 
                    percent="+3%" 
                    timeText={strings.timeText2} />
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }} >
                  <MediaCard  
                    img={ <StoreIcon sx={{ color: 'white', backgroundColor: '#179924', padding: 2, borderRadius: 3, position: 'absolute', top: -15, left: 20, boxShadow: '0px 5px 50px -15px rgba(0,0,0,1)' }} /> } 
                    title={strings.title3} 
                    value="34k" 
                    percent="+1%" 
                    timeText={strings.timeText3} />
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }} >
                  <MediaCard  
                    img={ <PersonAddIcon sx={{ color: 'white', backgroundColor: '#c72c2c', padding: 2, borderRadius: 3, position: 'absolute', top: -15, left: 20, boxShadow: '0px 5px 50px -15px rgba(0,0,0,1)' }} /> } 
                    title={strings.title4} 
                    value="+91" 
                    percent="" 
                    timeText={strings.timeText4} />
                </Box>
              </Grid>
              <Grid item xs={12} md={4} mt={2} >
                <Box sx={{ display: 'flex', justifyContent: 'center' }} >
                  <ProductCard 
                    productImg={ product1 } 
                    productTitle={ strings.productTitle1 }
                    productText={ strings.productText1 }
                    productPrice={ strings.productPrice1 }
                    productLocation={ strings.productLocation1 } />
                </Box>
              </Grid>
              <Grid item xs={12} md={4} mt={2} >
                <Box sx={{ display: 'flex', justifyContent: 'center' }} >
                  <ProductCard 
                    productImg={ product2 } 
                    productTitle={ strings.productTitle2 }
                    productText={ strings.productText2 }
                    productPrice={ strings.productPrice2 }
                    productLocation={ strings.productLocation2 } />
                </Box>
              </Grid>
              <Grid item xs={12} md={4} mt={2} >          
                <Box sx={{ display: 'flex', justifyContent: 'center' }} >
                  <ProductCard 
                    productImg={ product3 } 
                    productTitle={ strings.productTitle3 }
                    productText={ strings.productText3 }
                    productPrice={ strings.productPrice3 }
                    productLocation={ strings.productLocation3 } />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );

}

export default DashboardPage;

import './App.css';
import { data } from './data';
import LocalizedStrings from 'react-localization';
import PrimarySearchAppBar from './components/Appbar';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SimplePaper from './components/Sidebar';
import MediaCard from './components/Card';
import WeekendIcon from '@mui/icons-material/Weekend';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import StoreIcon from '@mui/icons-material/Store';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ProductCard from './components/Product';
import product1 from './assets/product-1.jpg'
import product2 from './assets/product-2.jpg'
import product3 from './assets/product-3.jpg'

let strings = new LocalizedStrings({ data });

function App() {
  return (
    <div className="App">
      <Box sx={{ width: '95vw' }}>
        <Grid container spacing={3}>
          <Grid item xs={2.5} className='sidebar-container'>
            <SimplePaper />
          </Grid>
          <Grid item xs={9.5} className='grid-container'>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <PrimarySearchAppBar />
                </Grid>
                <Grid item xs={12}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between',
                      '& > :not(style)': {
                        height: 128,
                      },
                    }}
                  >
                    <MediaCard 
                      img={ <WeekendIcon sx={{ color: 'white', backgroundColor: '#1e211f', padding: 2, borderRadius: 3, position: 'absolute', top: -15, left: 20, boxShadow: '0px 5px 50px -15px rgba(0,0,0,1)' }} /> } 
                      title="Bookings" 
                      value="281" 
                      percent="+55%" 
                      timeText="than last week" />
                    <MediaCard  
                      img={ <EqualizerIcon sx={{ color: 'white', backgroundColor: '#1479cc', padding: 2, borderRadius: 3, position: 'absolute', top: -15, left: 20, boxShadow: '0px 5px 50px -15px rgba(0,0,0,1)' }} /> } 
                      title="Today's Users" 
                      value="2,300" 
                      percent="+3%" 
                      timeText="than last month" />
                    <MediaCard  
                      img={ <StoreIcon sx={{ color: 'white', backgroundColor: '#179924', padding: 2, borderRadius: 3, position: 'absolute', top: -15, left: 20, boxShadow: '0px 5px 50px -15px rgba(0,0,0,1)' }} /> } 
                      title="Revenue" 
                      value="34k" 
                      percent="+1%" 
                      timeText="than yesterday" />
                    <MediaCard  
                      img={ <PersonAddIcon sx={{ color: 'white', backgroundColor: '#c72c2c', padding: 2, borderRadius: 3, position: 'absolute', top: -15, left: 20, boxShadow: '0px 5px 50px -15px rgba(0,0,0,1)' }} /> } 
                      title="Followers" 
                      value="+91" 
                      percent="" 
                      timeText="Just updated" />
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between',
                      '& > :not(style)': {
                        mt: 2,
                      },
                    }}
                  >
                    <ProductCard 
                      productImg={ product1 } 
                      productTitle="Cozy 5 Stars Apartment"
                      productText="The place is close to Barceloneta Beach just 2 min by walk and near to 'Naviglio' where you can enjoy the main night life in Barcelona"
                      productPrice="$899/night"
                      productLocation="Barcelona, Spain" />
                    <ProductCard 
                      productImg={ product2 } 
                      productTitle="Office Studio"
                      productText="The place is close to Metro Station and bus stop just 2 min by walk and near to 'Naviglio' where you can enjoy the night life in London, UK."
                      productPrice="$1,119/night"
                      productLocation="London, UK" />
                    <ProductCard 
                      productImg={ product3 } 
                      productTitle="Beautiful Castle"
                      productText="The place is close to Metro Station and bus stop just 2 min by walk and near to 'Naviglio' where you can enjoy the main night life in Milan."
                      productPrice="$459/night"
                      productLocation="Milan, Italy" />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;

import './App.css';
import { data } from './data';
import LocalizedStrings from 'react-localization';
import PrimarySearchAppBar from './components/Appbar';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SimplePaper from './components/Sidebar';

let strings = new LocalizedStrings({ data });

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    <div className="App">
      <Box sx={{ flexGrow: 0.9 }}>
        <Grid container spacing={3}>
          <Grid item xs={2.5} className='sidebar-container'>
            <SimplePaper />
          </Grid>
          <Grid item xs={9.5} className='grid-container'>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <PrimarySearchAppBar />
                </Grid>
                <Grid item xs={4}>
                  <Item>xs=4</Item>
                </Grid>
                <Grid item xs={4}>
                  <Item>xs=4</Item>
                </Grid>
                <Grid item xs={8}>
                  <Item>xs=8</Item>
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

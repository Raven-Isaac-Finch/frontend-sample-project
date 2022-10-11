import React, { useCallback } from 'react'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import icon from '../assets/32bit.png';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PhotoIcon from '@mui/icons-material/Photo';
import AppsIcon from '@mui/icons-material/Apps';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import FoundationIcon from '@mui/icons-material/Foundation';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ClearIcon from '@mui/icons-material/Clear';
import { UserContext } from '../context/UserContext';
import { translationData } from '../data/translationData';
import LocalizedStrings from 'react-localization';

export default function Sidebar() {
  const { user, userLang, modalState, pageName } = React.useContext(UserContext);
  const [userValue] = user;
  const [userLangValue] = userLang;
  const [open, setOpen] = modalState;
  const [pageNameValue, setPageName] = pageName;

  const handleProfileOpen = () => setOpen(true);

  const navigate = useNavigate();
  const toContact = useCallback(() => navigate('/contact'), [navigate]);
  const toDashboard = useCallback(() => navigate('/'), [navigate]);
  
  let strings = new LocalizedStrings( translationData );
  strings.setLanguage(userLangValue);

  // ----------------------------------------------------------------
  // Sidebar for Mobile
  // ----------------------------------------------------------------
  function handleSidebarClose() {
    let sidebarStyle = document.querySelector('.sidebar-container');
    sidebarStyle.style.display = 'none';
    console.log(open);
  }

  window.addEventListener('resize', function(){
    if(this.screen.width > 900) {
      let sidebarStyle = document.querySelector('.sidebar-container');
      sidebarStyle.style.display = 'block';
    }
  });

  return (
    <Box className='sidebar-container' sx={{ display: { xs: 'none', md: 'block' }, zIndex: 1, position: {xs: 'absolute', md: 'relative'}, width: 300, top: {xs: 5, md: 0}, left: {xs: 5, md: 0}, gridRow: '1 /  3', gridColumn: '1 / 2', justifySelf: 'center' }} >
      <Box sx={{ width: '100%', height: '100%', bgcolor: '#2b2828', color: 'white', borderRadius: 3 }}>
        <nav aria-label="main mailbox folders">
          <List>
            <ClearIcon onClick={ handleSidebarClose } 
              sx={{ color: 'white', 
                display: { xs: 'block', md: 'none' }, 
                position: 'absolute', 
                right: 10, 
                cursor: 'pointer'}}/>
            <ListItem sx={{ marginTop: { xs: 2, md: 0 } }}>
              <ListItemButton>
                <ListItemIcon>
                  <img src={ icon } alt="icon"/>
                </ListItemIcon>
                <ListItemText primary={ strings.dashboard } />
              </ListItemButton>
            </ListItem>
            <Divider sx={{ borderImage: 'linear-gradient(to right, #2b2828, #555555, #2b2828) 1' }}/>
            <ListItem>
              <ListItemButton onClick={ handleProfileOpen }>
                <ListItemIcon>
                  <AccountCircleIcon sx={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary={ userValue ? userValue : strings.profile } />
                <KeyboardArrowDownIcon />
              </ListItemButton>
            </ListItem>
            <Divider sx={{ borderImage: 'linear-gradient(to right, #2b2828, #555555, #2b2828) 1' }}/>
            <ListItem>
              <ListItemButton onClick={ () => {
                toDashboard();
                setPageName(strings.pageText);
              } } id='dashboardBtn'>
                <ListItemIcon>
                  <DashboardIcon sx={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary={ strings.dashboard } />
                <KeyboardArrowDownIcon />
              </ListItemButton>
            </ListItem>
            <Typography sx={{ fontSize: 12, fontWeight: 'bold', paddingLeft: 3 }}>
              { strings.titleTop }
            </Typography>
            <ListItem sx={{ padding: '0 17px' }}>
              <ListItemButton>
                <ListItemIcon>
                  <PhotoIcon sx={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary={ strings.pages } />
                <KeyboardArrowDownIcon />
              </ListItemButton>
            </ListItem>
            <ListItem sx={{ padding: '0 17px' }}>
              <ListItemButton>
                <ListItemIcon>
                  <AppsIcon sx={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary={ strings.applications } />
                <KeyboardArrowDownIcon />
              </ListItemButton>
            </ListItem>
            <ListItem sx={{ padding: '0 17px' }}>
              <ListItemButton>
                <ListItemIcon>
                  <ShoppingBasketIcon sx={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary={ strings.eCommerce } />
                <KeyboardArrowDownIcon />
              </ListItemButton>
            </ListItem>
            <ListItem sx={{ padding: '0 17px' }}>
              <ListItemButton>
                <ListItemIcon>
                  <AssignmentIcon sx={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary={ strings.authentication } />
                <KeyboardArrowDownIcon />
              </ListItemButton>
            </ListItem>
            <ListItem sx={{ padding: '0 17px' }}>
              <ListItemButton  onClick={ () => {
                toContact();
                setPageName(strings.contactPageText); } } id='contactBtn'>
                <ListItemIcon>
                  <ConnectWithoutContactIcon sx={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary={ strings.contact } />
                <KeyboardArrowDownIcon />
              </ListItemButton>
            </ListItem>
            <Divider sx={{ borderImage: 'linear-gradient(to right, #2b2828, #555555, #2b2828) 1' }}/>
            <Typography sx={{ fontSize: 12, fontWeight: 'bold', padding: '15px 0 0 25px' }}>
              { strings.titleMid }
            </Typography>
            <ListItem sx={{ padding: '0 17px' }}>
              <ListItemButton>
                <ListItemIcon>
                  <FoundationIcon sx={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary={ strings.basics } />
                <KeyboardArrowDownIcon />
              </ListItemButton>
            </ListItem>
            <ListItem sx={{ padding: '0 17px' }}>
              <ListItemButton>
                <ListItemIcon>
                  <ViewInArIcon sx={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary={ strings.components } />
                <KeyboardArrowDownIcon />
              </ListItemButton>
            </ListItem>
            <ListItem sx={{ padding: '0 17px' }}>
              <ListItemButton>
                <ListItemIcon>
                  <ReceiptLongIcon sx={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary={ strings.changeLogs } />
                <KeyboardArrowDownIcon />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
      </Box>
    </Box>
  );
}

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
import FoundationIcon from '@mui/icons-material/Foundation';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ClearIcon from '@mui/icons-material/Clear';
import { UserContext } from '../context/UserContext';
import { translationData } from '../data/translationData';
import LocalizedStrings from 'react-localization';

export default function Sidebar({ ProileOpen, SidebarClose, currentFlag, user }) {

  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate('/contact'), [navigate]);

  const { userLang } = React.useContext(UserContext);
  const [userLangValue, setUserLang] = userLang;
  let strings = new LocalizedStrings( translationData );
  strings.setLanguage(userLangValue);

  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: '#2b2828', color: 'white', borderRadius: 3 }}>
      <nav aria-label="main mailbox folders">
        <List>
          <ClearIcon onClick={SidebarClose} 
            sx={{ color: 'white', 
              display: { xs: 'block', md: 'none' }, 
              position: 'absolute', 
              right: 10, 
              cursor: 'pointer'}}/>
          <ListItem sx={{ marginTop: 2 }}>
            <ListItemButton onClick={ handleOnClick }>
              <ListItemIcon>
                <img src={ icon } />
              </ListItemIcon>
              <ListItemText primary={ strings.contact } />
            </ListItemButton>
          </ListItem>
          <Divider sx={{ borderImage: 'linear-gradient(to right, #2b2828, #555555, #2b2828) 1' }}/>
          <ListItem>
            <ListItemButton onClick={ ProileOpen }>
              <ListItemIcon>
                <AccountCircleIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary={ user ? user : strings.profile } />
              <KeyboardArrowDownIcon />
            </ListItemButton>
          </ListItem>
          <Divider sx={{ borderImage: 'linear-gradient(to right, #2b2828, #555555, #2b2828) 1' }}/>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <DashboardIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary={ strings.dashboard } />
              <KeyboardArrowDownIcon />
            </ListItemButton>
          </ListItem>
          <Typography sx={{ fontSize: 12, fontWeight: 'bold', paddingLeft: 3 }}>
            { strings.title1 }
          </Typography>
          <ListItem sx={{ paddingBottom: 0 }}>
            <ListItemButton>
              <ListItemIcon>
                <PhotoIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary={ strings.pages } />
              <KeyboardArrowDownIcon />
            </ListItemButton>
          </ListItem>
          <ListItem sx={{ paddingBottom: 0 }}>
            <ListItemButton>
              <ListItemIcon>
                <AppsIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary={ strings.applications } />
              <KeyboardArrowDownIcon />
            </ListItemButton>
          </ListItem>
          <ListItem sx={{ paddingBottom: 0 }}>
            <ListItemButton>
              <ListItemIcon>
                <ShoppingBasketIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary={ strings.eCommerce } />
              <KeyboardArrowDownIcon />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <AssignmentIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary={ strings.authentication } />
              <KeyboardArrowDownIcon />
            </ListItemButton>
          </ListItem>
          <Divider sx={{ borderImage: 'linear-gradient(to right, #2b2828, #555555, #2b2828) 1' }}/>
          <Typography sx={{ fontSize: 12, fontWeight: 'bold', padding: '15px 0 0 25px' }}>
            { strings.title2 }
          </Typography>
          <ListItem sx={{ paddingBottom: 0 }}>
            <ListItemButton>
              <ListItemIcon>
                <FoundationIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary={ strings.basics } />
              <KeyboardArrowDownIcon />
            </ListItemButton>
          </ListItem>
          <ListItem sx={{ paddingBottom: 0 }}>
            <ListItemButton>
              <ListItemIcon>
                <ViewInArIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary={ strings.components } />
              <KeyboardArrowDownIcon />
            </ListItemButton>
          </ListItem>
          <ListItem>
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
  );
}

import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import icon from '../assets/32bit.png';

export default function BasicList() {
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: '#2b2828', color: 'white' }}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <img src={ icon } />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
          <Divider sx={{ borderImage: 'linear-gradient(to right, #2b2828, #555555, #2b2828) 1' }}/>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <AccountCircleIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary="Profile" />
              <KeyboardArrowDownIcon />
            </ListItemButton>
          </ListItem>
          <Divider sx={{ borderImage: 'linear-gradient(to right, #2b2828, #555555, #2b2828) 1' }}/>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
              <KeyboardArrowDownIcon />
            </ListItemButton>
          </ListItem>
          <ListItemText primary="PAGES" />
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary="Pages" />
              <KeyboardArrowDownIcon />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary="Applications" />
              <KeyboardArrowDownIcon />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary="E-commerce" />
              <KeyboardArrowDownIcon />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary="Authentication" />
              <KeyboardArrowDownIcon />
            </ListItemButton>
          </ListItem>
          <Divider sx={{ borderImage: 'linear-gradient(to right, #2b2828, #555555, #2b2828) 1' }}/>
          <ListItemText primary="DOCS" />
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary="Basics" />
              <KeyboardArrowDownIcon />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary="Components" />
              <KeyboardArrowDownIcon />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary="Change Logs" />
              <KeyboardArrowDownIcon />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}

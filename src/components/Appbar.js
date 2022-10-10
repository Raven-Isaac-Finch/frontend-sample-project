import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import { UserContext } from '../context/UserContext';
import { translationData } from '../data/translationData';
import LocalizedStrings from 'react-localization';

const Search = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  borderRadius: 5,
  border: "1px solid lightgray",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'gray',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));


export default function PrimarySearchAppBar({ ProfileOpen, SidebarOpen, currentFlag }) {

  const { userLang } = React.useContext(UserContext);
  const [userLangValue, setUserLang] = userLang;
  let strings = new LocalizedStrings( translationData );
  strings.setLanguage(userLangValue);

  const languageHandler = () => {
    if(userLangValue === 'en') {
      setUserLang('tr');
    } else {
      setUserLang('en');
    };
  }

  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" sx={{borderRadius: 3, boxShadow: '0px 5px 100px -15px rgba(0,0,0,0.2)', backgroundColor: 'white'}}>
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="open drawer" sx={{ mr: 2 }} >
            <MenuIcon sx={{ color: 'black' }}/>
          </IconButton>
          <div>
            <div role="presentation">
              <Breadcrumbs aria-label="breadcrumb" sx={{ height: 20 }}>
                <Link underline="hover" color="inherit" href="/" sx={{ display: 'flex', alignItems: 'flex-end' }}>
                  <HomeIcon sx={{ fontSize: 16 }}/>
                </Link>
                <Link
                  underline="hover"
                  color="inherit"
                  sx={{ fontSize: 12, cursor: 'pointer' }}
                  onClick={ SidebarOpen }
                >
                  { strings.prevPageText }
                </Link>
                <Typography color="text.primary" sx={{ fontSize: 12 }}>
                  { strings.pageText }
                </Typography>
              </Breadcrumbs>
            </div>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: 'block', sm: 'block' }, color: 'black', fontSize: 14, fontWeight: 'bold' }}
            >
              { strings.pageText }
            </Typography>
          </div>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Search>
              <StyledInputBase
                placeholder={ strings.searchPlaceholder }
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Box>
          <Box sx={{ display: { xs: 'block', md: 'flex' } }}>
            <IconButton
                size="small"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
                onClick={ ProfileOpen } >
              <AccountCircle sx={{ color: 'black' }} />
            </IconButton>
            <IconButton size="small" sx={{ margin: '0 2px 0 5px' }} onClick={ languageHandler }>
              {currentFlag}
            </IconButton>
            <IconButton size="small" color="inherit">
              <Badge badgeContent={9} color="error">
                <NotificationsIcon  sx={{ color: 'black' }}/>
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

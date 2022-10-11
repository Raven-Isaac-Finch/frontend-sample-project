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
import trFlag from '../assets/tr-flag.png';
import usFlag from '../assets/us-flag.png';

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

export default function PrimarySearchAppBar() {
  const { userLang, modalState, pageName } = React.useContext(UserContext);
  const [userLangValue, setUserLang] = userLang;
  const [pageNameValue, setPageName] = pageName;
  let strings = new LocalizedStrings( translationData );
  strings.setLanguage(userLangValue);

  React.useEffect(() => {
    if(window.location.href === 'http://localhost:3000/contact'){
      setPageName(strings.contactPageText);
    } else {
      setPageName(strings.pageText);
    }
  }, [userLangValue]);

  const languageHandler = () => {
    if(userLangValue === 'en') {
      setUserLang('tr');
    } else {
      setUserLang('en');
    };
  }

  let currentFlag;
  if(userLangValue === "tr"){
    currentFlag = <img src={ trFlag } style={{ width: 24 }} value="tr" alt='tr-flag'/>
  } else {
    currentFlag = <img src={ usFlag } style={{ width: 24 }} value="en" alt='us-flag'/>
  }

  // ----------------------------------------------------------------
  // Sidebar for Mobile
  // ----------------------------------------------------------------
  const [open, setOpen] = modalState;
  const handleProfileOpen = () => setOpen(true);
  function handleSidebarOpen() {
    let sidebarStyle = document.querySelector('.sidebar-container');
    sidebarStyle.style.display = 'block';
    console.log(open);
  }

  return (
    <Box sx={{ flexGrow: 1, gridRow: '1 / 2', gridColumn: '2 / 3', width: { xs: '90%', md: '95%'}, justifySelf: 'center', marginTop: { xs: '20px', md: 0}, marginBottom: { xs: '30px', md: 0} }} >
      <AppBar position="static" sx={{borderRadius: 3, boxShadow: '0px 5px 100px -15px rgba(0,0,0,0.2)', backgroundColor: 'white'}}>
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="open drawer" sx={{ mr: { xs: 0, md: 2 } }} onClick={ handleSidebarOpen } >
            <MenuIcon sx={{ color: 'black' }} />
          </IconButton>
          <div>
            <div role="presentation">
              <Breadcrumbs aria-label="breadcrumb" sx={{ height: { xs: 20, md: 20 } }}>
                <Link underline="hover" color="inherit" href="/" sx={{ display: 'flex', alignItems: 'flex-end' }}>
                  <HomeIcon sx={{fontSize: { xs: 12, md: 14 }}}/>
                </Link>
                <Link
                  underline="hover"
                  color="inherit"
                  sx={{ fontSize: { xs: 10, md: 12 }, cursor: 'pointer' }}
                >
                  { strings.prevPageText }
                </Link>
                <Link
                  underline="hover"
                  color="inherit"
                  sx={{ fontSize: { xs: 10, md: 12 }, fontWeight: 'bold', cursor: 'pointer' }}
                >
                  { pageNameValue }
                </Link>
              </Breadcrumbs>
            </div>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: 'block', sm: 'block' }, color: 'black', fontSize: 14, fontWeight: 'bold', margin: 0, padding: 0 }}
            >
              { pageNameValue }
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
          <Box sx={{ display: { xs: 'flex', md: 'flex' }, marginRight: { xs: 2, md: 0 } }}>
            <IconButton
                size="small"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
                onClick={ handleProfileOpen } >
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

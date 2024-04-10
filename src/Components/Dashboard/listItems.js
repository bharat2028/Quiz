import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import DashboardIcon from '@mui/icons-material/Dashboard';
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import PowerSettingsNewTwoToneIcon from '@mui/icons-material/PowerSettingsNewTwoTone';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useNavigate } from 'react-router-dom';
import ButtonBaseDemo from '../Learn/Learn';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export const mainListItems = (
  
  <div sx={{backgroundColor:'black'}}>
  <React.Fragment>
  <ListItemButton>
      <ListItemIcon>
        <CottageOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItemButton>
    <ListItemButton >
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <NavDropdown
    id="nav-dropdown-dark-example"
    title="Learn"
    menuVariant="dark"
  >
    <NavDropdown.Item href="/Pythoncourse">Python</NavDropdown.Item>
    <NavDropdown.Item href="/Cppcourse">
      C++
    </NavDropdown.Item>
    <NavDropdown.Item href="/Javacourse">Java</NavDropdown.Item>
  </NavDropdown>
    </ListItemButton>
    <ListItemButton>
    <ListItemIcon>
      <LightbulbIcon />
    </ListItemIcon>
    <NavDropdown
    id="nav-dropdown-dark-example"
    title="Quizz"
    menuVariant="dark"
  >
    <NavDropdown.Item href="/App">Python</NavDropdown.Item>
    <NavDropdown.Item href="/cpp">
      C++
    </NavDropdown.Item>
    <NavDropdown.Item href="/Java">Java</NavDropdown.Item>
  </NavDropdown>
    </ListItemButton>
    <ListItemButton>
    <ListItemIcon>
      <QuizOutlinedIcon />
    </ListItemIcon>
    <NavDropdown
    id="nav-dropdown-dark-example"
    title="Contests"
    menuVariant="dark"
  >
    <NavDropdown.Item href='/Contest'>Maniac Mystery</NavDropdown.Item>
    <NavDropdown.Item href='/Contest'>
      Dev Dazzlers
    </NavDropdown.Item>
    <NavDropdown.Item href='/Contest'>Smartie Progammers</NavDropdown.Item>
  </NavDropdown>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Analysis" />
    </ListItemButton>
    <ListItemButton href='/'>
      <ListItemIcon>
        <PowerSettingsNewTwoToneIcon />
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItemButton>
  </React.Fragment>
  </div>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      My notes
    </ListSubheader>
    <ListItemButton href='/Notes'>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Python" />
    </ListItemButton>
    <ListItemButton href='/Notes'>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Java(Variables)" />
    </ListItemButton>
    <ListItemButton href='/Notes'>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="C++" />
    </ListItemButton>
  </React.Fragment>
);
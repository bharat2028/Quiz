import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Tab } from 'bootstrap';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;
const navItems = ['Home'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const Navigate = useNavigate();
  const hand = () =>
  {
      Navigate("/Dashboard");
  }

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Python
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Python
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' }}}>
            {navItems.map((item) => (
              <Button onClick={hand} key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography>
        <h1>What is Python?</h1>
        <p>
        Python is a popular programming language. It was created by Guido van Rossum, and released in 1991.It is used for:<br></br>
        •	web development (server-side),<br></br>
        •	software development,<br></br>
        •	mathematics,<br></br>
        •	system scripting.<br></br><br></br>
        <h2>What can Python do?</h2><br></br>
          •	Python can be used on a server to create web applications.<br></br>
          •	Python can be used alongside software to create workflows.<br></br>
          •	Python can connect to database systems. It can also read and modify files.<br></br>
          •	Python can be used to handle big data and perform complex mathematics.<br></br>
          •	Python can be used for rapid prototyping, or for production-ready software development.<br></br><br></br>
        <h2>Why Python?</h2><br></br>
          •	Python works on different platforms (Windows, Mac, Linux, Raspberry Pi, etc).
          •	Python has a simple syntax similar to the English language.<br></br>
          •	Python has syntax that allows developers to write programs with fewer lines than some other programming languages.<br></br>
          •	Python runs on an interpreter system, meaning that code can be executed as soon as it is written. This means that prototyping can be very quick.<br></br>
          •	Python can be treated in a procedural way, an object-oriented way or a functional way.<br></br><br></br>
        <h2>Good to know</h2><br></br>
          •	The most recent major version of Python is Python 3, which we shall be using in this tutorial.<br></br>However, Python 2, although not being updated with anything other than security updates, is still quite popular.<br></br>
          •	In this tutorial Python will be written in a text editor. It is possible to write Python in an Integrated Development Environment, <br></br>such as Thonny, Pycharm, Netbeans or Eclipse which are particularly useful when managing larger collections of Python files.<br></br>
          <br></br>
        <h3>Python Syntax compared to other programming languages</h3><br></br>
        •	Python was designed for readability, and has some similarities to the English language with influence from mathematics.<br></br>
        •	Python uses new lines to complete a command, as opposed to other programming languages which often use semicolons or parentheses.<br></br>
        •	Python relies on indentation, using whitespace, to define scope; such as the scope of loops, functions and classes. <br></br>Other programming languages often use curly-brackets for this purpose<br></br><br></br>
        
        <h3>Execute Python Syntax</h3><br></br>
        •	As we learned in the previous page, Python syntax can be executed by writing directly in the Command Line:<br></br>
          <p style={{backgroundColor:'black',color:'white'}}>>>>> print("Hello, World!")<br></br>
          Hello, World!
          </p>
          •	Or by creating a python file on the server, using the .py file extension, and running it in the Command Line:<br></br>
          <p style={{backgroundColor:'black',color:'white'}}>
          C:\Users\Your Name>python myfile.py 
          </p><br></br>
        <h3>Python Indentation</h3><br></br>
        •	Indentation refers to the spaces at the beginning of a code line.<br></br>
        •	Where in other programming languages the indentation in code is for readability only, the indentation in Python is very important.<br></br>
        •	Python uses indentation to indicate a block of code.<br></br>
        <h4>Example </h4>
        <pre>
          if 5 > 2:<br></br>
          &nbsp;  print("Five is greater than two!")
        </pre><br></br>
        Python will give you an error if you skip the indentation<br></br><br></br>
        <h4>Example</h4><br></br>
        <h5>Syntax Error:</h5><br></br>
        if 5 > 2:<br></br>
        print("Five is greater than two!")<br></br>
        The number of spaces is up to you as a programmer, the most common use is four, but it has to be at least one.<br></br>
        <h4>Example</h4><br></br>
        if 5 > 2:<br></br>
        &nbsp;  print("Five is greater than two!")<br></br>
        if 5 > 2:<br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;    print("Five is greater than two!")<br></br><br></br>
        <h4>Example</h4><br></br>
        <h5>Syntax Error:</h5><br></br>
        if 5 > 2:<br></br>
        &nbsp;  print("Five is greater than two!")<br></br>
        &nbsp;&nbsp;&nbsp;    print("Five is greater than two!")<br></br><br></br>

        <h3>Python Variables</h3><br></br>
          In Python, variables are created when you assign a value to it:<br></br>
        <h4>Example</h4><br></br>
        <h5>Variables in Python:</h5><br></br>
        x = 5<br></br>
        y = "Hello, World!"<hr></hr><br></br>
        </p>
        <p>To learn more<a href='#'>Click here</a></p>
        </Typography>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
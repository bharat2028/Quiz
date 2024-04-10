import React, { Component } from 'react';
import './java.css'
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';


class Score extends Component {
	render() {
		const { score, onNextQuestion } = this.props;

		return (
			<div>
				<h2>Results</h2>
				<h4>Your score: {score}</h4>
				<ListItemButton href='/Dashboard' style={{backgroundColor:'#bc13fe', color:'black', fontFamily:'cursive'}}>
      <ListItemIcon>
        <CottageOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItemButton>
			</div>
		);
	}
}

export default Score;

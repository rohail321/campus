import React,{Component} from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import {NavLink} from 'react-router-dom'


export class Sidebar extends Component {
    constructor(props){
        super(props)
        this.state={
           
          bar:'false'
        }
    }


    handleClick=()=>{

    }

    render() {
        return (
            <div className="sidebar" style={this.state.bar?sidebar:sidebar1}>
          <List disablePadding dense>
      <ListItem button>
        <ListItemText><NavLink to='/dashboard/createprofile'> Create Profile</NavLink> </ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText>Billing</ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText>Settings</ListItemText>
      </ListItem>
    </List>
    </div>
          
        )
    }
}

export default Sidebar

const sidebar= {
    maxWidth: '240px',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    background:'#ecf0f1',
    height: '100vh'
    
  }

  const sidebar1= {
    background: '#34495e',
  height: '100vh',
  width: '250px',
  opacity:'0', 
  positon: 'absolute',
  visibility: 'hidden',
  transition: 'all 0.25s ease',
  transform: 'translateX(-50%)',
    
  }
import React from 'react'
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material'
import { useHistory } from 'react-router-dom';

const menu = [
  {
    id:1,
    text: 'Dashboard',
    path: '/'
  },
  {
    id:2,
    text: 'Barang',
    path: '/barang'
  }
]

const Sidebar = () => {
  const history = useHistory();
  return (
    <div>
      <Toolbar />
      <List>
        {menu.map((data, index) => (
          <>
          <ListItem key={data.text} disablePadding>
            <ListItemButton onClick={() => {
              history.push(data.path)
            }}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={data.text} />
            </ListItemButton>
          </ListItem>
          {
            index !== menu.length - 1 ? <Divider /> : null
          }
          </>
        ))}
      </List>
    </div>
  )
}

export default Sidebar
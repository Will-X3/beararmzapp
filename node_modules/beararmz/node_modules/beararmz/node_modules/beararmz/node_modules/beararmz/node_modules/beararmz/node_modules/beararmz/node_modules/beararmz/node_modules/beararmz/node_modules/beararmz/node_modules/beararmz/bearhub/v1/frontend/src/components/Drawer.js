import React from 'react';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const CustomDrawer = ({ isOpen, onClose }) => {
  return (
    <Drawer
      anchor="right" // Change the anchor to "right"
      open={isOpen}
      onClose={onClose}
      sx={{
        '& .MuiDrawer-paper': {
          width: 300,
        },
      }}
    >
      <div className="drawer-header">
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </div>
      <div className="drawer-content">
        <List>
          <ListItem button>
            <ListItemText primary="Link 1" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Link 2" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Link 3" />
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
};

export default CustomDrawer;

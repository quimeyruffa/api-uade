import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import SickIcon from '@mui/icons-material/Sick';
import DraftsIcon from '@mui/icons-material/Drafts';


import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Enfermedades({open, setOpen, enfermedades}) {
  
  const handleClose = () => setOpen(false);

  React.useEffect(() => {console.log(enfermedades)},[])
  return (
 
    <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
>
    <Box sx={style}>
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <nav aria-label="main mailbox folders">
                <h2>Enfermedades</h2>
                <List>
                    {enfermedades && enfermedades.map((item)=> { 
                    return(
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <SickIcon />
                            </ListItemIcon>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>

                    )})}
    
                </List>
            </nav>

        </Box>
    </Box>
</Modal>
  );
}
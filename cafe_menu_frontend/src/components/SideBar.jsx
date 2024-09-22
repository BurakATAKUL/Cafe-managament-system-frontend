import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, IconButton } from '@mui/material';
import { Home as HomeIcon, Menu as MenuIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';

function SideBar() {
    const [open, setOpen] = useState(false); // Başlangıçta kapalı

    const handleToggle = () => {
        setOpen(!open);
    };

    return (
        <>
            <IconButton
                color="inherit"
                aria-label="toggle sidebar"
                onClick={handleToggle}
                sx={{ position: 'absolute', top: 16, left: 16 }}
            >
                <MenuIcon />
            </IconButton>
            <Drawer
                variant="temporary"  // Geçici olarak açılıp kapanabilir
                anchor="left"
                open={open}  // Sidebar'ın açık olup olmadığını kontrol eder
                onClose={handleToggle}  // Kapatma butonuna basıldığında handleToggle fonksiyonu çağrılır
                sx={{
                    width: 240,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: 240,
                        boxSizing: 'border-box',
                    },
                }}
            >
                <Divider />
                <List>
                    <ListItem button component={Link} to="/cafe">
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Cafe" />
                        
                    </ListItem>
                    <ListItem button primary="Add Cafe" component={Link} to="/addCafe">
                        <ListItemText primary="Add Cafe">
                            Add cafe
                        </ListItemText>
                        </ListItem> 
                </List>
            </Drawer>
        </>
    );
}

export default SideBar;

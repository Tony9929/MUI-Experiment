import React, { useState } from 'react';
import {
    AppBar,
    Box,
    CssBaseline,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Button
} from '@mui/material';
import {
    Menu as MenuIcon,
    Dashboard as DashboardIcon,
    ShoppingCart,
    People,
    BarChart,
    Layers,
    Home
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const Dashboard = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar>
                <Typography variant="h6" noWrap component="div">
                    Dashboard
                </Typography>
            </Toolbar>
            <Divider />
            <List>
                {['Overview', 'Orders', 'Customers', 'Reports'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index === 0 && <DashboardIcon />}
                                {index === 1 && <ShoppingCart />}
                                {index === 2 && <People />}
                                {index === 3 && <BarChart />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
                <Divider />
                <ListItem disablePadding>
                    <ListItemButton component={Link} to="/">
                        <ListItemIcon><Home /></ListItemIcon>
                        <ListItemText primary="Back Home" />
                    </ListItemButton>
                </ListItem>
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    // Generate some dummy data for cards
    const cards = Array.from({ length: 12 }).map((_, i) => ({
        id: i + 1,
        title: `Project ${i + 1}`,
        value: Math.floor(Math.random() * 1000)
    }));

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            {/* Top Navbar */}
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
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
                    <Typography variant="h6" noWrap component="div">
                        Responsive Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>

            {/* Sidebar (Responsive Drawer) */}
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* Mobile Drawer (Temporary) */}
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

                {/* Desktop Drawer (Permanent) */}
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>

            {/* Main Content */}
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar /> {/* Spacer for fixed AppBar */}

                <Typography paragraph>
                    Resize the window to see the grid adjust and the sidebar toggle on mobile.
                </Typography>

                {/* Responsive Card Grid */}
                <Grid container spacing={3}>
                    {cards.map((card) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={card.id}>
                            <Card elevation={4}>
                                <CardMedia
                                    component="div"
                                    sx={{ height: 140, bgcolor: 'primary.light' }}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {card.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Active Users: {card.value}
                                    </Typography>
                                    <Button size="small" sx={{ mt: 1 }}>View Details</Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default Dashboard;

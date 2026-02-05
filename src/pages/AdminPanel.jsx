import React, { useState, useMemo } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Card,
    CardContent,
    Grid,
    Box,
    Switch,
    FormControlLabel,
    CssBaseline,
    Paper
} from '@mui/material';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

// --- Styled Component Overrides ---

// 1. Styled AppBar
const CustomAppBar = styled(AppBar)(({ theme }) => ({
    background: theme.palette.mode === 'dark'
        ? 'linear-gradient(45deg, #333 30%, #555 90%)'
        : 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
}));

// 2. Styled Button
const CustomButton = styled(Button)(({ theme }) => ({
    background: theme.palette.mode === 'dark' ? '#ff4081' : '#ff3d00',
    border: 0,
    borderRadius: 15,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    '&:hover': {
        background: theme.palette.mode === 'dark' ? '#c60055' : '#b22a00',
    },
}));

// 3. Styled Card
const CustomCard = styled(Card)(({ theme }) => ({
    height: '100%',
    transition: 'transform 0.3s ease-in-out',
    border: `1px solid ${theme.palette.mode === 'dark' ? '#444' : '#eee'}`,
    '&:hover': {
        transform: 'scale(1.02)',
        boxShadow: theme.shadows[10],
    },
}));

const AdminPanel = () => {
    const [mode, setMode] = useState('light');

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                    ...(mode === 'light'
                        ? {
                            // Light mode palette
                            background: {
                                default: '#f4f6f8',
                                paper: '#ffffff',
                            },
                        }
                        : {
                            // Dark mode palette
                            background: {
                                default: '#121212',
                                paper: '#1e1e1e',
                            },
                        }),
                },
            }),
        [mode],
    );

    const toggleTheme = () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ flexGrow: 1, minHeight: '100vh', bgcolor: 'background.default' }}>

                {/* Top Navigation */}
                <CustomAppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Admin Panel
                        </Typography>
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={mode === 'dark'}
                                    onChange={toggleTheme}
                                    color="default"
                                />
                            }
                            label={mode === 'dark' ? 'Dark Mode' : 'Light Mode'}
                        />
                        <Button color="inherit" component={Link} to="/">Exit</Button>
                    </Toolbar>
                </CustomAppBar>

                <Box p={3}>
                    {/* Multi-panel layout */}
                    <Grid container spacing={3}>

                        {/* Left Panel (Analysis / Metrics) - Stacks on mobile */}
                        <Grid item xs={12} md={4} lg={3}>
                            <Paper elevation={2} sx={{ p: 2, height: '100%' }}>
                                <Typography variant="h6" gutterBottom>
                                    Quick Actions
                                </Typography>
                                <Box display="flex" flexDirection="column" gap={2}>
                                    <CustomButton fullWidth>Add User</CustomButton>
                                    <CustomButton fullWidth>Generate Report</CustomButton>
                                    <CustomButton fullWidth>System Settings</CustomButton>
                                </Box>

                                <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
                                    System Status
                                </Typography>
                                <Box sx={{ p: 2, bgcolor: mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)', borderRadius: 1 }}>
                                    <Typography variant="body2">Server: Online</Typography>
                                    <Typography variant="body2">Database: Connected</Typography>
                                    <Typography variant="body2">Uptime: 99.9%</Typography>
                                </Box>
                            </Paper>
                        </Grid>

                        {/* Main Panel (Content) - Stacks on mobile */}
                        <Grid item xs={12} md={8} lg={9}>
                            <Grid container spacing={3}>
                                {/* Summary Cards */}
                                {[1, 2, 3].map((item) => (
                                    <Grid item xs={12} sm={4} key={item}>
                                        <CustomCard>
                                            <CardContent>
                                                <Typography color="text.secondary" gutterBottom>
                                                    Metric {item}
                                                </Typography>
                                                <Typography variant="h4">
                                                    {Math.floor(Math.random() * 5000) + 1000}
                                                </Typography>
                                            </CardContent>
                                        </CustomCard>
                                    </Grid>
                                ))}

                                {/* Recent Activity Table (Placeholder) */}
                                <Grid item xs={12}>
                                    <CustomCard>
                                        <CardContent>
                                            <Typography variant="h5" gutterBottom>
                                                Recent Activity Log
                                            </Typography>
                                            <Typography paragraph>
                                                This central panel collapses below the quick actions on mobile devices.
                                                Styled components ensure consistent look across themes.
                                            </Typography>
                                            {/* Mock List */}
                                            <Box component="ul" sx={{ pl: 2 }}>
                                                {['User login: Admin', 'Updated settings', 'Backup completed'].map((log, i) => (
                                                    <Typography component="li" key={i} sx={{ mb: 1 }}>
                                                        {new Date().toLocaleTimeString()} - {log}
                                                    </Typography>
                                                ))}
                                            </Box>
                                        </CardContent>
                                    </CustomCard>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>

            </Box>
        </ThemeProvider>
    );
};

export default AdminPanel;

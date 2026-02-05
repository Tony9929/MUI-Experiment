import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    Container,
    Grid,
    Paper
} from '@mui/material';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            {/* Simple Navbar */}
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Landing Page
                    </Typography>
                    <Button color="inherit" component={Link} to="/">Back Home</Button>
                </Toolbar>
            </AppBar>

            {/* Hero Section */}
            <Box
                sx={{
                    bgcolor: 'primary.main',
                    color: 'primary.contrastText',
                    py: 8,
                    textAlign: 'center',
                }}
            >
                <Container maxWidth="md">
                    <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
                        Welcome to the Future
                    </Typography>
                    <Typography variant="h5" paragraph>
                        Experience a fully responsive layout built with Material UI.
                        Resize your browser to see the magic happen.
                    </Typography>
                    <Button variant="contained" color="secondary" size="large" sx={{ mt: 2 }}>
                        Get Started
                    </Button>
                </Container>
            </Box>

            {/* Features Section (Responsive Grid) */}
            <Container sx={{ py: 6 }} maxWidth="lg">
                <Typography variant="h4" align="center" gutterBottom sx={{ mb: 4 }}>
                    Our Features
                </Typography>

                <Grid container spacing={4}>
                    {/* Feature 1 */}
                    <Grid item xs={12} md={4}>
                        <Paper elevation={3} sx={{ p: 4, height: '100%', textAlign: 'center' }}>
                            <Typography variant="h5" component="h3" gutterBottom>
                                Responsive Design
                            </Typography>
                            <Typography color="text.secondary">
                                This item spans 12 columns on mobile (stacking) and 4 columns on desktop (side-by-side).
                            </Typography>
                        </Paper>
                    </Grid>

                    {/* Feature 2 */}
                    <Grid item xs={12} md={4}>
                        <Paper elevation={3} sx={{ p: 4, height: '100%', textAlign: 'center' }}>
                            <Typography variant="h5" component="h3" gutterBottom>
                                Material UI Grid
                            </Typography>
                            <Typography color="text.secondary">
                                Using the powerful Grid system to organize content efficiently across all device sizes.
                            </Typography>
                        </Paper>
                    </Grid>

                    {/* Feature 3 */}
                    <Grid item xs={12} md={4}>
                        <Paper elevation={3} sx={{ p: 4, height: '100%', textAlign: 'center' }}>
                            <Typography variant="h5" component="h3" gutterBottom>
                                Modern Layouts
                            </Typography>
                            <Typography color="text.secondary">
                                Clean and professional aesthetics that adapt seamlessly to user preferences.
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>

            {/* Footer */}
            <Box sx={{ bgcolor: 'grey.200', py: 3, mt: 'auto', textAlign: 'center' }}>
                <Typography variant="body2" color="text.secondary">
                    © 2026 Experiment No 2. All rights reserved.
                </Typography>
            </Box>
        </Box>
    );
};

export default LandingPage;

import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { CssBaseline, Container, Box, Typography, Button, Stack } from '@mui/material';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import AdminPanel from './pages/AdminPanel';

function Home() {
  return (
    <Container maxWidth="md" sx={{ mt: 8, textAlign: 'center' }}>
      <Typography variant="h2" gutterBottom component="h1">
        MUI Experiment No 2
      </Typography>
      <Typography variant="h5" color="text.secondary" paragraph>
        Select an experiment task to view the implementation.
      </Typography>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" sx={{ mt: 4 }}>
        <Button variant="contained" size="large" component={Link} to="/landing">
          Task A: Landing Page
        </Button>
        <Button variant="contained" size="large" color="secondary" component={Link} to="/dashboard">
          Task B: Dashboard
        </Button>
        <Button variant="contained" size="large" color="success" component={Link} to="/admin">
          Task C: Admin Panel
        </Button>
      </Stack>
    </Container>
  );
}

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

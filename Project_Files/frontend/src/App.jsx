import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Layout from './components/layout/Layout';
import UsersListPage from './pages/UsersListPage';
import UserFormPage from './pages/UserFormPage';
import UserViewPage from './pages/UserViewPage';

const theme = createTheme({
  palette: {
    primary: {
      main: '#c2495b',
    },
    secondary: {
      main: '#2c3e50',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/users" replace />} />
          <Route path="/users" element={<UsersListPage />} />
          <Route path="/users/add" element={<UserFormPage />} />
          <Route path="/users/edit/:id" element={<UserFormPage />} />
          <Route path="/users/view/:id" element={<UserViewPage />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;

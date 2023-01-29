import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Grid from '@mui/material/Grid';

import { theme } from './theme';
import { ProductsPage } from './pages/ProductsPage';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ToastContainer position="top-left" theme="colored" autoClose={2000} />
      <Grid container>
        <Grid item xs={12}>
          <ProductsPage />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
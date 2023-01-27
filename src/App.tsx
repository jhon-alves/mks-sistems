import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

import { theme } from './theme';
import { ProductsPage } from './pages/ProductsPage';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container>
        <Grid item xs={12}>
          <ProductsPage />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
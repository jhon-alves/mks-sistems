import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Skeleton from '@mui/material/Skeleton';

export function SkeletonProducts() {
  const arraySkeletons = Array.from(Array(8));

  return (
    <Grid container spacing={3}>
      {arraySkeletons.map((item, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Card sx={{ borderRadius: 4 }}>
            <Box display="flex" alignItems="center" justifyContent="center" height="300px">
              <Skeleton variant="rectangular" width="100%" height={300} />
            </Box>
            <Box padding="16px">
              <Box display="flex" alignItems="center" justifyContent="space-between" height="50px">
                <Skeleton variant="rectangular" width={100} height={45} />
                <Skeleton variant="rectangular" width={80} height={30} />
              </Box>
              <Box paddingTop="8px">
                <Skeleton variant="rectangular" width="100%" height={60} />
              </Box>
            </Box>
            <Skeleton variant="rectangular" width="100%" height={50} />
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
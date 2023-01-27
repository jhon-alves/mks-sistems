import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import MuiAvatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export const Drawer = styled(MuiDrawer)(({ theme }) => `
  & .MuiDrawer-paper {
    background-color: ${theme.palette.primary.main};
    width: 35%;
    padding: 2rem;
  }
`);

export const DrawerTitle = styled(Grid)(({ theme }) => `
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${theme.palette.common.white};
`);

export const Avatar = styled(MuiAvatar)(({ theme }) => `
  background: ${theme.palette.common.black};
  color: ${theme.palette.common.white};
  cursor: pointer;
`);

export const Checkout = styled(Grid)(({ theme }) => `
  position: absolute;
  bottom: 0;
  width: 100%;
  color: ${theme.palette.common.white};
  padding-left: 0px;
  text-align: center;
`);

export const CheckoutButton = styled(Box)(({ theme }) => `
  background: ${theme.palette.common.black};
  padding: 2rem;
  cursor: pointer;
`);
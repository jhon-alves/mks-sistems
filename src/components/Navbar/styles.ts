import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import MuiToolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const AppBar = styled(MuiAppBar)(({ theme }) => `
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.palette.primary.main};
  height: 101px;  
`);

export const Toolbar = styled(MuiToolbar)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Logo = styled(Typography)(({ theme }) => `
  font-size: 40px;
  font-weight: 600;
  color: ${theme.palette.common.white};

  span {
    font-size: 20px;
    font-weight: 400;
  }
`);

export const ButtonCart = styled(Button)(({ theme }) => `
  background-color: ${theme.palette.common.white};
  color: ${theme.palette.common.black};
  border-radius: 8px;
`);

export const CartValue = styled(Typography)`
  font-size: 18px;
  font-weight: bold;
`;
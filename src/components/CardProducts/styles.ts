import { styled } from '@mui/material/styles';
import MuiCardActions from '@mui/material/CardActions';
import MuiChip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const ProductName = styled(Typography)(({ theme }) => `
  font-size: 16px;
  font-weight: 500;
  color: ${theme.palette.text.primary};
`);

export const Chip = styled(MuiChip)(({ theme }) => `
  background: ${theme.palette.text.primary};
  color: ${theme.palette.common.white};
  border-radius: 5px;
  font-size: 15px;
  font-weight: bold;
`);

export const ProductDescription = styled(Typography)(({ theme }) => `
  min-height: 60px;
  margin-top: 0.5rem;
  font-size: 11px;
  font-weight: 500;
  color: ${theme.palette.text.primary};
`);

export const CardActions = styled(MuiCardActions)(({ theme }) => `
  width: 100%;
  background: ${theme.palette.primary.main};
  display: flex;
  align-items: center;
  justify-content: center;
`);

export const ButtonBuy = styled(Button)(({ theme }) => `
  color: ${theme.palette.common.white};
  font-size: 14px;
  font-weight: 600;
  width: 100%;
  padding: 10px;
`);

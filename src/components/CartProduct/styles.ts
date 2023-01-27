import { styled } from '@mui/material/styles';
import MuiCard from '@mui/material/Card';
import MuiBox from '@mui/material/Box';
import MuiAvatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';

export const GridItem = styled(Grid)`
 position: relative;
 padding: 0 1rem;
`;

export const Card = styled(MuiCard)`
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;

  img {
    width: 70px;
  }
`;

export const QuantityBox = styled(MuiBox)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  padding: 4px;
`;

export const Avatar = styled(MuiAvatar)(({ theme }) => `
  background: ${theme.palette.common.black};
  color: ${theme.palette.common.white};
  width: 20px;
  height: 20px;
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 16px;
  margin-right: 10px;
  z-index: 2;
  cursor: pointer;
`);
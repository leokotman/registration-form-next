import { Box, Typography } from '@mui/material';

export const Divider = ({ text }: { text: string }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        margin: '32px 20px',
      }}
    >
      <Box
        sx={{
          height: '1px',
          backgroundColor: 'grey',
          flex: 1,
        }}
      />

      <Typography
        sx={{
          padding: '0 16px',
          color: 'grey',
          fontFamily: 'var(--font-roboto)',
        }}
      >
        {text}
      </Typography>

      <Box
        sx={{
          height: '1px',
          backgroundColor: 'grey',
          flex: 1,
        }}
      />
    </Box>
  );
};

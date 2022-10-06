import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function SimplePaper() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: '100%',
          height: '90vh',
          background: '#2b2828',
          margin: "auto",
          borderRadius: 3,
        },
      }}
    >
      <Paper elevation={0} />
    </Box>
  );
}

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

export default function MediaCard({ img, title, value, percent, timeText }) {
  return (
    <Card sx={{ width: 250, position: 'relative', overflow: 'visible', boxShadow: '0px 10px 50px -5px rgba(0,0,0,0.2)', borderRadius: 3 }}>
      { img }
      <CardContent >
        <Typography gutterBottom variant="p" component="p" sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end', color: 'darkgray', fontSize: 12 }} >
          { title }
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end', color: '#1e211f', fontSize: 22, fontWeight: 'bold' }}>
          { value }
        </Typography>
      </CardContent>
      <Divider sx={{ borderImage: 'linear-gradient(to right, white, #e8e8e8, white) 1' }}/>
      <Typography gutterBottom variant="p" component="p" sx={{ display: 'flex', alignItems: 'center', width: '100%', height: '40px', color: 'darkgray', fontSize: 12 }} >
          <span style={{ color: '#179924', fontWeight: 'bold', marginRight: 5, paddingLeft: 10 }} >{ percent }</span>{ timeText }
        </Typography>
    </Card>
  );
}

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Divider from '@mui/material/Divider';

export default function ProductCard({ productImg, productTitle, productText, productPrice, productLocation }) {
  return (
    <Card sx={{ width: '32%', position: 'relative', overflow: 'visible', boxShadow: '0px 10px 50px -5px rgba(0,0,0,0.2)', borderRadius: 3 }}>
      <CardMedia
        component="img"
        height="240"
        image={ productImg }
        sx={{ position: "absolute", borderRadius: 2, width: '90%', top: -20, left: 18, boxShadow: '0px 5px 20px -5px rgba(0,0,0,0.5)' }}
      />
      <CardContent sx={{ mt: 25 }}>
        <Typography gutterBottom variant="p" component="p" sx={{ width: '100%', display: 'flex', justifyContent: 'center', color: '#1e211f', fontSize: 18, fontWeight: '500', margin: '15px 0 10px 0' }} >
          { productTitle }
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ width: '100%', display: 'flex', justifyContent: 'center', color: 'darkgray', fontSize: 12, textAlign: 'center' }} >
          { productText }
        </Typography>
      </CardContent>
      <Divider sx={{ borderImage: 'linear-gradient(to right, white, #e8e8e8, white) 1' }}/>
      <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography gutterBottom variant="p" component="p" sx={{ display: 'flex', alignItems: 'center', color: 'darkgray', fontSize: 14, fontWeight: '500' }} >
          { productPrice }
        </Typography>
        <Typography gutterBottom variant="p" component="p" sx={{ display: 'flex', alignItems: 'center', color: 'darkgray', fontSize: 12 }} >
          <LocationOnIcon sx={{ fontSize: 14 }}/> { productLocation }
        </Typography>
      </CardContent>
    </Card>
  );
}

import { Box, Button, CardActions, CardContent, CardMedia, Grid, Rating, Typography } from '@mui/material'
import Car from "../../assets/image/görsel.jpg"
import Card from '@mui/material/Card'


function ProductCard() {
  return (
    
    <Card sx={{
              maxWidth: "400px",
              maxHeight: "400px",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              position: "relative",
              cursor: "pointer",
              margin: "0 auto",
              transition: "transform 0.5s ease, box-shadow 0.5s ease", // ✅ Tek satırda
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 4px 15px rgba(0,0,0,0.5)",
              },
            }}>
       <Box sx={{
                  width: "100%",
                  maxWidth: {
                    xs: "280px", // Mobil
                    sm: "350px", // Tablet
                    md: "400px", // Desktop
                    lg: "280px", // Büyük ekran
                  },
                  aspectRatio: "1/1",
                  overflow: "hidden",
                  margin: "0 auto",
                }}>
   
  <CardMedia 
    component="img"
    image={Car}
    sx={{
      width: "100%",       // ✅ Responsive
      height: "100%",      // ✅ Responsive  
      objectFit: "cover"   // ✅ Kırpmadan sığdır
    }}
  />
</Box>
<Box
        sx={{
          position: 'absolute',
          top: 8,
          left: 8,
          backgroundColor: 'rgba(0,0,0,0.6)',
          color: 'white',
          px: 1,
          py: 0.5,
          borderRadius: 1,
          fontSize: '0.8rem',
        }}
      >
        Kategori
      </Box>

      {/* Sağ Üst */}
      <Box
        sx={{
          position: 'absolute',
          top: 8,
          right: 8,
          backgroundColor: 'transparent'
        }}
      >  
         <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly  size="small"/>
      </Box>
        <CardContent>
            <Typography sx={{fontWeight:"bolder",fontSize:"18px",textAlign:"center"}}>X Ürün</Typography>
              <Typography sx={{color:"rgb(69, 221, 90)",fontWeight:"bold",textAlign:"center"}}>
               999 ₺ 
            </Typography>  
        </CardContent>
        {/* <CardActions>
            <Button size="small" variant='contained'>Sepete Ekle</Button>
            <Button size="small" variant='contained'>Ürün Detayı</Button>
        </CardActions> */}
    </Card>
  )
}

export default ProductCard
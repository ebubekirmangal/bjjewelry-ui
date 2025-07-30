import { Box } from '@mui/material'
import './App.css'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
// import AppRouter from './router/AppRouter'

function App() {


  return (
    <>
    <Box sx={{
      minHeight: "100vh",      // En az ekran yüksekliği
      display: "flex",         // Flexbox aktif
      flexDirection: "column"  // Dikey sıralama
    }}>
      <Navbar/>
      <Box sx={{ flex: 1 }}>   {/* Kalan alanı doldurur */}
         {/* <AppRouter></AppRouter> */}
      </Box>
      <Footer/>                {/* mt: "auto" çalışıyor */}
    </Box>
    </>
  )
}

export default App

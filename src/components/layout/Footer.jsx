import { Box, Container, Grid, Typography, Link, Divider } from "@mui/material"
import { Diamond, Phone, Email, LocationOn } from "@mui/icons-material"
function Footer() {
  return (
     <Box
      component="footer"
      sx={{
        backgroundColor: "#1a2332",
        color: "white",
        py: 6,
        mt: "auto", // Bu footer'ı en alta iter
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Sol Kolon - Logo ve Açıklama */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ mb: 3 }}>
              {/* Logo */}
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Diamond
                  sx={{
                    fontSize: 32,
                    color: "#ffd700",
                    mr: 1,
                  }}
                />
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    color: "#ffd700",
                  }}
                >
                  BsJewelry
                </Typography>
              </Box>

              {/* Açıklama */}
              <Typography
                variant="body2"
                sx={{
                  color: "#b0bec5",
                  lineHeight: 1.6,
                  fontSize: "0.9rem",
                }}
              >
                Eşsiz tasarımlar ve kaliteli işçilikle hayalinizdeki takıları sunuyoruz. Her parça özenle seçilmiş ve
                sizin için hazırlanmıştır.
              </Typography>
            </Box>
          </Grid>

          {/* Orta Kolon - Hızlı Linkler */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                mb: 2,
                color: "white",
              }}
            >
              Hızlı Linkler
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {[
                { text: "Ana Sayfa", href: "/" },
                { text: "Ürünler", href: "/products" },
                { text: "Kataloglar", href: "/catalogs" },
                { text: "Sepetim", href: "/cart" },
              ].map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  sx={{
                    color: "#b0bec5",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    transition: "color 0.3s ease",
                    "&:hover": {
                      color: "#ffd700",
                      textDecoration: "none",
                    },
                  }}
                >
                  {link.text}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Sağ Kolon - İletişim */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                mb: 2,
                color: "white",
              }}
            >
              İletişim
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {/* Telefon */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Phone sx={{ fontSize: 18, color: "#ffd700" }} />
                <Typography
                  variant="body2"
                  sx={{
                    color: "#b0bec5",
                    fontSize: "0.9rem",
                  }}
                >
                  Tel: +90 xxx xxx xx xx
                </Typography>
              </Box>

              {/* Email */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Email sx={{ fontSize: 18, color: "#ffd700" }} />
                <Link
                  href="mailto:info@bsjewelry.com"
                  sx={{
                    color: "#b0bec5",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    "&:hover": {
                      color: "#ffd700",
                    },
                  }}
                >
                  Email: info@bsjewelry.com
                </Link>
              </Box>

              {/* Adres */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <LocationOn sx={{ fontSize: 18, color: "#ffd700" }} />
                <Typography
                  variant="body2"
                  sx={{
                    color: "#b0bec5",
                    fontSize: "0.9rem",
                  }}
                >
                  Adres: İstanbul, Türkiye
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Alt Çizgi */}
        <Divider
          sx={{
            my: 4,
            borderColor: "#37474f",
          }}
        />

        {/* Copyright */}
        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="body2"
            sx={{
              color: "#78909c",
              fontSize: "0.85rem",
            }}
          >
            © 2024 BsJewelry. Tüm hakları saklıdır.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
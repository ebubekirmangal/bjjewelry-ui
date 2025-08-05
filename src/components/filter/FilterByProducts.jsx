import React, { useState } from "react";
import {
  TextField,
  MenuItem,
  Box,
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

// Örnek ürün verisi slicedan gelecek ve filtrelenmiş ürün olarak başka statede tutulacak 
const products = [
  { id: 1, name: "Altın Yüzük", category: "Takı", price: 500 },
  { id: 2, name: "Gümüş Kolye", category: "Takı", price: 250 },
  { id: 3, name: "Elmas Bileklik", category: "Lüks", price: 1200 },
  { id: 4, name: "İnci Küpe", category: "Lüks", price: 900 },
];

function FilterByProducts() {
  // Filtre state'leri
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [sortOption, setSortOption] = useState("name"); // Varsayılan: A-Z

  // Filtreleri sıfırlama
  const resetFilters = () => {
    setSearchQuery("");
    setCategoryFilter("");
    setSortOption("name");
  };

  // Filtreleme
  let filteredProducts = products.filter((p) => {
    const matchesCategory = categoryFilter ? p.category === categoryFilter : true;
    const matchesSearch = searchQuery
      ? p.name.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    return matchesCategory && matchesSearch;
  });

  // Sıralama
  filteredProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "name") return a.name.localeCompare(b.name, "tr");
    if (sortOption === "priceLowToHigh") return a.price - b.price;
    if (sortOption === "priceHighToLow") return b.price - a.price;
    return 0;
  });

  return (
    <Box sx={{ padding: 3 }}>
      {/* Filtre Alanı */}
      <Box sx={{ display: "flex", gap: 2, marginBottom: 3 }}>
        {/* Arama Inputu */}
        <TextField
          label="Ara"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{ width: 250 }}
        />

        {/* Kategori Filtre */}
        <TextField
          select
          label="Kategori"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          sx={{ width: 200 }}
        >
          <MenuItem value="">Tümü</MenuItem>
          <MenuItem value="Takı">Takı</MenuItem>
          <MenuItem value="Lüks">Lüks</MenuItem>
        </TextField>

        {/* Sıralama */}
        <TextField
          select
          label="Sırala"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          sx={{ width: 220 }}
        >
          <MenuItem value="name">İsme Göre (A-Z)</MenuItem>
          <MenuItem value="priceLowToHigh">Fiyat (Düşükten Yükseğe)</MenuItem>
          <MenuItem value="priceHighToLow">Fiyat (Yüksekten Düşüğe)</MenuItem>
        </TextField>

        {/* Filtreleri Sıfırla Butonu */}
        <Button
          variant="outlined"
          color="secondary"
          onClick={resetFilters}
          sx={{ marginLeft: "auto", height: "56px" }}
        >
          Filtreleri Sıfırla
        </Button>
      </Box>

      {/* Ürünlerin Listelendiği Alan */}
      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 2 }}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Card key={product.id}>
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography color="text.secondary">{product.category}</Typography>
                <Typography>{product.price} TL</Typography>
              </CardContent>
            </Card>
          ))
        ) : (
          <Typography variant="h6">Hiç ürün bulunamadı</Typography>
        )}
      </Box>
    </Box>
  );
}

export default FilterByProducts;
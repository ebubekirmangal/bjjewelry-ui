import React from 'react'
import FilterByProducts from '../../components/filter/FilterByProducts';
import ProductCard from '../../components/product/ProductCard';

function ProductListPage() {
  return (
    // filtrelenmiş state i burda maple döneceğiz
    <>
    <FilterByProducts />
    <div className="product-list" style={{display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap",gap:"20px",padding:"10px"}}>
       <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard /> 
    </div>
   
    </>
    
  )
}

export default ProductListPage;
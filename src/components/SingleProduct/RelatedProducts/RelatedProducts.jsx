import React from "react";
import useExpress from "../../../hooks/useExpress";
import Products from "../../Products/Products";

const RelatedProducts = ({ categoryId, productId }) => {
    const { data } = useExpress(
        `products/related/${productId}/${categoryId}`
       
    );
   

    return (
    
        <div className="related-products">
            <Products headingText="Related Products" products={data} />
        </div>
    );
};

export default RelatedProducts;

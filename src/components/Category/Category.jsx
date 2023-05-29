import { useParams } from "react-router-dom";
import useExpress from "../../hooks/useExpress";
import Products from "../Products/Products";
import "./Category.scss";
const Category = () => {
    const { id } = useParams();
    const { data } = useExpress(
        `products/category/${id}`
    );
    
    return (
        <div className="category-main-content">
            <div className="layout">
                <div className="category-title">
                    {
                        data?.[0]?.attributes?.categories?.data?.[0]
                            ?.attributes?.title
                    }
                </div>
                <Products innerPage={true} products={data} />
            </div>
        </div>
    );
};

export default Category;

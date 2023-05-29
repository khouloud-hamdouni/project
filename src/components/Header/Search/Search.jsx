import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import "./Search.scss";

import { useNavigate } from "react-router-dom";
import useExpress from "../../../hooks/useExpress";

const Search = ({ setSearchModal }) => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const onChange = (e) => {
        setQuery(e.target.value);
    };
    
    let { data } = useExpress(
        `products/search/by?title=${query}`
    );
   
    if (!query.length) {
        data = null;
    }

    return (
        <div className="search-modal">
            <div className="form-field">
                <input
                    autoFocus
                    type="text"
                    placeholder="Search for products"
                    value={query}
                    onChange={onChange}
                />
                <MdClose
                    className="close-btn"
                    onClick={() => setSearchModal(false)}
                />
            </div>
            <div className="search-result-content">
                {!data?.length && (
                    <div className="start-msg">
                        Start typing to see products you are looking for.
                    </div>
                )}
                <div className="search-results">
                    {data?.map((item) => (
                        <div
                            className="search-result-item"
                            key={item.id}
                            onClick={() => {
                                navigate("/product/" + item.id);
                                setSearchModal(false);
                            }}
                        >
                            <div className="image-container">
                                <img
                                    src={
                                    "http://localhost:1338" +
                                        item.attributes.image.data[0].attributes
                                            .url
                                    }
                                />
                            </div>
                            <div className="prod-details">
                                <span className="name">
                                    {item.attributes.title}
                                </span>
                                <span className="desc">
                                    {item.attributes.description}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Search;

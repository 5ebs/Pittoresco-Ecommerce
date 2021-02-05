import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import "./Product.css";


const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3" >
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            {" "}
            <h4 class="text-info">{product.name}</h4>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <div className="my-3">
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </div>
        </Card.Text>

        <Card.Text as="h3">€ {product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;

function Product (props) {
    return(
        <div className="product-card">
            <h3>{props.name}</h3>
            <p>price: ${props.price}</p>
            <button>Add to cart</button>
        </div>
    );
}

export default Product
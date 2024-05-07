export default function Product(props) {
    return (
        <div className="card" style={{ width: "250px" }}>
            <img src={props.imgSrc} className="card-img-top"
                style={{ width: "100%", height: "10rem", objectFit: "contain" }} />
            <div className="card-body">
                <h5 className="card-title">{props.category}</h5>
                <p className="card-text">{props.price} $</p>
                <a href="#" className="btn btn-primary">Add To Cart</a>
            </div>
        </div>
    )
}

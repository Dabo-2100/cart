import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import Product from "../components/Product"
import axios from "axios";
import SideMenu from "../components/SideMenu";
export default function HomePage() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then((res) => {
            let data = res.data;
            setProducts(data);
        }).catch((err) => {
            console.log(err);
        })
    }, []);
    return (
        <div className="col-12" id="HomePage">
            <Navbar />
            <div className="col-12 container d-flex flex-wrap gap-3 pt-3 justify-content-center">
                {
                    products.map((el, index) => {
                        return (
                            <Product key={el.id} imgSrc={el.image} price={el.price} category={el.category} />
                        )
                    })
                }
            </div>
        </div>
    )
}

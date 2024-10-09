import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { createProduct, updateProduct } from "./productSlice";


const ProductForm = ({ productToEdit = {}, isEdit = false }) => {

    const dispatch = useDispatch()
    const [product, setProduct] = useState({
        title:  "",
        price:  "",
        description:  "",
        category: ""
    })
    useEffect(() => {
        if(productToEdit){
        setProduct({
            title: productToEdit.title ?? '',
            price:  productToEdit.price ?? '',
            description: productToEdit.description ?? '',
            category: productToEdit.category ?? ''
        })
        }
    }, [productToEdit])

    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        {isEdit ? dispatch(updateProduct({id: productToEdit.id , product:product})) : dispatch(createProduct({ ...product, id: nanoid() }))}
    }
    console.log(product)
    return (
        <form onSubmit={handleSubmit} className="space-y-2 flex flex-col justify-center items-center mt-2 shadow-xl w-[500px] p-2 mx-auto shadow-purple-950">
            <div >
                <label>Title: </label> <br />
                <input className="bg-slate-300 text-blue-950 outline-none w-96 "
                    name="title"
                    value={product.title}
                    onChange={handleChange} />
            </div>
            <div>
                <label>price: </label> <br />
                <input className="bg-slate-300 text-blue-950 outline-none w-96 "
                    name="price"
                    value={product.price}
                    onChange={handleChange} />
            </div>
            <div >
                <label>description: </label> <br />
                <input className="bg-slate-300 text-blue-950 outline-none w-96 "
                    name="description"
                    value={product.description}
                    onChange={handleChange} />
            </div>
            <div >
                <label>category: </label> <br />
                <input className="bg-slate-300 text-blue-950 outline-none w-96"
                    name="category"
                    value={product.category}
                    onChange={handleChange} />
            </div>
            <button className="btn bg-purple-600 text-white p-2 rounded-md mt-2" type="submit">
                {isEdit ? "Update product" : "Add product"}
            </button>
        </form>
    );
};

export default ProductForm;
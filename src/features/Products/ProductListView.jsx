import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { deleteProduct, fetchProducts, updateProduct } from './productSlice';

const ProductListView = ({onHandleSetProductToEdit}) => {
    const {products, isLoading, error} = useSelector(
        (state) => state.productsR
    )
    // console.log(products)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])
    const handleEdit = (product) =>{
        onHandleSetProductToEdit(product)
    }

    return (
        <div className='p-4'>
            {isLoading && <p>Loading products</p>}
            {error && <p>{error}</p>}
            {
            !isLoading && !error && products && products.length > 0 && 
            <div className='grid grid-cols-2 gap-4  p-4'>
            {
                products.map((product)=>{
                    return <div key={product?.id} className='ml-2 transform transition shadow-2xl p-4 hover:drop-shadow-2xl hover:-translate-y-5'>
                        <h3 className='font-bold'>Title : {product?.title}</h3>
                        <p>{product?.description}</p>
                        <p>Price : {product?.price}</p>
                        <p>category : {product?.category}</p>
                        <div className='flex justify-between'>
                        <button onClick={()=> dispatch(deleteProduct(product.id))} className='btn bg-blue-300 font-bold p-2 text-white rounded-md'>Delete</button>
                        <button onClick={()=>handleEdit(product)} className='btn bg-red-900 font-bold p-2 text-white rounded-md'>Edit</button>
                        </div>
                    </div>
                })
            }
            </div>
            
            
            }
        </div>
    );
};

export default ProductListView;
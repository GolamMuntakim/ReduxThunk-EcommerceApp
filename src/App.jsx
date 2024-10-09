import { useState } from "react"
import ProductForm from "./features/Products/ProductForm"
import ProductListView from "./features/Products/ProductListView"


function App() {
  const [isEdit, setIsEdit] = useState(false)
  const [productToEdit, setProductToEdit] = useState({})
  const handleSetProductToEdit = (product) => {
    setProductToEdit(product)
    setIsEdit(true)
  }
  console.log(productToEdit)
  return (
    <>
      <div className="w-[1200px] mx-auto ">
        <ProductForm productToEdit={productToEdit} isEdit={isEdit}></ProductForm>
        <ProductListView onHandleSetProductToEdit={handleSetProductToEdit}></ProductListView>
      </div>
    </>
  )
}

export default App

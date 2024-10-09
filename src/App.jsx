import ProductForm from "./features/Products/ProductForm"
import ProductListView from "./features/Products/ProductListView"


function App() {
 
  return (
    <>
     <div className="w-[1200px] mx-auto ">
      <ProductForm ></ProductForm>
      <ProductListView></ProductListView>
     </div>
    </>
  )
}

export default App

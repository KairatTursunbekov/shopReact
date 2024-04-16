import { Home } from "./Home"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import itemCard from "./itemCard"
import { Cart } from "./Cart"
import { CartProvider } from "react-use-cart"

function App(){
    return (
        <CartProvider>
            <Home />
            <Cart />
        </CartProvider>
    )
}
export default App
import React from 'react'
import { useCart } from 'react-use-cart'

export const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        updateItem,
        emptyCart,
        removeItem
    }=useCart()
    if(isEmpty) return <h1>basket is empty</h1>;
  return (
    <section className='py-4 container'>
      <h5>({totalUniqueItems}) ({totalItems})</h5>
      <table className='table table-light table-hover m-0'>
        {
            items.map((item,id)=> {
                return (
                  <tr key={id}>
                    <td>
                      <img src={item.img} style={{height: '6rem'}}></img>
                    </td>
                    <td>
                        {item.title}
                    </td>
                    <td>
                        {item.price}$
                    </td>
                    <td>
                      ({item.quantity})
                    </td>
                    <td>
                      <button onClick={()=> updateItemQuantity(item.id,item.quantity+1)} className="btn btn-success">Plus</button>
                      <button onClick={()=> updateItemQuantity(item.id,item.quantity-1)} className="btn btn-danger">Minus</button>
                      <button onClick={()=> removeItem(item.id)} className="btn btn-info">remove</button>
                    </td>
                  </tr>
                );
            })
        }
      </table>
      <div>
        <h2>All: {cartTotal}$</h2>
      </div>
      <div>
        <button onClick={()=> emptyCart()}>Empty</button>
      </div>
    </section>
  )
}

import './checkout-list.styles.scss'
import { CartContext } from '../../context/cart.context'
import { useContext } from 'react'

const CheckoutList = () => {
  const { cartItems } = useContext(CartContext)

  return (
    <>
      {cartItems.map(item => {
        const { id, name, imageUrl, price, quantity } = item;
        return (
          <div key={id}>
            <img src={imageUrl} alt={name} />
            <span>{name}</span>
            <span> {price}</span>
            <span> {quantity}x</span>
          </div>
        )
      })}
    </>
  )
}

export default CheckoutList;
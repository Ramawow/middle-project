import { useState } from 'react'
import { Heading, Container } from '@chakra-ui/react'
import CartTable from '../../components/CartTable'
import CartTotal from '../../components/CartTable/CartTotal'

const Cart = () => {
  const [data, setData] = useState([
    { id: 'asdfasdf', img: 'asdf', name: 'asrock a320m', qty: 1, price: 750000 },
    { id: 'asdfasdf', img: 'asdf', name: 'asrock a320m', qty: 1, price: 750000 },
    { id: 'asdfasdf', img: 'asdf', name: 'asrock a320m', qty: 1, price: 750000 },
  ])

  function onQtyChange(rowIndex: number, value: number) {
    setData(old =>
      old.map((row, index) => {
        if (rowIndex === index) {
          return {
            ...old[rowIndex],
            qty: value <= 1 ? 1 : value,
          }
        }
        return row
      })
    )
  }

  function totalPrice() {
    return data.reduce((acc, d) => acc + d.qty * d.price, 0)
  }

  return (
    <Container maxW='container.xl' p='10' minH='calc(100vh - 75px - 60px)'>
      <Heading size='lg' mb='5'>
        Cart
      </Heading>
      <CartTable unMemoizedData={data} onQtyChange={onQtyChange} />
      <CartTotal totalPrice={totalPrice()} />
    </Container>
  )
}

export default Cart

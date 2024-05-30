import { HStack, Spacer, Button, Heading } from '@chakra-ui/react'

const CartTotal = ({ totalPrice }: { totalPrice: number }) => {
  return (
    <HStack my='5'>
      <Heading fontSize='1.5em' fontWeight='normal'>
        Total Price:{' '}
      </Heading>
      <Heading fontSize='1.5em' fontWeight='bold'>
        {Intl.NumberFormat('en-US', { style: 'currency', currency: 'IDR' }).format(
          totalPrice
        )}
      </Heading>
      <Spacer />
      <Button size='lg'>Checkout</Button>
    </HStack>
  )
}

export default CartTotal

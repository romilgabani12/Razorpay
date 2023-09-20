import { Button, VStack , Image , Text } from '@chakra-ui/react'
import React from 'react'

const Card = ({amount , img , checkoutHandler}) => {

  return (
    <div>
      <VStack>
        <Image src={img} boxSize={"64"} objectFit={"cover"}/>
        <Text>₹{amount}</Text>
        <Button onClick={()=>{checkoutHandler(amount)}}>Buy Now</Button>
      </VStack>
    </div>
  )
}

export default Card

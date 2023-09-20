import React from 'react'
import { Box, Stack } from "@chakra-ui/react";
import Card from './Card';
import axios from "axios";


const Home = () => {

    const checkoutHandler = async (amount) => {

        const {data:{key}} = await axios.get("http://localhost:5000/api/getkey");

        const { data: { order } } = await axios.post("http://localhost:5000/api/checkout", {
            amount
        });

        const options = {
            key,
            amount: order.amount,
            currency: "INR",
            name: "romil",
            description: "tutorial of Razorpay",
            image: "https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw",
            order_id: order.id,
            callback_url: "http://localhost:5000/api/paymentVerification",
            prefill: {
                name: "Gaurav Kumar",
                email: "gaurav.kumar@example.com",
                contact: "9000090000"
            },
            notes: {
                address: "Razorpay Corporate Office"
            },
            theme: {
                color: "#3399cc"
            }
        };
        var razor = new window.Razorpay(options);
        razor.open();
    
    }
    return (
        <div>

            <Box>
                <Stack
                    h={"100vh"}
                    direction={["column", "row"]}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Card
                        amount={5000}
                        img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz4WfgrrPX1r8IOecaIuQH-yfEZ1e3tm8TrA&usqp=CAU"}
                        checkoutHandler={checkoutHandler}

                    />
                    <Card
                        amount={45000}
                        img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh19a5tI2dkoGhhHBuUSQJFCCkxtXGvOGxrQ&usqp=CAU"}
                        checkoutHandler={checkoutHandler}

                    />

                </Stack>
            </Box>
        </div>
    )
}

export default Home

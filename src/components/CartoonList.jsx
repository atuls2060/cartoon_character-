import React, { useState } from 'react'
import Style from "./cartoonlist.module.css"
import Loader from './Loader';
import CartoonCard from './CartoonCard';
import axios from 'axios';

const CartoonList = () => {
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [cartoonData, setCartoonData] = useState([]);


    const getCartoonList = async () => {
        setLoading(true)
        try {
            const { data } = await axios.get("https://api.sampleapis.com/cartoons/cartoons2D")
            setCartoonData(data)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            setErrorMessage(error.message)
        }
    }

    useState(() => {
        getCartoonList()
    }, [])
    return (
        <>
            {
                loading ? <Loader /> :
                    errorMessage ? <p className={Style.error_message}>{errorMessage}</p> : <div className={Style.cartoon_list}>
                        {
                            cartoonData.map((cartoon, index) => {
                                return <CartoonCard key={index} {...cartoon} />
                            })
                        }
                    </div>
            }
        </>
    )
}

export default CartoonList
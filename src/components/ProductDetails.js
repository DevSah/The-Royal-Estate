import React, { useState, useEffect } from 'react'
import axios from 'axios'

function ProductDetails(props) {

    let id= props.match.params.id;
    // console.log(id)

    const [productDetails,setProductDetails] = useState([]);

    useEffect(()=>{
        axios.get('/api/productsHome.json').then(res=>{
            setProductDetails(res.data.products)
           // console.log(res.data.products)
       })

    },[])

    console.log(typeof productDetails)

    let productEach = productDetails.find(item=>{
        return(
            JSON.stringify(item.id) === id
        )
    })


    return (
        <div>
            {/* {productEach &&JSON.stringify(productEach)} */}
            {
                productEach && productEach.productDetails.Name
            }
        </div>
    )
}

export default ProductDetails

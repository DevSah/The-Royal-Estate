import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';


function ProductsHome(props) {

const [productsDetails,setProductsDetails] = useState([]);

useEffect(() => {
    axios.get('/api/productsHome.json').then(res=>{
         setProductsDetails(res.data.products)
        // console.log(res.data.products)
    })
}, [])


console.log(productsDetails)
const productsImages =productsDetails.map(imageItem=>{
    return(
            <div key={imageItem.id} style={{display:'flex',flexDirection:'column'}} >
                <div> {imageItem.name} </div>
                <Link to={`/details/${imageItem.id}`} >
                <img src={imageItem.image} alt="Home" style={{display:'flex',flexDirection:'column',height:'25rem',maxWidth:'25rem', margin:'1.5rem 1.5rem',}} />
                    
                View Details</Link>
            </div>
    )
})

// const productsNames =productsDetails.map(imageItem=>{
//     return(
//             <img src={imageItem.name} style={{maxHeight:'25rem',maxWidth:'25rem', margin:'1.5rem 1.5rem',}} />
//     )
// })

// const productsImages =Object.keys(images).map(imageItem=>{
//     let data = images[imageItem]
//     console.log(data)
//     return(
//         <div>
//             {data.image.src}
//         </div>
//     )
// })


    return (
        <div>
            <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'center',padding:'0rem 3rem',}}>
                {productsImages}
            </div>
        </div>
    )
}

export default ProductsHome

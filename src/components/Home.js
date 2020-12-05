import React from 'react'

import '../../src/App.css';
import ProductsHome from './Home/ProductsHome';


function Home(props) {
    return (
        <div className='main-container'>
           <div className='header-section'>
           <img src='https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1113&q=80' alt='Backgroumd' className='home-header-img'></img>
                <section className='banner-section'>
                    <h2>Welcome To<span> The Royal Estate</span></h2>
                    <strong>Own Your Dream Land</strong>
                    <button className='shop-now-btn'>Shop Now</button>
                </section>
                {/* <i className="fas fa-mobile-alt fa-2x"><h3>9860298206</h3></i> */}
                <h3><i className="fas fa-mobile-alt fa-2x"></i>&nbsp;&nbsp;<span>+977-9860298206</span>
                </h3>
                <div className='mail_id'><i class="fas fa-envelope"></i>&nbsp;&nbsp;bcrealestate123@gmail.com</div>
           </div>
           {/* <div className='filter-section'>Filter Section</div> */}
           <div className='Our Products'>
                <h3>Products</h3>
                <ProductsHome style={{display:'flex',flexDirection:'row',flexWrap:'wrap',padding:'0rem 1rem',alignItems:'center'}} />
           </div>
           <footer className='main-footer'>
               <p>&copy;2020. All Rights Reserved.</p>
           </footer>
        </div>
    )
}

export default Home


import React from "react";
import Product from "./Product";
import data from './data.json'

function AllProducts() {
  return (
    <div style={{display:'flex' ,flexWrap:'wrap',justifyContent:"space-around"}}>
        {data.map((v,i)=>{
            return <Product key={i} {...v} />
        })}
    </div>
  );
}

export default AllProducts;


// function AllProducts() {
//   return (
//     <div>
//         <Product {...data[2]} />
//         <Product image={data[0].image} title={data[0].title} description={data[0].description} />
//          <Product image={data[1].image} title={data[1].title} description={data[1].description} />
//       <Product
//         image={
//           "https://m.media-amazon.com/images/I/312vYo7wrWL._SX300_SY300_QL70_FMwebp_.jpg"
//         }
//         title={"Reynolds New Trimax"}
//         description={`Reynolds Metal Pens (Iconic Elite Brown) | Premium Pens For Gifting | Twist Pens For Personal & Professional Use | Stylish Gifts for Men & Women | Trim Ball Pens For Corporate Gifting | Blue Ink`}
//       />
//     </div>
//   );
// }

// export default AllProducts;

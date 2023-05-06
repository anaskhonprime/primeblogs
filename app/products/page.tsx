export default function Products() {
  
  interface Set {
    name: string;
    price: number;
  }
 
  let items:Array<string> = ["Apple", "Banana", "Orange", "Pineapple"];

  
  return (
  
    <div className="">
      <div className="">
        <h1>Products</h1>
        <div className="products">
          <div className="set">
            <img src="https://thumbnail7.coupangcdn.com/thumbnails/remote/292x292ex/image/vendor_inventory/2da6/8df2ae09c2fd6eb39fd197e81ef6c6d519b78d2c0ad523e2e033ac95a563.png" alt=" " />
            <div className="text">
              <h4>{items[0]}</h4>
              <p>10$</p>
            </div>
          </div>
          <div className="set">
            <img src="https://thumbnail8.coupangcdn.com/thumbnails/remote/292x292ex/image/vendor_inventory/1d92/7cc8aa9d209447e5a25670ab77e3f3549e202bd667a7e4205fd96f05111d.jpg" alt=" " />
            <div className="text">
              <h4>{items[1]}</h4>
              <p>10$</p>
            </div>
          </div>

          <div className="set">
            <img src="https://thumbnail9.coupangcdn.com/thumbnails/remote/292x292ex/image/vendor_inventory/1e0b/47383b1c52a947512682fee15a06442cb0c002cfeb857f6e5f879ffa7bf2.png" alt=" " />
            <div className="text">
              <h4>{items[2]}</h4>
              <p>10$</p>
            </div>
          </div>

          <div className="set">
            <img src="https://resource.logitech.com/w_1200,h_630,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/webcams/c270/c270-social-og-image.png?v=1" alt=" " />
            <div className="text">
              <h4>{items[3]}</h4>
              <p>10$</p>
            </div>
          </div>
          

        </div>

      </div>
    </div>

  )
}

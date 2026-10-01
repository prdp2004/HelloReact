import "./Product.css";

import Price from "./Price.jsx";

function Product({ title, idx }) {
  let oldPrice = ["12999", "14999", "11999", "10999"];

  let newPrice = ["8333", "10000", "9999", "7999"];

  let description = [
    "8000 dpi",
    "intuitive surface",
    "designed for ipad pro",
    "wireless",
  ];

  return (
    <div className="Product">
      <h4>{title}</h4>

      <p>{description[idx]}</p>

      <Price
        oldPrice={oldPrice[idx]}
        newPrice={newPrice[idx]}
      />
    </div>
  );
}

export default Product;
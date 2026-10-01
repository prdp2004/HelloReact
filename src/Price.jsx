export default function Price({ oldPrice, newPrice }) {
let oldStyles = {
    textDecorationLine:"line-through",
};
let newStyles = {
    fontWeight:"bold",
};
let styles= {
backgroundColor:"green",
height:"30px",
};


  return (
    <div className="Price" style={styles}>
      <span className="Price-old" oldstyle={oldStyles}>₹{oldPrice}</span>
      <span className="Price-new" newstyle={newStyles}>₹{newPrice}</span>
    </div>
  );
}

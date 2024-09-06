const ShoeCard = ({name, image, price, type}) => {
  return (
    <>
      <div></div>
      <div ClassName="Card">
        <image scr={image} alt="image desc" />
        <div ClassName="text">
          <hi>{name}</hi> <h6>{type}</h6> <h3>${price}</h3>
        </div>
        <button ClassName="btn">Add to cart</button>
      </div>
    </>
  );
};

export default ShoeCard;

const Card = ({ name, imageUrl }) => {
  return (
    <div className="category-card">
      <img className="card-img" src={imageUrl} alt={name}></img>
      <h2>{name}</h2>
    </div>
  );
};

export default Card;

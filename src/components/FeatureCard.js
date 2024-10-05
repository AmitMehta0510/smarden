const FeatureCard = ({ title, description, imageUrl }) => {
  return (
    <div className="feature-card">
      <div className="feature-logo">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="feature-title">
        <h3>{title}</h3>
      </div>
      <div className="feature-description">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;

import FeatureCard from "./FeatureCard";
import { featuresData } from "../utils/constants";

const Features = () => {
  return (
    <div className="features">
      {featuresData.map((feature, index) => (
        <FeatureCard
          key={index}
          title={feature.title}
          description={feature.description}
          imageUrl={feature.imageUrl}
        />
      ))}
    </div>
  );
};

export default Features;

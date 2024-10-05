import Card from "./Card";
import {
  SMART_HOME_URL,
  SMART_OFFICE_URL,
  SMART_HOTEL_URL,
  SMART_INDUSTRY_URL,
} from "../utils/constants";

const Categories = () => {
  const categoryData = [
    { name: "Smart Homes", imageUrl: SMART_HOME_URL },
    { name: "Smart Office", imageUrl: SMART_OFFICE_URL },
    { name: "Smart Hotel", imageUrl: SMART_HOTEL_URL },
    { name: "Smart Industry", imageUrl: SMART_INDUSTRY_URL },
  ];

  return (
    <div className="categories">
      {categoryData.map((category, index) => (
        <Card key={index} name={category.name} imageUrl={category.imageUrl} />
      ))}
    </div>
  );
};

export default Categories;

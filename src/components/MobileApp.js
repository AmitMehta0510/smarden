import {
  MOBILE_APP_URL1,
  MOBILE_APP_URL2,
  MOBILE_APP_URL3,
} from "../utils/constants";

const MobileApp = () => {
  return (
    <div className="mobile-app">
      <div className="mobile-app-options">
        <div className="mobile-app-option">
          <img src={MOBILE_APP_URL1} alt="Mobile App 1" />
        </div>
        <div className="mobile-app-option">
          <img src={MOBILE_APP_URL2} alt="Mobile App 2" />
        </div>
        <div className="mobile-app-option">
          <img src={MOBILE_APP_URL3} alt="Mobile App 3" />
        </div>
      </div>
    </div>
  );
};

export default MobileApp;

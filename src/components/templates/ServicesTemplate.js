import React, { useEffect, useState } from "react";
import "./ServicesTemplate.css";
import ServiceDataJson from "../../json/Service/ServiceData.json";
import ServiceBannerJson from "../../json/Service/Banner.json";

import Banner from "../organisms/Banner";
import bannerImage from "../../assets/backimg.jpg";
import ServiceImage from "../../assets/ServiceImage.jpg";


const ServiceTemplate = () => {
  const [servicesData, setServicesData] = useState(null);
  
    useEffect(() => {
      let storedData = localStorage.getItem("servicesData");
      if (!storedData) {
        localStorage.setItem("servicesData", JSON.stringify(ServiceDataJson));
        storedData = JSON.stringify(ServiceDataJson);
      }
  
      setServicesData(JSON.parse(storedData)[0]);
    }, []);

  

  return (
    <div className="services-container">
      <Banner
        backImage={gal.imageBack}
        h1={gal.bannerHead}
        p={gal.bannerDesc}
        button1={gal.bannerButton1}
        button2={""}
      />

      <div className="content-section">
        <div className="image-container">
          <img
            src={ServiceImage}
            alt="Business"
            className="service-image" 
          />
        </div>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div key={index} className="service-card">
              <div className="icon-container">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <button className="more-button">MORE</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default ServiceTemplate;

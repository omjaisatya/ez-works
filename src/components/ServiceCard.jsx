import React from "react";

const ServiceCard = ({ title, icon }) => {
  return (
    <div className="service-card">
      <div className="service-icon">
        <span>
          <img src={icon} className="icon-img" />
        </span>{" "}
        <span className="icon-title">{title}</span>
      </div>
      <p className="service-description">
        Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum
        dolor sit amet
      </p>
    </div>
  );
};

export default ServiceCard;

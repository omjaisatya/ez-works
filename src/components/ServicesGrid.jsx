import React from "react";
import ServiceCard from "./ServiceCard";
import iconPresentation from "../assets/Research@4x-5@2x.png";
import iconAudio from "../assets/Research@4x-2@2x.png";
import iconTranslation from "../assets/Research@4x-1@2x.png";
import iconGraphic from "../assets/Research@4x-4@2x.png";
import iconResearch from "../assets/Research@4x@2x.png";
import iconData from "../assets/Research@4x-3@2x.png";

const services = [
  { title: "Presentation Design", icon: iconPresentation },
  { title: "Audio - Visual Production", icon: iconAudio },
  { title: "Translation Services", icon: iconTranslation },
  { title: "Graphic Design", icon: iconGraphic },
  { title: "Research & Analytics", icon: iconResearch },
  { title: "Data Processing", icon: iconData },
];

const ServicesGrid = () => {
  return (
    <div className="services-grid">
      {services.map((service, index) => (
        <ServiceCard key={index} title={service.title} icon={service.icon} />
      ))}
    </div>
  );
};

export default ServicesGrid;

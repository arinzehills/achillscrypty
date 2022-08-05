import React from "react";
import { Icon } from "@iconify/react";

const ServiceCard = ({ title, subtitle, icon, iconClass }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          padding: "2rem",
          borderRadius: "20px",
          border: "0.5px solid #e7e8f1",
          color: "white",
          background:
            "linear-gradient(to right bottom, rgba(58, 69, 119, 0.4), rgba(15, 19, 65, 0.1)",
          gap: "1.5rem",
          margin: "0.7rem 0 0.7rem",
          maxWidth: window.innerWidth && "560px",
        }}
      >
        <div
          className={iconClass ?? "pink"}
          style={{
            borderRadius: "",
            height: "3rem",
            width: "3rem",
            padding: "0.5rem",
            fontSize: "3rem",
          }}
        >
          <Icon icon={icon ?? "arcticons:security"} />
        </div>
        <div>
          <h1>{title ?? "dskdsajk"}</h1>
          <p style={{ paddingTop: "0.2rem" }}>{subtitle ?? "Subtitile"}</p>
        </div>
      </div>
    </>
  );
};

const Services = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: window.innerWidth < 960 && "column",
          margin: window.innerWidth > 960 && "3rem",
          gap: "4rem",
        }}
        // className={window.innerWidth > 960 && "container"}
      >
        <h1 style={{ color: "white" }}>
          Services that <br />
          we continue to improve
        </h1>
        <div style={{ gap: "2rem" }}>
          <ServiceCard
            title={"Security Guaranteed"}
            subtitle={
              "Security is guaranteed we always maintain privacy and maintaining the quality of our products"
            }
          />
          <ServiceCard
            title={"Best exchange rates"}
            subtitle={
              "Affordable exchange rates is guaranteed we always maintain privacy and maintaining the quality of our products"
            }
            icon={"system-uicons:heart-rate"}
            iconClass={"purple"}
          />
          <ServiceCard
            title={"Fastest Transactions"}
            subtitle={
              "Fast transaction, send ethereum and recieve it in due time. Maintain privacy and maintaining the quality of our products"
            }
            icon={"fluent:top-speed-20-regular"}
            iconClass={"orange"}
          />
        </div>
      </div>
    </>
  );
};

export default Services;

import type React from "react";
import { Card, CardBody, CardHeader } from "@heroui/card"; // revisar si esta lib existe

interface CardClientsProps {
  titleImageSrc?: string;
  titleText?: string;
  children?: React.ReactNode;
}

export const CardClients: React.FC<CardClientsProps> = ({
  titleImageSrc,
  titleText,
  children,
}) => {
  return (
    <div
      style={{
        height: "fit-content",
        width: "fit-content",
        padding: "8px",
        background: "#2C3654",
        borderRadius: "16px",
      }}
    >
      <Card
        style={{
          background:
            "linear-gradient(304.98deg, #222737 79.29%, #616F9D 119.81%)",
          height: "476px",
          width: "639px",
          padding: "10%",
        }}
      >
        <CardHeader
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {titleImageSrc ? (
            <div className="mr-3">
              <img
                alt="Title Logo"
                height={47}
                src={titleImageSrc || "/placeholder.svg"}
                width={307}
              />
            </div>
          ) : (
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              {titleText}
            </h2>
          )}
        </CardHeader>
        <CardBody
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {children}
        </CardBody>
      </Card>
    </div>
  );
};

import React from "react";
import { Typography } from "antd";
import { Card } from "react-bootstrap";

const { Text } = Typography;

export default function CategoriesCard(props) {
  return (
    <div>
      <a href={props.link} style={{textDecoration: "none"}}>
      <Card style={{ border: "none", maxWidth: "100%" }}>
        <img
          src={props.img}
          alt="Image"
          style={{ maxWidth: "100%", height: 247, borderRadius: 10 }}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Text
            style={{
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: 24,
              // line-height: 32px;
              /* or 133% */

              textAlign: "center",

              color: "#393280",
            }}>
            {props.title}
          </Text>
          {/* <br /> */}
          <Text
            style={{
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: 16,
              // line-height: 32px;
              /* or 133% */

              textAlign: "center",

              color: "rgba(57, 50, 128, 0.7)",
            }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
            feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut
            mat,
          </Text>
        </div>
      </Card>
      </a>
    </div>
  );
}

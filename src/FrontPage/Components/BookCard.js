import React from "react";
import { Button, Card, Typography } from "antd";
const { Meta } = Card;
const { Text } = Typography;

export default function BookCard(props) {
  return (
    <div className={props.className}>
      <Card
        hoverable
        style={{
          maxWidth: 375,
          border:"none"
        }}
        cover={<img alt="example" src={props.cover}  />}>
        <Meta title={props.title} style={{fontFamily: 'Inter',
fontStyle: "normal",
fontWeight: "600",
fontSize: 22,
// line-height: 27px;
/* identical to box height */

textAlign: "center",
textTransform: "capitalize",
color: "#393280",
}} />
        <div
          style={{
            display: "flex",
            flexDirection:"column",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
            <Text style={{fontFamily: 'Inter',
fontStyle: "normal",
fontWeight: "400",
fontSize: 14,
letterSpacing: "0.02em",
// line-height: 27px;
/* identical to box height */

textAlign: "center",
textTransform: "capitalize",
color: "#888888",
}}>{props.author}</Text>
          <Text style={{fontFamily: 'Inter',
fontStyle: "normal",
fontWeight: "700",
fontSize: 18,
letterSpacing: "0.02em",
// line-height: 27px;
/* identical to box height */

textAlign: "center",
textTransform: "capitalize",
color: "#ED553B",
}}>N{props.price}</Text>
          <Button>Add to cart</Button>
        </div>
      </Card>
    </div>
  );
}

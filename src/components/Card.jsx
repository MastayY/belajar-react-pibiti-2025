import React from "react";

// Komponen Card ini akan bertindak sebagai pembungkus (wrapper)
// yang memberikan styling dasar.
// Apapun yang berada di antara <Card> dan </Card> akan dirender
// berkat props.children.
function Card(props) {
  return <div className="card">{props.children}</div>;
}

export default Card;

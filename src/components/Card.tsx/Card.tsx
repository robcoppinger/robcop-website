import React from "react";
import "./Card.css";

export const Card = ({children, style}: {children?: React.ReactNode, style?: any}) => <div style={style} className="card">{children}</div>;

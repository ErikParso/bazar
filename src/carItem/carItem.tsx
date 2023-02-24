import React from "react";
import { Brand } from "../models/car";
import './carItem.css';

type CarItemProps = {
	name: string;
	price: number;
	brand: Brand;
}

export const CarItem = (props: CarItemProps) => {
	console.log(props);
	return (
		<div className="carItem">
			<span className="name">{props.brand} {props.name}</span>
			<span className="price">{props.price}</span>
		</div>
	)
}
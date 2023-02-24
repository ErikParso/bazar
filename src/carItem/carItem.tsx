import { Paper } from "@mui/material";
import { Brand } from "../models/car";
import './carItem.css';

type CarItemProps = {
	name: string;
	price: number;
	brand: Brand;
	image: string;
}

export const CarItem = (props: CarItemProps) => {
	return (
		<Paper className="carItem">
			<img className="image" src={props.image}></img>
			<span className="name">{props.brand} {props.name}</span>
			<span className="price">{props.price}</span>
		</Paper>
	)
}
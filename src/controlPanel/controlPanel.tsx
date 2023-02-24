import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { Car } from "../App";
import { Brand } from "../carItem/carItem";
import "./controlPanel.css";

type ControlPanelProps = {
	onAddCarClick: (car: Car) => void;
}

export const ControlPanel = (props: ControlPanelProps) => {
	const [name, setName] = useState('');
	const [price, setPrice] = useState(0);
	const [brand, setBrand] = useState(Brand.Skoda);

	return (
		<div className='controls'>
			<TextField
				label='Name'
				value={name}
				onChange={(event) => setName(event.target.value)} />

			<TextField
				label='Price'
				value={price}
				onChange={(event) => setPrice(+event.target.value)}
				type='number' />

			Skoda: <input
				checked={brand === Brand.Skoda}
				onClick={() => setBrand(Brand.Skoda)}
				type='radio' />

			Audi: <input
				checked={brand === Brand.Audi}
				onClick={() => setBrand(Brand.Audi)}
				type='radio' />

			BMW: <input
				checked={brand === Brand.BMW}
				onClick={() => setBrand(Brand.BMW)}
				type='radio' />

			Mercedes: <input
				checked={brand === Brand.Mercedes}
				onClick={() => setBrand(Brand.Mercedes)}
				type='radio' />

			<Button
				variant='contained'
				disabled={price > 1000 || name.length === 0}
				onClick={() => props.onAddCarClick({ name, brand, price })}>Add</Button>
		</div>
	);
}
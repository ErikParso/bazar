import { useState } from 'react'
import './App.css'
import { CarItem, Brand } from './carItem/carItem';
import { Button, TextField } from '@mui/material';

type Car = {
	brand: Brand;
	name: string;
	price: number;
}

function App() {

	const [cars, setCars] = useState<Car[]>([]);
	const [name, setName] = useState('');
	const [price, setPrice] = useState(0);
	const [brand, setBrand] = useState(Brand.Skoda);

	const handleAddButtonClick = () => {
		const car: Car = { brand, name, price };
		const newCars = cars.concat(car);
		setCars(newCars);
	};

	return (
		<div className='app'>
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
					onClick={handleAddButtonClick}>Add</Button>
			</div>

			<div className="items">
				{cars.map(item =>
					<CarItem brand={item.brand} name={item.name} price={item.price} />
				)}
			</div>
		</div>
	)
}

export default App

import { useState } from 'react'
import './App.css'
import { CarItem, Brand } from './carItem/carItem'
import { Counter } from './counter/counter'

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
		const car: Car = { brand: brand, name: name, price: price };
		const newCars = cars.concat(car);
		setCars(newCars);
	};

	return (
		<div>
			<div>
				name: <input 
					value={name} 
					onChange={(event) => setName(event.target.value)}></input>

				price: <input 
					value={price} 
					onChange={(event) => setPrice(+event.target.value)} 
					type='number'></input>

				Skoda: <input
					checked={brand === Brand.Skoda} 
					onClick={() => setBrand(Brand.Skoda)}
					type='radio'></input>

				Audi: <input 
					checked={brand === Brand.Audi} 
					onClick={() => setBrand(Brand.Audi)}
					type='radio'></input>

				BMW: <input 
					checked={brand === Brand.BMW} 
					onClick={() => setBrand(Brand.BMW)}
					type='radio'></input>

				Mercedes: <input 
					checked={brand === Brand.Mercedes} 
					onClick={() => setBrand(Brand.Mercedes)}
					type='radio'></input>

				<button 
					disabled={price > 1000 || name.length === 0} 
					onClick={handleAddButtonClick}>Add</button>
			</div>

			<div className="app">
				{cars.map(item =>
					<CarItem brand={item.brand} name={item.name} price={item.price} />
				)}
			</div>
		</div>
	)
}

export default App

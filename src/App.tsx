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

	const handleAddButtonClick = () => {
		const car: Car = { brand: Brand.Audi, name: 'A4', price: 20000 };
		const newCars = cars.concat(car);
		setCars(newCars);
	};

	return (
		<div>
			<div>
				<button onClick={handleAddButtonClick}>Add</button>
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

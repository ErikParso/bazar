import { useState } from 'react'
import './App.css'
import { Brand } from './carItem/carItem';
import { CarList } from './carList/carList';
import { ControlPanel } from './controlPanel/controlPanel';

export type Car = {
	brand: Brand;
	name: string;
	price: number;
}

function App() {

	const [cars, setCars] = useState<Car[]>([]);

	const handleAddButtonClick = (car: Car) => {
		const newCars = cars.concat(car);
		setCars(newCars);
	};

	return (
		<div className='app'>
			<ControlPanel onAddCarClick={(car) => handleAddButtonClick(car)}/>
			<CarList cars={cars}/>
		</div>
	)
}

export default App

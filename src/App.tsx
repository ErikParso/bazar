import { useState } from 'react'
import './App.css'
import { CarList } from './carList/carList';
import { ControlPanel } from './controlPanel/controlPanel';
import { Car } from './models/car';

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

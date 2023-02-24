import { CarItem } from "../carItem/carItem";
import { Car } from "../models/car";
import "./carList.css";

type CarListProps = {
	cars: Car[];
}

export const CarList = (props: CarListProps) => {
	return (
		<div className="items">
			{props.cars.map(item =>
				<CarItem brand={item.brand} name={item.name} price={item.price} />
			)}
		</div>
	);
};

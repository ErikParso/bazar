export type Car = {
	brand: Brand;
	name: string;
	price: number;
	image: string;
}

export enum Brand {
	Skoda = 'Skoda', 
	Mercedes = 'Mercedes', 
	Audi = 'Audi', 
	BMW = 'BMW'
}

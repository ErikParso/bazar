import React, { useState } from 'react';

export const Counter = () => {
	const [count, setCount] = useState(0);

	const handleButtonClick = () => {
		setCount(count + 1);
	};

	return (
		<div>
			<span>Count: {count}</span>
			<button onClick={handleButtonClick}>Click me</button>
		</div>
	);
}
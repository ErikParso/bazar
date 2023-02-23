import './App.css'
import { CarItem, Brand } from './carItem/carItem'

function App() {
  return (
    <div className="app">
		<CarItem brand={Brand.Audi} name='A7' price={10000}></CarItem>
		<CarItem brand={Brand.Audi} name='A7' price={10000}></CarItem>
		<CarItem brand={Brand.Audi} name='A7' price={10000}></CarItem>
		<CarItem brand={Brand.Audi} name='A7' price={10000}></CarItem>
		<CarItem brand={Brand.Audi} name='A7' price={10000}></CarItem>
		<CarItem brand={Brand.Audi} name='A7' price={10000}></CarItem>
		<CarItem brand={Brand.Audi} name='A7' price={10000}></CarItem>
		<CarItem brand={Brand.Audi} name='A7' price={10000}></CarItem>
    </div>
  )
}

export default App

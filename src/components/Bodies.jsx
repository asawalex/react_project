import chiar from '../assets/chiar.jpg';
import table from '../assets/table.jpg';
import eventCenter from '../assets/eventCenter.jpg';
import '../style/Bodies.css'
const Bodies = () =>{
    return(
        <div className='bodies'>
        <div className='body'>
        <img src= {chiar}className="img" alt="..." width="34"/>
      <div className="body">
        <h5 className="title">Wheels on Demand</h5>
        <p className="text">Welcome to Wheels on Demand, your go-to solution for hassle-free car rentals. Whether you need a sleek sedan for a business meeting, a spacious SUV for a family trip, or a compact car for a city adventure, we've got you covered. Our fleet is well-maintained and ready to take you wherever you need to go.</p>
      </div>
        <a href="#" className="link">Card link</a>
        <a href="#" className="link">Another link</a>
        </div>
        <div className='body'>
        <img src= {table}className="img" alt="..." width="34"/>
      <div className="body">
        <h5 className="title">Wheels on Demand</h5>
        <p className="text">Welcome to Wheels on Demand, your go-to solution for hassle-free car rentals. Whether you need a sleek sedan for a business meeting, a spacious SUV for a family trip, or a compact car for a city adventure, we've got you covered. Our fleet is well-maintained and ready to take you wherever you need to go.</p>
      </div>
        <a href="#" className="link">Card link</a>
        <a href="#" className="link">Another link</a>
        </div>
        <div className='body'>
        <img src= {eventCenter}className="img" alt="..." width="34"/>
      <div className="body">
        <h5 className="title">Wheels on Demand</h5>
        <p className="text">Welcome to Wheels on Demand, your go-to solution for hassle-free car rentals. Whether you need a sleek sedan for a business meeting, a spacious SUV for a family trip, or a compact car for a city adventure, we've got you covered. Our fleet is well-maintained and ready to take you wherever you need to go.</p>
      </div>
        <a href="#" className="link">Card link</a>
        <a href="#" className="link">Another link</a>
        </div>
        </div>
    )
}
export default Bodies
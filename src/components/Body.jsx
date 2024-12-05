import car from '../assets/car.jpg';
import speeker from '../assets/speeker.jpg';
import tent from '../assets/tent.jpg';
import '../style/Body.css'

const Body = () =>{

    return(
        <div className="items">
          <div className='body'>
  <img src= {car}className="img" alt="..."/>
  <div className="body">
    <h5 className="title">Wheels on Demand</h5>
    <p className="text">Welcome to Wheels on Demand, your go-to solution for hassle-free car rentals. Whether you need a sleek sedan for a business meeting, a spacious SUV for a family trip, or a compact car for a city adventure, we've got you covered. Our fleet is well-maintained and ready to take you wherever you need to go.</p>
  </div>
    <a href="" className="link">Card link</a>
    <a href="#" className="link">Another link</a>
    </div>
    <div className='body'>
    <img src= {speeker}className="img" alt="..." width="34"/>
  <div className="body">
    <h5 className="title">Bookshelf Speakers</h5>
    <p className="text">Welcome to Wheels on Demand, your go-to solution for hassle-free car rentals. Whether you need a sleek sedan for a business meeting, a spacious SUV for a family trip, or a compact car for a city adventure, we've got you covered. Our fleet is well-maintained and ready to take you wherever you need to go.</p>
  </div>
    <a href="#" className="link">Card link</a>
    <a href="#" className="link">Another link</a>
    </div>
    <div className='body'>
    <img src= {tent}className="img" alt="..." width="34"/>
  <div className="body">
    <h5 className="title">Wheels on Demand</h5>
    <p className="text">Welcome to Wheels on Demand, your go-to solution for hassle-free car rentals. Whether you need a sleek sedan for a business meeting, a spacious SUV for a family trip, or a compact car for a city adventure, we've got you covered. Our fleet is well-maintained and ready to take you wherever you need to go.</p>
  </div>
    <a href="#" className="link">Card link</a>
    <a href="#" className="link">Another link</a>
    </div>
    </div>        
    );
}
export default Body
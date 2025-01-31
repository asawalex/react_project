import ExspenseDate from '../components/ExspenseDate'
const Exspense = (event) =>{
   
    return(
        <div className="container">
            <ExspenseDate date={event.date}/>
            <div>{event.id}</div>
            <div>{event.title}</div>
            <div>{event.author}</div>
            <div>{event.description}</div>
        </div>
    )
}
export default Exspense
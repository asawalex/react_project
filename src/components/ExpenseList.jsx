import Example from'../components/Example'

const ExpenseList = (props) =>{
    
    console.log(props)
    if(props.lists.lenght === 0){
        return <p>Result not found</p>;
    }
return(
    <div>
        { props.lists.map((getUserDetails)=>(
        <Example
        key={getUserDetails.id}
        title={getUserDetails.title}
        date={getUserDetails.date}
        author={getUserDetails.author}
        description={getUserDetails.description}
        />
     ))} 
    </div>
)
}
export default ExpenseList
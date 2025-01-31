import ExspenseInput from "./ExspenseInput"

const ExspenseUI = (props) =>{
    
    const submitForm = (userDataInput) =>{
        const data = {
        ...userDataInput,
        id:Math.random().toString()
        }
    props.onAddUserDetails(data);

    };
    
    return(
        <div>
            <ExspenseInput onChangeData={submitForm} />
        </div>
    )
}
export default ExspenseUI
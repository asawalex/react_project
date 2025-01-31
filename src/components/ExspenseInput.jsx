import { useState } from "react";

const ExspenseInput = (props) =>{
   const [userInput,setUserInput] = useState({

        enterTitle:'',
        enterDate:'',
        enterAuthor:'',
        enterDescription:''

    });
    const updateTitle =(event)=>{

        setUserInput((previousState)=>{
            return{
                ...previousState,enterTitle:event.target.value
            }
        });
    };
    const updateDate = (event) =>{

        setUserInput((previousState) =>{

            return{
                ...previousState,enterDate:event.target.value
            }
        });
    };
    const updateAuthor = (event) =>{

        setUserInput((previousState)=>{
            return{
                ...previousState,enterAuthor: event.target.value
            }
        });

    };
    const updateDescription = (event) =>{

        setUserInput((previousState)=>{
            return{
                ...previousState,enterDescription: event.target.value
            }
        });
    };
    const submitHandler = (event) =>{
        event.preventDefault();
        
     const userData ={
        title: userInput.enterTitle,
        date: new Date(userInput.enterDate),
        author: userInput.enterAuthor,
        description: userInput.enterDescription
    
    };
    setUserInput({
        enterTitle:'',
        enterDate:'',
        enterAuthor:'',
        enterDescription:''
    });
    
  props.onChangeData(userData);
    };
    return(
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text"
                    value={userInput.enterTitle}
                     onChange={updateTitle}/>
                </div>
                <div>
                <label htmlFor="date">Date</label>
                <input type="date" 
                min="2022" max="2024"
                 value={userInput.enterDate}
                  onChange={updateDate} />
                </div>
                <div>
                <label htmlFor="author">Author</label>
                <input type="text"
                 value={userInput.enterAuthor}
                  onChange={updateAuthor}/>
                </div>
                <div>
                <label htmlFor="description">Description</label>
                <input type="text"
                 value={userInput.enterDescription}
                  onChange={updateDescription} />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
    )
}
export default ExspenseInput
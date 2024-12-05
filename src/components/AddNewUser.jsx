import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from './slice/register';


const AddNewUser = () =>{

    const dispatch = useDispatch()

    const [userName,setUserName] = useState('')
    const [password,setPassword] = useState('')
    const [email,setEmail] = useState('')
    const [phoneNumber,setPhoneNumber] = useState('')

    const onUserNameChanged = (e) => setUserName(e.target.value)
    const onPasswordChanged = (e) => setPassword(e.target.value)
    const onEmailChanged = (e) => setEmail(e.target.value)
    const onPhoneNumberChange = (e) => setPhoneNumber(e.target.value)

    const onSaveRegister = () =>{

        if(userName && password && email && phoneNumber){
            dispatch(
                registerUser(userName,password,email,phoneNumber)
            );
            setUserName('')
            setPassword('')
            setEmail('')
            setPhoneNumber('')
        }
    }
    const canSave = Boolean(userName)&& Boolean(password)&&Boolean(email)&&Boolean(phoneNumber); 
    console.log("onSaveRegister")

    return (
        <section>
            <div className='input'>
            <h2>register</h2>
            <form>
                <label htmlFor="userName">userName:</label>
                <input type="text"
                        name="registerName"
                        value={userName}
                        placeholder="userName"
                        onChange={onUserNameChanged}
                     />
                     <label htmlFor="password">password:</label>
                     <input type="text"
                            name="registerPssword"
                            value={password}  
                            placeholder="password"
                            onChange={onPasswordChanged}
                      />
                      <label htmlFor="email">email:</label>
                      <input type="text"
                              name="registerEmail"
                              value={email}
                              placeholder="email"
                              onChange={onEmailChanged}
                       />
                       <label htmlFor="phoneNumber">phoneNumber:</label>
                       <input type="text"
                                name="registerPhoneNumber"
                                placeholder="phoneNumber"
                                value={phoneNumber}
                                onChange={onPhoneNumberChange}
                        />
                        <button type="button"
                                onClick={onSaveRegister}
                                disabled={!canSave}
                        >submit</button>
            </form>
            </div>
        </section>
    )
}
export default AddNewUser
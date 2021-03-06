import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { detailsUser, updateUserProfile } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { USER_DETAILS_RESET, USER_UPDATE_PROFILE_RESET } from '../constants/userConstants';

export default function ProfileScreen() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const userSignin = useSelector(state => state.userSignin);
    const {userInfo} = userSignin;

    const userDetails = useSelector(state => state.userDetails);
    const {loading, error, user} = userDetails;

    const userUpdateProfile = useSelector(state => state.userUpdateProfile);
    const {loading:loadingUpdate, error:errorUpdate, success: successUpdate} = userUpdateProfile;

    const dispatch = useDispatch();
    useEffect(()=> {
        if(!user){
            dispatch(detailsUser(userInfo._id));
            dispatch({type: USER_UPDATE_PROFILE_RESET});
        } else {
            setName(user.name);
            setEmail(user.email);
        }
    }, [dispatch, userInfo._id, user])
    const submitHandler = e =>{
        e.preventDefault();
        if(password !== confirmPassword){
            alert("Password and Confirm Password do not match")
        } else{
            dispatch({type: USER_DETAILS_RESET});
            dispatch(updateUserProfile({
                userId: user._id, 
                name,
                email,
                password
            }))
        }
    }
    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>User Profile</h1>
                </div>
                {loading ? 
                (<LoadingBox></LoadingBox>) :
                error ?
                (<MessageBox variant="danger">{error}</MessageBox>) :
                (
                    <>
                    {loadingUpdate && <LoadingBox></LoadingBox>}
                    {errorUpdate && <MessageBox variant="danger">{error}</MessageBox>}
                    {successUpdate && <MessageBox variant="success">Profile updated successfully</MessageBox>}
                    <div>
                        <label htmlFor="name">Name</label>
                        <input id="name" type="text" placeholder="Name" value={name} onChange={e=> setName(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="email">E-Mail</label>
                        <input id="email" type="email" placeholder="E-Mail" value={email} onChange={e=> setEmail(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input id="password" type="password" placeholder="Password" onChange={e=> setPassword(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input id="confirmPassword" type="password" placeholder="Confirm Password" onChange={e=> setConfirmPassword(e.target.value)}/>
                    </div>
                    <div>
                        <label />
                        <button type="submit" className="primary">Submit</button>
                    </div>
                    </>
                )
                }
            </form>
        </div>
    )
}

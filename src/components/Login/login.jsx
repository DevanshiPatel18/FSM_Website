import React, { useState } from 'react';
import './login.css';
import logo from './images/logo.png';
import { login } from '../../auth';
import db from '../../firebase';

const Login = () => {
    const [form, setForm] = useState({
        Username: '',
        Password: ''
    })

    const handleInputChange = (e) => {
        var {name, value} = e.target
        setForm({
            ...form,[name]:value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        var flag = 1;
        db.collection('User').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if(doc.data().Email === form.Username && doc.data().Password === form.Password){
                    flag= 0;
                    alert('hello' + form.Username);
                }
            })
        }).catch(err => alert(err)).then(() => {if(flag === 1) alert('incorrect Credentials')});
    }
        return ( 
            <section className = 'vh-100 overflow-hidden'>
                <div className = 'contianer-fluid'>
                    <div className = 'row login-container'>
                        <div className = 'login'>
                            <div className = 'col-md-5 col-lg-5 col-xl-4 offset-xl-1 login-form'>
                                <div className = 'col' >
                                    <img className = 'img-fluid' src= {logo} alt="logo" />
                                </div>
                                <form onSubmit = {handleSubmit} className = 'mt-4'>
                                        <div className = 'form-outline mb-3 col'>
                                            <input type="email" id='email' className = 'form-control ' placeholder = 'Username' onChange = {handleInputChange}/>
                                        </div>
                                        <div className = 'form-outline mb-3 col'>
                                            <input type="password" id='password' className = 'form-control' placeholder = 'Password' onChange = {handleInputChange}/>
                                        </div>
                                        <div className = 'form-outline mb-3 col'>
                                            <input type="Submit" id='submit' className = 'form-control btn' value = 'Submit'/>
                                        </div>
                                </form>
                            </div>
                            <div className = 'col-md-3 col-lg-4 col-xl-5 image-container'>
                                <img className = 'image-fluid random'src="https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?ixid=MnwxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="alt-img" />    
                            </div> 
                        </div>
                    </div>
                </div>
            </section>
        )
}
 
export default Login;
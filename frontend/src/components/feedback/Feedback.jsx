import React from 'react'
import { useForm } from 'react-hook-form'
import './feedback.css'
import axios from 'axios'
const Feedback = () => {
    const { register, handleSubmit } = useForm()
    const submitHandler = (data) => {
        console.log(data);
        axios.post('http://localhost:3000/enquiry/', {
            email: data.email,
            phoneNumber: data.phoneNumber,
            message: data.message
        }).then((res) => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
    }
    return (
        <div className='main-container'>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div className='touch-text'>
                    <h1>Get in Touch</h1>
                    <h4>leave your message.....</h4>
                </div>
                <div className='form-1'>
                    <div>
                        <h1>Email:</h1>
                        <input {...register("email")} type="email" placeholder='Example@gmail.com' />
                    </div>
                    <div>
                        <h1>Phone:</h1>
                        <input {...register("phoneNumber")} type="text" placeholder='+910123456789' />
                    </div>
                </div>
                <div className='form-2'>
                    <h1>message::</h1>
                    <input {...register("message")} type="text" placeholder='leave your message here.....' />
                </div>
                <div className='submit-btn'>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Feedback
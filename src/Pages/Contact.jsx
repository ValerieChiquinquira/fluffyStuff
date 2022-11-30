import React from 'react';
import { useForm } from 'react-hook-form';


//components
import Footer from '../Components/Footer'
import Header from '../Components/Header'

//styles
import  '../Styling/Contact.css';


const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <div>
        <Header/>
        <h1 className='text-center'>Contact Us</h1>
        
        <div className=" ">
          <div className="big-card">
          <form onSubmit={handleSubmit(onSubmit)} className="card">
      <input type="text" placeholder="Name" {...register} className="text-center"/>
      <input type="email" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} className="text-center"/>
      <textarea type="textarea" placeholder="What's on your mind?"{...register("Questions", {})} className="text-center"/>
      </form>

      <input type="submit" />
        </div>
       
        </div>
        
   
        <Footer/>
    </div>
  )
}

export default Contact



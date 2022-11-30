import React from 'react';
import { useForm } from 'react-hook-form';

//components
import Footer from '../Components/Footer'
import Header from '../Components/Header'

//images

//styling
const Reservations = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  return (
    <div>
        <Header/>
        <h1 className='text-center'>Reservations</h1>
        <div className="big-card">
        <form onSubmit={handleSubmit(onSubmit)} className="card">
            <input type="text" placeholder="Name" {...register} />
            <input type="numbers" placeholder="Contact Number" {...register} />
            <input type="textarea" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
            <input type="select" placeholder="Indoor or Outdoor" {...register} />
            <input type="numbers" placeholder="Zip code of the Venue" {...register} />
            <input type="date" placeholder="Date" {...register} />

            <input type="submit" />
        
        
        </form>

        </div>
        <Footer/>
    </div>
  )
}

export default Reservations

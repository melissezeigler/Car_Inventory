import Button from "./Button"
import Input from "./Input"

import { useForm } from "react-hook-form"
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux";
import { chooseCar_make, chooseCar_model, chooseCar_year, chooseCar_mileage } from "../redux/slices/RootSlice";

// interfaces

interface CarFormProps {
  id?: string[]
}

const CarForm = (props:CarFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id)
    console.log(data)

    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Update: ${ data } ${ props.id }`)  
      setTimeout( () => {window.location.reload()}, 1000);
      event.target.reset()
    } else {
      // Use dispatch to update our state in our store
      dispatch(chooseCar_make(data.car_make));
      dispatch(chooseCar_model(data.car_model));
      dispatch(chooseCar_year(data.car_year));
      dispatch(chooseCar_mileage(data.car_mileage));

      server_calls.create(store.getState())
      setTimeout( () => {window.location.reload()}, 1000);
    }
  }  

  return (

    //TODO - add Handle function
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <label htmlFor="car_make">Car Make</label>
            <Input {...register('car_make')} name='car_make' placeholder="Car Make"/>
        </div>
        <div>
            <label htmlFor="car_model">Car Model</label>
            <Input {...register('car_model')}  name='car_model' placeholder="Car Model"/>
        </div>
        <div>
            <label htmlFor="car_year">Car Year</label>
            <Input {...register('car_year')}  name='car_year' placeholder="Car Year"/>
        </div>
        <div>
            <label htmlFor="car_mileage">Car Mileage</label>
            <Input {...register('car_mileage')}  name='car_mileage' placeholder="Car Mileage"/>
        </div>
        <div className="flex p-1">
          <Button
            className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
            >
              Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default CarForm

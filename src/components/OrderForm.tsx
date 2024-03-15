import Input from "./Input"
import { useForm } from "react-hook-form"
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseWhiskey, chooseProof, chooseOrigin, chooseDistillery } from "../redux/slices/RootSlice"

interface WhiskeyFormProps {
  id?: string[]
}

const OrderForm = (props:WhiskeyFormProps) => {
  const {register, handleSubmit} = useForm({})
  const dispatch = useDispatch();
  const store = useStore();
  
  const onSubmit = (data: any, event: any) => {

    
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${data} ${ props.id }`);
      setTimeout(() => {window.location.reload()}, 1000);
      event.target.reset()      
    }   else {
      dispatch(chooseWhiskey(data.whiskey));
      dispatch(chooseOrigin(data.origin));
      dispatch(chooseProof(data.proof));
      dispatch(chooseDistillery(data.distillery))

      server_calls.create(store.getState())
      setTimeout( () => (window.location.reload()), 1000);
    }
  }

  return (
    <div>
      <form onSubmit={(handleSubmit(onSubmit))}>
        <div>
          <label htmlFor='whiskey'>Whiskey Name</label>
          <Input {...register('whiskey')} name='whiskey' placeholder='Whiskey'/>
        </div>
        <div>
          <label htmlFor='origin'>Origin</label>
          <Input {...register('origin')} name='origin' placeholder='Origin'/>
        </div>
        <div>
          <label htmlFor='proof'>Proof</label>
          <Input {...register('proof')} name='proof' placeholder='Proof'/>
        </div>
        <div>
          <label htmlFor='distillery'>Distillery</label>
          <Input {...register('distillery')} name='distillery' placeholder='Distillery'/>
        </div>
        <div className="flex p-1">
          <button className='flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white'>
          Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default OrderForm


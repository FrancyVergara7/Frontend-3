import { useState } from 'react';
import { Input } from './components/Input';

export const Parcial = () => {
  const [formValues, setFormValues] = useState({name:'', password:''});
  const [errors, setErrors] = useState({name: '', password:''});
  const [isFormValid, setFormValid] = useState(false);

  const onInputNameChange = e => {
  const input = e.target.value;

  if(input.trim().length < 3){
    setErrors({name: 'El nombre debe contener mas de tres (3) caracteres'});
    return;
  }

  setErrors({name: ''});
  setFormValues({...formValues, name: input});
};
const onInputPasswordChange = e => {
  const input = e.target.value;

  if(input.trim().length < 6){
    setErrors({password: 'El password debe contener mas de seis (6) caracteres'});
    return;
  }
  setErrors({password: ''});
  setFormValues({...formValues, password: input});
};

const onFormSubmit = (e,values) => {
  e.preventDefault();

  if(formValues.name && formValues.password){

  }
  console.log(values);
};

return(
  <>
    <h1>Formulario Parcial</h1>
    <form onSubmit={e => onFormSubmit(e, formValues)}>

        <Input
          forhtml="name"
          text="name"
          type="text"
          name="name"
          onChange={onInputNameChange}
        />
      {errors.name?.length > 0 && <span className="text-red-500">{errors.name}</span>}
      <Input
          forhtml="password"
          text="password"
          type="text"
          name="password"
          onChange={onInputPasswordChange}
        />
      
      <button
        type="submit"
        className="border-2">
          Enviar
      </button>
    
    </form>
    {isFormValid && (
      <div>
        <h1>{formValues.name}</h1> <h2>{formValues.password}</h2>
      </div>
    )
    }
    </>

);
  };

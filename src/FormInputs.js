// different input values on form for Madlib
const FormInputs = ({id, type, value, onChange}) => {

  return(
    <input
        id={id}
        type={type}
        name={id}
        placeholder={id}
        value={value}
        onChange={onChange}
        required
      />
  )
}

export default FormInputs
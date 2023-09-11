import {useState} from "react";
const useForm = (initialFormState) => {
    //setting the null value to the state
    const [values,setValues] = useState(initialFormState);
    // saving the values in the object format using spread operator 
    const handleValues = (e) =>{
        const {name, value} = e.target;
        setValues({...values,[name]:value})
    }
    const resetForm = () => {
        setValues(initialFormState);
    };
    return [values, handleValues, resetForm]
}
export default useForm
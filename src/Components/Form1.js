import React from 'react';
import useForm from '../CustomHook/useForm';

const Form1 = () => {
    //setting initial state to the fields
    const initialFormState = {
        names: "",
        age: "",
        department: "",
        salary: "",
    };
    // assigning useForm hoot to the constant
    const [values, handleValues, resetForm] = useForm(initialFormState)
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted with values:', values);
        resetForm();
    }
    return (
        <div class="container">
            <div className="row mb-2">
                <div className="col-lg-12 mt-2 ">
                    <h1 className="text-center p-3 bg-success rounded-3 mt-2 shadow-lg">Employee Details</h1>
                    <form className="row g-3 bg-dark text-light p-3 mt-2 rounded-3 shadow-lg" onSubmit={handleSubmit}>
                        <div className="col-md-6">
                            <div className="form-val">
                                <label htmlFor="names" className="form-label">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name='names'
                                    value={values.names}
                                    className="form-control"
                                    id="names"
                                    onChange={handleValues}
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-val">
                                <label htmlFor="age" className="form-label">
                                    Age
                                </label>
                                <input
                                    type="number"
                                    value={values.age}
                                    className="form-control"
                                    id="age"
                                    name='age'
                                    onChange={handleValues}

                                />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-val">
                                <label htmlFor="department" className="form-label">
                                    Department
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={values.department}
                                    onChange={handleValues}
                                    name="department"
                                />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-val">
                                <label htmlFor="salary" className="form-label">
                                    Salary
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    value={values.salary}
                                    name="salary"
                                    onChange={handleValues}
                                />
                            </div>
                        </div>
                        <input type="hidden" id="employeeId" />
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Form1;

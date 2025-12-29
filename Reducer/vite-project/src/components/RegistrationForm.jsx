import React, { useReducer } from "react";
import { formReducer, initialState } from "./reducer/formReducer";
import "../styles/form.css";

function RegistrationForm() {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const { formValues, step, isSubmitted } = state;

  const handleChange = (e) =>
    dispatch({ type: "UPDATE_FIELD", field: e.target.name, value: e.target.value });

  return (
    <div className="form-container">
      <h2>Multi-Step Registration Form</h2>
      <p>Step {step} of 3</p>

      {!isSubmitted ? (
        <>
          {step === 1 && (
            <div>
              <input name="name" placeholder="Name" value={formValues.name} onChange={handleChange} />
              <input name="email" placeholder="Email" value={formValues.email} onChange={handleChange} />
              <button disabled={!formValues.name || !formValues.email}
                      onClick={() => dispatch({ type: "NEXT_STEP" })}>Next</button>
            </div>
          )}

          {step === 2 && (
            <div>
              <input name="username" placeholder="Username" value={formValues.username} onChange={handleChange} />
              <input type="password" name="password" placeholder="Password"
                     value={formValues.password} onChange={handleChange} />
              <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>Back</button>
              <button disabled={!formValues.username || !formValues.password}
                      onClick={() => dispatch({ type: "NEXT_STEP" })}>Next</button>
            </div>
          )}

          {step === 3 && (
            <div>
              <h3>Review Your Details</h3>
              <p>Name: {formValues.name}</p>
              <p>Email: {formValues.email}</p>
              <p>Username: {formValues.username}</p>
              <p>Password: {formValues.password}</p>
              <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>Back</button>
              <button onClick={() => dispatch({ type: "SUBMIT_FORM" })}>Submit</button>
            </div>
          )}
        </>
      ) : (
        <div>
          <h3>🎉 Registration Successful!</h3>
          <button onClick={() => dispatch({ type: "RESET_FORM" })}>Reset Form</button>
        </div>
      )}
    </div>
  );
}

export default RegistrationForm;

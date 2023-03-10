import {useState } from "react";

const Register = () => {
  const [message, setMessage] = useState(null);
  const [errorMessageClass, setErrorMessageClass] = useState();
  const [formValues, setFormValues] = useState({
    fname: "",
    lname: "",
    address: "",
    accountType: "",
  });

  const [formErrors, setFormErrors] = useState({
    fname: "",
    lname: "",
    address: "",
    accountType: "",
  });
    const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = (values) => {
    const errors = {}
    if(!values.fname) {
      errors.fname = "First name is required";
    }
    if(!values.lname) {
      errors.lname = "Last name is required";
    }

    if(!values.address) {
      errors.address = "Address is required";
    }
    if(!values.accountType) {
      errors.accountType = "Account type is required";
    }

    return errors;
  }
  let handleSubmit = async (e) => {
    e.preventDefault();

    setFormErrors(validate(formValues));
    if((Object.keys(formErrors).length) > 0) {
      return false
    }
    const formData = new FormData(e.target);
    try {
      let res = await fetch("http://localhost/createCustomerAccount", {
        method: "POST",
        body: JSON.stringify({
          fname: formData.get("fname"),
          lname: formData.get("lname"),
          address: formData.get("address"),
          accountType: formData.get("accountType"),
        }),
      });
      let resJson = await res.json();
      if (res.status === 201) {
        setFormValues({fname: "", lname: "", address: "", accountType: "",});
        setErrorMessageClass("success-message");
        setMessage(
          `Congratulations, Your Account Has Been Successfully Created. Account id is ${resJson.id}`
        );
      } else {
        setErrorMessageClass("error-message");
        setMessage("Something went wrong");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-12 col-lg-9 col-xl-7">
            <div className="card shadow-2-strong card-registration">
              <div className="card-body p-4 p-md-5">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Registration </h3>
                <form name="registration" onSubmit={handleSubmit}>
                  {message != null ? (
                    <h6 className={errorMessageClass}>{message}</h6>
                  ):''}
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="htmlForm-outline">
                        <label className="htmlForm-label" htmlFor="firstName">
                          First Name
                        </label>
                        <input
                          type="text"
                          onChange={handleChange}
                          value={formValues.fname}
                          name="fname"
                          id="firstName"
                          className="htmlForm-control form-control htmlForm-control-lg"
                        />
                        <label className="error-message">{formErrors.fname}</label>
                      </div>
                    </div>
                    
                    <div className="col-md-6 mb-4">
                      <div className="htmlForm-outline">
                        <label className="htmlForm-label" htmlFor="lastName">
                          Last Name
                        </label>
                        <input
                          type="text"
                          onChange={handleChange}
                          value={formValues.lname}
                          name="lname"
                          id="lastName"
                          className="htmlForm-control  form-control htmlForm-control-lg"
                        />
                        <label className="error-message">{formErrors.lname}</label>

                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="htmlForm-outline">
                        <label className="htmlForm-label" htmlFor="address">
                          Address&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </label>
                        <input
                          type="text"
                          id="address"
                          onChange={handleChange}
                          value={formValues.address}
                          name="address"
                          className="htmlForm-control form-control htmlForm-control-lg"
                        />
                        <label className="error-message">{formErrors.address}</label>

                      </div>
                    </div>
                     <div className="col-md-6 mb-4">
                      <div className="htmlForm-outline">
                        <label
                          className="htmlForm-label"
                          htmlFor="account-type"
                        >
                          Account type
                        </label>
                        <div>
                        <label for='current-account'>Current</label>
                          &nbsp;&nbsp;
                          <input
                            value="open"
                            className="htmlForm-check-input"
                            type="radio"
                            name="accountType"
                            id="current-account"
                            onChange={handleChange}
                            
                          />
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          <label for='saving-account'>Saving</label>
                          &nbsp;
                          <input
                            className="htmlForm-check-input"
                            type="radio"
                            name="accountType"
                            value="saving"
                            id="saving-account"
                            onChange={handleChange}
                          />
                          <label className="error-message">{formErrors.accountType}</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-2">
                    <input
                      className="btn btn-primary btn-lg"
                      type="submit"
                      value="Submit"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;

import { useState } from "react";

const ValidateCard = () => {

  const [creditCard, setCreditCard] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let username = document.getElementById("username").value;
   
    const requestRes = await fetch("http://localhost/getCreditCardFromUserName.php?username="+username);
    const response = await requestRes.json();
    console.log(response);
    if(requestRes.ok) {
      setCreditCard(response.cardno);
    }
  }

  return (
    <>
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-lg-9 col-xl-7">
              <div className="card shadow-2-strong card-registration">
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Validate card</h3>
                  <form name="registration" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="htmlForm-outline form-group">
                          <label className="htmlForm-label" htmlFor="username">
                            Username
                          </label>
                          <input
                            type="text"
                            name="username"
                            value="niralisamadhan"
                            id="username"
                            className=" form-control htmlForm-control htmlForm-control-lg"
                          />
                        </div>
                      </div>
                      {creditCard ? (
                      <div className="col-md-6 mb-4">
                        <div className="htmlForm-outline form-group">
                          <label className="htmlForm-label" htmlFor="creditCard">
                            Credit Card Number:
                          </label>
                          <input
                            type="text"
                            name="creditCard"
                            value={creditCard}
                            id="creditCard"
                            className="form-control htmlForm-control htmlForm-control-lg"
                          />
                        </div>
                      </div>
                      ):''}
                    </div>
                    <div className="mt-4 pt-2">
                      <input
                        className="btn btn-primary btn-lg"
                        type="submit"
                        value="Generate Card No"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ValidateCard;

const createAccount =() => {
const handleChange = (event) => {
    const { name, value } = event.target;
    setCustomerDetails({ ...customerDetails, [name]: value });
  };
  let handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      let res = await fetch("http://localhost:3000/apiaccounts", {
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
        setCustomerDetails({
          fname: "",
          lname: "",
          address: "",
          accountType: "",
        });
        setAccount("");
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
}

export default createAccount;
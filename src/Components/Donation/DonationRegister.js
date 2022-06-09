import React, { useState } from "react";
import "./DonationRegister.scss";
function DonationRegister() {
  const [userdata, setuserData] = useState({
    username: "",
    email: "",
    phone: "",
  });
  const [formvalue, setFormvalue] = useState({
    name: "",
    email: "",
    phone: "",
    amount: "",
    message: "",
  });

  const handlevalidation = (e) => {
    const { name, value } = e.target;
    setFormvalue({ ...formvalue, [name]: value });
  };

  const InputHandel = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    console.log(name, value);

    setuserData({ ...userdata, [name]: value });
  };
  return (
    <>
      <div className="contact-body">
        <div className="donateform">
          <form action="">
            <div className="form-group">
              <label htmlFor="name-input">Reciver Name :</label>
              <input
                type="text"
                name="name"
                value={formvalue.name}
                onChange={handlevalidation}
                placeholder="Enter Receiver Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone-input">Phone :</label>
              <input
                type="text"
                name="phone"
                value={formvalue.phone}
                onChange={handlevalidation}
                placeholder="Enter Receiver Phone Number"
              />
            </div>
            <div className="form-group">
              <label htmlFor="amount-input">Amount:</label>
              <input
                type="text"
                name="amount"
                value={formvalue.amount}
                onChange={handlevalidation}
                placeholder="Enter Asking Amount"
              />
            </div>
            <div className="form-file">
              <label htmlFor="phone-input">Add Photo :</label>

              <input type="file" name="img" id="img" />
            </div>
            <div className="form-group">
              <label htmlFor="address-input">Reason:</label>
              <textarea
                name="message"
                value={formvalue.message}
                onChange={handlevalidation}
                placeholder="Write a reason"
              />
            </div>
            <button className="BUTTON" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default DonationRegister;

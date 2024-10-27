import "../css/checkout.css";

function Check_Out() {
  return (
    <div className="checkout">
      <div className="content col-xl-4 col-md-6 col-sm-10">
        <form action="#">
          <label htmlFor="firstName">First Name</label>
          <input type="text" name="fristName"></input>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" name="lastName"></input>
          <label htmlFor="email">Email</label>
          <input type="email" name="email"></input>
          <label htmlFor="">Phone Number</label>
          <input type="text" name="email"></input>
          <select name="payment">
            <option value="cash">Cash</option>
            <option value="instpay">InstPay</option>
            <option value="vodafone">Vodafone</option>
            <option value="fawrrey">Fawrrey</option>
          </select>
          <div className="btn">Pay</div>
        </form>
      </div>
    </div>
  );
}

export default Check_Out;

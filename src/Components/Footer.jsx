
function Footer() {
  return (
    <>
    <footer>
      <div className="footers">
        <h3>Exclusive</h3>
        <h4>Subscribe</h4>
        <li>Get 10% off your first order</li>
        <div className="d-flex">
          <input type="text" placeholder="Enter your email" />
          <button><i className="fa fa-send" ></i></button>
        </div>
      </div>
      <div className="footers">
        <h4>Support</h4>
        <li>111 Bijoy sarani, Dhaka, <br />  DH 1515, Bangladesh.</li>
        <li>exclusive@gmail.com</li>
        <li>+88015-88888-9999</li>
      </div>
      <div className="footers">
        <h4>Account</h4>
        <li>My Account</li>
        <li>Login / Register</li>
        <li>Cart</li>
        <li>Wishlist</li>
        <li>Shop</li>
      </div>
      <div className="footers">
        <h4>Quick Link</h4>
        <li>Privacy Policy</li>
        <li>Terms Of Use</li>
        <li>FAQ</li>
        <li>Contact</li>
      </div>
      <div className="footers">
        <h4>Download</h4>
        <h5>Save $3 with App New User Only</h5>
        <img src="./storelogo.jpg" alt="" />
        <div className="footerIcons">
          <i className="fa fa-facebook" ></i>
          <i className="fa fa-twitter" ></i>
          <i className="fa fa-instagram" ></i>
          <i className="fa fa-linkedin" ></i>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer
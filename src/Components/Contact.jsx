
function Contact() {
  return (
    <div className="containe">
    <p>Home / Contact</p>
    <div className="contact" >
      <div className="contactLeft">
        <div className="contactIcons">
          <i className="fa fa-phone" ></i>
          <h4>Call To Us</h4>
        </div>
        <p>We are available 24/7, 7 days a week.</p>
        <p>Phone: +8801611112222</p>
        <hr />
        <div className="contactIcons">
          <i className="fa fa-address-book" ></i>
          <h4>Write To US</h4>
        </div>
        <p>Fill out our form and we will contact <br /> you within 24 hours.</p>
        <p>Emails: customer@exclusive.com</p>
        <p>Emails: support@exclusive.com</p>
      </div>
      <div className="contactRight">
        <input type="text" placeholder="Your Name" />
        <input type="text" placeholder="Your Email" />
        <input type="text" placeholder="Your Phone" />
        <textarea cols="30" rows="10" placeholder="Your Massage"></textarea>
        <div>
          <button>Submit</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Contact
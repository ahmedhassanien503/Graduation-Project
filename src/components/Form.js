import React, {Component} from "react";


class Form extends Component {
    render(){
   return(
  

<div className="contact-form-area container">
<div className="row">
    <div className="col-12 col-lg-12">
        <div className="contact-form-sidebar item wow fadeInUpBig" data-wow-delay="0.3s">
        </div>
    </div>
    <div className="col-12 col-md-9 item">
        <div className="contact-form wow fadeInUpBig" data-wow-delay="0.6s">
            <h2 className="contact-form-title mb-30">للاستفسارات !</h2>
    
            <form action="#" method="post">
                <div className="form-group">
                    <input type="text" className="form-control" id="contact-name" placeholder="Name" />
                </div>
                <div className="form-group">
                    <input type="email" className="form-control" id="contact-email" placeholder="Email" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" id="contact-website" placeholder="Website" />
                </div>
                <div className="form-group">
                    <textarea className="form-control" name="message" id="message" cols="30" rows="10" placeholder="Message"></textarea>
                </div>
                <button type="submit" className="btn contact-btn">Send Message</button>
            </form>
        </div>
    </div>
</div>
</div>



);
}
  }


export default Form;
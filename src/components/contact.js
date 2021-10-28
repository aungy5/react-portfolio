import React from 'react';

const titleStyle = {
  backgroundColor: 'red',
  padding: '20px'
}

const linkStyle = {
  color: 'red',
  padding: '20px'
}

const padding = {
  padding: '10px'
}

function Contact() {
    return(
        <div class="contact">
        <h1 style={titleStyle}>Contact Me</h1>
        <form>
          <div class="form-group" style={padding}>
            <label for="name-input">Your name:</label>
            <input type="text" class="form-control" id="name-input" placeholder="Leave your name" />
          </div>
          <div class="form-group" style={padding}>
            <label for="comment-input">Your message:</label>
            <textarea name="comment" id="comment-input" placeholder="Enter your message here..." class="form-control"></textarea>
          </div>
          <button class="btn btn-dark">Submit Message</button>
        </form>
        <p style={padding}>Alternatively, please feel free to contact me directly thru either of the avenues below. </p>
          {/* <p>Email: aungvary5@gmail.com</p>
          <p>Phone: 610-608-0403</p> */}
          <h5>
            Call me at <a href="tel:610.608.0403" style={linkStyle}>610-608-0403</a>
          </h5>
          <h5>
            Email me at <a href="mailto:aungvary5@gmail.com" style={linkStyle}>aungvary5@gmail.com</a>
          </h5>
      </div>
    )
}

export default Contact;
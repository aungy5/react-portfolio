import React from 'react'; 

const imgStyle = {
    width: '75px',
    height: '75px',
    padding: '10px'
}

const copyStyle = {
    padding: '10px',
    fontWeight: 'bold'
}

function Footer() {
    return(
        <div class="footer" id="footer">
            <a href="https://www.linkedin.com/in/aungy/"><img src="https://github.com/aungy5/react-portfolio/raw/main/public/images/linkedin.png" alt="LinkedIn" style={imgStyle}></img></a>
            <p style={copyStyle}>2021 614 Ventures</p>
            <a href="https://github.com/aungy5?tab=repositories"><img src="https://github.com/aungy5/react-portfolio/raw/main/public/images/github.jpg" alt="Github" style={imgStyle}></img></a>
        </div>
    )
}

export default Footer;
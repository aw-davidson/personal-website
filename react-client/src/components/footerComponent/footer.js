import React, { Component } from 'react';
import Typography from 'material-ui/Typography';


const Footer = () => {
  return (
    <div className="footer">
      <Typography variant="display3" align="center">
        Contact
        </Typography>
      <Typography variant="display1" align="center">
        davidson9076@gmail.com
        </Typography>
      <Typography variant="display1" align="center">
        773-575-8237
        </Typography>
      <Typography variant="display1" align="center">
        <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/alec-davidson">
          linkedin.com/in/alec-davidson
          </a>
      </Typography>
      <Typography variant="display1" align="center">
        <a rel="noopener noreferrer" target="_blank" href="https://github.com/aw-davidson">
          github.com/aw-davidson
        </a>
      </Typography>
    </div>
  )
}

export default Footer;

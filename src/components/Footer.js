import React from 'react';

class FooterPage extends React.Component {
  render() {
    return (
      <div id="footer">
        <div>
          <h5>Contact Us </h5>
          <p>Address: 1100 Vermont Ave NW #700, Washington, DC 20005</p>
          <p>Phone: 1-800-999-9999</p>
          <p>Email: contact@govewisely.com</p>
        
        </div>
        <div>
            &copy; {new Date().getFullYear()} Copyright: {"Hello Healthcare.gov"}
        </div>
      </div>
    );
  }
}

export default FooterPage;
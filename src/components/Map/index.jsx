import React, { Component } from 'react';

class SimpleMap extends Component {
  render() {
    return (
      // Important! Always set the container height explicitly
      <div className={this.props.className}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2251.6150908963155!2d37.8454563162219!3d55.64350998052426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDM4JzM2LjYiTiAzN8KwNTAnNTEuNSJF!5e0!3m2!1sen!2sru!4v1546531559497" width="100%" height="600"></iframe>
      </div>
    );
  }
}

export default SimpleMap;

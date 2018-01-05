import React from 'react';

import PropTypes from 'prop-types';


class FlickrComponent extends React.Component {

  getImage = () => {



  }

  showLoader = () => {


  }

  hideLoader = () => {


  }




  render() {

    const {query, width, height, interval, idhtml, interval_text} = this.props;

          return (
            <div>
            <div id={idhtml} style={{width: width, height:height}} >
              <img />
            </div>
            <input type="text" name="interval" id="display-interval" />
            <label for='display-interval'>{interval_text}</label>
          </div>
        )
      }
}

export default FlickrComponent;

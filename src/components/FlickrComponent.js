import React from 'react';

//import PropTypes from 'prop-types';

import FlickrApi from './api/flickr-api';


class FlickrComponent extends React.Component {

 constructor(props) {

      super(props)

        this.getImage("szc")

  }

  getImage = (query) => {

    FlickrApi.getImage(query);



  }

  showLoader = () => {


  }

  hideLoader = () => {


  }


  //getImage(query)




  render() {

          const { query, width, height, interval, idhtml, interval_text } = this.props;

          return (
            <div>
            <div id={idhtml} style={{width: width, height:height}} >
              <img />
            </div>
            <input type="text" name="interval" id="display-interval" />
            <label htmlFor='display-interval'>{interval_text}</label>
          </div>
        )
      }
}

export default FlickrComponent;

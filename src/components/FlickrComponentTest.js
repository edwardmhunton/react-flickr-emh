import React from 'react';

import PropTypes from 'prop-types';

import FlickrComponent from './FlickrComponent';


class FlickrComponentTest extends React.Component {



  render (){

    const props = {
      width: 100,
      height: 100,
      query: "cats",
      idhtml: 'flickr_component',
      interval: 5,
      interval_text: 'interval'




    }


    return (

          <FlickrComponent props={props} />

    )



  }


}


export default FlickrComponentTest;

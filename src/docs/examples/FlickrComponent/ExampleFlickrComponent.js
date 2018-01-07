import React from 'react';

import FlickrComponent from 'react-flickr-emh/FlickrComponent';

/* example of the FlickrComponent */


class ExampleFlickrComponent extends React.Component {



  render () {

    const props = {

      "width": 200,
      "height": 200,
      "query": "cats",
      "id": 'flickr_component',
      "interval_text": 'Interval (sec)',
      "flickr_key": "e9a6985a33854d68692b99b0691aeb6b" //use your own flickr key

    }


    return (

          <FlickrComponent {...props} />

    )
  }


}


export default ExampleFlickrComponent;

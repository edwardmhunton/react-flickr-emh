import React from 'react';
import PropTypes from 'prop-types';

import FlickrApi from './api/flickr-api';
import SelectInput from './common/SelectInput';
import Loader from './common/loader';

/** Flickr component to render an image to the page at specified intervals */

class FlickrComponent extends React.Component {

state = {url:'', interval:5000, loaded:'Loading', timeout:null}

  options = [
    {id: '3',value: 3000, text:'3'},
    {id: '4',value: 4000, text:'4'},
    {id: '5',value: 5000, text:'5'},
    {id: '6',value: 6000, text:'6'},
    {id: '7',value: 7000, text:'7'},
    {id: '8',value: 8000, text:'8'},
    {id: '9',value: 9000, text:'9'},
    {id: '10',value: 10000, text:'10'}
  ]




  getImage = () => {
    this.setState({loaded: 'Loading'});
    FlickrApi.getImage(this.props.query, this.props.flickr_key).then(photo => {

              if(photo.photos.photo){

                  let ran = Math.floor((Math.random() * 9) + 0); // to have a better cahnce of getting a fresh image each time

                  this.setState({loaded: ''});
                  this.setState_Url(photo.photos.photo[ran].url_s);

                  if(!this.timeout) { // dont create a new interval if one exists
                    this.startInterval(this.getImage);
                  }
              }
            }).catch(error => {

            throw(error);

          })
        }

  startInterval = (func) => {

    var self = this;

    this.timeout = setInterval(function () {

        func();

   }, this.state.interval);
 }

 clearInterval = () => {

   if(this.timeout){
     clearInterval(this.timeout);
   }

 }

 onChange = (event) => {
    if(event.target.value.length > 0){
      this.setState_Interval(event.target.value, () => {
        this.clearInterval();
        this.startInterval(this.getImage);
      });
    }
  }

  setState_Url = (url) => {
    this.setState({url: url});
  }

  setState_Interval = (num, callback) => {
    this.setState({interval: num}, () => callback()); // avpids setState timing issues
  }

  componentDidMount = function(){

    if(!this.props.test){this.getImage();}

  }
  render() {

          const { width, height, id, interval_text } = this.props;
          return (
            <div>
              <div style={{width: width, height:height}} id={id} >
                <Loader styles={{display: 'block', position:'absolute', paddingTop:height/2, paddingLeft:(width/2)-25, color:'#FFF'}} loaded={this.state.loaded} />
                <img src={this.state.url} id={id+'_image'} alt='flickr_img' style={{width: width, height:height}} />
              </div>
              <SelectInput name="interval" select_styles={{margin:'5px'}} label={interval_text} label_styles={{float: 'left', padding:'5px'}} value={this.state.interval} defaultValue={"Choose interval"} defaultOption={"Choose interval"} options={this.options} onChange={this.onChange.bind(this)}/>
           </div>
        )
      }
}

FlickrComponent.propTypes = {
  /** The search term to use when building the api call to Flickr*/
  query: PropTypes.string,
  /** html div id for reference by parent application */
  id: PropTypes.string.isRequired,
  /** The text next to select input */
  interval_text: PropTypes.string,
  /** Your Flickr key */
  flickr_key: PropTypes.string.isRequired,
  /** Height of component  */
  width: PropTypes.number,
  /** Width of component  */
  height: PropTypes.number,
  /** Inishial interval duration  */
  interval: PropTypes.number

}

FlickrComponent.defaultProps = {
  query: 'cats',
  id:'flickr_component',
  interval_text: 'Interval (sec)',
  flickr_key: 'e9a6985a33854d68692b99b0691aeb6b',
  width: 200,
  height:200,
  interval: 5000
}

export default FlickrComponent;

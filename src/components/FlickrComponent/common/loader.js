import React from 'react';
import PropTypes from 'prop-types';


const Loader = (props) => {

return (<div className='loader' style={props.styles}>{props.loaded}</div>)

}

Loader.propTypes = {
  styles: PropTypes.object,
  loaded: PropTypes.string
}

export default Loader;

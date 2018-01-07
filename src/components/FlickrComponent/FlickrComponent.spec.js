import React from 'react';
import {shallow, mount, render} from 'enzyme';
import renderer from 'react-test-renderer';

import FlickrComponent from './FlickrComponent';



describe('FlickrComponent', () => {

  const flickr_key = 'e9a6985a33854d68692b99b0691aeb6b';


  test('New value of state.interval reflects new value', () => {

    const wrapper = shallow(<FlickrComponent test={true} flickr_key={flickr_key}/>);
    const previousInterval = wrapper.instance().state.interval;
    wrapper.instance().setState_Interval(3000, function(){return});
    const newInterval = wrapper.instance().state.interval;

    expect(newInterval).not.toEqual(previousInterval);



  });

  test('New value of state.url reflects new value', () => {

    const wrapper = shallow(<FlickrComponent test={true} flickr_key={flickr_key}/>);
    const previousUrl = wrapper.instance().state.url;
    wrapper.instance().setState_Url("www.google.com", function(){return});
    const newUrl = wrapper.instance().state.url;

    expect(newUrl).not.toEqual(previousUrl);



  })

  test('That a new interval is created', () => {

    const wrapper = shallow(<FlickrComponent test={true} flickr_key={flickr_key}/>);
    const beforeTimeout = wrapper.instance().timeout;
    wrapper.instance().startInterval(function(){return});
    const afterTimeout = wrapper.instance().timeout;

    expect(beforeTimeout).not.toEqual(afterTimeout);



  });

  test('That componet is created', () => {

    const wrapper = shallow(<FlickrComponent test={true} flickr_key={flickr_key}/>);

    expect(wrapper.find('#flickr_component')).toHaveLength(1);

  });

  test('That img element is created', () => {

    const wrapper = shallow(<FlickrComponent test={true} id='flickr_component' flickr_key={flickr_key}/>);

    expect(wrapper.find('#flickr_component_image')).toHaveLength(1);

  });

  test('That loader div is created', () => {

    const wrapper = mount(<FlickrComponent test={true} id='flickr_component' flickr_key={flickr_key}/>);

    expect(wrapper.find('.loader')).toHaveLength(1);

  })

});

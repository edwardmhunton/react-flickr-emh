import React from 'react';

const SelectInput = ({name, label, onChange, defaultOption, value, error, options, label_styles, select_styles}) => {

return (
<div className="form-group">

<label style={label_styles} htmlFor={name}>{label}</label>
<div className="field">
  <select style={select_styles} name={name} value={value} onChange={onChange} className="form-control">
    <option value="">{defaultOption}</option>
    {options.map((option) => {
      return <option key={option.id} value={option.value}>{option.text}</option>;
      })
    }
  </select>
  {error && <div className="alert alert-danger">{error}</div>}

</div>

</div>


);
};
export default SelectInput;

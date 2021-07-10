import React from "react";
 
const Input = ({ name, label, error, focused, ...rest }) => {
  // console.log( name, label, error, focused, rest );
  return (
    <div className="form-group">
      
      <label htmlFor={name}>{label}</label>
      
      <input {...rest} name={name} id={name} className="form-control" autoFocus={focused==='focused' ? true : false} />
      
      {error && <span className="text-danger">{error}</span>}
    </div>
  );
};
 
export default Input;
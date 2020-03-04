import React, { useState } from "react";

const InputForm = ({ ShowLabel = false, defaultValue, onSubmit }) => {
  const [Input, setInput] = useState("");
  const handleChange = e => {
    setInput(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(Input);
    setInput("");
  };
  return (
    <form className="InputForm" onSubmit={handleSubmit}>
      <label>
        {ShowLabel && <strong>Enter Todo Item:</strong>}
        <input
          type="text"
          defaultValue={defaultValue}
          value={Input}
          onChange={handleChange}
          placeholder="Please enter something..."
        />
        <button className="btn" type="submit">
          <i className="icon icon-plus"></i> Add
        </button>
      </label>
    </form>
  );
};

export default InputForm;

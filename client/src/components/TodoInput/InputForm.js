import React, { useState } from "react";

const InputForm = ({ ShowLabel = false, defaultValue, onSubmit }) => {
  const [Input, setInput] = useState("");
  const handleChange = e => {
    setInput(e.target.value);
  };
  return (
    <form className="InputForm" onSubmit={onSubmit}>
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

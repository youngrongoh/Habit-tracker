import React, { memo } from 'react';

const HabitAddForm = memo((props) => {
  const formRef = React.createRef();
  const inputRef = React.createRef();

  const onSubmit = event => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    formRef.current.reset();
  }

  return (
    <form className="add-form" ref={formRef} onSubmit={onSubmit}>
      <input className="add-input" ref={inputRef} type="text" placeholder="Habit" />
      <button className="add-button" type="submit">Add</button>
    </form>
  );
});

export default HabitAddForm;
import React, { Component } from 'react';
import HabitAddForm from './habitAddForm';
import Habit from './habit';

class Habits extends Component {
  onIncrement = habit => {
    this.props.onIncrement(habit);
  }

  onDecrement = habit => {
    this.props.onDecrement(habit);
  }

  onDelete = habit => {
    this.props.onDelete(habit);
  }

  render() {
    return (
      <div className="habits">
        <HabitAddForm onAdd={this.props.onAdd} />
        <ul>
          {this.props.habits.map( habit => 
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.onIncrement}
              onDecrement={this.onDecrement}
              onDelete={this.onDelete}
            />
          )}
        </ul>
        <button className="habits-reset" onClick={this.props.onReset}>Reset All</button>
      </div>
    );
  }
}

export default Habits;
import React from 'react';
import moment from 'moment';
import convert from '@makenova/panda';

import Title            from '../components/title.component'
import Timer            from '../components/timer.component'
import TimeInput        from '../components/timeInput.component'
import TimeControls      from '../components/timeControls.component'
import TaskInputs       from '../components/taskInputs.component'
import SaveButton       from '../components/saveButton.component'

class AppContainer extends React.Component {
  constructor(props) {
    super(props)

    const testTimeValue = 5;

    this.state = {
      initialTime: testTimeValue,
      timer: 0,
      currentTime: testTimeValue,
      running: false,
      percentTime: 0
    }

    this.tick = this.tick.bind(this);
    this.toggleTimer = this.toggleTimer.bind(this);
  }

  componentDidMount () {
    this.setState({
      timer: setInterval(this.tick, 1000),
    })
  }

  componentWillUnmount() {
    clearInterval(this.state.timer)
  }

  tick() {
    if (!this.state.running) return;

    const state = this.state;
    const currentTime = state.currentTime - 1;
    const percentTime = (currentTime / state.initialTime) * 100;

    if (state.currentTime <= 0){
      return this.setState({
        percentTime,
        currentTime: state.initialTime,
        running: false
      });
    }

    this.setState({ currentTime, percentTime })
  }

  toggleTimer() {
    this.setState({
      running: !this.state.running
    })
  }

  render(){
    return (
      <div>
        <Title />
        <Timer value={this.state.percentTime} />
        <TimeInput elapsed={convert(this.state.currentTime)} />
        <TimeControls
          running={this.state.running}
          toggleTimer={this.toggleTimer}
        />
        <TaskInputs />
        <SaveButton />
      </div>
    );
  }
}

export default AppContainer

import React from 'react';
import moment from 'moment';

import Title            from '../components/title.component'
import Timer            from '../components/timer.component'
import TimeInput        from '../components/timeInput.component'
import TimeControls      from '../components/timeControls.component'
import TaskInputs       from '../components/taskInputs.component'
import SaveButton       from '../components/saveButton.component'

class AppContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      initialTime: new Date(),
      timer: 0,
      elapsed: 0,
      running: true,
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
    const elapsed = moment(new Date() - this.state.initialTime).format("mm : ss");
    this.setState({ elapsed })
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
        <Timer />
        <TimeInput elapsed={this.state.elapsed} />
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
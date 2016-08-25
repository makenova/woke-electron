import React from 'react';
import IconButton from 'material-ui/IconButton';
import AvPlayCircleFilled from 'material-ui/svg-icons/av/play-circle-filled';
import AvPauseCircleFilled from 'material-ui/svg-icons/av/pause-circle-filled';
import {cyan700, pinkA200} from 'material-ui/styles/colors';

class TimeControls extends React.Component {
    render(){
        const iconStyle = {
           height: "60px",
           width: "60px",
           display: "inline-block",
           marginLeft: "-18px",
           marginTop: "-18px" 
        }
        const style = {
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "25px",
            display: "block",
        }
        return (
        <div className="time-controls">
           <IconButton style={style} iconStyle={iconStyle}>
            <AvPlayCircleFilled color={cyan700}  />
           </IconButton> 
        </div>
        )

    }
}

export default TimeControls
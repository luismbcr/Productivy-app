import React from 'react';
import Task from '../components/Task';

const TaskView = (props)=> (
  <div className="taskcontainer">
    {props.tasks.length !== 0 && (<h2>Tasks</h2>)}
    {

      props.tasks.length !== 0 &&
      (
        <div className="tasklist" >

            {props.tasks.map((item, index)=>(
              <Task key={index} title={item.title} time={item.time} timeSpend={item.timeSpend} handleDone={props.handleDone} />
            ))}
        </div>
      )
    }
  </div>
);

export default TaskView;

import React from 'react';

const TaskView = (props)=> (
  <div className="taskcontainer">
    {props.tasks.length !== 0 && (<h2>Tasks</h2>)}
    {

      props.tasks.length !== 0 &&
      (
        <div className="tasklist" >

            {props.tasks.map((item, index)=>(
              <div className="task" key={index}>
                <div>{item.title}</div>
                <div>Time: {item.time}</div>
                <div>Spend: {item.timeSpend}</div>
                <button>work</button>
                <button>Done</button>
              </div>
            ))}
        </div>
      )
    }
  </div>
);

export default TaskView;

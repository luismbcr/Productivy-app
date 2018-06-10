import React from 'react';

const TaskView = (props)=> (
  <div>
    {
      props.tasks.length !== 0 &&
      (
        <div>
          <h2>Tasks</h2>
            {props.tasks.map((item, index)=>(
              <div className="task" key={index}>
                <div>{item.title}</div>
                <div>Time: {item.time}</div>
                <div>Spend: {item.timeSpend}</div>
              </div>
            ))}
        </div>
      )
    }
  </div>
);

export default TaskView;

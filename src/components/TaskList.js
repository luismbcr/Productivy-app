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
                <div>Tiempo: {item.time}</div>
                <div>Gastado: {item.timeSpend}</div>
              </div>
            ))}
        </div>
      )
    }
  </div>
);

export default TaskView;

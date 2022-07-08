// Overview.js

import React from 'react';

function Overview({tasks}) {

    const taskItems = tasks.map((task) =>
          <li key = {tasks.indexOf(task)}>
             {task}
             </li>
     );

    return ( <div>
         <ul>{taskItems} </ul>
    </div> 
    );
} 



export default  Overview;

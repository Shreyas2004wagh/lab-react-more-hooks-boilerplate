import {useRef} from 'react'
import '../Components/TaskList.css'


const TaskList=()=>{

    const inputRef=useRef()

    const handleBackToTop=()=>{
        if(inputRef.current)
        {
            inputRef.current.focus()
        }
        
    }

    return(
        <div className='container'>
            <h2>Daily Tasks</h2>
            <div>
                <input type="text" placeholder='Enter task' ref={inputRef}
                onKeyDown={(e)=>e.key==='Enter' && (e.target.value=='')}
                />
            </div>
            <ul>
                {/* Task related logic */}

            </ul>
            <button className='back-to-top-button'
            onClick={handleBackToTop}>
                Back To Top

            </button>
        </div>
    );


};

export default TaskList
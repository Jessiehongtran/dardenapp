import React from 'react';
import '../styles/Role.scss';
import ReactTooltip from 'react-tooltip'

const Role = (props) => {

    return (
        <div className="role-frame">
            <p>Are you here as  
                <span data-tip="who has a task and pay to have someone to do that task"> a client </span>
                or  
                <span data-tip="who has time, skill and look for tasks to do and get paid"> a dardie </span>
                ?
            </p>
            <button 
                onClick={() => props.history.push('/booking')}
                className="client-btn">
                    Client
            </button>
            <button 
                className="dardie-btn">
                Dardie
            </button>
            
            
            <ReactTooltip/>
            
            
        </div>
    )
}

export default Role;
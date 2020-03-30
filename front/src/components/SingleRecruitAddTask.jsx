import React, { Fragment } from "react";
import { Link } from "react-router-dom"
import "../css/style.css"



export default ({ taskOptions, userOptions, handleSubmit, handleChange }) => {
    
    if(taskOptions.length>0 && userOptions.length>0){
        return (
            <div style={{ padding: "3%" }}>
                <div className="container box_container2" >
                    
                    <h2>Associate tasks with the New Hire</h2>
                    <div style={{padding:"3%"}}>
                        <form onSubmit = {handleSubmit}> 
                            <div class="container">
                                <div class="row">
                                    <div class="col-sm">New Task</div>
                                    <div class="col-sm">Responsable</div>
                                    <div class="col-sm">Due Date</div>
                                </div>
                            </div>
        
                            <div class="container">
                                <div class="row">
                                    <div class="col-sm">
                                    <select selected="" name="taskDescription" className="form-control border1" onChange={handleChange}>
                                    <option className="border1">Select Task</option>
                                    {taskOptions.map((taskOption)=>(
                                    <option key={taskOption.id} className="border1">{taskOption.description}</option>
                                    ))}
                                </select>
                                    </div>
                                    <div class="col-sm">
                                    <select selected="" name="responsable" className="form-control border1" onChange={handleChange}>
                                    <option className="border1">Select Responsable</option>
                                    {userOptions.map((userOption)=>(
                                    <option key={userOption.id} className="border1">{userOption.name} {userOption.lastName}</option>
                                    ))}
                                </select>
                                    </div>
                                    <div class="col-sm">
                                    <input type="date" name="dueDate" max="2050-12-31" min="2020-03-01" className="form-control" placeholder="Starting on" onChange={handleChange}/>
                                    </div>
                                </div>
                            </div>
                            <div style={{padding:"3%", display:"flex", justifyContent: "flex-end"}}>
                                <button type="submit" className="btn btn-outline-primary" style={{ borderColor: "#1E5DAC" }} >Associate Task</button>
                            </div>
                        </form>
                    </div>
    
                </div>
            </div>
        )
    }else{
        return(
            <div class="spinner-border text-danger" role="status" style={{marginTop:"20%" ,marginLeft: "50%"}}>
            <span class="sr-only">Loading...</span>
            </div>
        )
    }
}
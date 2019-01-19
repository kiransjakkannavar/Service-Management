import React from 'react'
import { Link } from 'react-router-dom'

function ShowService(props){
       return(
            <div>
                <table border = "2">
                    <thead>
                        <tr>
                            <td>Service Name</td>
                            <td>Service Description</td>
                            <td>Edit / Delete</td>
                        </tr>
                    </thead>
                    <tbody>
                       {props.data.map((service)=>{
                                return(
                                <tr key = {service._id}>
                                <td>{service.name}</td>
                                <td>{service.description}</td>
                                <td><button><Link to= {{
                                    pathname: 'admin/edit',
                                    state: {
                                      id: service._id,
                                      name: service.name,
                                      category: service.description
                                    },
                                    editUpdate: props.editUpdate
                                }}>Edit</Link></button>
                                <button onClick = {()=>{props.deleteUpdate(service._id)}}>Delete</button></td>
                                </tr>
                                )
                            })}
                    </tbody>
                </table>
            </div>
        )
    }



export default ShowService
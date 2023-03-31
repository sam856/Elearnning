import React from 'react'
import '../Style/AssignCourse.css'

const AssignCourse = () => {
    return (
        
            <div className='TableContaier'>
                <table >
                    <thead>
                        <tr>
                            <th>Course name</th>
                            <th>Instractor</th>
                        </tr>
                    </thead>
                    <tbody>

                        {

                            <tr>
                                <td>

                                </td>
                                <td>
                                    <label>
                                        <select>

                                            <option value="fruit"></option>

                                            <option value="vegetable"></option>

                                            <option value="meat"></option>

                                        </select>

                                    </label>

                                </td>

                            </tr>

                        }
                    </tbody>
                </table>
            </div>
    )
}

export default AssignCourse
import React, { useState } from 'react'
import '../Style/Tables.css'
import ModalDialogSure from '../Component/ModalDialogSure.js'
import ModalDialogForm from '../Component/ModalDialogForm.js'


function VeiwCourses() {


    const [show, setShow] = useState(false);
    const [Form, setForm] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const CloseForm = () => setForm(false);
    const ShowForm= () => setForm(true);



    return (
        <div className='TableContaier'>
            <table >
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Code</th>
                        <th>Status</th>
                        <th> Action </th>

                    </tr>
                </thead>
                <tbody>

                    {

                        <tr>
                            <td>

                            </td>
                            <td>
                            </td>
                            <td>
                            </td>
                            <td>
                                <button onClick={ShowForm}>Update</button>
                                <button onClick={handleShow}>Delete</button>
                            </td>

                        </tr>

                    }
                </tbody>


            </table>
            {
                show === true ? <ModalDialogSure hide={handleClose} /> : ''
    
            }

            {
                Form === true ? <ModalDialogForm hideForm={CloseForm} /> : ''
            }
        </div>




    )

}

export default VeiwCourses

import React from 'react'
import close from "../Images/close (1).png"
import Detail from './Detail';
const Modal = ({ closeModal, details, setDetails, editDetail }) => {

    async function submitForm(e) {
        e.preventDefault();
        const { course, date, startTime, endTime, price } = e.target
        console.log(course.value, date.value, startTime.value, endTime.value, price.value);
        const newDetail = {
            Course: course.value,
            Date: date.value,
            StartTime: startTime.value,
            EndTime: endTime.value,
            Price: price.value
        }
        let found = false;

        await setDetails(details =>
            details.map(detail => {
                if (detail.id === editDetail.id) {
                    console.log("found");
                    found = true
                    let obj = { ...newDetail, id: detail.id }
                    console.log(obj);
                    return obj;
                }
                else
                    return detail;
            }),
        );

        if (found === false) {
            console.log(" not found");
            newDetail.id = new Date().getTime()
            setDetails(() => {
                return [
                    ...details, newDetail
                ]
            })
        }

        closeModal()
    }

    return (
        <div className='fillDetails'>
            <h2>Details</h2>
            <button onClick={closeModal}><img src={close} alt="" /></button>
            <form action="" onSubmit={submitForm}>
                <label htmlFor="">Course</label>
                <input type="text" name="course" defaultValue={editDetail !== {} ? editDetail.Course : null} required />
                <label htmlFor="">Date</label>
                <input type="date" name="date" defaultValue={editDetail !== {} ? editDetail.Date : null} required />
                <label htmlFor="">Start Time</label>
                <input type="time" name="startTime" defaultValue={editDetail !== {} ? editDetail.StartTime : null} required />
                <label htmlFor="">End Time</label>
                <input type="time" name="endTime" defaultValue={editDetail !== {} ? editDetail.EndTime : null} required />
                <label htmlFor="">Price</label>
                <input type="text" name="price" defaultValue={editDetail !== {} ? editDetail.Price : null} required />
                <button type='submit'>save</button>
            </form>
        </div>
    )
}

export default Modal
import React from 'react'
import html2canvas from 'html2canvas';
import downloadjs from "downloadjs"
import jsPDF from 'jspdf';

const Detail = ({ detail, removeDetail, setEditDetail, setIsOpen }) => {

    function download() {
        const input = document.getElementById("id" + detail.id)
        console.log(input);
        html2canvas(input).then((canvas) => {
            const img = canvas.toDataURL("image/png")
            const pdf = new jsPDF("p", "pt")
            pdf.addImage(img, "JPEG", 10, 50)
            pdf.save("certificate.pdf")
        }).catch(err => console.log(err))
    }

    return (
        <div className="detail" id={"id" + detail?.id}>
            <div><h3>Course</h3><h3>{detail.Course}</h3></div>
            <div>
                <h3>Date</h3>
                <h3>{detail.Date}</h3>
                {/* <h2>{detail.uration}</h2> */}
            </div>
            <div>
                <h4>Start Time</h4>
                <h4>{detail.StartTime}</h4>
                <h4>Start Time</h4>
                <h4>{detail.EndTime}</h4>
            </div>
            <div>
                <h3>price</h3>
                <h3>{detail.Price}</h3>
            </div>
            <div>
                <button onClick={() => {
                    setEditDetail(detail)
                    setIsOpen(true)
                }}>edit</button>
                <button onClick={() => {
                    removeDetail(detail.id)
                }}>delete</button>
                <button onClick={download}>certificate</button>
            </div>
        </div>
    )
}

export default Detail
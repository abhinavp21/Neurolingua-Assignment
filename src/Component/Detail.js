import React from 'react'
import html2canvas from 'html2canvas';
import downloadjs from "downloadjs"

const Detail = ({ detail, removeDetail, setEditDetail, setIsOpen }) => {

    async function download() {

        const canvas = await html2canvas(document.getElementById(detail.id));
        const dataURL = canvas.toDataURL('image/png');
        downloadjs(dataURL, 'download.png', 'image/png');
        // const input = document.getElementById(detail.id);
        // html2canvas(input)
        //     .then((canvas) => {
        //         const imgData = canvas.toDataURL('certificate/png');
        //         const pdf = new jsPDF();
        //         pdf.addImage(imgData, 'JPEG', 0, 0);
        //         pdf.save("download.pdf");
        //     })
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
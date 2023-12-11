import "./Modal.css";
// import { IoMdClose } from "react-icons/io";
const Modla = ({children ,hide}) => {
  return (
    <>
      <div className="modal-blur-area">
        <div className="modal-container">
        {/* <div className="modal-header">
<button onClick={()=> hide(false)}  ><IoMdClose /></button>
<h3>Step 1 of 5</h3>

          </div> */}
          <div className="modal-body">

{children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modla;

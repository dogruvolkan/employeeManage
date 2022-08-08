import { useContext, useState, useEffect } from "react";
import { EmployeeContext } from "../contexts/EmployeeContext";
import { Modal } from "react-bootstrap";
import EditForm from "./EditForm";

const Employee = ({ employee }) => {
  const { deleteEmployee } = useContext(EmployeeContext);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    handleClose();
  }, [employee]);

  return (
    <>
      <td>{employee.name}</td>
      <td>{employee.email}</td>
      <td>{employee.address}</td>
      <td>{employee.phone}</td>
      <td>
        <button
          onClick={handleShow}
          className="btn text-warning p-0"
          data-toggle="modal"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="Edit"
        >
          <i className="material-icons">&#xE254;</i>
        </button>
        <button
          onClick={() => deleteEmployee(employee.id)}
          className="btn text-danger p-0"
          data-toggle="modal"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="Delete"
        >
          <i className="material-icons">&#xE872;</i>
        </button>
      </td>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="modal-header" closeButton>
          <Modal.Title>Edit Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditForm theEmployee={employee} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Employee;

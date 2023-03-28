import React, { useState, useEffect } from "react";
import _ from "lodash";
import { Row, Form, Col, Button, Table } from "react-bootstrap";
import { fetchUrl } from "../../utilities/apiFunctions/fatchUrl";

export const User = ( ) => {
  const [data, setData] = useState({});
  const [validated, setValidated] = useState(false);
  const [tableData, setTableData] = useState([]);

  const initData = async (url) => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("http://127.0.0.1:8000/BTPTest/Get_TestUsers", requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result)
        if (!!result && !!result) {
          setTableData(result || []);
        }
      }
      )
      .catch(error => console.log('error', error));

   
  };





  useEffect(() => {
    initData();
  }, []);

  const handleClick = () => {
    const _dat = _.cloneDeep(data);

    var formdata = new FormData();
    formdata.append("testusername", "Miresh");
    formdata.append("notes", "Test 7");
    
    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };
    
    fetch("http://127.0.0.1:8000/BTPTest/Create_TestUser", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
      console.log("clarity required on json send");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      alert("Please fill the required fields...");
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    setValidated(true);
    handleClick();
  };


  const handleInputchange = (value, name) => {
    //console.log(value, name, "============= value, name");
    const _dat = _.cloneDeep(data);

    _dat[name] = value;
    setData(_dat);
  };


  return (
    <div>
      <div className="titleBand py-1">
        <h4>User</h4>
      </div>
      <div className="pt-3 form-container">
        <Row>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row>
              <h3>Add  </h3>
            </Row>

            <Row>
              <Col lg={3}>
                <Form.Group className="mt-2 ">
                  <Form.Label>testusername</Form.Label>

                  <div className="input-group mb-3">
                    <Form.Control
                      placeholder=""
                      required
                      type="text"
                      value={data["testusername"] ? data["testusername"] : ""}
                      onChange={(e) =>
                        handleInputchange(e.target.value, "testusername")
                      }
                    />
                  </div>
                </Form.Group>
              </Col>
              <Col lg={3}>
                <Form.Group className="mt-2 ">
                  <Form.Label>notes</Form.Label>
                  <div className="input-group mb-3">
                    <Form.Control
                      placeholder=""
                      required
                      type="text"
                      value={
                        data["notes"] ? data["notes"] : ""
                      }
                      onChange={(e) =>
                        handleInputchange(e.target.value, "notes")
                      }
                    />
                  </div>
                </Form.Group>
              </Col>

              <Col lg={3}>
                <Form.Group className="mt-2 ">
                  <br />
                  <Button type="submit" variant="primary">
                    Save
                  </Button>{" "}
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Row>

        <div className="table-holder">
          <div>
            <Table striped bordered hover responsive>
              <thead className="tablehead">
                <tr>
                  <th>Advance Type</th>
                  <th>Advance Type Code</th>

                  <th>Edit</th>
                </tr>
              </thead>
              <tbody>
                {!!tableData &&
                  tableData.map((item, index) => (
                    <tr key={index}>
                      <td>{item.AdvanceType}</td>
                      <td>{item.AdvanceTypeCode}</td>
                      {/* <td>{item.IsActiveFlag}</td> */}
                    </tr>
                  ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

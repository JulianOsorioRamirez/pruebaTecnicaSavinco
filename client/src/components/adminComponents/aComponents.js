import "./aComponents.css";
import React, { useState, useEffect } from "react";

function Acomp() {
  const [id, setId] = useState("");
  const [state, setState] = useState("Delete");
  const [group, setGroup] = useState("");
  const [contry, setContry] = useState("");

  const [partners, setPartners] = useState("");
  const [shares, setShares] = useState("");
  const [loans, setLoans] = useState("");
  const [amount, setAmount] = useState("");
  


  useEffect(() => {
    console.log(state);
  }, [state]);

  function deleteCrud() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: id,
      }),
    };

    fetch("deleteDivisa", requestOptions)
      .then((response) => response.json())
      .then((res) => {});
  }
  function updateCrud() {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: id,
        grupo : group,
        socios: partners,
        acciones: shares,
        prestamos: loans,
        importe: amount
      }),
    };

    fetch("updateDivisas", requestOptions)
      .then((response) => response.json())
      .then((res) => {});
  }
  function insertCrud() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        pais: contry,
        grupo : group,
        socios: partners,
        acciones: shares,
        prestamos: loans,
        importe: amount
      }),
    };

    fetch("insertDivisas", requestOptions)
      .then((response) => response.json())
      .then((res) => {});
  }
  return (
    <div className="aContainer">
      <div className="list">
        <label for="selectTittle">select the action you want to perform</label>
        <select value={state} onChange={(e) => setState(e.target.value)}>
          <option value="Delete">Delete</option>
          <option value="Update">Update</option>
          <option value="Insert">Insert</option>
        </select>
      </div>
      <div className="crudContainer">
        {state === "Delete" ? (
          <div className="deleteContainer">
            <label className="deleteTittle">
              Enter the ID you want to remove
            </label>
            <input
              className="Rectangle-1"
              type="text"
              placeholder="Enter ID"
              onChange={(e) => setId(e.target.value)}
            />
            <button className="Btn2" onClick={deleteCrud}>
              Delete
            </button>
          </div>
        ) : (
          ""
        )}
        {state === "Update" ? (
          <div className="updateContainer">
            <label className="updateTittle">
              Enter the data you want to update
            </label>
            <input
              className="Rectangle-2"
              type="text"
              placeholder="Enter ID"
              onChange={(e) => setId(e.target.value)}
            />
            <input
              className="Rectangle-2"
              type="text"
              placeholder="Enter groups "
              onChange={(e) => setGroup(e.target.value)}
            />
            <input
              className="Rectangle-2"
              type="text"
              placeholder="Enter partners"
              onChange={(e) => setPartners(e.target.value)}
            />
            <input
              className="Rectangle-2"
              type="text"
              placeholder="Enter shares"
              onChange={(e) => setShares(e.target.value)}
            />
            <input
              className="Rectangle-2"
              type="text"
              placeholder="Enter loans"
              onChange={(e) => setLoans(e.target.value)}
            />
            <input
              className="Rectangle-2"
              type="text"
              placeholder="Enter amount"
              onChange={(e) => setAmount(e.target.value)}
            />
            <button className="Btn2" onClick={updateCrud}>
              Update
            </button>
          </div>
        ) : (
          ""
        )}
        {state === "Insert" ? (
          <div className="updateContainer">
            <label className="updateTittle">
              Enter the data you want to Insert
            </label>
            <input
              className="Rectangle-2"
              type="text"
              placeholder="Enter Contry"
              onChange={(e) => setContry(e.target.value)}
            />
            <input
              className="Rectangle-2"
              type="text"
              placeholder="Enter groups "
              onChange={(e) => setGroup(e.target.value)}
            />
            <input
              className="Rectangle-2"
              type="text"
              placeholder="Enter partners"
              onChange={(e) => setPartners(e.target.value)}
            />
            <input
              className="Rectangle-2"
              type="text"
              placeholder="Enter shares"
              onChange={(e) => setShares(e.target.value)}
            />
            <input
              className="Rectangle-2"
              type="text"
              placeholder="Enter loans"
              onChange={(e) => setLoans(e.target.value)}
            />
            <input
              className="Rectangle-2"
              type="text"
              placeholder="Enter amount"
              onChange={(e) => setAmount(e.target.value)}
            />
            <button className="Btn2" onClick={insertCrud}>
              Insert
            </button>
          </div>
        ) : (
          ""
        )}
        
      </div>
    </div>
  );
}

export default Acomp;

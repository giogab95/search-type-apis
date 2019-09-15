import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [users, setUsers] = useState({
    dati: []
  });
  const [searchField, setSearchField] = useState("");
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const data = res.data;
        setUsers({ dati: data });
      })
      .catch(errors => {
        console.log(errors.resend);
      });
  }, [users.searchField]);

  const filter = users.dati.filter(date =>
    date.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <>
      <div className="d-flex justify-content-center mt-3">
        <label forhtml="search">
          Cerca:
          <input
            type="search"
            onChange={event => {
              setSearchField(event.target.value);
            }}
            placeholder="Cerca"
            name="search"
            id="search"
            className="ml-3"
          />
        </label>
      </div>
      {users.dati[0] ? (
        <ul className="list-group">
          {filter.map(res => (
            <div key={res.id}>
              <button
                data-toggle="modal"
                data-target="#exampleModal"
                type="button"
                style={{ cursor: "pointer" }}
                className="btn btn-primary cards"
              >
                {res.name}
              </button>

              <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        {res.name}
                      </h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      Email: {res.email}
                      <span className="d-flex">Address:</span>
                      <div className="bg-dark">
                        <small className="d-flex text-light">
                          Street: {res.address.street}
                        </small>
                        <small className="d-flex text-light">
                          Suite: {res.address.suite}
                        </small>
                        <small className="d-flex text-light">
                          City: {res.address.city}
                        </small>
                        <small className="d-flex text-light">
                          Zipcode: <code>{res.address.zipcode}</code>{" "}
                        </small>
                      </div>
                      <span className="d-flex">Phone: {res.phone}</span>
                      <span className="d-flex">Website: {res.website}</span>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Chiudi
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </ul>
      ) : (
        <p className="text-center">Utente non trovato</p>
      )}
    </>
  );
};

export default Search;

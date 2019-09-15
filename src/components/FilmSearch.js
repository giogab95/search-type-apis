import React, { useEffect, useState } from "react";

const FilmSearch = () => {
  const [data, setData] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [titleCopied, setTitleCopied] = useState("");
  const [Plot, setPlot] = useState("");
  const spec =
    "fullscreen:no,scollbar=no,width=400px,height=400px,left:500px,top:500px";

  useEffect(() => {
    let filmFetch = fetch(`http://www.omdbapi.com/?s=${search}&apikey=917c9e4c`)
      .then(response => response.json())
      .then(data => setData(data), setisLoading(false))
      .catch(error => console.log(error), setisLoading(false));
    return clearInterval(filmFetch);
  }, [search]);
  useEffect(() => {
    if (titleCopied) {
      const plotFetch = fetch(
        `http://www.omdbapi.com/?t=${titleCopied}&plot=full&apikey=917c9e4c`
      )
        .then(response => response.json())
        .then(data => setPlot(data.Plot))
        .catch(error => console.log(error));
      return clearInterval(plotFetch);
    }
  }, [titleCopied]);
  function handleChange(e) {
    let g = e.target.value;
    let searchNoSpace = g.replace(/ /g, "%20");
    setSearch(searchNoSpace);
  }
  return (
    <>
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="searchbar">
                Cerca:
                <input
                  id="searchbar"
                  type="search"
                  className="form-control"
                  placeholder="Nome Film/Serie/Gioco"
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>
        </div>
      </div>
      {isLoading === false && !search ? (
        <div className="text-center">
          <span className="ml-n4">Cerca un </span>
          <br />
          -Film
          <br />
          -Gioco
          <br />
          -Serie
        </div>
      ) : data.Response === "False" ? (
        <div className="text-center">Nessun Film Trovato</div>
      ) : (
        data.Response === "True" && (
          <div>
            <div className="container">
              <div className="row">
                <div
                  className="container"
                  style={{
                    display: data.Search.map(res =>
                      res.Type === "movie" && res.Title ? "block" : "none"
                    )
                  }}
                >
                  <div className="row justify-content-center">
                    <h1 className="text-center pt-4 pb-4 d-block">Film</h1>
                  </div>
                </div>
                {data.Search.map(
                  res =>
                    res.Poster !== "N/A" &&
                    res.Type === "movie" && (
                      <div className="col-lg-3 searchFilmHover">
                        <div style={{ width: "auto" }}>
                          Titolo: {res.Title}
                          <span className="float-right">Anno: {res.Year}</span>
                        </div>
                        {search && data.Response === "True" && (
                          <div
                            data-toggle="modal"
                            data-target="#exampleModal"
                            style={{ cursor: "pointer" }}
                            onClick={e => {
                              return (
                                e.preventDefault(), setTitleCopied(res.Title)
                              );
                            }}
                          >
                            <img
                              className="img-thumbnail text-center"
                              src={res.Poster}
                              alt={res.Title}
                            />
                          </div>
                        )}
                        <p className="text-center ml-n3">Tipo: {res.Type}</p>
                      </div>
                    )
                )}

                <div
                  className="container"
                  style={{
                    display: data.Search.map(
                      res =>
                        res.Type === "series" &&
                        res.Type !== "movie" &&
                        res.Type !== "game" &&
                        res.Title
                    )
                      ? "block"
                      : "none"
                  }}
                >
                  <div className="row justify-content-center">
                    <h1 className="text-center pt-4 pb-4 d-block">Serie TV</h1>
                  </div>
                </div>

                {data.Search.map(
                  res =>
                    res.Poster !== "N/A" &&
                    res.Type === "series" && (
                      <div className="col-lg-3 mb-4 searchFilmHover">
                        <div style={{ width: "auto" }}>{res.Title}</div>
                        {search && data.Response === "True" && (
                          <div
                            style={{ cursor: "pointer" }}
                            onClick={e => {
                              return (
                                e.preventDefault(), setTitleCopied(res.Title)
                              );
                            }}
                          >
                            <img
                              className="img-thumbnail text-center"
                              src={res.Poster}
                              alt={res.Title}
                            />
                          </div>
                        )}
                        <p className="text-center ml-n3">Tipo: {res.Type}</p>
                      </div>
                    )
                )}
                <div
                  className="container"
                  style={{
                    display: data.Search.map(res =>
                      res.Type === "game" && res.Title ? "block" : "none"
                    )
                  }}
                >
                  <div className="row justify-content-center">
                    <h1 className="text-center pt-4 pb-4 d-block">
                      Videogiochi
                    </h1>
                  </div>
                </div>
                {data.Search.map(
                  res =>
                    res.Poster !== "N/A" &&
                    res.Type === "game" && (
                      <div className="col-lg-3 searchFilmHover">
                        <div style={{ width: "auto" }}>{res.Title}</div>
                        {search && data.Response === "True" && (
                          <div
                            style={{ cursor: "pointer" }}
                            onClick={e => {
                              return (
                                e.preventDefault(),
                                window.open(res.Poster, "_blank", spec)
                              );
                            }}
                          >
                            <img
                              className="img-thumbnail text-center"
                              src={res.Poster}
                              alt={res.Title}
                            />
                          </div>
                        )}
                        <p className="text-center ml-n3">Tipo: {res.Type}</p>
                      </div>
                    )
                )}
                <div
                  className="container"
                  style={{
                    display: data.Search.map(res =>
                      res.Poster === "N/A" && res.Title ? "block" : "none"
                    )
                  }}
                >
                  <div className="row justify-content-center">
                    <h1 className="text-center pt-4 pb-4 d-block">
                      Ricerca Senza Immagini
                    </h1>
                  </div>
                </div>
                {data.Search.map(
                  res =>
                    res.Poster === "N/A" && (
                      <div className="col-lg-4 mt-4">
                        <div style={{ width: "auto" }}>{res.Title}</div>
                        <p className="text-center">Tipo: {res.Type}</p>
                      </div>
                    )
                )}
              </div>
            </div>
          </div>
        )
      )}
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
                {titleCopied}
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
            <div className="modal-body">{Plot}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilmSearch;

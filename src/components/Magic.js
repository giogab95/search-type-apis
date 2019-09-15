import React, { useEffect, useState } from "react";
import Load from "../Pacman-1s-200px.gif";
import mtg from "mtgsdk";

const Magic = () => {
  const [card, SetCard] = useState([]);
  const [page, SetPage] = useState({
    pagina: 1,
    pages: 1
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    mtg.card.where({ page: page.pagina, pageSize: 50 }).then(cards => {
      SetCard(cards);
      setIsLoading(false);
    });
  }, [page]);
  const titoloParagraph = {
    textAlign: "center",
    display: isLoading === true ? "none" : "block"
  };

  function handleSubmit(e) {
    e.preventDefault();
    SetPage({ pagina: page.pages });
    setIsLoading(true);
  }
  function nextPage(e) {
    e.preventDefault();
    SetPage({ pagina: parseInt(page.pagina) + 1 });
    setIsLoading(true);
  }
  function prevPage(e) {
    e.preventDefault();
    if (page.pagina > 1) {
      SetPage({ pagina: parseInt(page.pagina) - 1 });
      setIsLoading(true);
    } else {
      return alert("Minima pagina raggiunta");
    }
  }
  return (
    <>
      <div>
        {isLoading === true ? (
          <div className="bg-no">
            <h1 className="load">
              Loading{" "}
              <div className="bg">
                <img className="logo" src={Load} alt="load" />
              </div>
            </h1>
          </div>
        ) : null}
      </div>
      <div>
        <form onSubmit={handleSubmit} className="mb-3">
          <label
            htmlFor="pagina"
            style={{ display: isLoading === true ? "none" : "block" }}
            className="text-center h4 d4"
          >
            Inserisci numero pagina:
            <input
              type="number"
              value={page.pages}
              onChange={e => SetPage({ pages: e.target.value })}
              style={{
                display: isLoading === true ? "none" : "block"
              }}
              className="container d-flex mb-3 form-control"
              min="1"
              name="pagina"
              id="pagina"
            />
          </label>
          <button
            className="container btn btn-success"
            style={{
              display: isLoading === true ? "none" : "block",
              textAlign: "center"
            }}
          >
            Invia
          </button>
        </form>
      </div>
      <div>
        <p style={titoloParagraph}>Carte di Magic</p>
        <p style={titoloParagraph}>Pagina numero {page.pagina}</p>
        <div style={{ display: isLoading === true && "none" }}>
          {card.map(data => (
            <div
              key={data.id}
              className="card mb-3 border-success card-group container"
              style={{ maxWidth: "540px", display: !data.imageUrl && "none" }}
            >
              <div className="row no-gutters">
                <div className="col-xl-4">
                  <img
                    src={data.imageUrl}
                    alt={data.name}
                    width={"auto"}
                    className={data.imageUrl && "card-img-top mt-4 mb-4"}
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      let v = null;
                      if (v == null || v.closed) {
                        v = window.open(
                          data.imageUrl,
                          "_blank",
                          "toolbar=no,scrollbars=no,resizable=yes,top=250,left=500,width=300,height=350"
                        );
                        v.document.title = data.name;
                      } else {
                        v.focus();
                      }
                    }}
                  />
                </div>
                <div className="col-xl-8">
                  <div className="card-body text-dark">
                    <h5 className="card-title">{data.name}</h5>
                    <p className="card-text">
                      <small>{data.type}</small>
                    </p>
                    <p className="card-text">{data.text}</p>
                    <p
                      className="card-footer"
                      style={{
                        backgroundColor:
                          data.rarity === "Rare"
                            ? "#D9B768"
                            : data.rarity === "Uncommon"
                            ? "#878B90"
                            : data.rarity === "Common"
                            ? "#2A2626"
                            : data.rarity === "Mythic" && "#E26904"
                      }}
                    >
                      <small className="text-white">{data.rarity}</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer style={{ display: isLoading === true ? "none" : "block" }}>
        <div
          style={{
            position: "fixed",
            bottom: 0,
            right: 0,
            zIndex: 100
          }}
        >
          <button className="btn btn-success" onClick={nextPage}>
            Pagina Successiva
          </button>
        </div>
      </footer>
      <footer style={{ display: isLoading === true ? "none" : "block" }}>
        <div
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            zIndex: 100
          }}
        >
          <button className="btn btn-success" onClick={prevPage}>
            Pagina Precedente
          </button>
        </div>
      </footer>
    </>
  );
};
export default Magic;

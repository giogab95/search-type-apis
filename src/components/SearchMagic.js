import React, { useState, useEffect } from "react";
import mtg from "mtgsdk";
import Load from "../Pacman-1s-200px.gif";
import Magnifier from "react-magnifier";

const SearchMagic = () => {
  const [card, setCard] = useState({
    data: []
  });
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  useEffect(() => {
    mtg.card.where({ name: search }).then(
      results => {
        setCard({ data: results });
        setIsLoading(false);
      },
      [search]
    );
  });
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
      <input
        aria-label="Search"
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{ display: isLoading === true && "none" }}
        className="container d-flex mb-3 mt-3 form-control"
        placeholder="Cerca la carta"
      />
      {card.data.map(data => (
        <div
          key={data.id}
          className="card mb-3 border-success card-group container"
          style={{ maxWidth: "540px", display: !data.imageUrl && "none" }}
        >
          <div className="row no-gutters">
            <div className="col-md-4">
              <Magnifier
                src={data.imageUrl}
                alt={data.name}
                width={"auto"}
                className={data.imageUrl && "card-img-top mt-4 mb-4"}
                style={{ cursor: "zoom-in" }}
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
                  <small className="text-white">
                    {data.rarity}{" "}
                    {data.rulings
                      .filter((res, index) => index < 1)
                      .map(res => (
                        <time key={data.id + Math.random()}>- {res.date}</time>
                      ))}
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default SearchMagic;

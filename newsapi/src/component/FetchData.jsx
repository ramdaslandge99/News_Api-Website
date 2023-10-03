import React, { useEffect, useState } from "react";
import axios from "axios";

const FetchData = ({ cat }) => {
  const [data, setData] = useState("");
  const fetchData = async () => {
    await axios
      .get(
        cat
          ? `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=378274b8163d4c7ea584a77031e0f2a6`
          : "https://newsapi.org/v2/top-headlines?country=in&apiKey=378274b8163d4c7ea584a77031e0f2a6"
      )
      .then((res) => setData(res.data.articles));
  };
  useEffect(() => {
    //eslint - disable - next - line;
    fetchData();
  }, [cat]);
  return (
    <div className="container my-3 p-3">
      <h3>
        <u>TOP HEADLINES</u>
      </h3>
      <div
        className=" container d-flex justify-content-center align-items-center flex-column my-3 p-3"
        style={{ minHeight: "100vh" }}
      >
        {data
          ? data.map((item, index) => (
              <>
                <div
                  className="container my-3"
                  style={{
                    width: "600px",
                    boxShadow: "3px 3px 10px silver",
                    borderRadius: "5px",
                  }}
                >
                  <h5 className="my-1 p-2" key={item.id}>
                    {item.title}
                  </h5>
                  <div className=" d-flex justify-content-center align-items-center">
                    <img
                      src={item.urlToImage}
                      alt=""
                      className="img-fluid p-1"
                      style={{
                        width: "100%",
                        height: "300px",
                        objectFit: "cover",
                      }}
                    />
                  </div>

                  <p className="p-1">{item.description}</p>
                  <a href={item.url} target="blank">
                    View More
                  </a>
                </div>
              </>
            ))
          : "Loading...."}
      </div>
    </div>
  );
};

export default FetchData;

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import useInfiniteScroll from "../../";

const App = () => {
  const [isLoading, setLoading] = useInfiniteScroll(() => {}, true);
  return (
    <div className="App">
      {[...Array(20).keys()].map((item) => {
        return (
          <div
            key={item}
            style={{
              width: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: 100,
              margin: 16,
              border: "2px solid gray",
              borderRadius: 20,
              shadowColor: "red",
            }}
          >
            {`${item}-item`}
          </div>
        );
      })}
      {isLoading ? "Loading..." : null}
    </div>
  );
};

export default App;

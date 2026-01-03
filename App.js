import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <h1 id="heading" className="heading" tabIndex="1">
    Namste React using jsx 🚀
  </h1>
);

//React Functional Component
const HeadingComponent = () => {
  return (
    <div id="container">
      <Title />
      <h1 id="heading" className="heading" tabIndex="1">
        Namste React using jsx from functional component 🚀
      </h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);

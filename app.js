import React from "react";
import ReactDOM from "react-dom/client";

const head = React.createElement(
  "h1",
  { id: "header" },
  "this is rendered from react "
);

const Title = () => {
  return (
    <div>
      <h1> This is from title tag componenet</h1>
    </div>
  );
};

const HeaderComponent = () => {
  return (
    <div>
      <Title></Title>
      <h1>this is the head componenet 💃 </h1>
    </div>
  );
};

const jsxhead = <h1> this is react application 🚀 </h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);

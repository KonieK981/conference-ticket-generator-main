import { useState } from "react";
import BackgroundLayout from "./components/BackgroundLayout/BackgroundLayout";
import FormView from "./components/FormView/FormView";
import TicketView from "./components/TicketView/TicketView";

function App() {
  const [isSubmited, setIsSubmited] = useState(true);

  return (
    <>
      <BackgroundLayout />
      <div className="title">
        <img src="" alt="" />
        <h2>Coding Conf</h2>
      </div>
      {!isSubmited ? <FormView /> : <TicketView />}

      {/* <!-- Generated tickets ends --> */}
      {/* <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Andres</a>.
      </div> */}
    </>
  );
}

export default App;

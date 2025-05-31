import { useState } from "react";
import BackgroundLayout from "./components/BackgroundLayout/BackgroundLayout";
import FormView from "./components/FormView/FormView";
import TicketView from "./components/TicketView/TicketView";

function App() {
  const [isSubmited, setIsSubmited] = useState(true);

  return (
    <>
      <BackgroundLayout>
        <div className="main-title">
          <img src="/assets/images/logo-full.svg" alt="Logo" />
        </div>
        {!isSubmited ? <FormView /> : <TicketView />}
      </BackgroundLayout>

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

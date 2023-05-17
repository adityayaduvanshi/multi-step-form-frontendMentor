import FormikContainer from "./components/formik/FormikContainer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <main className="app-container">
      <BrowserRouter>
        <FormikContainer />
      </BrowserRouter>
    </main>
  );
}

export default App;

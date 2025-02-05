/* eslint-disable no-unused-vars */
import Navbar from "./components/Navbar";
import { auth } from "./config/firebase-config";

const style = {
  appContainer: `max-w-[728px] mx-auto text-center`,
  sectionContainer: `flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl relative`,
};

function App() {
  return (
    <div className={style.appContainer}>
      <section className={style.sectionContainer}>
        {/* Navbar */}
        <Navbar />
        {/* Chat */}
      </section>
    </div>
  );
}

export default App;

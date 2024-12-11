import Carousel from "./components/carousel"
import data from "./data/data.json"

const App = () => {
  return (
    <div className="page">
      <h1 className="header-text">A slider Using Reactjs</h1>
      <Carousel data={data.slides}/>
    </div>
  );
};

export default App;
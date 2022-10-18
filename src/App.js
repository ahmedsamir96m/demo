import { Navbar } from "./components/navbar/Navbar";
import { MainSlider } from "./components/mainSlider/MainSlider";
import { Products } from "./components/products/Products";
import { Luxury } from "./components/luxury/Luxury";
import { Partners } from "./components/partners/Partners";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainSlider />
      <Products />
      <Luxury />
      <Partners />
      <Footer />
    </div>
  );
}

export default App;

import React from "react";
import "./Home.css";
import Product from "../product/Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/39/Prime/HNTRS1.1500x600._CB420674233_.jpg"
          alt="img"
        />

        <div className="home__row">
          <Product
            title="the lean startup"
            price={22.2}
            image="https://images-na.ssl-images-amazon.com/images/I/7131m3g3D9L._AC_SL1500_.jpg"
            rating={5}
          />
          <Product
            title="adidas Mens Essentials Linear T-shirt T-SHIRTS"
            price={59.01}
            image="https://images-na.ssl-images-amazon.com/images/I/71kbn7dLCML._AC_SX342_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            title="Sony PlayStation 4 Slim 500GB Console (Black) - International Version"
            price={1001.01}
            image="https://images-na.ssl-images-amazon.com/images/I/41Bvqi0k5jL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            title="SkyLand EM-9229-20 Unisex Adult Cast Iron Adjustable Dumbbell Set With Connector - Black, 44.50 L x 25 W x 14.50 cm H"
            price={599.01}
            image="https://images-na.ssl-images-amazon.com/images/I/81k%2BXKqP7lL._AC_SL1500_.jpg"
            rating={5}
          />
          <Product
            title="Sabrent USB 3.0 to SSD / 2.5-Inch SATA I/II/IIIHard Drive Adapter (EC-SSHD)"
            price={29.01}
            image="https://images-na.ssl-images-amazon.com/images/I/71xhus0OFrL._AC_SL1500_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            title="Polar Grit X - Rugged Outdoor Watch with GPS, Compass, Altimeter and Military-Level Durability for Hiking, Trail Running, Mountain Biking and other Sports"
            price={1799.01}
            image="https://images-na.ssl-images-amazon.com/images/I/51AFIoMCABL._AC_SL1100_.jpg"
            rating={2}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

import './style.css';
import { TileContainer } from '../../components/Tile/TileContainer';

export const HomePage = () => {
  return (
    <div className="container">

    <main className="main-page">
      <div>
        
        <div className="main-page__content">
          
          <section className="main-page__products products">
            <h1 className="main-page__title">Desserts</h1>
            <TileContainer />
          </section>
        
          <section className="main-page__cart content-cart">
            <h2 className="content-cart__title">Your Cart (<span className="js-number-of-items-in-cart"></span>)
            </h2>
            <div className="content-cart__details">
              <img src="./images/illustration-empty-cart.svg" alt="illustration empty cart"/>
              <p className="content-card__details-text">Your added items will appear here</p>
            </div>
          </section>
        
        </div>
      
      </div>
    </main>

    <footer>
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. 
        Coded by Kateřina N. Voláková.
      </div>
    </footer>
  
  </div>
  );
};

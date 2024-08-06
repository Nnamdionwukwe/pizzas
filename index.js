const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function MyApp() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div className="container">
      <header className="header">
        <h1>fast pizza react co.</h1>
      </header>
    </div>
  );
}

function Menu() {
  const pizzas = pizzaData;
  //const pizzas = [];
  const pizzaObj = pizzas.length;

  return (
    <menu>
      {pizzaObj > 0 ? (
        <div>
          <h3>welcome to our pizza fast food store</h3>

          <div className="pizzas">
            {pizzas.map((pizza) => (
              <Pizzas pizza={pizza} key={pizza.name} />
            ))}
          </div>
        </div>
      ) : (
        <h3>we are working on our menu please come back later</h3>
      )}
    </menu>
  );
}

function Pizzas({ pizza }) {
  const soldOuts = {
    color: " #888",
    filter: "gray",
    opacity: "0.8",
    width: "12px",
  };

  return (
    <div>
      <div className={"pizza"}>
        <div>
          <img src={pizza.photoName} />
          <p>{pizza.name}</p>
        </div>
        <div>
          <div>{pizza.ingredients}</div>
          <p>{pizza.soldOut ? "SOLD OUT" : pizza.price}</p>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHours = 12;
  const closeHours = 22;

  const isOpen = hour >= openHours && hour <= closeHours;

  return (
    <footer className="footer">
      <div>
        {isOpen ? (
          <div className="order">
            <p>
              we are open from {openHours}:00 untill {closeHours}:00 checkout
              our menu or order online
            </p>
            <button class="btn">Order</button>
          </div>
        ) : (
          <p className="order">we are closed please come back tomorrow</p>
        )}
      </div>
    </footer>
  );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<MyApp />);

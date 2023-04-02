import logo from "./logo.svg";
import "./App.css";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import img from "./img/bg.avif";
import { useEffect, useState } from "react";
import data from "./data";
import Card from "./Card";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Detail from "./pages/Detail";
import About from "./pages/About";
import Event from "./pages/Event";
import axios from "axios";
import Cart from "./pages/Cart";

function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();
  let [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>member!!!</div>} />
          <Route path="location" element={<div>location!!!</div>} />
        </Route>
        <Route path="event" element={<Event />}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<div>error!!!</div>} />
      </Routes>

      <Navbar bg="dark" variant="dark" className="nav-bar">
        <Container>
          <Navbar.Brand href="#home">SseulShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail");
              }}
            >
              Detail
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div
        className="main-bg"
        style={{ backgroundImage: "url(" + img + ")" }}
      ></div>

<div className="container">
        <div className="row">
          {shoes.map((item) => {
            return <Card title={item.title} price={item.price} />;
          })}
        </div>
      </div>
      {count === 3 ? (
        <div>더이상 상품이 없습니다 </div>
      ) : (
        <button
          onClick={() => {
            count === 0
              ? axios
                  .get("https://codingapple1.github.io/shop/data2.json")
                  .then((data) => {
                    let copy = [...shoes, ...data.data];
                    setShoes(copy);
                    setCount(+1);
                  })
                  .catch(() => {
                    console.log("실패함!!");
                  })
              : axios
                  .get("https://codingapple1.github.io/shop/data3.json")
                  .then((data) => {
                    let copy = [...shoes, ...data.data];
                    setShoes(copy);
                    setCount(3);
                  })
                  .catch(() => {
                    console.log("실패함!!");
                  });
          }}
        >
          버튼
        </button>
      )}
  
    </div>
  );
}

export default App;

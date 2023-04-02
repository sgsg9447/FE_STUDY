import React, { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { addItem } from "../store";

const Detail = ({ shoes }) => {
  let dispatch = useDispatch();
  let { id } = useParams();
  let findItem = shoes.find((item) => item.id == id);
  let [show, setShow] = useState(true);
  let [num, setNum] = useState("");
  let [tab, setTab] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 2000);
  }, []);
  useEffect(() => {
    if (isNaN(num)) {
      alert("NO!!");
    }
  }, [num]);

  return (
    <div className="container">
      {show ? (
        <div className="alert alert-warning"> 2초 이내 구매시 할인</div>
      ) : (
        ""
      )}
      <input
        onChange={(e) => {
          setNum(e.target.value);
        }}
      ></input>

      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{findItem.title}</h4>
          <p>{findItem.content}</p>
          <p>{findItem.price}원</p>
          <button
            onClick={() => {
              dispatch(addItem());
            }}
            className="btn btn-danger"
          >
            주문하기
          </button>
        </div>
        <RedButton />
      </div>

      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link eventKey="link0">버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link1">버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link2">버튼2</Nav.Link>
        </Nav.Item>
      </Nav>
      {tab === 0 ? (
        <div>내용0</div>
      ) : tab === 1 ? (
        <div>내용1</div>
      ) : (
        <div>내용2</div>
      )}
    </div>
  );
};

export default Detail;

const RedButton = styled.button`
  color: red;
`;

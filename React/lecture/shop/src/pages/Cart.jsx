import React from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeAge, changeCount, changeName } from "../store";

const Cart = () => {
  let state = useSelector((state) => {
    return state;
  });

  let dispatch = useDispatch();
  return (
    <div>
      {state.user.name}의 장바구니 & {state.user.age}
      <button
        onClick={() => {
          dispatch(changeAge(20));
        }}
      >
        버튼
      </button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {state.stock.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.count}</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(changeCount(item.id));
                    }}
                  >
                    +
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Cart;

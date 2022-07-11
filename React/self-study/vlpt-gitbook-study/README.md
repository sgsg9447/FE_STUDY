# 리액트는 어쩌다 만들어졌을까?

> 리액트는 어떠한 상태가 바뀌었을때, 그 상태에 따라 DOM 을 어떻게 업데이트 할 지 규칙을 정하는 것이 아니라, 아예 다 날려버리고 처음부터 모든걸 새로 만들어서 보여준다면 어떨까? 라는 아이디어에서 개발이 시작되었다.

"업데이트를 어떻게 해야 할 지"-> 고민 X -> but, 속도 ⬇ -> Virtual DOM

- 그냥 메모리에 가상으로 존재하는 DOM(JavaScript 객체 = 작동 성능이 실제로 브라우저에서 DOM 을 보여주는 것 보다 속도가 훨씬 빠름)
- 리액트는 상태가 업데이트 되면, 업데이트가 필요한 곳의 UI 를 Virtual DOM 을 통해서 렌더링한다.
- (그리고 나서 리액트 개발팀이 만든 매우 효율적인 비교 알고리즘을 통하여)실제 브라우저에 보여지고 있는 DOM 과 비교를 한 후, 차이가 있는 곳을 감지하여 이를 실제 DOM 에 패치시킨다.
- 이를 통하여, "업데이트를 어떻게 할 지" 에 대한 고민을 하지 않으면서, 빠른 성능도 지켜낼 수 있게 되었다.

## 몰랐던 개념 정리

### defaultProps

```jsx
defaultProps;
function Hello({ name, age }) {
  return <div>{name}</div>;
}

Hello.defaultProps = {
  name: "이름없음",
};
```

### [props 를 통해 컴포넌트에게 값 전달하기](https://react.vlpt.us/basic/05-props.html)

props = properties 의 줄임말
어떠한 값을 컴포넌트에게 전달해줘야 할 때 -> props 를 사용

#### props.children

컴포넌트 태그 사이에 넣은 값을 조회하고 싶을 땐 ? props.children 을 조회

##### Wrapper.js

```jsx
import React from "react";

function Wrapper() {
  const style = {
    border: "2px solid black",
    padding: "16px",
  };
  return <div style={style}></div>;
}

export default Wrapper;
```

##### App.js

```jsx
import React from "react";
import Hello from "./Hello";
import Wrapper from "./Wrapper";

function App() {
  return (
    <Wrapper>
      <Hello name="react" color="red" />
      <Hello color="pink" />
    </Wrapper>
  );
}

export default App;
```

왜 `<Hello/>` 컴포넌트가 안보이지?
-> 내부의 내용이 보여지게 하기 위해서는 Wrapper 에서 props.children 을 렌더링해주어야 함

> 컴포넌트 태그 사이에 값이 있을때 'children'이란 예약어를 사용한다.

```jsx
import React from "react";

function Wrapper({ children }) {
  //추가
  const style = {
    border: "2px solid black",
    padding: "16px",
  };
  return <div style={style}>{children} //추가</div>;
}

export default Wrapper;
```

### useState

리액트에서 엘리먼트에 이벤트를 설정해줄때에는 on이벤트이름={실행하고싶은함수} 형태로 설정해주어야 한다.

**여기서 주의하셔야 하는 점은, 함수형태를 넣어주어야 하지, 함수를 다음과 같이 실행하시면 안된다!**

onClick={onIncrease()}
이렇게 하면 렌더링되는 시점에서 함수가 호출되버리기 때문입니다. 이벤트를 설정할때에는 함수타입의 값을 넣어주어야 한다는 것!!

> 리액트에서 객체를 업데이트하게 될 때에는 기존 객체를 직접 수정하면 안되고, 새로운 객체를 만들어서, 새 객체에 변화를 주어야 한다!

```jsx
inputs[name] = value;
```

👇🏻

```jsx
setInputs({
  ...inputs,
  [name]: value,
});
```

### [useRef 로 특정 DOM 선택하기](https://react.vlpt.us/basic/10-useRef.html)

- DOM 을 직접 선택해야 하는 상황이 발생 (예를 들어서 특정 엘리먼트의 크기를 가져와야 한다던지, 스크롤바 위치를 가져오거나 설정해야된다던지, 또는 포커스를 설정해줘야된다던지 등)
- 추가적으로 Video.js, JWPlayer 같은 HTML5 Video 관련 라이브러리, 또는 D3, chart.js 같은 그래프 관련 라이브러리 등의 외부 라이브러리를 사용해야 할 때에도 특정 DOM 에다 적용하기 때문에 DOM 을 선택해야 하는 상황이 발생 할 수 있다.
- 위와 같은 상황 -> ref 사용
- 함수형 컴포넌트에서 ref 를 사용 할 때에는 useRef 라는 Hook 함수를 사용한다.
- 클래스형 컴포넌트에서는 콜백 함수를 사용하거나 React.createRef 라는 함수를 사용

> useRef() 를 사용하여 Ref 객체를 만들고, 이 객체를 우리가 선택하고 싶은 DOM 에 ref 값으로 설정해주어야 한다. 그러면, Ref 객체의 .current 값은 우리가 원하는 DOM 을 가르키게 됨!

### [useRef 로 컴포넌트 안의 변수 만들기](https://react.vlpt.us/basic/12-variable-with-useRef.html)

- useRef Hook 은 DOM 을 선택하는 용도 + 컴포넌트 안에서 조회 및 수정 할 수 있는 변수를 관리하는 것
- useRef 로 관리하는 변수는 값이 바뀐다고 해서 컴포넌트가 리렌더링되지 않는다.
- 리액트 컴포넌트에서의 상태는 상태를 바꾸는 함수를 호출하고 나서 그 다음 렌더링 이후로 업데이트 된 상태를 조회 할 수 있는 반면, useRef 로 관리하고 있는 변수는 설정 후 바로 조회 할 수 있다.

- 이 변수를 사용하여 다음과 같은 값을 관리 할 수 있다.
  - setTimeout, setInterval 을 통해서 만들어진 id
  - 외부 라이브러리를 사용하여 생성된 인스턴스
  - scroll 위치

### [useEffect를 사용하여 마운트/언마운트/업데이트시 할 작업 설정하기](https://react.vlpt.us/basic/16-useEffect.html)

- deps에 빈 배열
  - 처음 컴포넌트 마운트 됐을 때 useEffect내 함수 호출 (componentDidmount)
  - 컴포넌트 언마운트 될 때 cleanup 함수 호출 (componentWillUnmount)
- deps에 의존 값 존재
  - 처음 컴포넌트 마운트 됐을 때 useEffect내 함수 호출 (componentDidmount)
- 의존 값이 업데이트 됐을 때 (componentDidUpdate)
  - 컴포넌트 언마운트 될 때 cleanup 함수 호출 (componentWillUnmount)
- 아예 파라미터를 안 넣었을 경우
  - 그냥 리렌더링 될 때마다 함수 호출

### [useMemo 를 사용하여 연산한 값 재사용하기](https://react.vlpt.us/basic/17-useMemo.html)

성능 최적화를 위하여 연산된 값을 useMemo라는 Hook 을 사용하여 재사용

Memo 는 "memoized" 를 의미하는데, 이는, 이전에 계산 한 값을 재사용한다는 의미를 가지고 있다.

useMemo 의 첫번째 파라미터에는 어떻게 연산할지 정의하는 함수를 넣어주면 되고 두번째 파라미터에는 deps 배열을 넣어주면 되는데, 이 배열 안에 넣은 내용이 바뀌면, 우리가 등록한 함수를 호출해서 값을 연산해주고, 만약에 내용이 바뀌지 않았다면 이전에 연산한 값을 재사용하게 된다.

### [useCallback 을 사용하여 함수 재사용하기](https://react.vlpt.us/basic/18-useCallback.html)

useMemo 는 특정 결과값을 재사용 할 때 사용하는 반면,
useCallback 은 특정 함수를 새로 만들지 않고 재사용하고 싶을때 사용합니다.

이 함수들은(App.js에 있는 `onCreate`, `onRemove`, `onToggle`) 컴포넌트가 리렌더링 될 때 마다 새로 만들어진다.
함수를 선언하는 것 자체는 사실 메모리도, CPU 도 리소스를 많이 차지 하는 작업은 아니기 때문에 함수를 새로 선언한다고 해서 그 자체 만으로 큰 부하가 생길일은 없지만, 한번 만든 함수를 필요할때만 새로 만들고 재사용하는 것은 여전히 중요하다.
왜????, 우리가 나중에 컴포넌트에서 props 가 바뀌지 않았으면 Virtual DOM 에 새로 렌더링하는 것 조차 하지 않고 컴포넌트의 결과물을 재사용 하는 최적화 작업을 할건데, 이 작업을 하려면, 함수를 재사용하는것이 필수이다.

🚨 주의 할 점은, 함수 안에서 사용하는 상태 혹은 props 가 있다면 꼭, deps 배열안에 포함시켜야 된다는 것이다.
만약에 deps 배열 안에 함수에서 사용하는 값을 넣지 않게 된다면, 함수 내에서 해당 값들을 참조할때 가장 최신 값을 참조 할 것이라고 보장 할 수 없다.
props 로 받아온 함수가 있다면, 이 또한 deps 에 넣어줘야 한다.

### [React.memo 를 사용한 컴포넌트 리렌더링 방지](https://react.vlpt.us/basic/19-React.memo.html)

컴포넌트의 props 가 바뀌지 않았다면? -> 리렌더링을 방지하여 컴포넌트의 리렌더링 성능 최적화 가능
이 함수를 사용한다면, 컴포넌트에서 리렌더링이 필요한 상황에서만 리렌더링을 하도록 설정해줄수있다.
사용법 ? -> 그냥 감싸주기

```jsx
export default React.memo(CreateUser);
```

### [useReducer 를 사용하여 상태 업데이트 로직 분리하기](https://react.vlpt.us/basic/20-useReducer.html)

#### useReducer 이해하기

상태를 관리 -> useState 말고 ? -> useReducer 사용
이 Hook 함수를 사용하면 컴포넌트의 상태 업데이트 로직을 컴포넌트에서 분리시킬 수 있다.
상태 업데이트 로직을 컴포넌트 바깥에 작성 할 수도 있고, 심지어 다른 파일에 작성 후 불러와서 사용 할 수도 있다.

> reducer 는 현재 상태와 액션 객체를 파라미터로 받아와서 새로운 상태를 반환해주는 함수이다.

## 더 공부해봐야할 것

useReducer , customhook, context API, Lifecycle, class형 컴포넌트
-> 공식문서 읽으며 이부분을 좀더 자세히 채워놓자!

블로그 : https://velog.io/@sgsg9447/%EB%B2%A8%EB%A1%9C%ED%8D%BC%ED%8A%B8-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EA%B9%83%EB%B6%81-%EC%B2%98%EC%9D%8C%EB%B6%80%ED%84%B0%EB%81%9D%EA%B9%8C%EC%A7%80-%EC%9E%91%EC%84%B1%EC%A4%91
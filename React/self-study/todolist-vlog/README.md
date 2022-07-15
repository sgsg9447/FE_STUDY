# 생각

## 내가 생각한 요구사항

먼저, ToDo를 입력받을 Input이 필요하겠지
그리고 그 Input받은 값을 저장할 배열이 필요하겠다.
map을 돌며 배열의 값을 화면에 그려주겠지.
배열의 값에 각각에 상태를 저장할 수 있을까 ?
수정 삭제 기능 필요

### 만들어야 할 컴포넌트 확인하기

#### 내가 생각한 예상 컴포넌트
<Main/>  : 첫화면
<ToDoInput/> : Input을 통해 ToDo 생성
<ToDoList/> : ToDo 값 그려주기

#### 기능 요구사항 
<TodoHead/> : 이 컴포넌트는 오늘의 날짜와 요일을 보여주고, 앞으로 해야 할 일이 몇개 남았는지 보여줍니다.

<TodoList/> : 이 컴포넌트는 할 일에 대한 정보가 들어있는 todos 배열을 내장함수 `map` 을 사용하여 여러개의 TodoItem 컴포넌트를 렌더링해줍니다.

<TodoItem/> : 각 할 일에 대한 정보를 렌더링해주는 컴포넌트입니다. 좌측에 있는 원을 누르면 할 일의 완료 여부를 toggle 할 수 있습니다. 할 일이 완료됐을 땐 좌측에 체크가 나타나고 텍스트의 색상이 연해집니다. 그리고, 마우스를 올리면 휴지통 아이콘이 나타나고 이를 누르면 항목이 삭제됩니다.

<TodoCreate/> : 새로운 할 일을 등록할 수 있게 해주는 컴포넌트입니다. TodoTemplate 의 하단부에 초록색 원 버튼을 렌더링해주고, 이를 클릭하면 할 일을 입력 할 수 있는 폼이 나타납니다. 버튼을 다시 누르면 폼이 사라집니다.

### 오늘의 궁금점
#### const형 컴포넌트 vs function형 컴포넌트
```jsx
import React from 'react'

const TodoTemplate = () => {
  return (
    <div>TodoTemplate</div>
  )
}

export default TodoTemplate
```

```jsx
import React from 'react'

function TodoTemplate() {
  return (
    <div>TodoTemplate</div>
  )
}

export default TodoTemplate
```




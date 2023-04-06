# Redux
  - prop을 통해 상위 컴포넌트가 하위 컴포넌트로 정보를 넘긴다.
  - 이벤트가 발생하면 하위 컴포넌트가 상위 컴포넌트로 정보를 넘기는 리프팅을 하게 된다.
  - 어플리케이션이 커지면 이 과정에서 발생하는 Prop Drilling을 해결하기 위해 Redux를 사용한다.
  
엥? 이거 완전 Context API 아니냐?
  - Context API: React 내장 API
  - Redux: Third Party 라이브러리, 개발 편의를 위한 미들웨어 기능을 제공하고 성능 최적화를 제공한다.

  - Context API의 구조와 다르게 Redux는 조금 더 복잡하다.
  - Action이 발생하면 Reducer를 호출하고 Reducer를 통해 Store에 상태를 저장, Store가 변경되면 View는 리렌더링
  - 이는 Context API에 useReducer를 사용한 것과 유사하다.
  - 소규모 프로젝트에는 Redux보다 Context API가 더 좋을 수도 있다.

  yarn add redux react-redux

# redux-logger
  - 상태가 변경될 때 console에 로고를 찍어주는 middleware 라이브러리

  yarn add redux-logger
  yarn add -D @types/redux-logger // 타입을 따로 설치해야함

# redux-devtools-extension
  - redux의 상태를 보고 추적할 수 있다.
  - yarn add -D redux-devtools-extension
  - google chrome redux 플러그인을 활용한다.
  - https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=ko

# redux-presist
  - 상태가 localStorage나 sessionStorage를 통해 남아 있을 수 있도록 도와주는 middleware 라이브러리
  - yarn add redux-persist
  - yarn add -D @types/redux-persist // 이 친구도 타입 없음
  - whitelist 속성으로 이벤트가 적용될 상태만 지정하거나 blacklist 속성으로 이벤트가 적용되지 않을 상태를 지정할 수 있다.

# Redux-toolkit
  - toolkit으로 slice를 이용해 로직들을 하나로 합쳐서 관리하는 것이 가능해진다.
  - createAction과 createReducer를 이용해 따로따로 관리할 수도 있다.
  - 어느 방법을 사용하든 기존의 redux보다 간단하고 타입스크립트의 취지에 맞는 코딩이 가능해진다.
  - yarn add @reduxjs/toolkit
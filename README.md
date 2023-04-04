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
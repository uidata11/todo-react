# 장보기 목록 만들기 ( Todo App )

1. Container 만들기

   - 관리할 상태를 정의합니다.
   - todos => useState 사용

2. Form 만들기

   - todos, setTodos를 받아오기
   - todo => useState
   - **대응내용** Create뿐만 아니라 Updata 상황도 고려해야함
     | - payload 받아와서 수정할때만 todo 초기값을 변경
     | - 수정하는 상황을 구별할 boolean 받아와야 함

3. Item 만들기 ( Read )
   - todos의 todo를 출력하면 됨
   - 수정 버튼을 눌렀을 때 Form을 그려주면 됨
   - **주의** : payload 로 todo 전달, 수정하는 boolean 전달

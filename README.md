# unstated 공부하기

Unstated
https://unstated.io

create-react-app으로 만들었구요
unstated를 공부할려고 만들었습니다.

react component에서 state와 function을 분리해내서
전역(=정확히는 Provider scope) 객체로(=container) 만들어준 다음
이걸 필요로 하는 subscribe에 주입시켜 render()하는게 unstated의 특징입니다.

A/B/C로 구성되어 있고요
A, B에서는 값을 +, -하는 container/Add를
C에서는 Add의 값을 push()하는 container/List를
주입하여 사용하고 있습니다.

이상입니다. 감사합니다!

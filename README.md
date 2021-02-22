# Kokoa Clone 2020 Update

HTML & CSS are so much fun!

# 추가 내용(MDN Web Docs)

1. z-index는 position 속성이 설정된 엘리먼트에 대해서만 의미를 갖는다.

2. css 적용은 최대한 구조 중심으로 작성하자.

3. 대부분의 경우, height와 width가 auto로 지정된 절대 위치 지정 요소(position: absolute; / position: fixed;)는 자신의 콘텐츠에 맞춰 크기가 바뀝니다.

4. "구조상" 양식이 같은 html 구성요소들의 css를 하나의 component로 구성해서 깔끔하게 적용하자.

5. 구조는 비슷할 지라도 기능상의 차이가 있는 html 구성요소들은 다른 css를 적용하자.

# Homework

HW-1. 각 user-component에 margin-bottom 관련 속성을 추가하자.
(채팅방이 많아질 때마다 방 사이의 간격 추가하기)

# 질문

1. img 태그는 display: inline; 인데 width, height 적용 가능 = (?)

2. .status-bar 부분의 top: 0; 왜 반드시 추가해야 하는지, alt-header 와 다른 부분 고민..
   > display: fixed; 때문에 생기는 layer 문제?

# 생각

1. styles.css에 모든 css들을 import한 후에 이를 각각의 html에 적용하는 과정에 대해 좀 깊이 팔 필요가 있음.

2. #6.29 Chat Screen part Two (10:03) 다시 코딩해보면서 이해하자.

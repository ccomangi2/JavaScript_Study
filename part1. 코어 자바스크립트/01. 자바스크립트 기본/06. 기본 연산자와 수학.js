// 1. 용어 : '단항', '이항', '피연산자'
let x = 1;

x = -x;
alert( x ); // -1, 단항 마이너스 연산자는 부호를 뒤집습니다.

let x = 1, y = 3;
alert( y - x ); // 2, 이항 마이너스 연산자는 뺄셈을 해줍니다.


// 2. 수학
// 나머지 연산자 %
alert( 5 % 2 ); // 5를 2로 나눈 후의 나머지인 1을 출력
alert( 8 % 3 ); // 8을 3으로 나눈 후의 나머지인 2를 출력

// 거듭제곱 연산자 **
alert( 2 ** 2 ); // 4  (2 * 2)
alert( 2 ** 3 ); // 8  (2 * 2 * 2)
alert( 2 ** 4 ); // 16 (2 * 2 * 2 * 2)
alert( 4 ** (1/2) ); // 2 (1/2 거듭제곱은 제곱근)
alert( 8 ** (1/3) ); // 2 (1/3 거듭제곱은 세제곱근)

// 이항 연산자 '+'와 문자열 연결
let s = "my" + "string";
alert(s); // mystring
alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"
alert(2 + 2 + '1' ); // '221'이 아니라 '41'이 출력됩니다.
alert( 6 - '2' ); // 4, '2'를 숫자로 바꾼 후 연산이 진행됩니다.
alert( '6' / '2' ); // 3, 두 피연산자가 숫자로 바뀐 후 연산이 진행됩니다.

// 단항 연산자 +와 숫자형으로의 변환
// 숫자에는 아무런 영향을 미치지 않습니다.
let x = 1;
alert( +x ); // 1

let y = -2;
alert( +y ); // -2
// 숫자형이 아닌 피연산자는 숫자형으로 변화합니다.
alert( +true ); // 1
alert( +"" );   // 0

let apples = "2";
let oranges = "3";

alert( apples + oranges ); // 23, 이항 덧셈 연산자는 문자열을 연결합니다.

let apples = "2";
let oranges = "3";
// 이항 덧셈 연산자가 적용되기 전에, 두 피연산자는 숫자형으로 변화합니다.
alert( +apples + +oranges ); // 5
// `Number(...)`를 사용해서 같은 동작을 하는 코드를 작성할 수 있지만, 더 기네요.
// alert( Number(apples) + Number(oranges) ); // 5

// 3. 연산자 우선순위 : 동일한 기호의 단항 연산자는 이항 연산자보다 우선순위가 더 높다는 것에 주목
…	…			…
17	단항 덧셈	+
17	단항 부정	-
16	지수			**
15	곱셈			*
15	나눗셈		/
13	덧셈			+
13	뺄셈			-
…	…			…
3	할당			=
…	…			…

// 4. 할당 연산자
let x = 2 * 2 + 1;

alert( x ); // 5
// 값을 할당하는 할당 연산자
let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

alert( a ); // 3
alert( c ); // 0
// 할당 연산자 체이닝
let a, b, c;

a = b = c = 2 + 2;

alert( a ); // 4
alert( b ); // 4
alert( c ); // 4

// 5. 복합 할당 연산자
let n = 2;
n = n + 5;
n = n * 2;

let n = 2;
n += 5; // n은 7이 됩니다(n = n + 5와 동일).
n *= 2; // n은 14가 됩니다(n = n * 2와 동일).

alert( n ); // 14

let n = 2;

n *= 3 + 5;

alert( n ); // 16  (*=의 우측이 먼저 평가되므로, 위 식은 n *= 8과 동일합니다.)

// 6. 증가, 감소 연산자
// 증가 연산자
let counter = 2;
counter++;      // counter = counter + 1과 동일하게 동작합니다. 하지만 식은 더 짧습니다.
alert( counter ); // 3

// 감소 연산자
let counter = 2;
counter--;      // counter = counter - 1과 동일하게 동작합니다. 하지만 식은 더 짧습니다.
alert( counter ); // 1

// counter++와 같이 피연산자 뒤에 올 때는, '후위형(postfix form)'이라고 부릅니다.
let counter = 1;
let a = counter++; // (*) ++counter를 counter++로 바꿈

alert(a); // 1

// ++counter와 같이 피연산자 앞에 올 때는, '전위형(prefix form)'이라고 부릅니다.
let counter = 1;
let a = ++counter; // (*)

alert(a); // 2

// 7. 비트 연산자
비트 AND ( & )
비트 OR ( | )
비트 XOR ( ^ )
비트 NOT ( ~ )
왼쪽 시프트(LEFT SHIFT) ( << )
오른쪽 시프트(RIGHT SHIFT) ( >> )
부호 없는 오른쪽 시프트(ZERO-FILL RIGHT SHIFT) ( >>> )

// 8. 쉼표 연산자 (우선 순위 매우 낮음)
let a = (1 + 2, 3 + 4);

alert( a ); // 7 (3 + 4의 결과)
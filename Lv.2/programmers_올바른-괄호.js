// 효율성 테스트2 - 시간초과
function solution(s) {
    var stackCount = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(') {
            stackCount += 1;
        } else {
            stackCount -= 1;
        }
        
        if (stackCount < 0) {
            return false;
        }
    }
    return stackCount == 0 ? true : false;
}
// 위의 첫번째로 작성한 코드는 효율성 테스트 2번에서 시간초과 문제가 발생했다.
// 따라서 아래의 코드로 if-else문을 삼항연산자로 변환하여 통과하였다.


// 통과 코드
function solution(s) {
    var stackCount = 0;
    // for문을 통해 s의 길이만큼 반복
    for (let i = 0; i < s.length; i++) {
        // 만약 s[i]번째가 '('라면 stackCount에 1을 더하고 아니라면 -1
        (s[i] == '(') ? stackCount += 1 : stackCount -= 1;
        
        // 만약 stackCount가 0보다 작다면 그건 '('부터 시작한 것이 아니기 때문에
        // 올바르지 않은 괄호로 false를 return
        if (stackCount < 0) {
            return false;
        }
    }
    // 마지막에 stackCount가 0이라면 ture를 return하고, false를 return
    return stackCount == 0 ? true : false;
}


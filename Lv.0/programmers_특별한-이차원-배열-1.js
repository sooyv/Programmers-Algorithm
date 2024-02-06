// 나의 풀이
function solution(n) {
    var answer = [];
    
    for (let i = 1; i <= n; i++) {
        // answer 배열 안에 넣을 배열 arr
        let arr = [];
        for (let j = 1; j <= n; j++) {
            // for문을 반복하다가 i와 j가 같으면, arr배열에 1을 push
            // 같지 않는 경우에는 모두 0을 push
            (i == j) ? arr.push(1) : arr.push(0);
        }
        // 생성한 arr 배열을 answer 배열에 push
        answer.push(arr);
    }
    
    return answer;
}


// 다른 사람의 풀이
function solution(n) {
    // Array(n), n개의 요소를 갖는 빈 배열을 생성
    // Array(n).fill(0): 빈 배열을 생성하고, 모든 요소를 0으로 채운다
    // n개의 행을 갖는 2차원 배열을 생성
    const answer = Array.from(Array(n), () => Array(n).fill(0));

    // for문을 통하여 i번째 배열의 i번째 인덱스는 1로 설정
    for (let i = 0; i < n; i++) {
      answer[i][i] = 1;
    }

    return answer;
}
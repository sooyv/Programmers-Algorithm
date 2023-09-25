// 첫번째 풀이 - 시간 초과
// 66.7점, 테스트 11, 12, 13, 14, 15, 16, 18, 24, 25

// 약수의 개수를 구할때마다 count를 해주고, 해당 count를 다시 divisor에 push하여 
// 계산하는 풀이 그대로의 코드를 작성했지만, 이 코드는 시간 초과 에러가 발생되었다.

function solution(number, limit, power) {
    var answer = 0;
    let divisors = [];
    
    // 약수의 개수 구하기
    for (let i = 1; i <= number; i++) {         // 이중 for문을 통해 count하면서 각 수의 약수읙 개수를 구하고,
        let count = 1;
        for (let j = 1; j < i; j++) {
            if (i % j == 0) {
                count++;
            }
        }
        divisors.push(count);                   // divisors 배열에 약수의 개수를 push
    }
    // console.log(divisors)
    
    divisors.filter((v, i) => {                 // 약수의 개수가 들어있는 divisors 배열을 filter를 통해, 각 약수의 갯수가 limit 이상인지 확인.
        return v > limit ? answer += power : answer += v;       // 이상이라면, answer에 power를 더해주고, 아니라면 약수의 갯수를 더해줌.
     });
    
    return answer;
}



// 두번째 코드
// 시간 초과 문제를 해결하기 위해 약수의 개수 구하는 코드를 변경하였다.
// 제곱근을 통한 풀이
function solution(number, limit, power) {
    let arr = [];
    for(let i = 1; i <= number; i++) {
        let divisor = 0;
        for (let j = 1; j <= Math.sqrt(i); j++) {           // 반복문은 Math.sqrt(i)까지 반복
            if (i % j == 0) {                               // 만약 i % j == 0이라면, j는 i의 약수이다.
               if (i / j === j) {                           // i / j == j 라면, j는 i의 약수이면서도, 제곱근이 될 수 있는 수로(ex) i가 4일때, j가 2) divisor에는 1을 더해준다
                   divisor += 1;
               } else {                                     // 아니라면, j가 i의 제곱근이 아닌 경우, divisor에 2를 더해줌
                   divisor += 2;
               }
            }
        }
        (divisor > limit) ? arr.push(power) : arr.push(divisor);        // divisor가 limit보다 크다면 arr 배열에 power를 넣어주고, 아니라면 그대로 divisor를 넣어줌
    }
    return arr.reduce((acc, cur) => acc + cur);                     // 모든 arr배열을 더하여 return
}



// 다른 풀이
function solution(number, limit, power) {
    let div = [];
    for (let i = 1; i <= number; i++) {
        let count = 0;
        for (let j = 1; j <= i / 2; j++) {
            if (i % j == 0) {
                count++;
            } 
        }
        div.push(count += 1);
    }
    // console.log(div)
    
    return div.map((e) => {
        return e > limit ? power : e;
        }).reduce((acc, cur) => acc + cur, 0);
}



// 다른 사람의 풀이
function solution(number, limit, power) {
    var answer = 0;
    for (let n = 1; n <= number; n++)
    {
        let count = 0;
        for (let j = 1; j * j <= n; j++)
        {
            if (j * j == n) count++;
            else if (n % j == 0) count += 2;
        }
        if (count > limit) count = power;
        answer += count;
    }
    return answer;
}
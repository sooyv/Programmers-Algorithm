// 나의 풀이
function solution(s) {
    let count = 0;
    let deleteZero = 0;
    // x를 s의 값으로 할당
    let x = s;
    
    // x가 1일때 반복문 종료
    while(x !== '1') {
        // x.length로 0 제거 전의 길이를 prevLen으로 할당
        let prevLen = x.length;
        // prevLen에서 0의 갯수(x.toString(2).split("0").length -1)를 제거한 길이를 curLen에 할당
        let curLen = prevLen - (x.toString(2).split("0").length -1);
        // curLen을 이진변환한 값을 x에 재할당하며 x가 1이 될때까지 while문 반복
        x = curLen.toString(2);
        
        // prevLen - curLen로 제거할 0의 갯수를 반복마다 deleteZero에 더해준다.
        deleteZero += prevLen - curLen;
        // count++로 반복 횟수를 증가시켜준다.
        count++;
    }
    return [count, deleteZero];
}


// 다른 사람의 풀이
function solution(s) {
    // answer 배열을 [0, 0]으로 초기화하여
    // answer[0]은 연산을 수행한 횟수를 나타내고, answer[1]은 문자열 s에서 0의 개수를 나타낸다.
    var answer = [0, 0];
    
    // while문으로 문자열 s의 길이가 1보다 큰 동안 반복
    while(s.length > 1) {
        // answer의 0번째 인덱스를 반복마다 증가
        answer[0]++;
        // answer의 1번째 인덱스에 s문자열에 0과 일치하는 부분의 갯수를 구하여 더해줌
        // ||[]이 부분은 0이 없을 경우 null 방지
        answer[1] += (s.match(/0/g)||[]).length;
        // s에서 0과 일치하는 문자는 ''으로 변환하고, 남은 문자열의 길이를 2진수로 변환한 후 다시 s에 할당
        s = s.replace(/0/g, '').length.toString(2);
    }
    return answer;
}
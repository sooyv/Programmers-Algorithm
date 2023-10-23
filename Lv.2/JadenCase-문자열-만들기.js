function solution(s) {
    var answer = '';
    // for문을 통해 문자열 s의 길이만큼 순회
    for (let i = 0; i < s.length; i++) {
        // 0번째 문자, 가장 처음 문자라면
        if (i == 0) {
            // answer에 해당 문자를 대문자로 변경하여 붙이고,
            answer += s[0].toUpperCase();
            // continue로 나머지 반복문 내용을 건너뛰고 다음 반복으로 진행
            continue;
        }
        // 삼항연산자를 통해서 만약 앞의 문자(s[i-1])가 공백이라면 
        // answer에 해당 문자(s[i])를 대문자로 변경하고,
        // 그렇지 않다면 해당문자(s[i])는 소문자로 변경.
        s[i-1] == " " ? answer += s[i].toUpperCase() : answer+= s[i].toLowerCase();
    }
    // 완성된 answer를 return
    return answer;
}


// 코드 수정
function solution(s) {
    var answer = '';
    for (let i = 0; i < s.length; i++) {
        // if문에 or 조건으로 i가 0이거나 앞의 문자(s[i-1])가 공백이라면 대문자로 만들도록 수정
        if (i === 0 || s[i-1] === " ") {
            answer += s[i].toUpperCase();
        } else {
            answer += s[i].toLowerCase();
        }
    }
    return answer;
}


// 다른 사람의 풀이
function solution(s) {
    // split(" ")을 통해서 공백 기준 문자열을 단어로 분리
    // map()을 통해 각 단어를 순회
    // 각 단어에서 charAt(0)을 통해 가장 0번째 문자는 대문자로,
    // substring(1)을 통해 1번째부터 마지막 문자는 소문자로 변환한 뒤 join(" ")
    return s.split(" ").map(v => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase()).join(" ");
}
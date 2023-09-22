function solution(s) {
    // 문자열 s를 공백으로 split 해준다.
    let num = s.split(' ');

    // 배열의 가장 큰 수와 가장 작은 수를 각각 구한 뒤,
    let max = Math.max(...num);
    let min = Math.min(...num);
    
    // 중간에 문자열을 붙여서 String으로 계산
    return min + " " + max;
}


// 다른 사람의 풀이
function solution(s) {
    // 문자열 s를 공백으로 split 하고 arr 할당
    var arr = s.split(' ');
    // arr를 오름차순 정렬
    arr.sort((a, b) => a - b);

    // arr 배열의 0번째 인덱스는 당연히 가장 작은 수일 것이고,
    // 가장 뒤의 인덱스는 가장 큰 수이므로 이것을 공백과 붙여서 return
    var answer = arr[0] + " " + arr[arr.length-1];

    return answer;
}
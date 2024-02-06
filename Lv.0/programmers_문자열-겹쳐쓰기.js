// 첫번째 풀이
// 통과는 했지만 정확성 테스트 6번에서 실패
// 6번 반례 - 입력값 : "aaaaaa", "bbb", 3 / 기댓값 : "aaabbb"
function solution(my_string, overwrite_string, s) {
    var answer = ''; 
    let str = [...my_string].splice(s, overwrite_string.length).join("");
    console.log(str);   // aaa
    // 반례의 경우에는 replace를 사용하게 되면 가장 앞에 존재하는 문자부터 해당 글자로 대체하게 되기 때문에 
    // s부터 교체하라는 조건을 충족하지 못해 테스트 실패
    answer = my_string.replace(str, overwrite_string)
    return answer;
}

// 두번째 풀이
function solution(my_string, overwrite_string, s) {
    // 인덱스 s부터 overwrite_string의 길이만 잘랐을때 남은 앞부분
    let frontStr = my_string.substring(0, s);

    // 인덱스 s부터 overwrite_string의 길이만 잘랐을때 남은 뒷부분
    let backStr = my_string.substring(s + overwrite_string.length);
    
    return frontStr + overwrite_string + backStr;
}

// 세번째 풀이 
function solution(my_string, overwrite_string, s) {
    // my_string을 split('')한 배열 str
    let str = my_string.split('');
    // splice를 사용하며 s부터 overwrite_string.length까지 delete하고, overwrite_string를 넣는다.
    str.splice(s, overwrite_string.length, overwrite_string);
    
    // join('')하여 문자열 return
    return str.join('');
}
function solution(n, m, section) {  
    var count = 0;                      // 동작 횟수를 셀 count
    let painted = 0;                    // 칠한 부분을 확인할 painted
    
    section.forEach((part) => {                   // section 배열의 각 요소를 forEach로 순회, 배열의 각 요소는 part       
        if (painted < part) {                     // 칠해진 곳보다 part가 더 크다면, 아직 그 부분이 칠해지지 않은 것으로
            painted = part + m - 1;               // part에 롤러의 길이 m을 더하고 -1을 해준다.
            count++;                              // 이것의 반복 횟수를 구할 것이기 때문에, 이 동작마다 count++
        }
    });
    
    return count;
}


// 다른 사람의 풀이 - for of문 사용
function solution(n, m, section) {
    let painted = 0;
    let count = 0;
    
    for (let part of section) {                 
        if (part > painted) {
            painted = part + m - 1;
            count++;
        }
    }
    
    return count;
}
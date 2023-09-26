// 처음 코드
// for문의 동작을 0부터 A의 length까지 했음에도, 마지막으로 남은 요소들까지 더해지지 않았다.
function solution(A, B){
    let answer = 0;
    
    // A와 B 모두 오름차순으로 정렬
    let sortA = A.sort((a, b) => a - b);
    let sortB = B.sort((a, b) => a - b);
    // console.log(sortA)
    // console.log(sortB)

    // for문을 반복하며 각 요소를 배열에서 뺄때, 
    // 마지막 반복에서는 min과 max를 꺼내면 각 배열은 빈 배열이 되고, 
    // 그 뒤의 반복에서는 shift()와 pop() 함수를 호출해도 
    // 더 이상 꺼낼 요소가 없어서 answer에는 값이 더해지지 않게 되어 올바른 동작이 되지 않았다.
    for (let i = 0; i < A.length; i++) {
        let min = sortA.shift();
        let max = sortB.pop();
        
        answer += min * max;
        
        console.log(answer)                  //     5         /  13
        console.log("sortA = " + sortA)      // sortA = 2,4   /  sortA = 4
        console.log("sortB = " + sortB)      // sortB = 4,4   /  sortB = 4
    }
    
    return answer;
}


// 수정 코드 1 - while로 변경
function solution(A, B){
    let answer = 0;
    
    // A와 B 모두 오름차순으로 정렬
    let sortA = A.sort((a, b) => a - b);
    let sortB = B.sort((a, b) => a - b);

    // sortA의 길이는 점점 줄어들기때문에  
    // while로 sortA의 길이가 0보다 클 때 answer에 더하기를 반복
    while (sortA.length > 0) {
        let min = sortA.shift();
        let max = sortB.pop();
        
        answer += min * max;
    }
    
    return answer;
}


// 수정 코드 2 - 인덱스를 이용해 풀이
function solution(A,B){
    var answer = 0;
    
    // sortA는 오름차순으로,
    let sortA = A.sort((a, b) => a - b);
    // sortB는 내림차순으로 정렬하였다.
    let sortB = B.sort((a, b) => b - a);

    for (let i = 0; i < A.length; i++) {
        // sortA 배열의 첫번째 인덱스는 가장 작은 수일 것이고,
        // sortB 배열의 첫번째 인덱스는 내림차순 정렬했기 때문에 가장 큰 수일 것이다.
        // 이 두 수를 곱하고 answer에 더하며 for문을 반복
        answer += sortA[i] * sortB[i];   
    }
    
    return answer;
 }


 // 다른 사람의 풀이
 function solution(A, B) {
    A.sort((a, b) => a - b)
    B.sort((a, b) => b - a)
    return A.reduce((total, val, idx) => total + val * B[idx], 0)
}

// A와 B배열을 각각 오름차순, 내림차순으로 정렬해주어,
// A는 작은 수부터 큰 수로 정렬, B는 큰 수부터 작은 수로 정렬.
// reduce를 통해서 현재 값 val과 B의[idx]를 순서대로 곱하여 total에 더해주는 풀이.
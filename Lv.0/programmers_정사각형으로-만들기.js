// 정답 풀이
function solution(arr) {
    let row = arr.length
    let col = arr[0].length
    
    // 열보다 행이 클 경우
    if (row > col) {
        // col수부터 row수까지 for문 순회하며 추가해야할 열의 수 만큼 반복
        for (let i = col; i < row; i++) {
            // 모든 행에 대해 반복
            for (let j = 0; j < row; j++) {
                arr[j].push(0)   // 각 행에 0을 추가
            }
        }
    // 행보다 열이 클 경우
    } else if (col > row) {
        // 추가해야 할 행의 수 만큼 반복
        for (let i = row; i < col; i++) {
            // 길이가 col인 배열을 만들고 0으로 채운 후 arr에 push
            arr.push(new Array(col).fill(0))
        }
    }
    return arr;
}



// 실패한 풀이 - 65.5점
// 반례 
// 입력값 : [[1, 1], [1 ,1], [1, 1], [1, 1]]
// 출력값 : [[1, 1, 0, 0], [1, 1, 0, 0], [1, 1, 0, 0], [1, 1, 0, 0]]
function solution(arr) {
    let row = arr.length;
    let col = arr[0].length;
    
    if (row > col) {
        for (let i = 0; i < row; i++) {
            // 문제 부분
            // for문을 순회하며 arr 배열에 0을 push하지만,
            // 반례의 경우 행 수와 열 수가 같아지도록 0을 추가하지 않음.
            arr[i].push(0);
        }
    } else if (col > row) {
        for (let i = row; i < col; i++) {
            arr.push(new Array(col).fill(0));
        }
    }
    return arr;
}
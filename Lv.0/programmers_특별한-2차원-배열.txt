function solution(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            // arr[i][j]와 arr[j][i]가 다른 값이라면, 대칭이 아니므로 0을 반환
            if (arr[i][j] !== arr[j][i]) {
                return 0;
            }
        }
    }
    // 모든 요소를 비교하고도 다른 값이 없다면, 주어진 배열 arr은 대칭이므로 1을 반환
    return 1;
}



// 다른 사람의 풀이 - every()
function solution(arr) {
    // 외부 every() 메서드는 배열 arr의 모든 요소들에 대해 주어진 조건을 만족하는지 확인
    // 내부 every() 메서드는 각 행의 요소들을 _로 설정하고, 
    // 실제로는 사용하지 않고 인덱스 i와 j를 사용하여 arr[i][j]와 arr[j][i]를 비교
    // r.every((_, j) => ...)는 r 배열의 각 요소를 순회하면서, 요소의 값은 무시하고 인덱스 j를 사용하여 행렬이 대칭인지 확인
    // 대칭이라면 1 아니라면 0을 반환
    return arr.every((r, i) => r.every((_, j) => arr[i][j] === arr[j][i])) ? 1 : 0;
}
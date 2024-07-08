// 첫 번째 풀이 - find()를 통한 풀이
function solution(id_pw, db) {
    // db에서 find() 함수를 통해 id_pw[0]과 일치하는 아이디를 가진 user를 찾는다
    const user = db.find(data => data[0] === id_pw[0]);
    // user가 없다면 계정이 없으므로 fail를 반환
    if (!user) {
        return "fail";
    }
    // 그렇지 않다면 user[1] === id_pw[1] 각각의 비밀번호를 비교하여,
    // 비밀번호가 같다면 login을 return, 다르다면 wrong pw를 return
    return user[1] === id_pw[1] ? "login" : "wrong pw";
}


// 두 번째 풀이 - for문을 이용한 풀이
function solution(id_pw, db) {
    // for문을 순회하며 아이디와 비밀번호 확인
    for (let i = 0; i < db.length; i++) {
        // 만약 찾아야하는 id인 id_pw[0]와 db의 i번째중 0번째 인덱스인 id가 같다면
        if (id_pw[0] == db[i][0]) {      
            // id_pw[1] == db[i][1]로 비밀번호를 비교하여 같다면 login 반환,
            if (id_pw[1] == db[i][1]) {
                return "login";
            // 같지 않다면 wrong pw 반환
            } else if (id_pw[1] != db[i][1]) {
                return "wrong pw";
            }
        } 
    }
    // 순회 후 해당 사항이 없다면 fail을 반환
    return "fail";
}




// 다른 사람의 풀이 1
function solution(id_pw, db) {
    // id_pw 배열에서 아이디와 비밀번호를 각각 id와 pw 변수에 할당
    const [id, pw] = id_pw;
    // db 배열을 Map 객체로 변환하여 키-값 쌍으로 저장
    const map = new Map(db);
    // map.has(id)으로 map 객체에 주어진 id가 키로 존재하는지 확인한다.
    // 존재하지 않는다면 fail을 return
    // 존재한다면 map.get(id)는 map 객체에서 id를 키값으로 하는 pw를 가져온다.
    // 가져온 값과 pw가 같다면 login을 return, 아니라면 wrong pw를 return
    return map.has(id) ? (map.get(id) === pw ? 'login' : 'wrong pw') : 'fail';
}


// 다른 사람의 풀이 2
function solution(id_pw, db) {
    // db 배열을 순회하면서 각 요소 v의 아이디값 v[0]과 일치하는 id_pw[0]만 필터링
    db = db.filter(v => v[0] === id_pw[0]);

    // 만약 필터링 결과가 없다면 일치하는 아이디가 없으므로 "fail"을 반환
    if (!db.length) return 'fail';

    // db 배열을 순회하면서 각 요소 d의 두 번째 값 d[1]이 id_pw[1]와 일치하는지 확인한다
    // 비밀번호가 일치하면 login을 return
    for (let d of db) if (d[1] === id_pw[1]) return 'login';

    // 비밀번호가 일치하지 않으면 wrong pw를 return
    return 'wrong pw';
}
function solution(num_list) {
    let reverse = [];
    for(let i = num_list.length-1; i>=0; i--) {
        reverse.push(num_list[i]);
    }
    return reverse;
}
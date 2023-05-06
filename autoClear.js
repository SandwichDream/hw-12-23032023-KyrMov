function countUppercase(str) {
    let matches = str.match(/[A-Z]/g);
    return matches ? matches.length : 0;
}
console.log(countUppercase("abc"));
console.log(countUppercase("abcABC123"));
console.log(countUppercase("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"));

function autoClear(str) {
    return str.replace(/[^\d]/g, '');
}
console.log(autoClear("hell5o wor6ld"));
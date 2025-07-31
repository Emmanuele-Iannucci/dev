let nomi = [
    'Emmanuele',
    'Alice',
    'Ugo'

]
console.log(nomi)
/*
for (let i = 0; i < nomi.length; i++) {
    console.log(nomi[i]);
}
*/

nomi.forEach((nome, index, array) => {
    console.log(nome);   
    console.log(index);
    console.log(array); 
});
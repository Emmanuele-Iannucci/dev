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
/*
nomi.forEach((nome, index, array) => {
    console.log(nome);   
    console.log(index);
    console.log(array); 
});
*/
const students = [
  { firstName: 'Mario', lastName: 'Rossi' },
  { firstName: 'Luigi', lastName: 'Verdi' },
  { firstName: 'Margherita', lastName: 'Bianchi' }
];
// Raccogliamo in un array i nomi di tutti gli studenti
// RISULTATO: ['Mario Rossi', 'Luigi Verdi', 'Marghertita Bianchi']

let CompleteName = [];

/* for (let i = 0; i < students.length; i++) {
  let studente = students[i];
  let nomeCompleto = studente.firstName + ' ' + studente.lastName;
  CompleteName.push(nomeCompleto);
}

console.log(CompleteName);
*/


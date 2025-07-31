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

// let CompleteName = [];

/* for (let i = 0; i < students.length; i++) {
  let studente = students[i];
  let nomeCompleto = studente.firstName + ' ' + studente.lastName;
  CompleteName.push(nomeCompleto);
}

console.log(CompleteName);
*/

/* let nomiCompleti = []
students.forEach((studente) => {
  let CompleteName = studente.firstName + ' ' + studente.lastName;
  nomiCompleti.push(CompleteName);
});

console.log(nomiCompleti);
*/


/*
const nomiCompleti = students.map((studente) => {
  return `${studente.firstName} ${studente.lastName}`;
});

console.log(nomiCompleti);
*/

const students = [
    { id: 1, name: 'Marco', year: 1 },
    { id: 1, name: 'Silvia', year: 2 },
    { id: 1, name: 'Ginevra', year: 1 }];

// Prendiamo gli studenti al primo anno

let studentiPrimoAnno = [];

for (let i = 0; i < students.length; i++) {
    if (students[i].year === 1) {
        studentiPrimoAnno.push(students[i]);
    }
}

console.log(studentiPrimoAnno);

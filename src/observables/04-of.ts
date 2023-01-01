import { of } from "rxjs";

// const obs$ = of(1, 2, 3, 4, 5, 6);
const obs$ = of(...[1, 2, 3, 4, 5, 6], 2, 3, 4, 5);
// const obs$ = of(
//   [1, 2],
//   { a: 1, b: 2 },
//   function () {},
//   true,
//   Promise.resolve(true)
// );

const observer = {
  next: (val) => console.log("next", val),
  error: null,
  complete: () => console.log("Terminamos la secuencia"),
};

console.log("Inicio del Obs$");
obs$.subscribe(observer);
console.log("Fin del Obs$");

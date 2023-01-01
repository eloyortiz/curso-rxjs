import { asyncScheduler, range } from "rxjs";

const observer = {
  next: (val) => console.log("next", val),
  error: null,
  complete: () => console.log("Terminamos la secuencia"),
};

// const obs$ = of(1, 2, 3, 4, 5, 6);
const src$ = range(1, 5, asyncScheduler);
// const src$ = range(-4, 5);
// const src$ = range(7);
console.log("Inicio");
// obs$.subscribe(observer);
src$.subscribe(observer);
console.log("Fin");

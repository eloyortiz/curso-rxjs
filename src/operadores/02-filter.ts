import { from, fromEvent, range } from "rxjs";
import { filter, map, pluck } from "rxjs/operators";

// range(1, 10)
//   .pipe(filter((val) => val % 2 === 1))
//   .subscribe(console.log);

// range(1, 10).pipe(
//   filter((val, i) => {
//     console.log("val, index", val, i);
//     return val % 2 === 1;
//   })
// ).subscribe(console.log);

interface Personaje {
  tipo: string;
  nombre: string;
}
const personajes: Personaje[] = [
  {
    tipo: "heroe",
    nombre: "Batman",
  },
  {
    tipo: "heroe",
    nombre: "Robin",
  },
  {
    tipo: "villano",
    nombre: "Joker",
  },
];

from(personajes)
  .pipe(
    filter((p) => p.tipo === "heroe"),
    pluck("nombre")
  )
  .subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, "keyup").pipe(
  map((event) => event.code), //recibe keyboardEvent, devuelve string
  filter((key) => key === "Enter")
);

keyup$.subscribe(console.log);

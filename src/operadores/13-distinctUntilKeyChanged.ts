import { distinctUntilKeyChanged, from } from "rxjs";

const observer = {
  next: (val) => console.log("next", val),
  complete: () => console.log("complete"),
};
interface Personaje {
  nombre: string;
}

const personajes: Personaje[] = [
  {nombre: 'John'},
  {nombre: 'John1'},
  {nombre: 'John1'},
  {nombre: 'John2'},
  {nombre: 'John2'},
  {nombre: 'John2'},
  {nombre: 'John1'},
  {nombre: 'John1'},
  {nombre: 'John'},
]

from(personajes).pipe(
  distinctUntilKeyChanged( 'nombre' )
)
.subscribe(observer);
import { distinctUntilChanged, from, of } from "rxjs";

const observer = {
  next: (val) => console.log("next", val),
  complete: () => console.log("complete"),
};

// const nume⁄ros$ = of(1,1,1,3,3,2,5,4,4,5,2,1);
const numeros$ = of<any>(1,'1',1,1,3,3,2,2,55,5,5,4,4,5,2,1,'1', '2');

numeros$.pipe(
  distinctUntilChanged()
)
.subscribe( observer);

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
  distinctUntilChanged( (ant, act) => ant.nombre === act.nombre )
)
.subscribe(observer);
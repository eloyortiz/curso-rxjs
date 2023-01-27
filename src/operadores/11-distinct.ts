import { distinct, from, of } from "rxjs";

const observer = {
  next: (val) => console.log("next", val),
  complete: () => console.log("complete"),
};

// const nume⁄ros$ = of(1,1,1,3,3,2,5,4,4,5,2,1);
const numeros$ = of<any>(1,'1',1,1,3,3,2,5,4,4,5,2,1,'1', '2');

numeros$.pipe(
  distinct() // ===
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
  {nombre: 'John1'},
  {nombre: 'John'},
]

from(personajes).pipe(
  // distinct()
  distinct( p => p.nombre )
)
.subscribe(observer);
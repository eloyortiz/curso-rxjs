import { of, take, tap } from "rxjs";

const numeros$ = of(1,2,3,4,5);

const observer = {
  next: (val) => console.log("next", val),
  complete: () => console.log("complete"),
};

numeros$.pipe(
  tap( t => console.log('tap', t)),
  take(3)
)
.subscribe( observer);
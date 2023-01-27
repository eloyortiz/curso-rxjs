import { fromEvent, interval, mergeMap, switchMap } from "rxjs";

const click$ = fromEvent(document, "click");
const interval$ = interval(1000);

click$
  .pipe(
    switchMap(() => interval$) //FYI: mantiene solo una suscripción interna activa
    //mergeMap( () => interval$) //FYI: puede mantener todas las suscripciones internas activas, simultaneamente corriendo
  )
  .subscribe(console.log);
import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("next:", value),
  error: (error) => console.warn("error:", error),
  complete: () => console.info("completado"),
};

const intervalo$ = new Observable<number>((subs) => {
  const intervalID = setInterval(() => subs.next(Math.random()), 1000);

  return () => {
    clearInterval(intervalID);
    console.log("Intervalo destruido");
  };
});

/** CARACTERISTICAS DEL SUBJETC
 * 1. Casteo múltiple: multiples subscripciones están sujetas a este mismo subject/observable y va servir para distribuir la misma información a todos los lugares donde estén suscritos
 * 2. También es un observer
 * 3. También se puede manejar el Next, error y complete
 */

const subject$ = new Subject();
const subscription = intervalo$.subscribe(subject$);

// const subs1 = intervalo$.subscribe((rnd) => console.log("subs1", rnd));
// const subs2 = intervalo$.subscribe((rnd) => console.log("subs2", rnd));

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
  subject$.next(10);
  subject$.complete();
  subscription.unsubscribe();
}, 3500);

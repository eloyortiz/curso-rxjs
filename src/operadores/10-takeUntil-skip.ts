import { fromEvent, interval, skip, takeUntil, tap } from "rxjs";

const observer = {
  next: (val) => console.log("next", val),
  complete: () => console.log("complete"),
};

const boton = document.createElement('button');
boton.innerHTML = "Detener timer";

document.querySelector('body').append(boton);

const counter$ = interval(1000);
// const clickBtn$ = fromEvent<MouseEvent>(document, 'click');
const clickBtn$ = fromEvent<MouseEvent>(document, 'click').pipe(
  tap(() => console.info('tap antes de skip')),
  skip(1),
  tap(() => console.info('tap despues de skip')),
)

counter$.pipe(
  takeUntil(clickBtn$)
)
.subscribe(observer);


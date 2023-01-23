import { catchError, of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";

const url2 = "https://api.github.com/users?per_page=5";
const url1 = "https://httpbiSSSn.org/delay/1";

const manejaError = (resp: AjaxError) => {
  console.warn("error: ", resp.message);
  return of({
    ok: false,
    usuarios: [],
  });
};

const observer = {
  next: (val) => console.log("next", val),
  error: (err) => console.warn("error en subs", err),
  complete: () => console.log("complete"),
};

// const obs$ = ajax.getJSON(url1).pipe(catchError(manejaError));
// const obs2$ = ajax(url1).pipe(catchError(manejaError));

const obs$ = ajax.getJSON(url1);
const obs2$ = ajax(url1);

//obs2$.subscribe((data) => console.log("ajax: ", data));
obs$.pipe(catchError(manejaError)).subscribe(observer);

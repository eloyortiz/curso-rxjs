import { endWith, startWith } from "rxjs";
import { ajax } from "rxjs/ajax";

// Referencias
const loadingDiv = document.createElement("div");
loadingDiv.classList.add("loading");
loadingDiv.innerHTML = "Cargando...";

const body = document.querySelector("body");

// Stream
ajax.getJSON('https://reqres.in/api/users/2?delay=2')
    .pipe(
        startWith(true),
        endWith(false)
    )
    .subscribe(resp => {
    
        if (resp) {
            body.append(loadingDiv);
        }
        else {
            document.querySelector('.loading').remove();
        }

        console.log(resp);
})

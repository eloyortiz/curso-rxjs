import { ajax } from "rxjs/ajax";

const url = "https://httpbin.org/delay/1";

const body = {
  id: 1,
  name: "John",
};
const headers = {
  "mi-token": "ABC123",
};

// ajax.put(url, body, headers).subscribe(console.log);

ajax({
  url: url,
  method: "DELETE",
  headers: headers,
  body: body,
}).subscribe(console.log);

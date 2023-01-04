import { fromEvent } from "rxjs";
import { map, tap } from 'rxjs/operators';

const texto = document.createElement("div");
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet ligula vitae libero dictum, nec finibus erat consectetur. Nunc eu euismod nisl, nec aliquam nisi. Etiam eu nisl lacus. Pellentesque augue eros, commodo nec velit non, bibendum fringilla felis. Nullam in posuere turpis. Vestibulum ac nisi eu lacus faucibus consectetur. Aliquam venenatis tellus id mi finibus, ultrices congue ex sagittis. Vivamus nunc lorem, efficitur sit amet augue sed, consectetur aliquet lacus. Aenean aliquet viverra nibh, sed tempus tortor auctor quis. Aliquam sodales consectetur arcu.
<br/><br/>
Ut interdum aliquam ullamcorper. Aenean pharetra ex sed sodales sollicitudin. Vestibulum volutpat nisi quis quam maximus elementum. Sed euismod vitae sem vitae finibus. Duis ultricies, nibh non porttitor fringilla, augue sapien ullamcorper arcu, a fermentum velit lacus eu libero. Nullam id ligula pharetra magna placerat mollis. Duis consectetur, ante vel cursus dictum, urna sapien molestie orci, non placerat sem odio nec dolor. Integer in ligula in diam laoreet pellentesque. Nulla eget risus turpis. Aliquam sed velit id sem rutrum efficitur tempus id tellus. Donec aliquet eros elit, quis fermentum mauris fermentum quis. Nam est magna, dapibus ac venenatis vel, sagittis dictum erat. Donec efficitur blandit hendrerit. Mauris euismod vitae massa non rutrum. Cras maximus, massa eget egestas pellentesque, erat massa consequat leo, quis rutrum massa magna a sapien.
<br/><br/>
Aenean non pulvinar enim, ac aliquet ante. Phasellus diam nunc, lobortis eget leo vitae, ornare dapibus tellus. Vivamus blandit elit non ligula commodo, a blandit risus aliquam. Aenean egestas dolor nisl, in gravida metus malesuada ut. Phasellus ac arcu a risus vestibulum auctor placerat quis urna. Sed malesuada tellus nec pulvinar tincidunt. Aliquam sed metus nisi. Sed malesuada augue eget metus molestie, in porta erat sodales. Donec dictum tellus sed odio gravida, eget porttitor ligula vehicula. Ut blandit sapien sem, nec lacinia dui interdum at. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas tristique malesuada risus, a condimentum tortor laoreet in. Morbi leo dui, tincidunt a faucibus et, sagittis vel dolor.
<br/><br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere arcu sed turpis venenatis efficitur. Ut elementum placerat finibus. Suspendisse condimentum odio sit amet erat pharetra pulvinar. Praesent faucibus purus venenatis hendrerit varius. Suspendisse congue eros a sapien hendrerit, in viverra velit venenatis. Pellentesque egestas cursus ex nec elementum. Proin ac varius lorem. Proin suscipit dui eu nulla maximus pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque posuere lacus at ipsum iaculis ultrices. Cras convallis mi non tortor pulvinar, nec ultrices risus consectetur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla ullamcorper nunc sit amet scelerisque aliquam. Fusce varius malesuada dignissim.
<br/><br/>
Praesent nec vulputate ex. Morbi gravida leo id mi posuere, eu volutpat est tincidunt. Quisque nec lectus at felis dapibus suscipit. Vivamus at ultricies leo. In nec hendrerit elit, eget interdum augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consectetur libero diam, et sodales velit consectetur in. Cras mattis, dui laoreet imperdiet mattis, magna libero facilisis leo, ut ornare diam urna ut magna. Quisque id arcu molestie, mollis massa et, congue metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam ultrices orci et vehicula pharetra.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis placerat justo. Maecenas nec ex eu erat placerat aliquet eget non odio. Duis libero nulla, euismod et massa nec, rhoncus euismod nisi. Duis at nisi et nulla auctor pharetra ac convallis nisi. Duis congue dui non sem suscipit, fringilla cursus dolor iaculis. Vestibulum at rhoncus metus. Vestibulum condimentum tortor id nulla scelerisque, at gravida leo sodales. Vivamus fringilla tortor a quam pharetra, quis eleifend magna ornare. Nunc libero purus, tempor vitae dictum non, mattis at purus. Vivamus eu fermentum erat.
<br/><br/>
In eget viverra libero. Sed auctor nunc ut lorem vehicula, vitae tempor dolor pulvinar. Morbi vitae enim mauris. Fusce pulvinar nec neque in porta. Praesent quis purus eget velit consectetur porta. Vestibulum efficitur sit amet nisl eget tristique. Pellentesque faucibus eget sapien sit amet pellentesque. Maecenas ipsum ante, luctus dapibus tristique eget, porttitor a ligula. Vestibulum justo ligula, iaculis ut ultricies id, tincidunt non eros. Etiam neque libero, vulputate ac venenatis sed, feugiat eget elit. Pellentesque dapibus tempus nibh, et porta ligula interdum et. Proin tristique accumsan lorem id efficitur. Sed consequat tristique pharetra. Integer id consequat lacus. Curabitur vitae magna velit. Integer ornare mauris eu lorem elementum varius.
<br/><br/>
Praesent dictum risus ac porta aliquet. Quisque tempor, lacus eu sagittis finibus, sem magna vehicula sem, nec posuere justo purus a lacus. Ut et fringilla nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla tellus mauris, egestas in mi ac, elementum ultricies mi. Vestibulum tempor purus sed lectus euismod, non malesuada diam pharetra. Quisque suscipit risus a vulputate accumsan. Integer urna nisi, ornare a massa eget, sollicitudin rutrum velit. Curabitur sed turpis dolor. Praesent nec nibh mollis, bibendum enim sed, sollicitudin libero. Vestibulum euismod eros ac mollis commodo. Aliquam in erat dapibus, maximus magna sit amet, mollis libero. Proin ultrices urna a eros rhoncus, vel condimentum purus auctor.
<br/><br/>
Proin augue ex, ultrices at lacinia non, egestas in metus. Donec facilisis justo lorem, eu dictum ligula pharetra vitae. In hac habitasse platea dictumst. Duis interdum justo at lectus aliquet, efficitur feugiat sem aliquet. Quisque nec eros eu mauris porta fringilla vel non risus. Vestibulum condimentum cursus velit, quis aliquet tellus congue vitae. Etiam magna quam, tincidunt condimentum sollicitudin at, gravida at nisi.
<br/><br/>
Donec tortor quam, aliquet vitae sapien at, dapibus cursus libero. Nullam tincidunt tincidunt ex non suscipit. Donec placerat neque elit, id egestas ligula malesuada et. Etiam gravida tortor et turpis consectetur vestibulum. Integer posuere leo non efficitur elementum. Morbi in urna laoreet, feugiat est volutpat, auctor orci. Suspendisse aliquam sed turpis sit amet semper.
<br/><br/>
Proin scelerisque, nulla sed feugiat sagittis, nisl odio porttitor dui, vitae feugiat diam erat at metus. Vivamus maximus ipsum turpis, ac facilisis erat convallis iaculis. Nam dictum mi sit amet tempor scelerisque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at tortor metus. Maecenas vel molestie sapien. Donec vestibulum lectus eu viverra vehicula. Sed vitae justo quam. Praesent sit amet iaculis est, bibendum rutrum lorem. Aliquam neque magna, molestie vel tempor ac, scelerisque ac mi. Phasellus imperdiet ac purus ut mattis. Donec justo justo, facilisis ac eros varius, porta iaculis risus.
<br/><br/>
Aliquam ut libero urna. Sed elementum molestie magna, non vulputate dolor lobortis ut. Duis pellentesque justo nec quam fringilla, et maximus orci aliquet. Donec porta libero ut massa mollis tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur feugiat lectus, ut mattis purus venenatis a. Sed mauris mauris, mattis eget libero in, dapibus sodales quam. Vivamus sed lobortis risus, vel sagittis libero. Aenean vel rutrum nulla. Morbi viverra arcu sed eros iaculis ultricies eget a nisl. Mauris a tincidunt dui. Quisque scelerisque consectetur massa nec ultrices.
<br/><br/>
Pellentesque sit amet viverra ante. Vestibulum tellus turpis, semper sed turpis nec, rhoncus vestibulum enim. Duis blandit ipsum sed malesuada condimentum. Nunc non felis at magna aliquet molestie. Sed turpis dolor, volutpat ut rutrum nec, sollicitudin eget ante. Nam rutrum lacus porta mi mattis, quis congue nisi mollis. Cras fermentum, erat ac gravida pellentesque, sem sapien placerat dolor, in molestie sem mi vel velit. Ut imperdiet, lorem eu pulvinar lobortis, arcu tellus viverra purus, sit amet feugiat nisl libero pharetra turpis. Integer non ipsum vel nisl condimentum efficitur.
<br/><br/>
Donec quis lobortis libero. Ut lacinia ligula at ullamcorper mattis. Vivamus luctus malesuada ligula, nec euismod nisl gravida in. Nam nec ante accumsan, bibendum velit vel, luctus ante. Aenean imperdiet sed augue sit amet cursus. Integer tempus, augue ut congue tristique, mi nibh euismod lorem, a molestie lacus ex sit amet nunc. Nunc dapibus commodo ex. Duis pellentesque felis at ultricies ultricies. Maecenas et lectus risus. Mauris porttitor eros urna, porttitor rutrum sem aliquet non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis eu lacus ac neque pretium mattis id sed tellus. Duis lacinia nec turpis vitae vehicula. Nunc ut massa volutpat nisl volutpat sollicitudin hendrerit non nisl. Curabitur placerat egestas massa, non lobortis nunc scelerisque in. Nulla rhoncus euismod felis, a gravida odio pellentesque id.
<br/><br/>
Maecenas ut felis magna. Donec fermentum cursus dui, ut commodo metus cursus id. In vestibulum, velit id pellentesque finibus, risus ipsum suscipit justo, nec ultricies risus orci in sem. Suspendisse turpis felis, placerat vitae velit in, tempor dapibus nulla. Pellentesque nibh augue, elementum eget lectus nec, elementum euismod urna. Morbi sit amet ullamcorper sem. Aenean sollicitudin mauris eu malesuada rhoncus. Suspendisse vitae pharetra nisi, eget aliquet lacus. Quisque tortor dui, suscipit a enim ut, tempor aliquam eros. Suspendisse malesuada purus et odio lacinia, sit amet sollicitudin purus pretium. Morbi eget sodales turpis, at congue orci. Aliquam tincidunt mollis velit vitae venenatis. Suspendisse ac semper neque. Vivamus sit amet risus vitae massa tincidunt congue. Sed est nisl, efficitur id rhoncus sed, finibus eget mi. Suspendisse lacus urna, luctus eget turpis quis, convallis convallis ex.
<br/><br/>
Cras et faucibus urna, quis mattis diam. Vivamus bibendum, dui in iaculis vestibulum, arcu leo faucibus ex, ut ultrices ante orci vel mauris. Duis sed quam venenatis, sodales enim eget, suscipit mauris. In quis neque congue elit interdum blandit. Curabitur hendrerit ut ante et pellentesque. Nunc id faucibus tellus. Nunc erat elit, luctus aliquam lobortis posuere, porta ultricies leo. Morbi augue odio, venenatis et mauris sed, facilisis auctor metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce mollis accumsan nunc nec venenatis. Fusce id accumsan sapien, eget molestie ligula.
<br/><br/>
Vivamus eu semper lectus, sed convallis justo. Aenean quis ex et massa egestas aliquet. Phasellus sed dictum tellus. Quisque in hendrerit ligula. Pellentesque finibus fringilla imperdiet. Integer sit amet nibh mattis erat rhoncus tincidunt. Duis pretium erat placerat velit accumsan pharetra. Donec nec orci dignissim, feugiat enim eu, placerat leo. Sed in sagittis sem. Pellentesque luctus arcu eget leo iaculis, quis mollis massa molestie.
<br/><br/>
Aliquam sed felis mauris. Sed sem magna, pharetra et hendrerit a, facilisis ut ligula. Phasellus iaculis pellentesque luctus. Proin ullamcorper tempor sapien, non ultricies augue pharetra nec. In ac velit quis nisl consequat bibendum eget ut mauris. Quisque quis commodo enim, at aliquam elit. Etiam eu vehicula orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam cursus nunc non tortor consectetur fermentum. Aliquam laoreet enim porttitor enim volutpat dapibus. Nam convallis porttitor purus, nec sollicitudin eros consectetur sit amet. Ut ipsum massa, varius sed erat ut, malesuada tempus leo. Fusce semper ante et lorem sollicitudin, quis aliquet massa fermentum. Sed tempor est in aliquet imperdiet. Nam et massa metus. Fusce molestie a sapien eu facilisis.
<br/><br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt suscipit nibh, sit amet gravida libero molestie nec. Nam nulla purus, pretium et nisl vitae, gravida maximus nisl. Etiam at imperdiet augue, non elementum lacus. Fusce non commodo neque. Nunc mattis nunc et augue varius, id ornare augue sagittis. Cras et fringilla metus.
<br/><br/>
Vestibulum in nibh ut tellus dignissim placerat. Curabitur euismod convallis sapien, in varius neque tempor et. Nam nec hendrerit augue. Ut et condimentum odio, id malesuada leo. Etiam ornare lobortis massa nec tempor. Vivamus dictum, est vel dignissim pulvinar, mi purus porta diam, malesuada iaculis sapien lorem id dui. Integer non ex ac risus finibus mattis. Integer sodales dolor sapien, non ultricies lorem sollicitudin tristique. Donec porttitor ante id augue pharetra, et dictum est dictum. Fusce vitae mattis nisi, non malesuada odio. Morbi suscipit mattis pretium. Quisque ipsum eros, feugiat nec nisi venenatis, maximus ullamcorper ante. Nulla ut dolor est. Aenean vel lectus consequat, congue nulla in, lobortis lectus. Praesent dignissim justo sit amet tempor placerat.
`;

const body = document.querySelector("body");
body.append(texto);

const progressBar = document.createElement("div");
progressBar.setAttribute("class", "progress-bar");
body.append(progressBar);

//funcion q hace el calculo
const calcularPorcentajeScroll = (event) => {
  const {
    scrollTop,
    scrollHeight,
    clientHeight
  } = event.target.documentElement;

    return (scrollTop/ (scrollHeight-clientHeight)) * 100;
  
}

//Streams
const scroll$ = fromEvent(document, "scroll");
//scroll$.subscribe(console.log);

const progress$ = scroll$.pipe(
  // map( event => calcularPorcentajeScroll(event))
  map( calcularPorcentajeScroll),
  tap( console.log  )

);

progress$.subscribe((porcentaje) => {
  progressBar.style.width = `${porcentaje}%`;
});

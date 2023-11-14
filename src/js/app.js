import '../sass/app.scss';
import { initApp } from './includes/base';


const main = document.querySelector('#diet-calculator');
if(main != null){
    initApp();
}
// register service worker
if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("../../serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }
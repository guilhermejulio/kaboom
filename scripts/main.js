import header from "../components/header.js"
import footer from "../components/footer.js"
const $ = window.$;

async function main(){
    $("body").prepend(header);
    $("body").append(footer);
}

$(document).ready(main);







$('.carousel').carousel({
    interval: 2000
  })


let blogPosts;
let varer;
document.addEventListener("DOMContentLoaded", start)

function start() {
    loadUniversJSON();
    varerJSON();
}

async function loadUniversJSON() {
    const JSONData = await
    fetch("http://signemariemathiasen.dk/kea/2_sem/eksamen/wordpress/wp-json/wp/v2/blogpost");
    posts = await JSONData.json();
    visPosts();
    console.log("json loadet");
}


function visPosts() {
    const templatePointer = document.querySelector(".univers_template");
    const sectionPointer = document.querySelector(".univers_grid");
    sectionPointer.innerHTML = "";
    posts.forEach(post => {

        const klon = templatePointer.cloneNode(true).content;

        klon.querySelector(".post_navn").innerHTML = post.overskrift;
        klon.querySelector(".post_billede").src = post.billede.guid;
        klon.querySelector(".post_tekst").innerHTML = post.tekst;
        klon.querySelector(".post_dato").innerHTML = post.dato;


        klon.querySelector(".univers_article").addEventListener("click", function () {
            postClick(post.id)
        });
        sectionPointer.appendChild(klon);


    })
}

function postClick(id) {
    console.log("ID", id);
    window.location.href = "singleview_blog.html?id=" + id;
}


//*********SHOP********//

async function varerJSON() {
    const JSONData = await
    fetch("http://signemariemathiasen.dk/kea/2_sem/eksamen/wordpress/wp-json/wp/v2/vare");
    jsonvare = await JSONData.json();
    visVare();
    console.log("loaded");
}



function visVare() {
    const templatePointer = document.querySelector(".template-shop");
    const sectionPointer = document.querySelector(".indhold_shop");
    sectionPointer.innerHTML = "";
    jsonvare.forEach(vare => {

        const klon = templatePointer.cloneNode(true).content;

        klon.querySelector(".vare-navn").innerHTML = vare.varenavn;
        klon.querySelector(".vare-billede").src = vare.varebillede.guid;
        klon.querySelector(".vare-beskrivelse").innerHTML = vare.varebeskrivelse;
        klon.querySelector(".pris").innerHTML = vare.varepris;


        //        klon.querySelector(".univers_article").addEventListener("click", function () {
        //            postClick(post.id)
        //        });
        sectionPointer.appendChild(klon);


    })
}

//*********BURGERMENU************//
function myFunction(x) {
    x.classList.toggle("change");
    document.querySelector("nav").classList.toggle("hidden_menu");

}

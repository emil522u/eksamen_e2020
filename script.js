let blogPosts;
let varer;
document.addEventListener("DOMContentLoaded", start)

function start() {
    loadUniversJSON();
    loadUniversPostsJSON();
    varerJSON();
    loadSingleVare();
    loadCollage();

}

async function loadUniversPostsJSON() {

    let urlParams = new
    URLSearchParams(window.location.search);
    let id = urlParams.get("id");
    let blogPost;
    let url = "http://signemariemathiasen.dk/kea/2_sem/eksamen/wordpress/wp-json/wp/v2/blogpost/" + id;
    let jsonData = await fetch(url);
    blogPost = await jsonData.json();


    document.querySelector(".single_post_navn").innerHTML = blogPost.overskrift;
    document.querySelector(".single_post_billede").src = blogPost.billede.guid;
    document.querySelector(".single_post_dato").innerHTML = blogPost.dato;
    document.querySelector(".single_post_tekst1").innerHTML = blogPost.tekstcolonne1;
    document.querySelector(".single_post_tekst2").innerHTML = blogPost.tekstcolonne2;
    document.querySelector(".tilbage").addEventListener("click", function () {
        window.history.back();
    })
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
    const sectionPointer = document.querySelector(".shop-grid");
    sectionPointer.innerHTML = "";
    jsonvare.forEach(vare => {

        const klon = templatePointer.cloneNode(true).content;

        klon.querySelector(".vare-navn").innerHTML = vare.varenavn;
        klon.querySelector(".vare-billede").src = vare.varebillede.guid;
        klon.querySelector(".pris").innerHTML = vare.varepris + "kr.";
        klon.querySelector(".varevideo").src = vare.varevideo.guid;

        klon.querySelector(".varevideo").addEventListener('mouseover', hoverVideo, false);
        klon.querySelector(".varevideo").addEventListener('mouseout', hideVideo, false);


        klon.querySelector(".vare").addEventListener("click", () => visSingleview(vare));

        sectionPointer.appendChild(klon);

    })
}

function hoverVideo(e) {
    this.play();
}

function hideVideo(e) {
    this.pause();
}


function visSingleview(vare) {
    console.log();
    window.location.href = `singleview_shop.html?id=${vare.id}`;

}


async function loadSingleVare() {

    let urlParams = new URLSearchParams(window.location.search);
    let id = urlParams.get("id");
    let SingleVare;
    let url = "http://signemariemathiasen.dk/kea/2_sem/eksamen/wordpress/wp-json/wp/v2/vare/" + id;
    let jsonData = await fetch(url);
    SingleVare = await jsonData.json();


    document.querySelector(".vare-navn-sv").innerHTML = SingleVare.varenavn;
    document.querySelector(".vare-billede-sv").src = SingleVare.varebillede.guid;
    document.querySelector(".pris-sv").innerHTML = SingleVare.varepris + "kr.";
    document.querySelector(".vare-beskrivelse-sv").innerHTML = SingleVare.varebeskrivelse;
    document.querySelector(".vare-video-sv").src = SingleVare.varevideo.guid;
    document.querySelector(".vare-video-sv").addEventListener('mouseover', hoverVideo, false);
    document.querySelector(".vare-video-sv").addEventListener('mouseout', hideVideo, false);
    document.querySelector(".tilbage-shop").addEventListener("click", function () {
        window.history.back();
    })

}

async function loadCollage() {
    let collage;
    let url = "http://signemariemathiasen.dk/kea/2_sem/eksamen/wordpress/wp-json/wp/v2/collage/";
    let jsonData = await fetch(url);
    collage = await jsonData.json();
    console.log({
        collage
    })

    document.querySelector(".collage-billede-1").src = collage[0].billede1.guid;
    document.querySelector(".collage-billede-2").src = collage[0].billede2.guid;
    document.querySelector(".collage-billede-3").src = collage[0].billede3.guid;
    document.querySelector(".collage-billede-4").src = collage[0].billede4.guid;
    document.querySelector(".collage-billede-5").src = collage[0].billede5.guid;

}



//*********BURGERMENU************//

const menutag = document.getElementsByClassName("menu_link");

function myFunction(x) {
    let nav = document.querySelector("nav")
    x.classList.toggle("change");
    document.querySelector("nav").classList.toggle("hidden_menu");
    pointToggle();
}


function pointToggle() {
    for (var i = 0; i < menutag.length; i++) {
        menutag[i].classList.toggle("klikbar");
    }
}

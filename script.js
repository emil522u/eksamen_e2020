let blogPosts;
document.addEventListener("DOMContentLoaded", start)

function start() {
    loadUniversJSON();
    loadUniversPostsJSON();
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
    klon.querySelector(".single_post_dato").innerHTML = post.dato;
    document.querySelector(".single_post_tekst1").innerHTML = blogPost.tekst1;
    document.querySelector(".single_post_tekst2").innerHTML = blogPost.tekst2;
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


//*********BURGERMENU************//

const menutag = document.getElementsByClassName("menu_link");

function myFunction(x) {
    x.classList.toggle("change");
    document.querySelector("nav").classList.toggle("hidden_menu");
    pointToggle();
}

function pointToggle () {
  for (var i = 0; i < menutag.length; i++) {
    menutag[i].classList.toggle("klikbar");
  }
}

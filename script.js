let blogPosts;
document.addEventListener("DOMContentLoaded", start)

function start() {
    loadUniversJSON();
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
function myFunction(x) {
    x.classList.toggle("change");
    document.querySelector("nav").classList.toggle("hidden_menu");

    //    if (document.getElementById("knap").classList.contains("hidden_menu")) {
    //        document.querySelector("header").classList.toggle("uklikbar");
    //        console.log("uklikbar");
    //    }
}

// const section1 = document.getElementById("section1")
// const sectionCV = document.getElementById("CV")
// const sectionProject = document.getElementById("projets")


// const container_bar = document.getElementById("container_bar")
// const circle_sec1 = document.getElementById("circle_sec1")
// const circle_sec_cv = document.getElementById("circle_sec_cv")
// const circle_sec_project = document.getElementById("circle_sec_project")

// function calculerPosCircle(section) {
//     let sizeScreen = document.documentElement.scrollHeight
//     return section.offsetTop / sizeScreen * container_bar.offsetHeight
// }

// function placerCircle() {
//   let calcSec1 = calculerPosCircle(section1)
//   let calcSecCV = calculerPosCircle(sectionCV)
//   let calcSecProj = calculerPosCircle(sectionProject)
  
//   console.log(calcSec1);

//   circle_sec1.style.top = calcSec1 + "px"
//   circle_sec1.style.display = "block"
//   circle_sec_cv.style.top = calcSecCV + "px"
//   circle_sec_project.style.top = calcSecProj + "px"
// }

// placerCircle()

// window.onscroll = function() {scroll()};

// function scroll() {
//   let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//   let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//   let scrolled = (winScroll / height) * 100;
//   document.getElementById("myBar").style.height = scrolled + "%";

  // circ1 =  placerCircle()

  // let percentSec1 = calculerPosCircle(section1)/container_bar.offsetHeight*100
  // let percentSec2 = calculerPosCircle(sectionCV)/container_bar.offsetHeight*100
  // let percentSec3 = calculerPosCircle(sectionProject)/container_bar.offsetHeight*100

  // if (scrolled > percentSec1) {
  //   circle_sec1.style.display = "none"
  // } else {
  //   circle_sec1.style.display = "block"
  // }
  // if (scrolled > percentSec2) {
  //   circle_sec_cv.style.display = "none"
  // } else {
  //   circle_sec_cv.style.display = "block"
  // }
  // if (scrolled > percentSec3) {
  //   circle_sec_project.style.display = "none"
  // } else {
  //   circle_sec_project.style.display = "block"
  // }
// }

const info = document.getElementById("info")
const info2 = document.getElementById("info2")
const packImgInfo = document.getElementById("pack_img_info")
const tennis = document.getElementById("tennis")
const sneakers = document.getElementById("sneakers")
const packImgPassions = document.getElementById("pack_img_passions")
const go = document.getElementById("img-GO")


packImgInfo.addEventListener("mouseenter", () => animImgHoverEnter(info, info2));
packImgPassions.addEventListener("mouseenter", () => animImgHoverEnter(tennis, sneakers));


console.log('.' + info.classList[1]);

function animImgHoverEnter(el1, el2) {
    degEl1 = Math.floor(Math.random() * 6)
    degEl2 = Math.floor(Math.random() * 5) - 5

    if (degEl1 == 0) {degEl1 = 1}
    if (degEl2 == 0) {degEl2 = 1}

    tl = gsap.timeline()
    tl.to('.' + el1.classList[1], 
        {y: -75, x: 75, duration: 0.5, ease: "power1.out", rotate: degEl1 + "deg"}
    );
    tl.to('.' + el2.classList[1],
        {y: 75, x: -75, duration: 0.5, ease: "power1.out", rotate: degEl2 + "deg"},
        "-=100%"
    )
    tl.to('.' + el1.classList[1], 
        {x: 0, y: 0, duration: 0.5},
        "-=10%"
    )
    tl.to('.' + el2.classList[1], 
        {x: 0, y: 0, duration: 0.5},
        "-=110%"
    )
    tl.play()

    setTimeout(() => {
        if (el2.classList[2] == "front") {
            el2.classList.remove("front")
            el1.classList.add("front")
        } else {
            el2.classList.add("front")
            el1.classList.remove("front")
        }
    }, 300)
}


// go.style.rotate = "-1deg"
document.getElementById("img-BDD").style.rotate = "2deg"
document.getElementById("img-SiteStatic").style.rotate = "-2deg"




/* -------------------------------------------------------------------------- */
/*                                 Animations GSAP                                */
/* -------------------------------------------------------------------------- */

gsap.registerPlugin(ScrollTrigger);

gsap.from("header", {
    opacity: 0,
    y: -50,
    duration: 0.7,
    ease: "ease"
})

gsap.from(".prenom", {
    x: -150,
    opacity : 0,
    duration: 1.2,
    ease: "power1.inOut",
}, "-=25%")

gsap.from(".nom", {
    x: 0,
    opacity : 0,
    duration: 1,
    ease: "power1.inOut",
}, "-=65%")

gsap.from(".img_box_hero", {
    y: 75,
    opacity : 0,
    duration: 1,
    ease: "power1.inOut",
}, "-=60%")

/* ---------------------------- Animation Section 1 ---------------------------- */

const tl1 = gsap.timeline({
    scrollTrigger: {
        trigger : ".informatique",
        toggleActions : "play none play reset"
    }
});
const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger : ".tennis",
        toggleActions : "play none play reset"
    }
});


tl1.fromTo(".informatique", 
    {opacity: 0, x: -100,}, 
    {x: 0, opacity: 1, rotate: "2deg", duration: 1.2}
);

tl1.fromTo(".informatique2",
    {opacity: 0, x: -100,},
    {x: 0, opacity: 1, rotate: "-2deg", duration: 1.2},
    "-=50%"
)


tl2.fromTo(".tennis", 
    {opacity: 0, x: -100,}, 
    {x: -25, opacity: 1, rotate: "-2deg", duration: 1.2}
);
tl2.fromTo(".sneakers", 
    {opacity: 0, x: -100,}, 
    {x: -35, opacity: 1, rotate: "4deg", duration: 1.2},
    "-=50%"
);


function animParagraphe(classe) {
    gsap.from(classe, {
        scrollTrigger: {
            trigger : classe,
            toggleActions : "play none play reset"
        },
        opacity: 0,
        duration: 0.5,
        ease : "power1.in"
    })
}

animParagraphe(".paragraphe1")
animParagraphe(".paragraphe2")
animParagraphe(".paragraphe3")
animParagraphe(".paragraphe4")

/* ---------------------------- Animation Projets --------------------------- */

gsap.fromTo(".img_go", {
    opacity: 0,
    y: -25,
    scale: 1.03,
}, {
    duration: 0.5,
    ease: "powe1.in",
    opacity : 1,
    y: 0,
    scale: 1,
    rotate: "-2deg",
    scrollTrigger: {
        trigger : ".img_go",
        toggleActions : "play none play reset"
    }
})


/* ---------------------------- Animation Contact --------------------------- */

gsap.from(".wrapper_contact", {
    opacity: 0,
    duration: 0.5,
    y: -25,
    scale: 1.03,
    ease: "powe1.in",
    scrollTrigger: {
        trigger : ".wrapper_contact",
        toggleActions : "play none play reset"
    }
})
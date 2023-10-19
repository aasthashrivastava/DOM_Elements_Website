
const main = document.getElementById('main');

//Nav-
const nav = document.createElement('div');
main.appendChild(nav);
nav.setAttribute('id', 'nav');


//navLeft Content
const navleft = document.createElement('div');
nav.append(navleft)
navleft.setAttribute('class', 'navleft')
const navimg = document.createElement('IMG')
navimg.setAttribute("src", "./logo2.png");
navimg.setAttribute("width", "60rem");
navimg.setAttribute("height", "60rem");
navleft.appendChild(navimg)
navimg.setAttribute('id', 'navimg');


const h1NavLeft = document.createElement('h1');
const h1NavLefttxt = document.createTextNode('WoodM4');
h1NavLeft.setAttribute('class', 'h1NavLeft')
h1NavLeft.appendChild(h1NavLefttxt);
navleft.appendChild(h1NavLeft);


//navRight Content
const navright = document.createElement('div');
nav.append(navright);
navright.setAttribute('class', 'navright');

const navbar = document.createElement('div');
navright.appendChild(navbar);
navbar.setAttribute('class', 'navbar');
//navRight a1
const righta1 = document.createElement('A');
const righta1text = document.createTextNode("Home");
righta1.appendChild(righta1text)
navbar.appendChild(righta1);
righta1.setAttribute('id', 'home');


const dropdown1 = document.createElement('div');
navbar.appendChild(dropdown1);
dropdown1.setAttribute('class', 'dropdown');


const button1 = document.createElement('BUTTON');
const button1txt = document.createTextNode('Live Demo');
button1.appendChild(button1txt);
dropdown1.appendChild(button1);
const htmlIcon = '<i class="ri-arrow-down-s-fill"></i>'
button1.insertAdjacentHTML('beforeend', htmlIcon);
button1.setAttribute('class', 'dropbtn');

const dropdownContent1 = document.createElement('div');
dropdown1.appendChild(dropdownContent1);
dropdownContent1.setAttribute('class', 'dropdownContent')
dropdownContent1.setAttribute('id', 'dropdownContent1');

const dropdownContenta1 = document.createElement('a');
const dropdownContenta1txt = document.createTextNode('Wooden Workshop');
dropdownContenta1.appendChild(dropdownContenta1txt);
dropdownContent1.appendChild(dropdownContenta1);

const dropdownContenta2 = document.createElement('a');
const dropdownContenta2txt = document.createTextNode('Wooden Furniture Store');
dropdownContenta2.appendChild(dropdownContenta2txt);
dropdownContent1.appendChild(dropdownContenta2)


//navRight a3
const dropdown2 = document.createElement('div');
navbar.appendChild(dropdown2);
dropdown2.setAttribute('class', 'dropdown');

const button2 = document.createElement('BUTTON');
const button2txt = document.createTextNode('Live Demo Blocks');
button2.appendChild(button2txt);
dropdown2.appendChild(button2);
const htmlIcon2 = '<i class="ri-arrow-down-s-fill"></i>'
button2.insertAdjacentHTML('beforeend', htmlIcon2);
button2.setAttribute('class', 'dropbtn');

const dropdownContent2 = document.createElement('div');
dropdown2.appendChild(dropdownContent2);
dropdownContent2.setAttribute('class', 'dropdownContent')
dropdownContent2.setAttribute('id', 'dropdownContent2');

const dropdownContent2a1 = document.createElement('a');
const dropdownContent2a1txt = document.createTextNode('Headers/Features/Content');
dropdownContent2a1.appendChild(dropdownContent2a1txt);
dropdownContent2.appendChild(dropdownContent2a1);

const dropdownContent2a2 = document.createElement('a');
const dropdownContent2a2txt = document.createTextNode('Slide/Shop/Team');
dropdownContent2a2.appendChild(dropdownContent2a2txt);
dropdownContent2.appendChild(dropdownContent2a2)

const dropdownContent3a1 = document.createElement('a');
const dropdownContent3a1txt = document.createTextNode('Accordions/Video/Image');
dropdownContent3a1.appendChild(dropdownContent3a1txt);
dropdownContent2.appendChild(dropdownContent3a1);

const dropdownContent4a2 = document.createElement('a');
const dropdownContent4a2txt = document.createTextNode('Forms/Map/Footers');
dropdownContent4a2.appendChild(dropdownContent4a2txt);
dropdownContent2.appendChild(dropdownContent4a2)


//Nav Button
const navbutton = document.createElement('BUTTON');
const navbuttontext = document.createTextNode('BUY NOW');
navbutton.appendChild(navbuttontext);
navright.appendChild(navbutton);
navbutton.setAttribute('class', 'navbutton');


const navbtnBrown = document.createElement('div');
const navbtnBrowntext = document.createTextNode('BUY NOW');
navbtnBrown.appendChild(navbtnBrowntext);
navright.appendChild(navbtnBrown);
navbtnBrown.setAttribute('class', 'navbtnBrown')


const line = document.createElement('div');
righta1.appendChild(line);
line.setAttribute('class', 'navline');

//PAGE-1
const page1 = document.createElement('page1');
main.appendChild(page1);
page1.setAttribute('id', 'page1');


const page1left = document.createElement('div');
page1.append(page1left);
page1left.setAttribute('class', 'page1left')

//Page1 left content
const lefth1 = document.createElement('H1');
const lefth1txt = document.createTextNode('Wooden Workshop');
lefth1.appendChild(lefth1txt);
page1left.appendChild(lefth1);
lefth1.setAttribute('class', 'lefth1');


const lefth2 = document.createElement('H2');
const lefth2txt = document.createTextNode('Wooden Workshop Theme');
lefth2.appendChild(lefth2txt);
page1left.appendChild(lefth2);
lefth2.setAttribute('class', 'lefth2')


const lefth3 = document.createElement('H3');
const lefth3txt = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales Dellentesque felis, in dignissim diam eleifend et.');
lefth3.appendChild(lefth3txt);
page1left.appendChild(lefth3);
lefth3.setAttribute('class', 'lefth3');

//page1 leftside button of Read More
const page1button = document.createElement('BUTTON');
const page1buttontext = document.createTextNode('READ MORE');
page1button.appendChild(page1buttontext);
page1left.appendChild(page1button);
page1button.setAttribute('class', 'page1button');


const page1btnBrown = document.createElement('div');
const page1btnBrowntext = document.createTextNode('READ MORE');
page1btnBrown.appendChild(page1btnBrowntext);
page1left.appendChild(page1btnBrown);
page1btnBrown.setAttribute('class', 'page1btnBrown')
page1btnBrown.style.position = 'absolute';
page1btnBrown.style.left = '2.8rem';
page1btnBrown.style.bottom = '-7.4rem';


const page1right = document.createElement('div');
page1.appendChild(page1right);
page1right.style.display = 'flex';
page1right.setAttribute('class', 'page1right');


const right1_1 = document.createElement('div');
page1right.appendChild(right1_1);
const right1_1img1 = document.createElement('IMG');
right1_1img1.setAttribute('src', '../background2 page1..jpg');
right1_1img1.setAttribute('width', '610vw');
right1_1img1.setAttribute('height', '720vh');
right1_1.appendChild(right1_1img1);

const right1_1img2 = document.createElement('IMG');
right1_1img2.setAttribute('src', './01 page1.jpg');
right1_1img2.setAttribute('width', '400vw');
right1_1img2.setAttribute('height', '360vh');
right1_1img2.setAttribute('class', 'right1_1img2');
right1_1.appendChild(right1_1img2);

const right1_2 = document.createElement('div');
page1right.appendChild(right1_2);
right1_2.setAttribute('class', 'right1_2');


const pg1icon1 = document.createElement('H4');
pg1icon1.innerHTML = '<i class="ri-facebook-fill"></i>'
pg1icon1.setAttribute('class', 'pg1icon1');
right1_2.appendChild(pg1icon1);

const pg1icon2 = document.createElement('H4');
pg1icon2.innerHTML = '<i class="ri-instagram-line"></i>'
pg1icon2.setAttribute('class', 'pg1icon2');
right1_2.appendChild(pg1icon2);

const pg1line = document.createElement('div');
right1_2.appendChild(pg1line);
pg1line.setAttribute('class', 'pg1line');

const pg1h2 = document.createElement('H2');
const pg1h2txt = document.createTextNode('ABOUT US');
pg1h2.appendChild(pg1h2txt);
right1_2.appendChild(pg1h2);
pg1h2.setAttribute('class', 'pg1h2');

//Page2 Content
const page2 = document.createElement('div');
main.appendChild(page2);
page2.setAttribute('id', 'page2')

const pg2img1 = document.createElement('img');
pg2img1.setAttribute('src', 'background3.jpg');
pg2img1.setAttribute('class', 'pg2img1');
page2.appendChild(pg2img1);

const pg2h1 = document.createElement('h1');
const pg2h1txt = document.createTextNode('Products');
let pg2h1txt2 = 'Handmade Wood';
pg2h1.appendChild(pg2h1txt);
pg2h1.insertAdjacentText("afterbegin", pg2h1txt2);
page2.appendChild(pg2h1);
pg2h1.setAttribute('class', 'pg2h1');

const pg2box = document.createElement('div');
pg2box.setAttribute('class', 'pg2box');
const pg2boxtext = document.createElement('div');
pg2boxtext.setAttribute('class', 'pg2boxtext');
const pg2boxtxt = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse metus odio, semper in mi eget, tempus gravida lacus. Vivamus in cursus lectus. Nullam accumsan turpis erat, nec mollis purus molestie at. Pellentesque sed ligula elementum, luctus quam ut, feugiat libero.');
pg2boxtext.appendChild(pg2boxtxt);
pg2box.appendChild(pg2boxtext);
page2.appendChild(pg2box);

const pg2boxh2 = document.createElement('h2');
const pg2boxh2txt = document.createTextNode('View More');
pg2boxh2.appendChild(pg2boxh2txt);
pg2box.appendChild(pg2boxh2);
const pg2htmlIcon = '<i class="ri-arrow-right-line"></i>'
pg2boxh2.insertAdjacentHTML('beforeend', pg2htmlIcon);
pg2boxh2.setAttribute('class', 'pg2boxh2');

//Page3
const page3 = document.createElement('div');
main.appendChild(page3);
page3.setAttribute('id', 'page3');



const page3box1 = document.createElement('div');
page3.appendChild(page3box1);
page3box1.setAttribute('class', 'page3box')


const pg3box1img1 = document.createElement('IMG');
pg3box1img1.setAttribute('src', '../page3logo1.png');
page3box1.appendChild(pg3box1img1);

const pg3box1h1 = document.createElement('h1')
const pg3box1h1txt = document.createTextNode('Eco Production');
pg3box1h1.appendChild(pg3box1h1txt);
page3box1.appendChild(pg3box1h1);
pg3box1h1.setAttribute('class', 'pg3boxh1')


const pg3box1h2 = document.createElement('h2')
const pg3box1h2txt = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ornare risus vel tellus tempor tempor. Suspendisse ut lobortis sem, aliquam consequat nisi. Praesent ac scelerisque nulla.');
pg3box1h2.appendChild(pg3box1h2txt);
page3box1.appendChild(pg3box1h2);
pg3box1h2.setAttribute('class', 'pg3boxh2');



const page3box2 = document.createElement('div');
page3.appendChild(page3box2);
page3box2.setAttribute('class', 'page3box')


const pg3box2img1 = document.createElement('IMG');
pg3box2img1.setAttribute('src', '../page3logo2..png');
page3box2.appendChild(pg3box2img1);

const pg3box2h1 = document.createElement('h1')
const pg3box2h1txt = document.createTextNode('Unique Design');
pg3box2h1.appendChild(pg3box2h1txt);
page3box2.appendChild(pg3box2h1);
pg3box2h1.setAttribute('class', 'pg3boxh1')


const pg3box2h2 = document.createElement('h2')
const pg3box2h2txt = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ornare risus vel tellus tempor tempor. Suspendisse ut lobortis sem, aliquam consequat nisi. Praesent ac scelerisque nulla.');
pg3box2h2.appendChild(pg3box2h2txt);
page3box2.appendChild(pg3box2h2);
pg3box2h2.setAttribute('class', 'pg3boxh2');



const page3box3 = document.createElement('div');
page3.appendChild(page3box3);
page3box3.setAttribute('class', 'page3box')


const pg3box3img1 = document.createElement('IMG');
pg3box3img1.setAttribute('src', '../page3logo3.png');
page3box3.appendChild(pg3box3img1);

const pg3box3h1 = document.createElement('h1')
const pg3box3h1txt = document.createTextNode('Natural Materials');
pg3box3h1.appendChild(pg3box3h1txt);
page3box3.appendChild(pg3box3h1);
pg3box3h1.setAttribute('class', 'pg3boxh1')


const pg3box3h2 = document.createElement('h2')
const pg3box3h2txt = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ornare risus vel tellus tempor tempor. Suspendisse ut lobortis sem, aliquam consequat nisi. Praesent ac scelerisque nulla.');
pg3box3h2.appendChild(pg3box3h2txt);
page3box3.appendChild(pg3box3h2);
pg3box3h2.setAttribute('class', 'pg3boxh2');


//Page4
const page4 = document.createElement('div');
main.appendChild(page4);
page4.setAttribute('id', 'page4');


//Page4 Left Content
const pg4left = document.createElement('div');
page4.appendChild(pg4left);
pg4left.setAttribute('class', 'pg4left-right');

const pg4lefth1 = document.createElement('H1');
const pg4lefth1txt = document.createTextNode('Unique Work Experience');
pg4lefth1.appendChild(pg4lefth1txt);
pg4left.appendChild(pg4lefth1);
pg4lefth1.setAttribute('class', 'pg4lefth1')


const pg4lefth2 = document.createElement('H2');
const pg4lefth2txt = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse metus odio, semper in mi eget.');
pg4lefth2.appendChild(pg4lefth2txt);
pg4left.appendChild(pg4lefth2);
pg4lefth2.setAttribute('class', 'pg4lefth2');


const pg4leftimg = document.createElement('IMG');
pg4leftimg.setAttribute('src', './04.jpg');
pg4left.appendChild(pg4leftimg);
pg4leftimg.setAttribute('class', 'pg4leftimg');



//Page4 right Content
const pg4right = document.createElement('div');
page4.appendChild(pg4right);
pg4right.setAttribute('class', 'pg4left-right');

const pg4righth1 = document.createElement('h1');
const pg4righth1txt = document.createTextNode('Only Natural Materials');
pg4righth1.appendChild(pg4righth1txt);
pg4right.appendChild(pg4righth1);
pg4righth1.setAttribute('class', 'pg4righth1');


const pg4righth2 = document.createElement('h2');
const pg4righth2txt = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse metus odio, semper in mi eget, tempus gravida lacus. Vivamus in cursus lectus. Nullam accumsan turpis erat, nec mollis purus molestie at. Pellentesque sed ligula elementum, luctus quam ut, feugiat libero.');
pg4righth2.appendChild(pg4righth2txt);
pg4right.appendChild(pg4righth2);
pg4righth2.setAttribute('class', 'pg4righth2');


const pg4righth1_1 = document.createElement('h1');
const pg4righth1_1txt = document.createTextNode('Eco production');
pg4righth1_1.appendChild(pg4righth1_1txt);
pg4right.appendChild(pg4righth1_1);
pg4righth1_1.setAttribute('class', 'pg4righth1');

const pg4righth2_1 = document.createElement('h2');
const pg4righth2_1txt = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse metus odio, semper in mi eget, tempus gravida lacus. Vivamus in cursus lectus. Nullam accumsan turpis erat, nec mollis purus molestie at. Pellentesque sed ligula elementum, luctus quam ut, feugiat libero.');
pg4righth2_1.appendChild(pg4righth2_1txt);
pg4right.appendChild(pg4righth2_1);
pg4righth2_1.setAttribute('class', 'pg4righth2');

//page4 button content-
const accordion = document.createElement('div');
pg4right.appendChild(accordion);
accordion.setAttribute('class', 'accordion')

//btn1
const accordionContent1 = document.createElement('div');
accordion.appendChild(accordionContent1);
accordionContent1.setAttribute('class', 'accordion-content');

const header1 = document.createElement('header');
accordionContent1.appendChild(header1);

const span1 = document.createElement('span');
const span1txt = document.createTextNode('Unique Design');
span1.appendChild(span1txt);
header1.appendChild(span1);
span1.setAttribute('class', 'accordion-content-title');

const icon1 = document.createElement('i');
icon1.setAttribute('class', 'ri-add-line');
header1.appendChild(icon1);

const p_content1 = document.createElement('p');
const p_content1txt = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse metus odio, semper in mi eget, tempus gravida lacus. Vivamus in cursus lectus. Nullam accumsan turpis erat, nec mollis purus molestie at. Pellentesque sed ligula elementum, luctus quam ut, feugiat libero.')
p_content1.appendChild(p_content1txt);
accordionContent1.appendChild(p_content1);
p_content1.setAttribute('class', 'accordion-content-description')

//btn2
const accordionContent2 = document.createElement('div');
accordion.appendChild(accordionContent2);
accordionContent2.setAttribute('class', 'accordion-content');

const header2 = document.createElement('header');
accordionContent2.appendChild(header2);

const span2 = document.createElement('span');
const span2txt = document.createTextNode('Natural Materials');
span2.appendChild(span2txt);
header2.appendChild(span2);
span2.setAttribute('class', 'accordion-content-title');

const icon2 = document.createElement('i');
icon2.setAttribute('class', 'ri-add-line');
header2.appendChild(icon2);

const p_content2 = document.createElement('p');
const p_content2txt = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse metus odio, semper in mi eget, tempus gravida lacus. Vivamus in cursus lectus. Nullam accumsan turpis erat, nec mollis purus molestie at. Pellentesque sed ligula elementum, luctus quam ut, feugiat libero.')
p_content2.appendChild(p_content2txt);
accordionContent2.appendChild(p_content2);
p_content2.setAttribute('class', 'accordion-content-description')

//btn3
const accordionContent3 = document.createElement('div');
accordion.appendChild(accordionContent3);
accordionContent3.setAttribute('class', 'accordion-content');

const header3 = document.createElement('header');
accordionContent3.appendChild(header3);

const span3 = document.createElement('span');
const span3txt = document.createTextNode('Eco Production');
span3.appendChild(span3txt);
header3.appendChild(span3);
span3.setAttribute('class', 'accordion-content-title');

const icon3 = document.createElement('i');
icon3.setAttribute('class', 'ri-add-line');
header3.appendChild(icon3);

const p_content3 = document.createElement('p');
const p_content3txt = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse metus odio, semper in mi eget, tempus gravida lacus. Vivamus in cursus lectus. Nullam accumsan turpis erat, nec mollis purus molestie at. Pellentesque sed ligula elementum, luctus quam ut, feugiat libero.')
p_content3.appendChild(p_content3txt);
accordionContent3.appendChild(p_content3);
p_content3.setAttribute('class', 'accordion-content-description')


//page4 button js function code
const accordionContent = document.querySelectorAll(".accordion-content");

accordionContent.forEach((item, index) => {
    let header = item.querySelector("header");
    header.addEventListener("click", () => {
        item.classList.toggle("is-open");

        let description = item.querySelector(".accordion-content-description");
        if (item.classList.contains("is-open")) {
            description.style.height = `${description.scrollHeight}px`;
            item.querySelector("i").classList.replace("ri-add-line", "ri-close-line");
        } else {
            description.style.height = "0px";
            item.querySelector("i").classList.replace("ri-close-line", "ri-add-line");
        }
        removeOpenedContent(index);
    })
})

function removeOpenedContent(index) {
    accordionContent.forEach((item2, index2) => {
        if (index != index2) {
            item2.classList.remove("is-open");
            let descrip = item2.querySelector(".accordion-content-description");
            descrip.style.height = "0px";
            item2.querySelector("i").classList.replace("ri-close-line", "ri-add-line");
        }
    })
}


//page5
const page5 = document.createElement('div');
main.appendChild(page5);
page5.setAttribute('id', 'page5');


const pg5h1 = document.createElement('h1');
const pg5h1txt = document.createTextNode('Our Team');
pg5h1.appendChild(pg5h1txt);
page5.appendChild(pg5h1);
pg5h1.setAttribute('class', 'pg5h1');

const pg5h2 = document.createElement('h2');
const pg5h2txt = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ornare risus vel tellus tempor tempor. Suspendisse ut lobortis sem, aliquam consequat nisi.');
pg5h2.appendChild(pg5h2txt);
page5.appendChild(pg5h2);
pg5h2.setAttribute('class', 'pg5h2');

const pg5cards = document.createElement('div');
page5.appendChild(pg5cards);
pg5cards.setAttribute('class', 'pg5cards');


//pg5 card1
const pg5card1 = document.createElement('div');
pg5cards.appendChild(pg5card1);
pg5card1.setAttribute('class', 'pg5card');

const card1img = document.createElement('IMG');
card1img.setAttribute('src', './face2.jpg');
pg5card1.appendChild(card1img);
card1img.setAttribute('class', 'cardimg');

const card1h1 = document.createElement('h1');
const card1h1txt = document.createTextNode('Jane Brown');
card1h1.appendChild(card1h1txt);
pg5card1.appendChild(card1h1);
card1h1.setAttribute('class', 'cardh1');

//card1text
const card1text = document.createElement('div');
pg5card1.appendChild(card1text);
card1text.style.textAlign = 'center';

const card1texth2 = document.createElement('h2');
const card1texth2txt = document.createTextNode('Manager');
card1texth2.appendChild(card1texth2txt);
card1text.appendChild(card1texth2);
card1texth2.setAttribute('class', 'cardtexth2');

const card1texth3_1 = document.createElement('h3');
const card1texth3_1txt = document.createTextNode('0704 - 94 25 49');
card1texth3_1.appendChild(card1texth3_1txt);
card1text.appendChild(card1texth3_1);
card1texth3_1.setAttribute('class', 'cardtexth3')

const card1texth3_2 = document.createElement('h3');
const card1texth3_2txt = document.createTextNode('sara@bosumhus.se');
card1texth3_2.appendChild(card1texth3_2txt);
card1text.appendChild(card1texth3_2);
card1texth3_1.setAttribute('class', 'cardtexth3')

const card1line = document.createElement('div');
pg5card1.appendChild(card1line);
card1line.setAttribute('class', 'cardline')

const card1lorem = document.createElement('h4');
const card1loremtxt = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ornare risus vel tellus tempor tempor. Suspendisse ut lobortis sem, aliquam consequat nisi. Praesent ac scelerisque nulla. Maecenas sed magna quis leo fringilla molestie.');
card1lorem.appendChild(card1loremtxt);
pg5card1.appendChild(card1lorem);
card1lorem.setAttribute('class', 'cardlorem')


//pg5 card2
const pg5card2 = document.createElement('div');
pg5cards.appendChild(pg5card2);
pg5card2.setAttribute('class', 'pg5card');

const card2img = document.createElement('IMG');
card2img.setAttribute('src', './face3.jpg');
pg5card2.appendChild(card2img);
card2img.setAttribute('class', 'cardimg');

const card2h1 = document.createElement('h1');
const card2h1txt = document.createTextNode('John Smith');
card2h1.appendChild(card2h1txt);
pg5card2.appendChild(card2h1);
card2h1.setAttribute('class', 'cardh1');


//card2text
const card2text = document.createElement('div');
pg5card2.appendChild(card2text);
card2text.style.textAlign = 'center';

const card2texth2 = document.createElement('h2');
const card2texth2txt = document.createTextNode('Worker');
card2texth2.appendChild(card2texth2txt);
card2text.appendChild(card2texth2);
card2texth2.setAttribute('class', 'cardtexth2');

const card2texth3_1 = document.createElement('h3');
const card2texth3_1txt = document.createTextNode('0704 - 94 25 49');
card2texth3_1.appendChild(card2texth3_1txt);
card2text.appendChild(card2texth3_1);
card2texth3_1.setAttribute('class', 'cardtexth3')

const card2texth3_2 = document.createElement('h3');
const card2texth3_2txt = document.createTextNode('sara@bosumhus.se');
card2texth3_2.appendChild(card2texth3_2txt);
card2text.appendChild(card2texth3_2);
card2texth3_1.setAttribute('class', 'cardtexth3')

const card2line = document.createElement('div');
pg5card2.appendChild(card2line);
card2line.setAttribute('class', 'cardline')

const card2lorem = document.createElement('h4');
const card2loremtxt = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ornare risus vel tellus tempor tempor. Suspendisse ut lobortis sem, aliquam consequat nisi. Praesent ac scelerisque nulla. Maecenas sed magna quis leo fringilla molestie.');
card2lorem.appendChild(card2loremtxt);
pg5card2.appendChild(card2lorem);
card2lorem.setAttribute('class', 'cardlorem')


//pg5 card3
const pg5card3 = document.createElement('div');
pg5cards.appendChild(pg5card3);
pg5card3.setAttribute('class', 'pg5card');

const card3img = document.createElement('IMG');
card3img.setAttribute('src', './face4.jpg');
pg5card3.appendChild(card3img);
card3img.setAttribute('class', 'cardimg');

const card3h1 = document.createElement('h1');
const card3h1txt = document.createTextNode('Ann Jason');
card3h1.appendChild(card3h1txt);
pg5card3.appendChild(card3h1);
card3h1.setAttribute('class', 'cardh1');


//card3text
const card3text = document.createElement('div');
pg5card3.appendChild(card3text);
card3text.style.textAlign = 'center';

const card3texth2 = document.createElement('h2');
const card3texth2txt = document.createTextNode('Designer');
card3texth2.appendChild(card3texth2txt);
card3text.appendChild(card3texth2);
card3texth2.setAttribute('class', 'cardtexth2');

const card3texth3_1 = document.createElement('h3');
const card3texth3_1txt = document.createTextNode('0704 - 94 25 49');
card3texth3_1.appendChild(card3texth3_1txt);
card3text.appendChild(card3texth3_1);
card3texth3_1.setAttribute('class', 'cardtexth3')

const card3texth3_2 = document.createElement('h3');
const card3texth3_2txt = document.createTextNode('sara@bosumhus.se');
card3texth3_2.appendChild(card3texth3_2txt);
card3text.appendChild(card3texth3_2);
card3texth3_1.setAttribute('class', 'cardtexth3');

const card3line = document.createElement('div');
pg5card3.appendChild(card3line);
card3line.setAttribute('class', 'cardline')

const card3lorem = document.createElement('h4');
const card3loremtxt = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ornare risus vel tellus tempor tempor. Suspendisse ut lobortis sem, aliquam consequat nisi. Praesent ac scelerisque nulla. Maecenas sed magna quis leo fringilla molestie.');
card3lorem.appendChild(card3loremtxt);
pg5card3.appendChild(card3lorem);
card3lorem.setAttribute('class', 'cardlorem')


//Page6 Content
const page6 = document.createElement('div');
main.appendChild(page6);
page6.setAttribute('id', 'page6');

const pg6h1 = document.createElement('h1');
const pg6h1txt = document.createTextNode('Watch Video About Us');
pg6h1.appendChild(pg6h1txt);
page6.appendChild(pg6h1);
pg6h1.setAttribute('class', 'pg6h1');

const pg6card = document.createElement('div');
page6.appendChild(pg6card);
pg6card.setAttribute('class', 'pg6cards');


//page6 card1
const pg6card1 = document.createElement('div');
pg6card.appendChild(pg6card1);
pg6card1.setAttribute('class', 'pg6card');

const pg6circle1 = document.createElement('div');
pg6card1.appendChild(pg6circle1);
pg6circle1.setAttribute('class', 'pg6circle');

const pg6circlei = document.createElement('p');
pg6circlei.innerHTML = '<i class="ri-play-fill"></i>'
pg6circle1.appendChild(pg6circlei);
pg6circlei.setAttribute('class', 'pg6circlei')


const pg6card1img = document.createElement('IMG');
pg6card1img.setAttribute('src', './background pg6.jpg');
pg6card1.appendChild(pg6card1img);
pg6card1img.setAttribute('class', 'pg6cardimg')


const pg6card1transparent = document.createElement('div');
pg6card1.appendChild(pg6card1transparent);
pg6card1transparent.setAttribute('class', 'transparent')

const video=document.createElement('div')
pg6card1.appendChild(video);
video.setAttribute('class','video');
const video1=document.createElement('video');
video.appendChild(video1);
video1.setAttribute('width','1100vw');
video1.setAttribute('height','600vh');
video1.setAttribute('controls','controls');
const source = document.createElement("SOURCE");
source.setAttribute("src", "https://www.youtube.com/watch?v=J21qu_vspfg");
source.setAttribute("type", "video/mp4");
video1.appendChild(source);
const iconVideoClose=document.createElement('i');
iconVideoClose.setAttribute('class','ri-close-fill');
video.appendChild(iconVideoClose);

pg6circle1.addEventListener('click',function(){
    video.style.display='flex';
})
iconVideoClose.addEventListener('click',function(){
    video.style.display='none';
})

const pg6card1h2 = document.createElement('h2');
const pg6card1h2txt = document.createTextNode('Natural Materials');
pg6card1h2.appendChild(pg6card1h2txt);
pg6card1.appendChild(pg6card1h2);
pg6card1h2.setAttribute('class', 'pg6cardh2')


const pg6card1h3 = document.createElement('h3');
const pg6card1h3txt = document.createTextNode('View More');
pg6card1h3.appendChild(pg6card1h3txt);
pg6card1.appendChild(pg6card1h3);
pg6card1h3.setAttribute('class', 'pg6cardh3');
const pg6htmlIcon = '<i class="ri-arrow-right-line"></i>'
pg6card1h3.insertAdjacentHTML('beforeend', pg6htmlIcon);



//page6 card2
const pg6card2 = document.createElement('div');
pg6card.appendChild(pg6card2);
pg6card2.setAttribute('class', 'pg6card');

const pg6circle2 = document.createElement('div');
pg6card2.appendChild(pg6circle2);
pg6circle2.setAttribute('class', 'pg6circle');


const pg6circlei2 = document.createElement('p');
pg6circlei2.innerHTML = '<i class="ri-play-fill"></i>'
pg6circle2.appendChild(pg6circlei2);
pg6circlei2.setAttribute('class', 'pg6circlei');


const pg6card2img = document.createElement('IMG');
pg6card2img.setAttribute('src', './background2 page6.jpg');
pg6card2.appendChild(pg6card2img);
pg6card2img.setAttribute('class', 'pg6cardimg')


const pg6card2transparent = document.createElement('div');
pg6card2.appendChild(pg6card2transparent);
pg6card2transparent.setAttribute('class', 'transparent')

const videoa=document.createElement('div')
pg6card2.appendChild(videoa);
videoa.setAttribute('class','video');
const video2=document.createElement('video');
videoa.appendChild(video2);
video2.setAttribute('width','1100vw');
video2.setAttribute('height','600vh');
video2.setAttribute('controls','controls');
const source2 = document.createElement("SOURCE");
source2.setAttribute("src", "https://www.youtube.com/watch?v=J21qu_vspfg");
source2.setAttribute("type", "video/mp4");
video2.appendChild(source2);
const iconVideoClose2=document.createElement('i');
iconVideoClose2.setAttribute('class','ri-close-fill');
videoa.appendChild(iconVideoClose2);

pg6circle2.addEventListener('click',function(){
    video.style.display='flex';
})
iconVideoClose2.addEventListener('click',function(){
    video.style.display='none';
})


const pg6card2h2 = document.createElement('h2');
const pg6card2h2txt = document.createTextNode('Eco Production');
pg6card2h2.appendChild(pg6card2h2txt);
pg6card2.appendChild(pg6card2h2);
pg6card2h2.setAttribute('class', 'pg6cardh2')


const pg6card2h3 = document.createElement('h3');
const pg6card2h3txt = document.createTextNode('View More');
pg6card2h3.appendChild(pg6card2h3txt);
pg6card2.appendChild(pg6card2h3);
pg6card2h3.setAttribute('class', 'pg6cardh3');
const pg6htmlIcon_2 = '<i class="ri-arrow-right-line"></i>'
pg6card2h3.insertAdjacentHTML('beforeend', pg6htmlIcon_2);


//Page7
const page7 = document.createElement('div');
main.appendChild(page7);
const page7img = document.createElement('IMG');
page7img.setAttribute('src', './background4.jpg');
page7img.setAttribute('id', 'page7img');
page7.appendChild(page7img);

//Page8
const page8 = document.createElement('div');
main.appendChild(page8);
page8.setAttribute('id', 'page8');


const pg8h1 = document.createElement('h1');
const pg8h1txt = document.createTextNode('Contact Us');
pg8h1.appendChild(pg8h1txt);
page8.appendChild(pg8h1);
pg8h1.setAttribute('class', 'pg8h1');


const pg8h2 = document.createElement('h2');
const pg8h2txt = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales Dellentesque felis, in dignissim diam eleifend et. Aenean sagittis lacus augue convallis.');
pg8h2.appendChild(pg8h2txt);
page8.appendChild(pg8h2);
pg8h2.setAttribute('class', 'pg8h2');


const inputdiv1 = document.createElement('div');
page8.appendChild(inputdiv1);
inputdiv1.setAttribute('class', 'inputdiv');

const input1 = document.createElement('INPUT');
input1.setAttribute("type", "text");
input1.setAttribute("placeholder", "First Name");
input1.setAttribute('class', 'pg8input');
inputdiv1.appendChild(input1);


const input2 = document.createElement('INPUT');
input2.setAttribute("type", "text");
input2.setAttribute("placeholder", "Last Name");
input2.setAttribute('class', 'pg8input');
inputdiv1.appendChild(input2);


const inputdiv2 = document.createElement('div');
page8.appendChild(inputdiv2);
inputdiv2.setAttribute('class', 'inputdiv');


const input3 = document.createElement('INPUT');
input3.setAttribute("type", "tel");
input3.setAttribute("placeholder", "Phone");
inputdiv2.appendChild(input3);
input3.setAttribute('class', 'pg8input');


const input4 = document.createElement('INPUT');
input4.setAttribute("type", "email");
input4.setAttribute("placeholder", "Email");
inputdiv2.appendChild(input4);
input4.setAttribute('class', 'pg8input');


const inputdiv3 = document.createElement('div');
page8.appendChild(inputdiv3);
inputdiv3.setAttribute('class', 'inputdiv');


const theme = document.createElement('div');
inputdiv3.appendChild(theme);
theme.setAttribute('id', 'theme');


const themeh2 = document.createElement('h2');
const themeh2txt = document.createTextNode('Theme');
themeh2.appendChild(themeh2txt);
theme.appendChild(themeh2);


const check1 = document.createElement('INPUT');
check1.setAttribute("type", "checkbox");
check1.setAttribute("name", "theme");
theme.appendChild(check1);
const label1 = document.createElement('LABEL');
const label1txt = document.createTextNode('Service');
label1.appendChild(label1txt);
theme.appendChild(label1);


const check2 = document.createElement('INPUT');
check2.setAttribute("type", "checkbox");
check2.setAttribute("name", "theme");
theme.appendChild(check2);
const label2 = document.createElement('LABEL');
const label2txt = document.createTextNode('Info');
label2.appendChild(label2txt);
theme.appendChild(label2);


const check3 = document.createElement('INPUT');
check3.setAttribute("type", "checkbox");
check3.setAttribute("name", "theme");
theme.appendChild(check3);
const label3 = document.createElement('LABEL');
const label3txt = document.createTextNode('Support');
label3.appendChild(label3txt);
theme.appendChild(label3);


const input5 = document.createElement('TEXTAREA');
input5.setAttribute("row", "2");
input5.setAttribute("cols", "100");
input5.setAttribute("placeholder", "Message");
input5.setAttribute('class', 'pg8input');
input5.setAttribute('id', 'textarea');
inputdiv3.appendChild(input5);


//sumit button of page8
const page8button = document.createElement('BUTTON');
const page8buttontext = document.createTextNode('SUBMIT');
page8button.appendChild(page8buttontext);
page8.appendChild(page8button);
page8button.setAttribute('class', 'page8button')


const page8btnBrown = document.createElement('div');
const page8btnBrowntext = document.createTextNode('SUBMIT');
page8btnBrown.appendChild(page8btnBrowntext);
page8.appendChild(page8btnBrown);
page8btnBrown.setAttribute('id', 'page8btnBrown');


const pg8h3 = document.createElement('h3');
const pg8h3txt = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales Dellentesque felis, in dignissim diam eleifend et. Aenean sagittis lacus sed augue.');
pg8h3.appendChild(pg8h3txt);
page8.appendChild(pg8h3);
pg8h3.setAttribute('class', 'pg8h3')


//Page9
const page9 = document.createElement('div');
main.appendChild(page9);
page9.setAttribute('id', 'page9');

const pg9img = document.createElement('IMG');
pg9img.setAttribute('src', 'logo2.png')
page9.appendChild(pg9img);

const boxpg9 = document.createElement('div');
page9.appendChild(boxpg9);
boxpg9.setAttribute('class', 'boxpg9');

//details1
const details1 = document.createElement('div');
boxpg9.appendChild(details1);
const details1h1 = document.createElement('h1');
const details1h1txt = document.createTextNode('Address');
details1h1.appendChild(details1h1txt);
details1.appendChild(details1h1);
details1h1.setAttribute('class', 'detailsh1')

const details1h3_1 = document.createElement('h3');
const details1h3_1txt = document.createTextNode('NewYork');
details1h3_1.appendChild(details1h3_1txt);
details1.appendChild(details1h3_1);
details1h3_1.setAttribute('class', 'detailsh3')

const details1h3_2 = document.createElement('h3');
const details1h3_2txt = document.createTextNode('8345 State');
details1h3_2.appendChild(details1h3_2txt);
details1.appendChild(details1h3_2);
details1h3_2.setAttribute('class', 'detailsh3')

//details2
const details2 = document.createElement('div');
boxpg9.appendChild(details2);
const details2h1 = document.createElement('h1');
const details2h1txt = document.createTextNode('Contacts');
details2h1.appendChild(details2h1txt);
details2.appendChild(details2h1);
details2h1.setAttribute('class', 'detailsh1')

const details2h3_1 = document.createElement('h3');
const details2h3_1txt = document.createTextNode('00-12-34-56-78');
details2h3_1.appendChild(details2h3_1txt);
details2.appendChild(details2h3_1);
details2h3_1.setAttribute('class', 'detailsh3')

const details2h3_2 = document.createElement('h3');
const details2h3_2txt = document.createTextNode('support@mobirise.com');
details2h3_2.appendChild(details2h3_2txt);
details2.appendChild(details2h3_2);
details2h3_2.setAttribute('class', 'detailsh3')

//details3
const details3 = document.createElement('div');
boxpg9.appendChild(details3);
const details3h1 = document.createElement('h1');
const details3h1txt = document.createTextNode('Office');
details3h1.appendChild(details3h1txt);
details3.appendChild(details3h1);
details3h1.setAttribute('class', 'detailsh1')

const details3h3_1 = document.createElement('h3');
const details3h3_1txt = document.createTextNode('7345 Street');
details3h3_1.appendChild(details3h3_1txt);
details3.appendChild(details3h3_1);
details3h3_1.setAttribute('class', 'detailsh3')

const details3h3_2 = document.createElement('h3');
const details3h3_2txt = document.createTextNode('Staten Island');
details3h3_2.appendChild(details3h3_2txt);
details3.appendChild(details3h3_2);
details3h3_2.setAttribute('class', 'detailsh3')

//page9 icons
const pg9icon1 = document.createElement('H4');
pg9icon1.innerHTML = '<i class="ri-facebook-fill"></i>'

page9.appendChild(pg9icon1);
pg9icon1.setAttribute('class', 'pg9icon');

const pg9icon2 = document.createElement('H4');
pg9icon2.innerHTML = '<i class="ri-instagram-line"></i>';
page9.appendChild(pg9icon2);
pg9icon2.setAttribute('class', 'pg9icon');

const pg9line = document.createElement('div');
page9.appendChild(pg9line);
pg9line.setAttribute('id', 'pg9line');

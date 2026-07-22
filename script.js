// =============================
// ชุดเลข Copy สำเร็จรูป
// =============================


const ham3 = `
010 020 030 040 050 060 070 080 090
101 121 131 141 151 161 171 181 191
202 212 232 242 252 262 272 282 292
303 313 323 343 353 363 373 383 393
404 414 424 434 454 464 474 484 494
505 515 525 535 545 565 575 585 595
606 616 626 636 646 656 676 686 696
707 717 727 737 747 757 767 787 797
808 818 828 838 848 858 868 878 898
909 919 929 939 949 959 969 979 989
`;



const doubleFront = `
001 002 003 004 005 006 007 008 009
110 112 113 114 115 116 117 118 119
220 221 223 224 225 226 227 228 229
330 331 332 334 335 336 337 338 339
440 441 442 443 445 446 447 448 449
550 551 552 553 554 556 557 558 559
660 661 662 663 664 665 667 668 669
770 771 772 773 774 775 776 778 779
880 881 882 883 884 885 886 887 889
990 991 992 993 994 995 996 997 998
`;



const doubleBack = `
100 200 300 400 500 600 700 800 900
011 211 311 411 511 611 711 811 911
022 122 322 422 522 622 722 822 922
033 133 233 433 533 633 733 833 933
044 144 244 344 544 644 744 844 944
055 155 255 355 455 655 755 855 955
066 166 266 366 466 566 766 866 966
077 177 277 377 477 577 677 877 977
088 188 288 388 488 588 688 788 988
099 199 299 399 499 599 699 799 899
`;



const siblings = `
01 12 23 34 45 56 67 78 89 90
`;







// =============================
// Copy ชุดเลข
// =============================

function copySet(text,name,btn){

navigator.clipboard.writeText(text.trim());


let old = btn.innerHTML;


btn.innerHTML="✅ คัดลอกแล้ว";


setTimeout(()=>{

btn.innerHTML=old;

},1500);

}







// =============================
// Copy ผลลัพธ์
// =============================

function copyNumber(id,btn){

let text =
document.getElementById(id).innerText;


navigator.clipboard.writeText(text);



let old=btn.innerHTML;


btn.innerHTML="✅ คัดลอกแล้ว";


setTimeout(()=>{

btn.innerHTML=old;

},1500);

}







// =============================
// Reset
// =============================

function resetData(){

document.getElementById("number").value="";

document.getElementById("output").innerHTML="";

}







// =============================
// 2 ตัว
// =============================

function twoNumber(nums){

let result=[];


for(let i=0;i<nums.length;i++){

for(let j=i+1;j<nums.length;j++){

result.push(
nums[i]+nums[j]
);

}

}


return [...new Set(result)];

}




function twoDouble(nums){

let result=twoNumber(nums);


nums.forEach(n=>{

result.push(n+n);

});


return [...new Set(result)];

}







// =============================
// 3 ตัวปกติ
// =============================

function threeNormal(nums){

let result=[];


for(let i=0;i<nums.length;i++){

for(let j=i+1;j<nums.length;j++){

for(let k=j+1;k<nums.length;k++){


result.push(
nums[i]+nums[j]+nums[k]
);


}

}

}


return [...new Set(result)];

}








// =============================
// 3 ตัวรวมตองรวมหาม
// =============================

function threeAll(nums){

let result=[];


for(let i=0;i<nums.length;i++){

for(let j=i;j<nums.length;j++){

for(let k=j;k<nums.length;k++){


result.push(
nums[i]+nums[j]+nums[k]
);


}

}

}


return [...new Set(result)];

}







// =============================
// 3 ตัวรวมหาม
// ไม่เอาตอง
// =============================

function threeAllHam(nums){

let result=[];


for(let i=0;i<nums.length;i++){

for(let j=i;j<nums.length;j++){

for(let k=j;k<nums.length;k++){


let num =
nums[i]+nums[j]+nums[k];


if(!(

num[0]===num[1] &&
num[1]===num[2]

)){


result.push(num);


}

}

}

}


return [...new Set(result)];

}








// =============================
// สร้างกล่องผลลัพธ์
// =============================

function createBox(title,id,data){

return `

<div class="box">


<div class="title">

${title}

</div>


<button class="copy-btn"

onclick="copyNumber('${id}',this)">

📋 คัดลอก

</button>



<div class="result" id="${id}">

${data.join(" ")}

</div>


</div>

`;

}








// =============================
// คำนวณเลข
// =============================

function calculate(){


let clean =
document.getElementById("number")
.value
.replace(/[^0-9]/g,"");



if(clean.length<2){

alert("กรุณาใส่เลข");

return;

}



let check=new Set(clean);



if(check.size!==clean.length){

alert("ไม่สามารถใส่เลขซ้ำได้");

return;

}




let nums=clean.split("");



let two=twoNumber(nums);

let double=twoDouble(nums);

let three=threeNormal(nums);

let all=threeAll(nums);

let allHam=threeAllHam(nums);




document.getElementById("output").innerHTML=

`

<div class="grid">


${createBox("2 ตัวปกติ","two",two)}


${createBox("2 ตัวรวมเบิ้ล","double",double)}


${createBox("3 ตัวปกติ","three",three)}


${createBox("3 ตัวรวมตองรวมหาม","all",all)}


${createBox("3 ตัวรวมหาม","allHam",allHam)}


</div>

`;

}








// =============================
// เปิด / ปิด Popup ค้นหา
// =============================

function toggleSearch(){

document
.getElementById("searchModal")
.classList.toggle("active");

}








// =============================
// ค้นหาเลข
// =============================

function searchNumber(){


let key =
document.getElementById("searchNumber")
.value.trim();



if(key===""){

return;

}



let found=[];



document.querySelectorAll(".result")
.forEach(box=>{


if(box.innerText.includes(key)){


found.push(

box.parentElement
.querySelector(".title")
.innerText

);


}


});




if(found.length){


document.getElementById("searchResult")
.innerHTML=

"✅ พบใน:<br>"+found.join("<br>");


}else{


document.getElementById("searchResult")
.innerHTML=

"❌ ไม่พบเลขนี้";


}


}








// =============================
// Dark Mode
// =============================

function toggleDark(){


document.body.classList.toggle("dark");



localStorage.setItem(

"theme",

document.body.classList.contains("dark")
?
"dark"
:
"light"

);


}




window.onload=function(){


if(localStorage.getItem("theme")==="dark"){

document.body.classList.add("dark");

}


}
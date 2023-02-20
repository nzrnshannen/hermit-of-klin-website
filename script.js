function changeImage()
{

    var image = document.getElementById('tchaikovskyImg');

    if(image.src.match("tchaikovsky-1.jpg"))
    {
        image.src = "tchaikovsky-2.jpg";
    }
    else if(image.src.match("tchaikovsky-2.jpg"))
    {
        image.src = "tchaikovsky-3.jpg";
    }
    else if(image.src.match("tchaikovsky-3.jpg"))
    {
        image.src="tchaikovsky-4.jpg";
    }
    else if(image.src.match("tchaikovsky-4.jpg"))
    {
        image.src="tchaikovsky-5.jpg";
    }
    else
    {
        image.src="tchaikovsky-1.jpg";
    }
}



function openForm()
{
    document.getElementById("myForm").style.display = "block";
}

function closeForm()
{
    document.getElementById("myForm").style.display = "none";
}


const txt1 = document.getElementById('tbuser');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const out1 = document.getElementById('output1');
const clr = document.getElementById('tbuser');
// const out2 = document.getElementById('output1');
var output = txt1.value;

btn2.addEventListener('click', fun1);
btn3.addEventListener('click', fun2);

function fun1(){
    out1.innerHTML = output + " " + txt1.value;
    output = output + " " + txt1.value;
    clr.value = '';
}

function fun2(){
    out1.innerHTML = '';
    output ='';
}


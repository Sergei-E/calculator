function validate()
{
spl=document.getElementById('spl').value;  
switch(spl)
{
    case "15х15":
        spl=0.0225;
        break
    case "20х30":
        spl=0.06;
        break
    case "25х25": 
        spl=0.0625;
        break
    case "30х30":
        spl= 0.09;
        break
}
a=document.getElementById('a').value;//ширина 
l=document.getElementById('l').value;//длинна
h=document.getElementById('h').value;//высота
adv=document.getElementById('adv').value;//ширина двери
hdv=document.getElementById('hdv').value;//высота двери
let S;
let S1;
    if (a=="")
        {
            alert("Укажите ширину");
        }
    else if (l=="")
        {
            alert("Укажите длину");
        }
    else if (h=="")
        {
            alert("Укажите высоту");
        }
    else if (adv=="")
        {
            alert("Укажите ширину двери");
        }
    else if (hdv=="")
        {
            alert("Укажите высоту двери");
        }
    else{
	let s1=(parseFloat(a)+parseFloat(l));
S=(parseFloat(s1)*h)*2;//площадь помещени
S1=(adv*hdv);//площадь двери
avan=document.getElementById('avan').value;//ширина
hvan=document.getElementById('hvan').value;//высота
lvan=document.getElementById('lvan').value;//длина 
switch(lvan)
    {
        case "2,0":
            lvan= 2.0;
            break
        case "1,7":
            lvan=1.7;
            break
        case "1,5":
            lvan= 1.5;
            break
        case "1,2":
            lvan= 1.2;
            break
    }
let S3=(avan*hvan)+(lvan*hvan)*2;//размер ванны
zapas=document.getElementById('zapas').value;
    switch(zapas)
        {
            case "10":
                zapas=0.1;
                break
            case "7":
                zapas=0.07;
                break
            case "5":
                zapas=0.05;
                break
            case "0":
                zapas=0;
                break
        }
let col=(((S-S1-S3)*zapas)/spl)*10;
let stp=Math.ceil(col);// первая формула 
document.getElementById('stp').innerHTML="Количество плиток для облицовки стен = "+stp+" штук";
} 
}
function raschitat()
{
splp=document.getElementById('splp').value;  
switch(splp)
{
    case "30x30":
        splp=0.09;
        break
    case "40x40":
        splp=0.16;
        break
    case "45x45": 
        splp=0.2025;
        break
    case "50x50":
        splp= 0.25;
        break
}
zapasp=document.getElementById('zapasp').value;
switch(zapasp)
{
            case "10":
                zapasp=1.1;
                break
            case "7":
                zapasp=1.07;
                break
            case "5":
                zapasp=1.05;
                break
            case "0":
                zapasp=1;
                break
}
a=document.getElementById('a').value;//ширина 
l=document.getElementById('l').value;//длинна
let colp=(a*l)*zapasp/splp;
let stk=Math.ceil(colp);// первая формула
let aw=stk;
document.getElementById('aw').innerHTML="Количество плитки для пола = "+aw+" штук";
}
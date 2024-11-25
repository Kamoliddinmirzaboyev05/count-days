var tugYil = document.getElementById('tugYil');
var tugOy = document.getElementById('tugOy');
var tugKun = document.getElementById('tugKun');
var bugunYil = document.getElementById('bugunYil');
var bugunOy = document.getElementById('bugunOy');
var bugunKun = document.getElementById('bugunKun');
var days = document.getElementById("days")
var btn = document.getElementById("btn")



let yanvar = 31;
let fevral = 28;
let mart = 31;
let aprel = 30;
let may = 31;
let iyun = 30;
let iyul = 31;
let avgust = 31;
let sentabr = 30;
let oktabr = 31;
let noyabr = 30;
let dekabr = 31;
 var tyashadi, hyashadi, yil;

btn.addEventListener("click", function() {
    var tYil = tugYil.value;
    var tOy = tugOy.value;
    var tkun = tugKun.value;
    var hozirgiYil = bugunYil.value;
    var hozirgiOy = bugunOy.value;
    var hozirgiKun = bugunKun.value;
    var tug_yildagi_kunlar = 365;
    tOy = Number(tOy);
    tYil = Number(tYil);
    tkun = Number(tkun);
    hozirgiYil = Number(hozirgiYil);
    hozirgiOy = Number(hozirgiOy);
    hozirgiKun = Number(hozirgiKun);
    var kunlar = (hozirgiYil - (tYil + 1)) * 365 + Math.ceil((hozirgiYil - (tYil)) / 4);
    switch (tOy) {
        case 1:
            tyashadi = tug_yildagi_kunlar - tkun
            break;
        case 2:
            tyashadi = tug_yildagi_kunlar - (yanvar + tkun)
            break;
        case 3:
            tyashadi = tug_yildagi_kunlar - (yanvar + fevral + tkun)
            break;
        case 4:
            tyashadi = tug_yildagi_kunlar - (yanvar + fevral + mart + tkun)
            break;
        case 5:
            tyashadi = tug_yildagi_kunlar - (yanvar + fevral + mart + aprel + tkun)
            break;
        case 6:
            tyashadi = tug_yildagi_kunlar - (yanvar + fevral + mart + aprel + may + tkun)
            break;
        case 7:
            tyashadi = tug_yildagi_kunlar - (yanvar + fevral + mart + aprel + may + iyun + tkun)
            break;
        case 8:
            tyashadi = tug_yildagi_kunlar - (yanvar + fevral + mart + aprel + may + iyun + iyul + tkun)
            break;
        case 9:
            tyashadi = tug_yildagi_kunlar - (yanvar + fevral + mart + aprel + may + iyun + iyul + avgust + tkun)
            break;
        case 10:
            tyashadi = tug_yildagi_kunlar - (yanvar + fevral + mart + aprel + may + iyun + iyul + avgust + sentabr + tkun)
            break;
        case 11:
            tyashadi = tug_yildagi_kunlar - (yanvar + fevral + mart + aprel + may + iyun + iyul + avgust + sentabr + oktabr + tkun)
            break;
        case 12:
            tyashadi = tug_yildagi_kunlar - (yanvar + fevral + mart + aprel + may + iyun + iyul + avgust + sentabr + oktabr + noyabr + tkun)
            break;
        default: alert("Bunday oy mavjud emas!")    

   }
    switch (hozirgiOy) {
        case 1:
            hyashadi =  hozirgiKun;
            break;
        case 2:
            hyashadi = yanvar + hozirgiKun;
            break;
        case 3:
            hyashadi = yanvar + fevral + hozirgiKun;
            break;
        case 4:
            hyashadi = yanvar + fevral + mart + hozirgiKun;
            break;
        case 5:
            hyashadi = yanvar + fevral + mart + aprel + hozirgiKun;
            break;
        case 6:
            hyashadi = yanvar + fevral + mart + aprel + may + hozirgiKun;
            break;
        case 7:
            hyashadi = yanvar + fevral + mart + aprel + may + iyun + hozirgiKun;
            break;
        case 8:
            hyashadi = yanvar + fevral + mart + aprel + may + iyun + iyul + hozirgiKun;
            break;
        case 9:
            hyashadi = yanvar + fevral + mart + aprel + may + iyun + iyul + avgust + hozirgiKun;
            break;
        case 10:
            hyashadi = yanvar + fevral + mart + aprel + may + iyun + iyul + avgust + sentabr + hozirgiKun;
            break;
        case 11:
            hyashadi = yanvar + fevral + mart + aprel + may + iyun + iyul + avgust + sentabr + oktabr + hozirgiKun;
            break;
        case 12:
            hyashadi = yanvar + fevral + mart + aprel + may + iyun + iyul + avgust + sentabr + oktabr + noyabr + hozirgiKun;
            break;
        default: alert("Bunday oy mavjud emas!")  
    }
    

    days.textContent = kunlar + tyashadi + hyashadi;
})



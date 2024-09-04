function GSTCALCULATE()
{
    let amount = Number(document.getElementById('Js-InputValue').value);
    let gst = Number(document.getElementById('Js-InputGST').value);
    let discount = Number(document.getElementById('Js-Discount').value);
    let gST = amount * (gst/100);
    let Discountfind = amount * (discount/100);
    let final = amount + gST - Discountfind;
    document.querySelector('.ShowAmount').innerHTML = `${final}`;
}
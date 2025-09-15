const qrinput =document.getElementById("qr-input");
const qrbutton = document.getElementById("qr-button");
const qrimg = document.getElementById("qr-img");

qrbutton.addEventListener('click', () =>{
    const inputValue = qrinput.value.trim();

    if(!inputValue)
    {
        alert('Please enter a valid URL');
        return;
    }

    // URL-encode the input to handle special characters correctly
    const encodedValue = encodeURIComponent(inputValue);
    qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodedValue}`;
    qrimg.alt = `QR code for ${inputValue}`;
});
const getColor= ()=>{
    const randomNumber = Math.floor(Math.random() * 16777777);
    const randomCode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor= randomCode;
    document.getElementById("color-code").innerHTML = randomCode;
    navigator.clipboard.writeText(randomCode)
}

document.getElementById("btn").addEventListener("click", getColor)


getColor();


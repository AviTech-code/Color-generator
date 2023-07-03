const btn = document.getElementById('btn');
const normalBtn = document.getElementById('NormalColor');
const gradBtn = document.getElementById('gradientColor');
const colorCode = document.getElementById('color-code');
let booleanVal = "";
const getColor = () => {
    const randomNum = Math.floor(Math.random() * 16777215);
    const hexCode = "#" + randomNum.toString(16);
    // console.log(randomNum, hexCode);
    document.body.style = `background : ${hexCode}`;
    colorCode.innerHTML = hexCode;
    navigator.clipboard.writeText(hexCode);
    normalBtn.style.color = hexCode;
    btn.style = `background : ${hexCode}`;
    // console.log(document.body.style.backgroundColor);
}
const getGradientColor = () => {
    const randomNum = Math.floor(Math.random() * 16777215);
    const randomNum2 = Math.floor(Math.random() * 16777215);
    const hexCode = "#" + randomNum.toString(16);
    const hexCode2 = "#" + randomNum2.toString(16);
    // console.log(randomNum, hexCode);
    document.body.style = `background: ${hexCode};  
    background: -webkit-linear-gradient(to right, ${hexCode}, ${hexCode2});  
    background: linear-gradient(to right, ${hexCode}, ${hexCode2});
    `;
    colorCode.innerHTML = `background: ${hexCode};  
    background: -webkit-linear-gradient(to right, ${hexCode}, ${hexCode2});  
    background: linear-gradient(to right, ${hexCode}, ${hexCode2});
    `;
    navigator.clipboard.writeText(colorCode.innerHTML);
    // normalBtn.style.color = hexCode;
    btn.style = `background: ${hexCode};  
    background: -webkit-linear-gradient(to right, ${hexCode}, ${hexCode2});  
    background: linear-gradient(to right, ${hexCode}, ${hexCode2});
    `;

    gradBtn.style.color = hexCode2;

    // console.log(randomNum.toString(16) + randomNum2.toString(16));
}
// event call
normalBtn.addEventListener('click', (event) => {
    booleanVal = "NormalColor";
    console.log(booleanVal)

    normalBtn.style.backgroundColor = 'lightgrey';
    gradBtn.style.backgroundColor = 'black';
    if (booleanVal == "NormalColor") {
        // 
        btn.addEventListener('click', getColor);
        btn.removeEventListener("click", getGradientColor);
    }

})

gradBtn.addEventListener('click', (event) => {
    booleanVal = "gradientColor";
    console.log(booleanVal)
    gradBtn.style.backgroundColor = 'lightgrey';
    normalBtn.style.backgroundColor = 'black';
    if (booleanVal == "gradientColor") {
        btn.removeEventListener("click", getColor);
        btn.addEventListener('click', getGradientColor);
    }
})

// initial call
// getColor();

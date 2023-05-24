
//make 16x16 grid:
function makeInit(amount) {
    container = document.querySelector('.container');
    if (!parseInt(amount)) {
        alert('Not a number!');
        return;
    }
    if (amount > 100)
    {
        alert("Can't generate a grid with more than 100 cells!");
        return;
    }
    if (amount < 1)
    {
        alert("Can't generate a negative grid!");
        return;
    }
    // clear existing grid
    myDiv = document.querySelector('.container');
    myDiv.replaceChildren();
    for (let i = 0; i < amount; i++)
    {
        let col = document.createElement('div');
        for (let j = 0; j < amount; j++)
        {
            let cell = document.createElement('div');
            // every cell will have a mouseover event listener
            cell.addEventListener('mouseover', colorDiv);
            col.appendChild(cell);

        }
        container.appendChild(col);
    }
}

makeInit(16);


//on button click, generate new grid:
generator = document.querySelector('#gen');
generator.addEventListener('click', generateGrid)

function generateGrid() {
    let amount = parseInt(document.querySelector('.input-size').value);
    makeInit(amount);
}


function colorDiv() {
    console.log(this.style.backgroundColor);
    if (this.style.backgroundColor == '')
    {
        let randomRed = Math.floor(Math.random() * 255);
        let randomGreen = Math.floor(Math.random() * 255);
        let randomBlue = Math.floor(Math.random() * 255);
        this.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
    }
    else {
        const rgbColor = window.getComputedStyle(this)["background-color"];
        let rgbArr = rgbColor.substring(4, rgbColor.length-1).replace(/ /g, '').split(',');
        let newArr = [];
        console.log(rgbArr);
        for (i = 0; i < rgbArr.length; i++)
        {
            if (parseInt(rgbArr[i]) - 20 > 0)
            {
                newArr.push(parseInt(rgbArr[i]) - 20);
            }
            else {
                //reduce to 0 if result would be lower than 0
                newArr.push(parseInt(rgbArr[i]) - 20 - (parseInt(rgbArr[i]) - 20));
            }
        }
        this.style.backgroundColor = `rgb(${newArr[0]}, ${newArr[1]}, ${newArr[2]})`;
    }
    return;
}


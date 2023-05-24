//make 16x16 grid:





//on button click, generate new grid:
generator = document.querySelector('#gen');
generator.addEventListener('click', generateGrid)

function generateGrid() {
    // clear existing grid
    myDiv = document.querySelector('.container');
    myDiv.replaceChildren();

    let amount = parseInt(document.querySelector('.input-size').value);

    for (let i = 0; i < amount; i++)
    {
        // make column 
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


function colorDiv() {
    if (this.style.backgroundColor == rgb(255, 255, 255))
    {
        this.style.backgroundColor = Math.floor(Math.random() * 255);
    }
    else {
        const rgbColor = window.getComputedStyle(this)["background-color"];
        rgbArr = rgbColor.substring(4, rgbColor.length-1).replace(/ /g, '').split(',');
        newArr = [];
        for (i = 0; i < rgbColor.length; i++)
        {
            if (parseInt(rgbArr[i]) - 20 > 0)
            {
                newArr.push(parseInt(rgbArr[i]) - 20);
            }
            else {
                //reduce to 0 if result would be lower than 0
                newArr.push(parseInt(rgbArr[i]) - 20 - (parseInt(rgbArr[i])));
            }
        }
        this.style.backgroundColor = `rgb(${newArr[0]}, ${newArr[1]}, ${rgbArr[2]})`;
    }
    return;
}




//on button click:
generator = document.querySelector('#gen');

generator.addEventListener('click', generateGrid)

function generateGrid() {
    // clear existing grid
    myDiv = document.querySelector('.container');
    myDiv.replaceChildren();

    let amount = document.querySelector('.input-size').value;

    for (let i = 0; i < amount; i++)
    {
        // make column 
        let col = document.createElement('div');
        for (let j = 0; j < amount; j++)
        {
            // make cell in column
            let cell = document.createElement('div');
            col.appendChild(cell);
        }
        container.appendChild(col);
    }
}
// for loop X times:
//   let col = document.createElement('div');
//   container.appendChild(col);
//   for loop X times:
//     let div = document.createElement('div');
//     div.classList.add('cell');  <-- not sure if necessary
//     col.appendChild(div);







// on div hover: background color turns random and then if already colored(not transparent), make color darker

//   css:  { background-color: rgba(32, 132, 23); }
// const myDiv = document.querySelector("div");
// const compStyles = window.getComputedStyle(myDiv)["background-color"];
// console.log(compStyles); //returns rgb(32, 132, 23). the opacity is 100 so not specificied

// var rgbColor = 'rgb(46, 123, 14)';
// rgbArr = rgbColor.substring(4, rgbColor.length-1).replace(/ /g, '').split(',');
// console.log(rgbArr);


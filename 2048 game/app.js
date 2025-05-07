document.addEventListener('DOMContentLoaded',()=>{
    // console.log("Dom is loaded");
    let gridDisplay= document.querySelector(".grid");
    let scoreDisplay= document.querySelector(".scorePoint");
    let squares=[];
    let score =0;
    
    //creating board with 16 squares
    function createBoard(){
        for(let i=0; i<16; i++){
            let squareDivs= document.createElement("div");
            squareDivs.innerHTML="0";
            gridDisplay.appendChild(squareDivs);
            squares.push(squareDivs);
        }
        Twogenerator();
        Twogenerator();
    }
    createBoard();
    //generating twos
    function Twogenerator(){
        let random= Math.floor(Math.random()*squares.length);
        // console.log(random);
        if(squares[random].innerHTML==0){
            squares[random].innerHTML=2;
            checkLose();
        }
        else{
            Twogenerator();

        }
    }
    //movingRightSide
    function moveRight(){
        for(let i=0; i<16; i++){
            if(i%4==0){
                let rightOne= parseInt(squares[i].innerHTML);
                let rightTwo= parseInt(squares[i+1].innerHTML);
                let rightThree= parseInt(squares[i+2].innerHTML);
                let rightFour=parseInt(squares[i+3].innerHTML);
                let rightRow=[rightOne,rightTwo,rightThree,rightFour];
                // console.log(row);
                
                //filteredRow
                let filterRow= rightRow.filter(x=> x!=0);
                console.log(filterRow);
                // console.log(filterRow.length);
                let missing= 4- filterRow.length;
                // console.log(missing);
                let zero= Array(missing).fill(0);
                console.log(zero);
                let newRow= zero.concat(filterRow);
                console.log(newRow);
                squares[i].innerHTML= newRow[0];
                squares[i+1].innerHTML= newRow[1];
                squares[i+2].innerHTML= newRow[2];
                squares[i+3].innerHTML= newRow[3];
            }
        }
    }
    
    //movingLeftSide
    function moveLeft(){
        for (let i = 0; i < 16; i++) {
            if(i%4==0){
                let LeftOne= parseInt(squares[i].innerHTML);
                let LeftTwo= parseInt(squares[i+1].innerHTML);
                let LeftThree= parseInt(squares[i+2].innerHTML);
                let LeftFour= parseInt(squares[i+3].innerHTML);
                let LeftRow= [ LeftOne,  LeftTwo,  LeftThree, LeftFour];
                //filtering
                let filteredLeftRow= LeftRow.filter(x=> x!=0);
                // console.log(filteredLeftRow);
                let missing= 4-filteredLeftRow.length;
                // console.log(missing);
                let AddingZeros= Array(missing).fill(0);
                let newLeftRow= filteredLeftRow.concat(AddingZeros);
                console.log(newLeftRow);
                squares[i].innerHTML= newLeftRow[0];
                squares[i+1].innerHTML= newLeftRow[1];
                squares[i+2].innerHTML= newLeftRow[2];
                squares[i+3].innerHTML= newLeftRow[3];

            }
        }
    }
    // moveLeft();
    // adding two cells when move and it has same values
    // function sumRows(){
    //     for(let i=0; i<15; i++){
    //         if(squares[i].innerHTML== squares[i+1].innerHTML){
    //             let combination= parseInt(squares[i].innerHTML)+parseInt(squares[i+1].innerHTML);
    //             squares[i].innerHTML= combination;
    //             score+= combination;
    //             scoreDisplay.innerHTML=score;
    //         }
    //     }
    // }
    // sumRows();
       
    function sumRows(){
        for (let i=0; i <15; i++){ //end before index 15 because is has no "right neighbour"
            if(squares[i].innerHTML == squares[i+1].innerHTML){
                let combineNum = parseInt(squares[i].innerHTML) + parseInt(squares[i+1].innerHTML)
                squares[i].innerHTML = combineNum;
                squares[i+1].innerHTML = 0;
                score += combineNum;
                scoreDisplay.innerHTML = score;
            }
        }
    }
    checkWin();

    //movingDownSides
    function moveDown() {
        for(let i=0; i<4; i++){
            let DownOne= parseInt(squares[i].innerHTML);
            let DownTwo= parseInt(squares[i+4].innerHTML);
            let DownThree= parseInt(squares[i+4*2].innerHTML);
            let DownFour= parseInt(squares[i+4*3].innerHTML);
            let DownRows= [DownOne,DownTwo,DownThree,DownFour];
            let filterDownRows= DownRows.filter(x=> x!=0);
            let missing= 4- filterDownRows.length;
            let zero= Array(missing).fill(0);
            let newDownRows= zero.concat(filterDownRows);
            console.log(newDownRows);
            squares[i].innerHTML=newDownRows[0];
            squares[i+4].innerHTML= newDownRows[1];
            squares[i+4*2].innerHTML= newDownRows[2];
            squares[i+4*3].innerHTML= newDownRows[3];

        }
    }
    // moveDown();
    function moveUp() {
        for(let i=0; i<4; i++){
            let DownOne= parseInt(squares[i].innerHTML);
            let DownTwo= parseInt(squares[i+4].innerHTML);
            let DownThree= parseInt(squares[i+4*2].innerHTML);
            let DownFour= parseInt(squares[i+4*3].innerHTML);
            let DownRows= [DownOne,DownTwo,DownThree,DownFour];
            let filterDownRows= DownRows.filter(x=> x!=0);
            let missing= 4- filterDownRows.length;
            let zero= Array(missing).fill(0);
            let newDownRows= filterDownRows.concat(zero);
            console.log(newDownRows);
            squares[i].innerHTML=newDownRows[0];
            squares[i+4].innerHTML= newDownRows[1];
            squares[i+4*2].innerHTML= newDownRows[2];
            squares[i+4*3].innerHTML= newDownRows[3];

        }
    }
    function sumCols(){
        for(let i=0; i<12; i++){
            if(squares[i].innerHTML== squares[i+4].innerHTML){
                let combination= parseInt(squares[i].innerHTML)+parseInt(squares[i+4].innerHTML);
                squares[i].innerHTML= combination;
                score+= combination;
                scoreDisplay.innerHTML=score;
            }
        }
    }
    checkWin();
    function RightKey() { 
        moveRight();
        sumRows();
        moveRight();
        Twogenerator();
    }
    function LeftKey() { 
        moveLeft();
        sumRows();
        moveLeft();
        Twogenerator();
    }
    function DownKey() { 
        moveDown();
        sumCols();
        moveDown();
        Twogenerator();
    }
    function UpKey() { 
        moveUp();
        sumCols();
        moveUp();
        Twogenerator();
    }
   //assigningKeys
   function control(event) { 
        if(event.keyCode === 39){
            RightKey()
        }else if (event.keyCode === 37){
            LeftKey()
        }else if (event.keyCode === 38){
            UpKey()
        }else if (event.keyCode === 40){
            DownKey()
        }
    }
    document.addEventListener('keyup',control);

    function checkWin(){
        for(let i=0; i < 16; i++){
            if (squares[i].innerHTML == 2048){
                alert('Congratulations!! Refresh the page to play again.')
                document.removeEventListener('keyup', control)
            }
        }
    }

    function checkLose(){
        let numZeros = 0
        for(let i = 0; i<16; i++){
            if(squares[i].innerHTML==0){
                numZeros++
            }
        }
        if(numZeros===0){
            alert('Game Over!! Refresh the page to play again.')
            document.removeEventListener('keyup', control)
        }
    }

})
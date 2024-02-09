const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const box3 = document.getElementById('box3');
const box4 = document.getElementById('box4');
const box5 = document.getElementById('box5');
const box6 = document.getElementById('box6');
const box7 = document.getElementById('box7');
const box8 = document.getElementById('box8');
const box9 = document.getElementById('box9');
const box10 = document.getElementById('box10');
const box11 = document.getElementById('box11');
const box12 = document.getElementById('box12');
const box13 = document.getElementById('box13');
const box14 = document.getElementById('box14');
const box15 = document.getElementById('box15');
const box16 = document.getElementById('box16');
const box17 = document.getElementById('box17');
const box18 = document.getElementById('box18');
const box19 = document.getElementById('box19');
const box20 = document.getElementById('box20');
const box21 = document.getElementById('box21');
const box22 = document.getElementById('box22');
const box23 = document.getElementById('box23');
const box24 = document.getElementById('box24');
const box25 = document.getElementById('box25');
const box26 = document.getElementById('box26');
const box27 = document.getElementById('box27');
const box28 = document.getElementById('box28');
const box29 = document.getElementById('box29');
const box30 = document.getElementById('box30');
const box31 = document.getElementById('box31');
const box32 = document.getElementById('box32');
const box33 = document.getElementById('box33');
const box34 = document.getElementById('box34');
const box35 = document.getElementById('box35');
const box36 = document.getElementById('box36');
const box37 = document.getElementById('box37');
const box38 = document.getElementById('box38');
const box39 = document.getElementById('box39');
const box40 = document.getElementById('box40');
const box41 = document.getElementById('box41');
const box42 = document.getElementById('box42');
const box43 = document.getElementById('box43');
const box44 = document.getElementById('box44');
const box45 = document.getElementById('box45');
const box46 = document.getElementById('box46');
const box47 = document.getElementById('box47');
const box48 = document.getElementById('box48');
const box49 = document.getElementById('box49');
const box50 = document.getElementById('box50');
const box51 = document.getElementById('box51');
const box52 = document.getElementById('box52');
const box53 = document.getElementById('box53');
const box54 = document.getElementById('box54');
const box55 = document.getElementById('box55');
const box56 = document.getElementById('box56');
const box57 = document.getElementById('box57');
const box58 = document.getElementById('box58');
const box59 = document.getElementById('box59');
const box60 = document.getElementById('box60');
const box61 = document.getElementById('box61');
const box62 = document.getElementById('box62');
const box63 = document.getElementById('box63');
const box64 = document.getElementById('box64'); 
const boxes = [box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16, box17, box18, box19, box20, box21, box22, box23, box24, box25, box26, box27, box28, box29, box30, box31, box32, box33, box34, box35, box36, box37, box38, box39, box40, box41, box42, box43, box44, box45, box46, box47, box48, box49, box50, box51, box52, box53, box54, box55, box56, box57, box58, box59, box60, box61, box62, box63, box64]

let white_RockSquare = [];
let black_RockSquare = [];
let black_KnightSquare = [];
let white_KnightSquare = [];
let black_KingSquare = [];
let white_KingSquare = [];
let black_QueenSquare = [];
let white_QueenSquare = [];
let black_BishopSquare = [];
let white_BishopSquare = [];
let black_PawnSquare = [];
let white_PawnSquare = [];
let allBlackPieceSquare = [];
let allWhitePieceSquare = [];
let allOccupiedSquare = [];

let enPassant = false;
let squareEnpassant;
let whiteKingMoved = false;
let blackKingMoved = false;
let whiteRockLeftMoved = false;
let whiteRockRightMoved = false;
let blackRockLeftMoved = false;
let blackRockRightMoved = false;
let isChecks = false;
let iswhiteCheck = false;
let isblackCheck = false;
let isWhiteMove = true;
let returnAll = false;
let onlyCheck = false;
let castling = false;
let doIt = true;

let takeableRock = [];
let toggleSquare;

function findRow(place){                     //Mengetahui Baris Input
    let rows = place;
    rows = Number(rows);
    while(rows > 8){
        rows -= 8;
    }
    switch (true){
        case rows === 1:
            rows = 'A';
            break;
        case rows === 2:
            rows = 'B';
            break;
        case rows === 3:
            rows = 'C';
            break;
        case rows === 4:
            rows = 'D';
            break;
        case rows === 5:
            rows = 'E';
            break;
        case rows === 6:
            rows = 'F';
            break;
        case rows === 7:
            rows = 'G';
            break;
        case rows === 8:
            rows = 'H';
            break;
        default:
            break;
    }
    return rows;
}

function pieces(){                          //Mengetahui lokasi bidak
    function findPieceLoc(){
        indexes = 1;
        white_RockSquare = [];
        black_RockSquare = [];
        black_KnightSquare = [];
        white_KnightSquare = [];
        black_KingSquare = [];
        white_KingSquare = [];
        black_QueenSquare = [];
        white_QueenSquare = [];
        black_BishopSquare = [];
        white_BishopSquare = [];
        black_PawnSquare = [];
        white_PawnSquare = [];
        allBlackPieceSquare = [];
        allWhitePieceSquare = [];
        allOccupiedSquare = [];
        while(indexes <= 64){
            if(boxes[indexes-1].querySelectorAll('.white_Rock').length === 1){
                white_RockSquare.push(boxes[indexes-1]);
                allOccupiedSquare.push(boxes[indexes-1]);
                allWhitePieceSquare.push(boxes[indexes-1]);
            }
            else if(boxes[indexes-1].querySelectorAll('.black_Rock').length === 1){
                black_RockSquare.push(boxes[indexes-1]);
                allOccupiedSquare.push(boxes[indexes-1]);
                allBlackPieceSquare.push(boxes[indexes-1]);
            }
            else if(boxes[indexes-1].querySelectorAll('.black_Knight').length === 1){
                black_KnightSquare.push(boxes[indexes-1]);
                allOccupiedSquare.push(boxes[indexes-1]);
                allBlackPieceSquare.push(boxes[indexes-1]);
            }
            else if(boxes[indexes-1].querySelectorAll('.white_Knight').length === 1){
                white_KnightSquare.push(boxes[indexes-1]);
                allOccupiedSquare.push(boxes[indexes-1]);
                allWhitePieceSquare.push(boxes[indexes-1]);
            }
            else if(boxes[indexes-1].querySelectorAll('.black_King').length === 1){
                black_KingSquare.push(boxes[indexes-1]);
                allOccupiedSquare.push(boxes[indexes-1]);
                allBlackPieceSquare.push(boxes[indexes-1]);
            }
            else if(boxes[indexes-1].querySelectorAll('.white_King').length === 1){
                white_KingSquare.push(boxes[indexes-1]);
                allOccupiedSquare.push(boxes[indexes-1]);
                allWhitePieceSquare.push(boxes[indexes-1]);
            }
            else if(boxes[indexes-1].querySelectorAll('.black_Queen').length === 1){
                black_QueenSquare.push(boxes[indexes-1]);
                allOccupiedSquare.push(boxes[indexes-1]);
                allBlackPieceSquare.push(boxes[indexes-1]);
            }
            else if(boxes[indexes-1].querySelectorAll('.white_Queen').length === 1){
                white_QueenSquare.push(boxes[indexes-1]);
                allOccupiedSquare.push(boxes[indexes-1]);
                allWhitePieceSquare.push(boxes[indexes-1]);
            }
            else if(boxes[indexes-1].querySelectorAll('.black_Bishop').length === 1){
                black_BishopSquare.push(boxes[indexes-1]);
                allOccupiedSquare.push(boxes[indexes-1]);
                allBlackPieceSquare.push(boxes[indexes-1]);
            }
            else if(boxes[indexes-1].querySelectorAll('.white_Bishop').length === 1){
                white_BishopSquare.push(boxes[indexes-1]);
                allOccupiedSquare.push(boxes[indexes-1]);
                allWhitePieceSquare.push(boxes[indexes-1]);
            }
            else if(boxes[indexes-1].querySelectorAll('.black_Pawn').length === 1){
                black_PawnSquare.push(boxes[indexes-1]);
                allOccupiedSquare.push(boxes[indexes-1]);
                allBlackPieceSquare.push(boxes[indexes-1]);
            }
            else if(boxes[indexes-1].querySelectorAll('.white_Pawn').length === 1){
                white_PawnSquare.push(boxes[indexes-1]);
                allOccupiedSquare.push(boxes[indexes-1]);
                allWhitePieceSquare.push(boxes[indexes-1]);
            }
            indexes++;
        }       //Locating Occupied Squares
        findCheck();
        }
    findPieceLoc();
}
pieces();

function findActive(activeSquare){           //Mengetahui bidak
    const active = activeSquare.firstElementChild;
    for(index in boxes){        //Remove All AvailSquare Class
        let box = boxes[index];
        if(box.classList.contains('availableSquare')){
            box.classList.remove('availableSquare');
            box.removeEventListener('click', clickFunc);
            box.addEventListener('click', togglePickedSquare);
        }
        else if(box.classList.contains('takeable')){
            box.classList.remove('takeable');
            box.addEventListener('click', pickedSquare)
        }
    }
    switch (true){
        case active.classList.contains('white_Rock') && isWhiteMove: {
            toggleSquare = true;
            rockMovement(activeSquare);
            break;
        }
        case active.classList.contains('black_Rock') && !isWhiteMove: {
            toggleSquare = true;
            rockMovement(activeSquare);
            break;
        }
        case active.classList.contains('white_Pawn') && isWhiteMove: {
            toggleSquare = true;
            pawnMovement(activeSquare);
            break;
        }
        case active.classList.contains('black_Pawn') && !isWhiteMove: {
            toggleSquare = true;
            pawnMovement(activeSquare);
            break;
        }
        case active.classList.contains('black_Bishop') && !isWhiteMove: {
            toggleSquare = true;
            bishopMovement(activeSquare);
            break;
        }
        case active.classList.contains('white_Bishop') && isWhiteMove: {
            toggleSquare = true;
            bishopMovement(activeSquare);
            break;
        }
        case active.classList.contains('white_Queen') && isWhiteMove: {
            toggleSquare = true;
            queenMovement(activeSquare);
            break;
        }
        case active.classList.contains('black_Queen') && !isWhiteMove: {
            toggleSquare = true;
            queenMovement(activeSquare);
            break;
        }
        case active.classList.contains('white_King') && isWhiteMove: {
            toggleSquare = true;
            kingMovement(activeSquare);
            break;
        }
        case active.classList.contains('black_King') && !isWhiteMove: {
            toggleSquare = true;
            kingMovement(activeSquare);
            break;
        }
        case active.classList.contains('white_Knight') && isWhiteMove: {
            toggleSquare = true;
            knightMovement(activeSquare);
            break;
        }
        case active.classList.contains('black_Knight') && !isWhiteMove: {
            toggleSquare = true;
            knightMovement(activeSquare);
            break;
        }
        default:
            break;
        
    }
}

function pawnMovement(place){
    const active = place.firstElementChild;
    if (active.classList.contains('white_Pawn') && place.classList.contains('picked') || active.classList.contains('white_Pawn') && !toggleSquare){
        let idBox = place.id;
        let next = true;
        idBox = idBox.slice(3);
        idBox = Number(idBox);
        let rowBox = findRow(idBox);
        let availableMove = [];
        let takeableSquare = [];

        idBox -= 8;
        if(idBox > 0 && idBox <= 64){
            if(boxes[idBox-1].firstElementChild.classList.contains('none')){
                availableMove.push(boxes[idBox - 1]);
            }
            else{
                availableMove.push(undefined);
                next = false;
            }
        }
        else{
            availableMove.push(undefined);
        }        

        idBox -= 8;
        if(idBox > 0 && idBox <= 64){
            if(idBox <= 40 && idBox >= 33 && next){
                if(boxes[idBox-1].firstElementChild.classList.contains('none')){
                    availableMove.push(boxes[idBox - 1]);
                }
                else{
                    availableMove.push(undefined);
                }
            }
        }
        else{
            availableMove.push(undefined);
        }


        let theRow;

        idBox = place.id;
        idBox = idBox.slice(3);
        idBox = Number(idBox);
        idBox -= 9;
        if(idBox > 0 && idBox <= 64){
            theRow = findRow(idBox);
            if(!boxes[idBox-1].firstElementChild.classList.contains('none')){
                let theChild = boxes[idBox-1].firstElementChild.classList;
                theChild = theChild.value;
                theChild = theChild.slice(0, 5);
                if(theRow === "A" && rowBox === "H"){
                }
                else if(theRow === "H" && rowBox === "A"){   
                }
                else if(theChild === "white"){
                }
                else{
                    takeableSquare.push(boxes[idBox-1]);
                }
            }
        }

        idBox += 2;
        if(idBox > 0 && idBox <= 64){
            theRow = findRow(idBox);
            if(!boxes[idBox-1].firstElementChild.classList.contains('none')){
                let theChild = boxes[idBox-1].firstElementChild.classList;
                theChild = theChild.value;
                theChild = theChild.slice(0, 5);
                if(theRow === "A" && rowBox === "H"){
                }
                else if(theRow === "H" && rowBox === "A"){
                }
                else if(theChild === "white"){
                }
                else{
                    takeableSquare.push(boxes[idBox - 1]);
                }
            }
        }

        if(enPassant){        
            idBox = place.id;
            idBox = idBox.slice(3);
            idBox = Number(idBox);
            idBox += 1;
            if(idBox > 0 && idBox <= 64){
                let rowNow = findRow(idBox);
                let rowAfter = findRow(idBox - 1);
                let boxTested = squareEnpassant;
                if(rowNow === "A" && rowAfter === "H"){
                }
                else if(rowNow === "H" && rowAfter === "A"){
                }
                else{
                    if(boxTested == boxes[idBox - 1]){
                        if(boxTested.firstElementChild.classList.contains('black_Pawn')){
                            takeableSquare.push(boxes[idBox - 9]);
                        }
                    }
                }
            }

            idBox = place.id;
            idBox = idBox.slice(3);
            idBox = Number(idBox);
            idBox -= 1;
            if(idBox > 0 && idBox <= 64){
                let rowNow = findRow(idBox);
                let rowAfter = findRow(idBox + 1);
                let boxTested = squareEnpassant;
                if(rowNow === "A" && rowAfter === "H"){
                }
                else if(rowNow === "H" && rowAfter === "A"){
                }
                else{
                    if(boxTested == boxes[idBox - 1]){
                        if(boxTested.firstElementChild.classList.contains('black_Pawn')){
                            takeableSquare.push(boxes[idBox - 9]);
                        }
                    }
                }
            }
        }

        if(toggleSquare){
            for(square in availableMove){
                if(availableMove[square] !== undefined){
                    availableMove[square].classList.toggle('availableSquare');
                }
            }
    
            for(taked in takeableSquare){
                takeableSquare[taked].classList.toggle('takeable');
            }
            isCheckFunc();
            changeSquares();
        }
        else if(!toggleSquare){
            if(returnAll){
                let alls = [];
                for(index in availableMove){
                    alls.push(availableMove[index]);
                }
                for(index in takeableSquare){
                    alls.push(takeableSquare[index]);
                }
                
                return(alls);
            }
            else{
                return(takeableSquare);
            }
        }
    }
    else if(active.classList.contains('black_Pawn') && place.classList.contains('picked')  || active.classList.contains('black_Pawn') && !toggleSquare){
        let idBox = place.id;
        let next = true;
        idBox = idBox.slice(3);
        idBox = Number(idBox);
        let rowBox = findRow(idBox);
        let availableMove = [];
        let takeableSquare = [];

        idBox += 8;
        if(idBox > 0 && idBox <= 64){
            if(boxes[idBox-1].firstElementChild.classList.contains('none')){
                availableMove.push(boxes[idBox - 1])
            }
            else{
                next = false;
                availableMove.push(undefined);
            }
        }
        else{
            availableMove.push(undefined);
        }        

        idBox += 8;
        if(idBox > 0 && idBox <= 64){
            if(idBox <= 32 && idBox >= 25){
                if(boxes[idBox-1].firstElementChild.classList.contains('none') && next){
                    availableMove.push(boxes[idBox - 1])
                }
                else{
                    availableMove.push(undefined);
                }
            }
        }
        else{
            availableMove.push(undefined);
        }       
        let theRow;

        idBox = place.id;
        idBox = idBox.slice(3);
        idBox = Number(idBox);
        idBox += 9;
        if(idBox > 0 && idBox <= 64){
            theRow = findRow(idBox);
            if(!boxes[idBox-1].firstElementChild.classList.contains('none')){
                let theChild = boxes[idBox-1].firstElementChild.classList;
                theChild = theChild.value;
                theChild = theChild.slice(0, 5);
                if(theRow === "A" && rowBox === "H"){
                }
                else if(theRow === "H" && rowBox === "A"){ 
                }
                else if(theChild === "black"){
                }
                else{
                    takeableSquare.push(boxes[idBox-1]);
                }
            }
        }

        idBox -= 2;
        if(idBox > 0 && idBox <= 64){
            theRow = findRow(idBox);
            if(!boxes[idBox-1].firstElementChild.classList.contains('none')){
                let theChild = boxes[idBox-1].firstElementChild.classList;
                theChild = theChild.value;
                theChild = theChild.slice(0, 5);
                if(theRow === "A" && rowBox === "H"){
                }
                else if(theRow === "H" && rowBox === "A"){
                }
                else if(theChild === "black"){
                }
                else{
                    takeableSquare.push(boxes[idBox-1]);
                }
            }
        }

        if(enPassant){        
            idBox = place.id;
            idBox = idBox.slice(3);
            idBox = Number(idBox);
            idBox += 1;
            if(idBox > 0 && idBox <= 64){
                let rowNow = findRow(idBox);
                let rowAfter = findRow(idBox - 1);
                let boxTested = squareEnpassant;
                if(rowNow === "A" && rowAfter === "H"){
                }
                else if(rowNow === "H" && rowAfter === "A"){
                }
                else{
                    if(boxTested == boxes[idBox - 1]){
                        if(boxTested.firstElementChild.classList.contains('white_Pawn')){
                            takeableSquare.push(boxes[idBox + 7]);
                        }
                    }
                }
            }

            idBox = place.id;
            idBox = idBox.slice(3);
            idBox = Number(idBox);
            idBox -= 1;
            if(idBox > 0 && idBox <= 64){
                let rowNow = findRow(idBox);
                let rowAfter = findRow(idBox + 1);
                let boxTested = squareEnpassant;
                if(rowNow === "A" && rowAfter === "H"){
                }
                else if(rowNow === "H" && rowAfter === "A"){
                }
                else{
                    if(boxTested == boxes[idBox - 1]){
                        if(boxTested.firstElementChild.classList.contains('white_Pawn')){
                            takeableSquare.push(boxes[idBox + 7]);
                        }
                    }
                }
            }
        }

        if(toggleSquare){
            for (square in availableMove){
                if(availableMove[square] !== undefined){
                    availableMove[square].classList.toggle('availableSquare');
                }
            }
    
            for(taked in takeableSquare){
                takeableSquare[taked].classList.toggle('takeable');
            }
            isCheckFunc();
            changeSquares();
        }
        else if(!toggleSquare){
            if(returnAll){
                let alls = [];
                for(index in availableMove){
                    alls.push(availableMove[index]);
                }
                for(index in takeableSquare){
                    alls.push(takeableSquare[index]);
                }
                
                return(alls);
            }
            else{
                return(takeableSquare);
            }
        }
    }
}

function knightMovement(place){
    const active = place.firstElementChild;
    if (active.classList.contains('white_Knight') && place.classList.contains('picked')  || active.classList.contains('white_Knight') && !toggleSquare){
        let idBox = place.id;
        idBox = idBox.slice(3);
        idBox = Number(idBox);
        let tryingBox;
        let rows;
        let availableMove = [];
        let takeableSquare = [];

        function findRow(){
            rows = idBox;
            rows = Number(rows);
            while(rows > 8){
                rows -= 8;
            }
            switch (true){
                case rows === 1:
                    rows = 'A';
                    break;
                case rows === 2:
                    rows = 'B';
                    break;
                case rows === 3:
                    rows = 'C';
                    break;
                case rows === 4:
                    rows = 'D';
                    break;
                case rows === 5:
                    rows = 'E';
                    break;
                case rows === 6:
                    rows = 'F';
                    break;
                case rows === 7:
                    rows = 'G';
                    break;
                case rows === 8:
                    rows = 'H';
                    break;
                default:
                    break;
            }
        }
        findRow();
            tryingBox = idBox - 15;
            isAdded();

            tryingBox = idBox - 17;
            isAdded();

            tryingBox = idBox - 6;
            isAdded();

            tryingBox = idBox - 10;
            isAdded();

            tryingBox = idBox + 15;
            isAdded();

            tryingBox = idBox + 17;
            isAdded();

            tryingBox = idBox + 6;
            isAdded();

            tryingBox = idBox + 10;
            isAdded();
        function isAdded(){
            if(tryingBox > 0 && tryingBox <= 64){
                let SquareCould = boxes[tryingBox - 1];
                let secondRow;
                secondRow = Number(tryingBox);
                while(secondRow > 8){
                    secondRow -= 8;
                }
                switch (true){
                    case secondRow === 1:
                        secondRow = 'A';
                        break;
                    case secondRow === 2:
                        secondRow = 'B';
                        break;
                    case secondRow === 3:
                        secondRow = 'C';
                        break;
                    case secondRow === 4:
                        secondRow = 'D';
                        break;
                    case secondRow === 5:
                        secondRow = 'E';
                        break;
                    case secondRow === 6:
                        secondRow = 'F';
                        break;
                    case secondRow === 7:
                        secondRow = 'G';
                        break;
                    case secondRow === 8:
                        secondRow = 'H';
                        break;
                    default:
                        break;
                }
    
                if(SquareCould.firstElementChild.classList.contains('none')){
                    if(rows === "A" && secondRow === "H"){
                        availableMove.push(undefined);  
                    }
                    else if(rows === "B" && secondRow === "H"){
                        availableMove.push(undefined);  
                    }
                    else if(rows === "A" && secondRow === "G"){
                        availableMove.push(undefined);  
                    }
                    else if(secondRow === "A" && rows === "G"){
                        availableMove.push(undefined);  
                    }
                    else if(secondRow === "B" && rows === "H"){                                
                        availableMove.push(undefined);  
                    }
                    else if(secondRow === "A" && rows === "H"){
                        availableMove.push(undefined);  
                    }
                    else{
                        availableMove.push(boxes[tryingBox - 1]);
                    }
                }
                else{
                    let squareOccupied = SquareCould.firstElementChild.classList;
                    squareOccupied = squareOccupied.value;
                    squareOccupied = squareOccupied.slice(0, 5);
                    if(rows === "A" && secondRow === "H"){
                    }
                    else if(rows === "B" && secondRow === "H"){ 
                    }
                    else if(rows === "A" && secondRow === "G"){
                    }
                    else if(secondRow === "A" && rows === "G"){
                    }
                    else if(secondRow === "B" && rows === "H"){                                
                    }
                    else if(secondRow === "A" && rows === "H"){
                    }
                    else if(squareOccupied === 'black'){
                        takeableSquare.push(boxes[tryingBox - 1]);
                    }
                }
            }
        }
        if(toggleSquare){
            for (square in availableMove){
                if(availableMove[square] !== undefined){
                    availableMove[square].classList.toggle('availableSquare');
                }
            }
    
            for(taked in takeableSquare){
                takeableSquare[taked].classList.toggle('takeable');
            }
            isCheckFunc();
            changeSquares();
        }
        else if(!toggleSquare){
            if(returnAll){
                let alls = [];
                for(index in availableMove){
                    alls.push(availableMove[index]);
                }
                for(index in takeableSquare){
                    alls.push(takeableSquare[index]);
                }
                
                return(alls);
            }
            else{
                return(takeableSquare);
            }
        }
    }
    else if(active.classList.contains('black_Knight') && place.classList.contains('picked')  || active.classList.contains('black_Knight') && !toggleSquare){
        let idBox = place.id;
        idBox = idBox.slice(3);
        idBox = Number(idBox);
        let tryingBox;
        let rows;
        let availableMove = [];
        let takeableSquare = [];
        function findRow(){
            rows = idBox;
            rows = Number(rows);
            while(rows > 8){
                rows -= 8;
            }
            switch (true){
                case rows === 1:
                    rows = 'A';
                    break;
                case rows === 2:
                    rows = 'B';
                    break;
                case rows === 3:
                    rows = 'C';
                    break;
                case rows === 4:
                    rows = 'D';
                    break;
                case rows === 5:
                    rows = 'E';
                    break;
                case rows === 6:
                    rows = 'F';
                    break;
                case rows === 7:
                    rows = 'G';
                    break;
                case rows === 8:
                    rows = 'H';
                    break;
                default:
                    break;
            }
        }
        findRow();
            tryingBox = idBox - 15;
            isAdded();

            tryingBox = idBox - 17;
            isAdded();

            tryingBox = idBox - 6;
            isAdded();

            tryingBox = idBox - 10;
            isAdded();

            tryingBox = idBox + 15;
            isAdded();

            tryingBox = idBox + 17;
            isAdded();

            tryingBox = idBox + 6;
            isAdded();

            tryingBox = idBox + 10;
            isAdded();
        function isAdded(){
            if(tryingBox > 0 && tryingBox <= 64){
                let SquareCould = boxes[tryingBox - 1];
                let secondRow;
                secondRow = Number(tryingBox);
                while(secondRow > 8){
                    secondRow -= 8;
                }
                switch (true){
                    case secondRow === 1:
                        secondRow = 'A';
                        break;
                    case secondRow === 2:
                        secondRow = 'B';
                        break;
                    case secondRow === 3:
                        secondRow = 'C';
                        break;
                    case secondRow === 4:
                        secondRow = 'D';
                        break;
                    case secondRow === 5:
                        secondRow = 'E';
                        break;
                    case secondRow === 6:
                        secondRow = 'F';
                        break;
                    case secondRow === 7:
                        secondRow = 'G';
                        break;
                    case secondRow === 8:
                        secondRow = 'H';
                        break;
                    default:
                        break;
                }
    
                if(SquareCould.firstElementChild.classList.contains('none')){
                    if(rows === "A" && secondRow === "H"){
                        availableMove.push(undefined);  
                    }
                    else if(rows === "B" && secondRow === "H"){
                        availableMove.push(undefined);  
                    }
                    else if(rows === "A" && secondRow === "G"){
                        availableMove.push(undefined);  
                    }
                    else if(secondRow === "A" && rows === "G"){
                        availableMove.push(undefined);  
                    }
                    else if(secondRow === "B" && rows === "H"){                                
                        availableMove.push(undefined);  
                    }
                    else if(secondRow === "A" && rows === "H"){
                        availableMove.push(undefined);  
                    }
                    else{
                        availableMove.push(boxes[tryingBox - 1])
                    }
                }
                else{
                    let squareOccupied = SquareCould.firstElementChild.classList;
                    squareOccupied = squareOccupied.value;
                    squareOccupied = squareOccupied.slice(0, 5);
                    if(rows === "A" && secondRow === "H"){
                    }
                    else if(rows === "B" && secondRow === "H"){ 
                    }
                    else if(rows === "A" && secondRow === "G"){
                    }
                    else if(secondRow === "A" && rows === "G"){
                    }
                    else if(secondRow === "B" && rows === "H"){                                
                    }
                    else if(secondRow === "A" && rows === "H"){
                    }
                    else if(squareOccupied === 'white'){
                        takeableSquare.push(boxes[tryingBox - 1]);
                    }
                }
            }
        }
        if(toggleSquare){
            for (square in availableMove){
                if(availableMove[square] !== undefined){
                    availableMove[square].classList.toggle('availableSquare');
                }
            }
    
            for(taked in takeableSquare){
                takeableSquare[taked].classList.toggle('takeable');
            }
            isCheckFunc();
            changeSquares();
        }
        else if(!toggleSquare){
            if(returnAll){
                let alls = [];
                for(index in availableMove){
                    alls.push(availableMove[index]);
                }
                for(index in takeableSquare){
                    alls.push(takeableSquare[index]);
                }
                
                return(alls);
            }
            else{
                return(takeableSquare);
            }
        }
    }
}

function rockMovement(place){
    const active = place.firstElementChild;
    if(active.classList.contains('white_Rock') && place.classList.contains('picked')  || active.classList.contains('white_Rock') && !toggleSquare){
        let idBox = place.id;
        idBox = idBox.slice(3);
        let availableMove = [];
        let takeableSquare = [];
        let boxTriedNow = Number(idBox);
        let doAgain = true;
        while(doAgain && boxTriedNow <= 64 && boxTriedNow > 8){         //Gerak Ke atas
            boxTriedNow -= 8;
            if(boxes[boxTriedNow - 1].firstElementChild.classList.contains('none')){
                availableMove.push(boxes[boxTriedNow - 1]);
            }
            else{
                let theChild = boxes[boxTriedNow - 1].firstElementChild.classList;
                theChild = theChild.value;
                theChild = theChild.slice(0, 5);
                if(theChild === 'black'){
                    takeableSquare.push(boxes[boxTriedNow - 1]);
                    doAgain = false;
                }
                else{
                    doAgain = false;
                }
            }
        }

        boxTriedNow = Number(idBox);
        doAgain = true;

        while(doAgain && boxTriedNow <= 56 && boxTriedNow > 0){         //Gerak Ke atas
            boxTriedNow += 8;
            if(boxes[boxTriedNow - 1].firstElementChild.classList.contains('none')){
                availableMove.push(boxes[boxTriedNow - 1]);
            }
            else{
                let theChild = boxes[boxTriedNow - 1].firstElementChild.classList;
                theChild = theChild.value;
                theChild = theChild.slice(0, 5);
                if(theChild === 'black'){
                    takeableSquare.push(boxes[boxTriedNow - 1]);
                    doAgain = false;
                }
                else{
                    doAgain = false;
                }
            }
        }

        doAgain = true;
        boxTriedNow = Number(idBox);            //Gerak ke kiri

        while(doAgain){
            boxTriedNow -= 1;
            let result = findRow(boxTriedNow);
            let now = findRow(boxTriedNow + 1);
            if(now !== "A"){
                if(result === "A"){
                    doAgain = false;
                }
                if(boxTriedNow <= 64 && boxTriedNow > 0){
                    if(boxes[boxTriedNow - 1].firstElementChild.classList.contains('none')){
                        availableMove.push(boxes[boxTriedNow - 1]);
                    }
                    else{
                        let theChild = boxes[boxTriedNow - 1].firstElementChild.classList;
                        theChild = theChild.value;
                        theChild = theChild.slice(0, 5);
                        if(theChild === 'black'){
                            takeableSquare.push(boxes[boxTriedNow - 1]);
                            doAgain = false;
                        }
                        else{
                            doAgain = false;
                        }
                    }
                }
                else{
                    doAgain = false;
                }
            }
            else{
                doAgain = false;
            }
        }

        doAgain = true;
        boxTriedNow = Number(idBox);            //Gerak ke kiri

        while(doAgain){
            boxTriedNow += 1;
            let result = findRow(boxTriedNow);
            let now = findRow(boxTriedNow - 1);
            if(now !== "H"){
                if(result === "H"){
                    doAgain = false;
                }
                if(boxes[boxTriedNow - 1].firstElementChild.classList.contains('none')){
                    availableMove.push(boxes[boxTriedNow - 1]);
                }
                else{
                    let theChild = boxes[boxTriedNow - 1].firstElementChild.classList;
                    theChild = theChild.value;
                    theChild = theChild.slice(0, 5);
                    if(theChild === 'black'){
                        takeableSquare.push(boxes[boxTriedNow - 1]);
                        doAgain = false;
                    }
                    else{
                        doAgain = false;
                    }
                }
            }
            else{
                doAgain = false;
            }
        }

        if(toggleSquare){
            for (square in availableMove){
                if(availableMove[square] !== undefined){
                    availableMove[square].classList.toggle('availableSquare');
                }
            }
    
            for(taked in takeableSquare){
                takeableSquare[taked].classList.toggle('takeable');
            }
            isCheckFunc();
            changeSquares();
        }
        else if(!toggleSquare){
            if(returnAll){
                let alls = [];
                for(index in availableMove){
                    alls.push(availableMove[index]);
                }
                for(index in takeableSquare){
                    alls.push(takeableSquare[index]);
                }
                
                return(alls);
            }
            else{
                return(takeableSquare);
            }
        }
    }
    else if(active.classList.contains('black_Rock') && place.classList.contains('picked')  || active.classList.contains('black_Rock') && !toggleSquare){
        let idBox = place.id;
        idBox = idBox.slice(3);
        let availableMove = [];
        let takeableSquare = [];
        let boxTriedNow = Number(idBox);
        let doAgain = true;
        while(doAgain && boxTriedNow <= 64 && boxTriedNow > 8){         //Gerak Ke atas
            boxTriedNow -= 8;
            if(boxes[boxTriedNow - 1].firstElementChild.classList.contains('none')){
                availableMove.push(boxes[boxTriedNow - 1]);
            }
            else{
                let theChild = boxes[boxTriedNow - 1].firstElementChild.classList;
                theChild = theChild.value;
                theChild = theChild.slice(0, 5);
                if(theChild === 'white'){
                    takeableSquare.push(boxes[boxTriedNow - 1]);
                    doAgain = false;
                }
                else{
                    doAgain = false;
                }
            }
        }

        boxTriedNow = Number(idBox);
        doAgain = true;

        while(doAgain && boxTriedNow <= 56 && boxTriedNow > 0){         //Gerak Ke atas
            boxTriedNow += 8;
            if(boxes[boxTriedNow - 1].firstElementChild.classList.contains('none')){
                availableMove.push(boxes[boxTriedNow - 1]);
            }
            else{
                let theChild = boxes[boxTriedNow - 1].firstElementChild.classList;
                theChild = theChild.value;
                theChild = theChild.slice(0, 5);
                if(theChild === 'white'){
                    takeableSquare.push(boxes[boxTriedNow - 1]);
                    doAgain = false;
                }
                else{
                    doAgain = false;
                }
            }
        }

        doAgain = true;
        boxTriedNow = Number(idBox);            //Gerak ke kiri

        while(doAgain){
            boxTriedNow -= 1;
            let result = findRow(boxTriedNow);
            let now = findRow(boxTriedNow + 1);
            if(now !== "A"){
                if(result === "A"){
                    doAgain = false;
                }
                if(boxTriedNow <= 64 && boxTriedNow > 0){
                    if(boxes[boxTriedNow - 1].firstElementChild.classList.contains('none')){
                        availableMove.push(boxes[boxTriedNow - 1]);
                    }
                    else{
                        let theChild = boxes[boxTriedNow - 1].firstElementChild.classList;
                        theChild = theChild.value;
                        theChild = theChild.slice(0, 5);
                        if(theChild === 'white'){
                            takeableSquare.push(boxes[boxTriedNow - 1]);
                            doAgain = false;
                        }
                        else{
                            doAgain = false;
                        }
                    }
                }
                else{
                    doAgain = false;
                }
            }
            else{
                doAgain = false;
            }
        }

        doAgain = true;
        boxTriedNow = Number(idBox);            //Gerak ke kiri

        while(doAgain){
            boxTriedNow += 1;
            let result = findRow(boxTriedNow);
            let now = findRow(boxTriedNow - 1);
            if(now !== "H"){
                if(result === "H"){
                    doAgain = false;
                }
                if(boxes[boxTriedNow - 1].firstElementChild.classList.contains('none')){
                    availableMove.push(boxes[boxTriedNow - 1]);
                }
                else{
                    let theChild = boxes[boxTriedNow - 1].firstElementChild.classList;
                    theChild = theChild.value;
                    theChild = theChild.slice(0, 5);
                    if(theChild === 'white'){
                        takeableSquare.push(boxes[boxTriedNow - 1]);
                        doAgain = false;
                    }
                    else{
                        doAgain = false;
                    }
                }
            }
            else{
                doAgain = false;
            }
        }

        if(toggleSquare){
            for (square in availableMove){
                if(availableMove[square] !== undefined){
                    availableMove[square].classList.toggle('availableSquare');
                }
            }
    
            for(taked in takeableSquare){
                takeableSquare[taked].classList.toggle('takeable');
            }
            isCheckFunc();
            changeSquares();
        }
        else if(!toggleSquare){
            if(returnAll){
                let alls = [];
                for(index in availableMove){
                    alls.push(availableMove[index]);
                }
                for(index in takeableSquare){
                    alls.push(takeableSquare[index]);
                }
                
                return(alls);
            }
            else{
                return(takeableSquare);
            }
        }
    }
}

function bishopMovement(place){
    const active = place.firstElementChild;
    if(active.classList.contains('white_Bishop') && place.classList.contains('picked')  || active.classList.contains('white_Bishop') && !toggleSquare){
        let idBox = place.id;
        idBox = idBox.slice(3);
        let availableMove = [];
        let takeableSquare = [];
        let boxTriedNow = Number(idBox);
        let doAgain = true;
        let thePosition = findRow(boxTriedNow);
        while(doAgain){         //Gerak Ke diagonal atas kiri
            if(thePosition !== "A"){            boxTriedNow -= 9;
                if(boxTriedNow > 0 && boxTriedNow <= 64){
                    let theRows = findRow(boxTriedNow);
                    if(theRows === "A"){
                        doAgain = false;
                    }
                    if(boxes[boxTriedNow - 1].firstElementChild.classList.contains('none')){
                        availableMove.push(boxes[boxTriedNow - 1]);
                    }
                    else{
                        let theChild = boxes[boxTriedNow - 1].firstElementChild.classList;
                        theChild = theChild.value;
                        theChild = theChild.slice(0, 5);
                        if(theChild === 'black'){
                            takeableSquare.push(boxes[boxTriedNow - 1]);
                            doAgain = false;
                        }
                        else{
                            doAgain = false;
                        }
                    }
                }
                else{
                    doAgain = false;
                }
            }
            else{
                doAgain = false;
            }
        }

        boxTriedNow = Number(idBox);
        doAgain = true;
        while(doAgain){         //Gerak Ke diagonal atas kiri
            if(thePosition !== "H"){
                boxTriedNow -= 7;
                if(boxTriedNow > 0 && boxTriedNow <= 64){
                    let theRows = findRow(boxTriedNow);
                    if(theRows === "H"){
                        doAgain = false;
                    }
                    if(boxes[boxTriedNow - 1].firstElementChild.classList.contains('none')){
                        availableMove.push(boxes[boxTriedNow - 1]);
                    }
                    else{
                        let theChild = boxes[boxTriedNow - 1].firstElementChild.classList;
                        theChild = theChild.value;
                        theChild = theChild.slice(0, 5);
                        if(theChild === 'black'){
                            takeableSquare.push(boxes[boxTriedNow - 1]);
                            doAgain = false;
                        }
                        else{
                            doAgain = false;
                        }
                    }
                }
                else{
                    doAgain = false;
                }
            }
            else{
                doAgain = false;
            }
        }

        doAgain = true;
        boxTriedNow = Number(idBox);            //Gerak ke kiri

        while(doAgain){         //Gerak Ke diagonal atas kiri
            if(thePosition !== "H"){
                boxTriedNow += 9;
                if(boxTriedNow > 0 && boxTriedNow <= 64){
                    let theRows = findRow(boxTriedNow);
                    if(theRows === "H"){
                        doAgain = false;
                    }
                    if(boxes[boxTriedNow - 1].firstElementChild.classList.contains('none')){
                        availableMove.push(boxes[boxTriedNow - 1]);
                    }
                    else{
                        let theChild = boxes[boxTriedNow - 1].firstElementChild.classList;
                        theChild = theChild.value;
                        theChild = theChild.slice(0, 5);
                        if(theChild === 'black'){
                            takeableSquare.push(boxes[boxTriedNow - 1]);
                            doAgain = false;
                        }
                        else{
                            doAgain = false;
                        }
                    }
                }
                else{
                    doAgain = false;
                }
            }
            else{
                doAgain = false;
            }
        }

        doAgain = true;
        boxTriedNow = Number(idBox);            //Gerak ke kiri

        while(doAgain){         //Gerak Ke diagonal atas kiri
            if(thePosition !== "A"){
                boxTriedNow += 7;
                if(boxTriedNow > 0 && boxTriedNow <= 64){
                    let theRows = findRow(boxTriedNow);
                    if(theRows === "A"){
                        doAgain = false;
                    }
                    if(boxes[boxTriedNow - 1].firstElementChild.classList.contains('none')){
                        availableMove.push(boxes[boxTriedNow - 1]);
                    }
                    else{
                        let theChild = boxes[boxTriedNow - 1].firstElementChild.classList;
                        theChild = theChild.value;
                        theChild = theChild.slice(0, 5);
                        if(theChild === 'black'){
                            takeableSquare.push(boxes[boxTriedNow - 1]);
                            doAgain = false;
                        }
                        else{
                            doAgain = false;
                        }
                    }
                }
                else{
                    doAgain = false;
                }
            }
            else{
                doAgain = false;
            }
        }

        if(toggleSquare){
            for (square in availableMove){
                if(availableMove[square] !== undefined){
                    availableMove[square].classList.toggle('availableSquare');
                }
            }
    
            for(taked in takeableSquare){
                takeableSquare[taked].classList.toggle('takeable');
            }
            isCheckFunc();
            changeSquares();
        }
        else if(!toggleSquare){
            if(returnAll){
                let alls = [];
                for(index in availableMove){
                    alls.push(availableMove[index]);
                }
                for(index in takeableSquare){
                    alls.push(takeableSquare[index]);
                }
                
                return(alls);
            }
            else{
                return(takeableSquare);
            }
        }
    }
    else if(active.classList.contains('black_Bishop') && place.classList.contains('picked')  || active.classList.contains('black_Bishop') && !toggleSquare){
        let idBox = place.id;
        idBox = idBox.slice(3);
        let availableMove = [];
        let takeableSquare = [];
        let boxTriedNow = Number(idBox);
        let doAgain = true;
        let thePosition = findRow(boxTriedNow);
        while(doAgain){         //Gerak Ke diagonal atas kiri
            if(thePosition !== "A"){
                boxTriedNow -= 9;
                if(boxTriedNow > 0 && boxTriedNow <= 64){
                    let theRows = findRow(boxTriedNow);
                    if(theRows === "A"){
                        doAgain = false;
                    }
                    if(boxes[boxTriedNow - 1].firstElementChild.classList.contains('none')){
                        availableMove.push(boxes[boxTriedNow - 1]);
                    }
                    else{
                        let theChild = boxes[boxTriedNow - 1].firstElementChild.classList;
                        theChild = theChild.value;
                        theChild = theChild.slice(0, 5);
                        if(theChild === 'white'){
                            takeableSquare.push(boxes[boxTriedNow - 1]);
                            doAgain = false;
                        }
                        else{
                            doAgain = false;
                        }
                    }
                }
                else{
                    doAgain = false;
                }
            }
            else{
                doAgain = false;
            }
        }

        boxTriedNow = Number(idBox);
        doAgain = true;

        while(doAgain){         //Gerak Ke diagonal atas kiri
            if(thePosition !== "H"){
                boxTriedNow -= 7;
                if(boxTriedNow > 0 && boxTriedNow <= 64){
                    let theRows = findRow(boxTriedNow);
                    if(theRows === "H"){
                        doAgain = false;
                    }
                    if(boxes[boxTriedNow - 1].firstElementChild.classList.contains('none')){
                        availableMove.push(boxes[boxTriedNow - 1]);
                    }
                    else{
                        let theChild = boxes[boxTriedNow - 1].firstElementChild.classList;
                        theChild = theChild.value;
                        theChild = theChild.slice(0, 5);
                        if(theChild === 'white'){
                            takeableSquare.push(boxes[boxTriedNow - 1]);
                            doAgain = false;
                        }
                        else{
                            doAgain = false;
                        }
                    }
                }
                else{
                    doAgain = false;
                }
            }
            else{
                doAgain = false;
            }
        }

        doAgain = true;
        boxTriedNow = Number(idBox);            //Gerak ke kiri

        while(doAgain){         //Gerak Ke diagonal atas kiri
            if(thePosition !== "H"){
                boxTriedNow += 9;
                if(boxTriedNow > 0 && boxTriedNow <= 64){
                    let theRows = findRow(boxTriedNow);
                    if(theRows === "H"){
                        doAgain = false;
                    }
                    if(boxes[boxTriedNow - 1].firstElementChild.classList.contains('none')){
                        availableMove.push(boxes[boxTriedNow - 1]);
                    }
                    else{
                        let theChild = boxes[boxTriedNow - 1].firstElementChild.classList;
                        theChild = theChild.value;
                        theChild = theChild.slice(0, 5);
                        if(theChild === 'white'){
                            takeableSquare.push(boxes[boxTriedNow - 1]);
                            doAgain = false;
                        }
                        else{
                            doAgain = false;
                        }
                    }
                }
                else{
                    doAgain = false;
                }
            }
            else{
                doAgain = false;
            }
        }

        doAgain = true;
        boxTriedNow = Number(idBox);            //Gerak ke kiri

        while(doAgain){         //Gerak Ke diagonal atas kiri
            if(thePosition !== "A"){
                boxTriedNow += 7;
                if(boxTriedNow > 0 && boxTriedNow <= 64){
                    let theRows = findRow(boxTriedNow);
                    if(theRows === "A"){
                        doAgain = false;
                    }
                    if(boxes[boxTriedNow - 1].firstElementChild.classList.contains('none')){
                        availableMove.push(boxes[boxTriedNow - 1]);
                    }
                    else{
                        let theChild = boxes[boxTriedNow - 1].firstElementChild.classList;
                        theChild = theChild.value;
                        theChild = theChild.slice(0, 5);
                        if(theChild === 'white'){
                            takeableSquare.push(boxes[boxTriedNow - 1]);
                            doAgain = false;
                        }
                        else{
                            doAgain = false;
                        }
                    }
                }
                else{
                    doAgain = false;
                }
            }
            else{
                doAgain = false;
            }
        }

        if(toggleSquare){
            for (square in availableMove){
                if(availableMove[square] !== undefined){
                    availableMove[square].classList.toggle('availableSquare');
                }
            }
    
            for(taked in takeableSquare){
                takeableSquare[taked].classList.toggle('takeable');
            }
            isCheckFunc();
            changeSquares();
        }
        else if(!toggleSquare){
            if(returnAll){
                let alls = [];
                for(index in availableMove){
                    alls.push(availableMove[index]);
                }
                for(index in takeableSquare){
                    alls.push(takeableSquare[index]);
                }
                
                return(alls);
            }
            else{
                return(takeableSquare);
            }
        }
    }
}

function queenMovement(place){
    const active = place.firstElementChild;
    if(active.classList.contains('white_Queen') && place.classList.contains('picked')  || active.classList.contains('white_Queen') && !toggleSquare){
        let idBox = place.id;
        idBox = idBox.slice(3);
        let availableMove = [];
        let takeableSquare = [];
        let boxTriedNow = Number(idBox);
        let thePosition = findRow(boxTriedNow);
        let doAgain = true;
        while(doAgain && boxTriedNow <= 64 && boxTriedNow > 8){         //Gerak Ke atas
            boxTriedNow -= 8;
            if(boxes[boxTriedNow - 1].firstElementChild.classList.contains('none')){
                availableMove.push(boxes[boxTriedNow - 1]);
            }
            else{
                let theChild = boxes[boxTriedNow - 1].firstElementChild.classList;
                theChild = theChild.value;
                theChild = theChild.slice(0, 5);
                if(theChild === 'black'){
                    takeableSquare.push(boxes[boxTriedNow - 1]);
                    doAgain = false;
                }
                else{
                    doAgain = false;
                }
            }
        }

        boxTriedNow = Number(idBox);
        doAgain = true;

        while(doAgain && boxTriedNow <= 56 && boxTriedNow > 0){         //Gerak Ke atas
            boxTriedNow += 8;
            if(boxes[boxTriedNow - 1].firstElementChild.classList.contains('none')){
                availableMove.push(boxes[boxTriedNow - 1]);
            }
            else{
                let theChild = boxes[boxTriedNow - 1].firstElementChild.classList;
                theChild = theChild.value;
                theChild = theChild.slice(0, 5);
                if(theChild === 'black'){
                    takeableSquare.push(boxes[boxTriedNow - 1]);
                    doAgain = false;
                }
                else{
                    doAgain = false;
                }
            }
        }

        doAgain = true;
        boxTriedNow = Number(idBox);            //Gerak ke kiri

        while(doAgain){
            boxTriedNow -= 1;
            let result = findRow(boxTriedNow);
            let now = findRow(boxTriedNow + 1);
            if(now !== "A"){
                if(result === "A"){
                    doAgain = false;
                }
                if(boxTriedNow <= 64 && boxTriedNow > 0){
                    if(boxes[boxTriedNow - 1].firstElementChild.classList.contains('none')){
                        availableMove.push(boxes[boxTriedNow - 1]);
                    }
                    else{
                        let theChild = boxes[boxTriedNow - 1].firstElementChild.classList;
                        theChild = theChild.value;
                        theChild = theChild.slice(0, 5);
                        if(theChild === 'black'){
                            takeableSquare.push(boxes[boxTriedNow - 1]);
                            doAgain = false;
                        }
                        else{
                            doAgain = false;
                        }
                    }
                }
                else{
                    doAgain = false;
                }
            }
            else{
                doAgain = false;
            }
        }

        doAgain = true;
        boxTriedNow = Number(idBox);            //Gerak ke kiri

        while(doAgain){
            boxTriedNow += 1;
            let result = findRow(boxTriedNow);
            let now = findRow(boxTriedNow - 1);
            if(now !== "H"){
                if(result === "H"){
                    doAgain = false;
                }
                if(boxes[boxTriedNow - 1].firstElementChild.classList.contains('none')){
                    availableMove.push(boxes[boxTriedNow - 1]);
                }
                else{
                    let theChild = boxes[boxTriedNow - 1].firstElementChild.classList;
                    theChild = theChild.value;
                    theChild = theChild.slice(0, 5);
                    if(theChild === 'black'){
                        takeableSquare.push(boxes[boxTriedNow - 1]);
                        doAgain = false;
                    }
                    else{
                        doAgain = false;
                    }
                }
            }
            else{
                doAgain = false;
            }
        }

        boxTriedNow = Number(idBox);
        doAgain = true;

        if(thePosition === "A"){
            doAgain = false;
        }

        while(doAgain){         //Gerak Ke diagonal atas kiri
            boxTriedNow -= 9;
            if(boxTriedNow > 0 && boxTriedNow <= 64){
                let theRows = findRow(boxTriedNow);
                if(theRows === "A"){
                    doAgain = false;
                }
                if(boxes[boxTriedNow - 1].firstElementChild.classList.contains('none')){
                    availableMove.push(boxes[boxTriedNow - 1]);
                }
                else{
                    let theChild = boxes[boxTriedNow - 1].firstElementChild.classList;
                    theChild = theChild.value;
                    theChild = theChild.slice(0, 5);
                    if(theChild === 'black'){
                        takeableSquare.push(boxes[boxTriedNow - 1]);
                        doAgain = false;
                    }
                    else{
                        doAgain = false;
                    }
                }
            }
            else{
                doAgain = false;
            }
        }

        boxTriedNow = Number(idBox);
        doAgain = true;

        if(thePosition === "H"){
            doAgain = false;
        }

        while(doAgain){         //Gerak Ke diagonal atas kiri
            boxTriedNow -= 7;
            if(boxTriedNow > 0 && boxTriedNow <= 64){
                let theRows = findRow(boxTriedNow);
                if(theRows === "H"){
                    doAgain = false;
                }
                if(boxes[boxTriedNow - 1].firstElementChild.classList.contains('none')){
                    availableMove.push(boxes[boxTriedNow - 1]);
                }
                else{
                    let theChild = boxes[boxTriedNow - 1].firstElementChild.classList;
                    theChild = theChild.value;
                    theChild = theChild.slice(0, 5);
                    if(theChild === 'black'){
                        takeableSquare.push(boxes[boxTriedNow - 1]);
                        doAgain = false;
                    }
                    else{
                        doAgain = false;
                    }
                }
            }
            else{
                doAgain = false;
            }
        }

        doAgain = true;
        boxTriedNow = Number(idBox);            //Gerak ke kiri

        if(thePosition === "H"){
            doAgain = false;
        }

        while(doAgain){         //Gerak Ke diagonal atas kiri
            boxTriedNow += 9;
            if(boxTriedNow > 0 && boxTriedNow <= 64){
                let theRows = findRow(boxTriedNow);
                if(theRows === "H"){
                    doAgain = false;
                }
                if(boxes[boxTriedNow - 1].firstElementChild.classList.contains('none')){
                    availableMove.push(boxes[boxTriedNow - 1]);
                }
                else{
                    let theChild = boxes[boxTriedNow - 1].firstElementChild.classList;
                    theChild = theChild.value;
                    theChild = theChild.slice(0, 5);
                    if(theChild === 'black'){
                        takeableSquare.push(boxes[boxTriedNow - 1]);
                        doAgain = false;
                    }
                    else{
                        doAgain = false;
                    }
                }
            }
            else{
                doAgain = false;
            }
        }

        doAgain = true;
        boxTriedNow = Number(idBox);            //Gerak ke kiri

        if(thePosition === "A"){
            doAgain = false;
        }

        while(doAgain){         //Gerak Ke diagonal atas kiri
            boxTriedNow += 7;
            if(boxTriedNow > 0 && boxTriedNow <= 64){
                let theRows = findRow(boxTriedNow);
                if(theRows === "A"){
                    doAgain = false;
                }
                if(boxes[boxTriedNow - 1].firstElementChild.classList.contains('none')){
                    availableMove.push(boxes[boxTriedNow - 1]);
                }
                else{
                    let theChild = boxes[boxTriedNow - 1].firstElementChild.classList;
                    theChild = theChild.value;
                    theChild = theChild.slice(0, 5);
                    if(theChild === 'black'){
                        takeableSquare.push(boxes[boxTriedNow - 1]);
                        doAgain = false;
                    }
                    else{
                        doAgain = false;
                    }
                }
            }
            else{
                doAgain = false;
            }
        }

        if(toggleSquare){
            for (square in availableMove){
                if(availableMove[square] !== undefined){
                    availableMove[square].classList.toggle('availableSquare');
                }
            }
    
            for(taked in takeableSquare){
                takeableSquare[taked].classList.toggle('takeable');
            }
            isCheckFunc();
            changeSquares();
        }
        else if(!toggleSquare){
            if(returnAll){
                let alls = [];
                for(index in availableMove){
                    alls.push(availableMove[index]);
                }
                for(index in takeableSquare){
                    alls.push(takeableSquare[index]);
                }
                
                return(alls);
            }
            else{
                return(takeableSquare);
            }
        }
    }
    else if(active.classList.contains('black_Queen') && place.classList.contains('picked')  || active.classList.contains('black_Queen') && !toggleSquare){
        let idBox = place.id;
        idBox = idBox.slice(3);
        let availableMove = [];
        let takeableSquare = [];
        let boxTriedNow = Number(idBox);
        let thePosition = findRow(boxTriedNow);
        let doAgain = true;
        while(doAgain && boxTriedNow <= 64 && boxTriedNow > 8){         //Gerak Ke atas
            boxTriedNow -= 8;
            if(boxes[boxTriedNow - 1].firstElementChild.classList.contains('none')){
                availableMove.push(boxes[boxTriedNow - 1]);
            }
            else{
                let theChild = boxes[boxTriedNow - 1].firstElementChild.classList;
                theChild = theChild.value;
                theChild = theChild.slice(0, 5);
                if(theChild === 'white'){
                    takeableSquare.push(boxes[boxTriedNow - 1]);
                    doAgain = false;
                }
                else{
                    doAgain = false;
                }
            }
        }

        boxTriedNow = Number(idBox);
        doAgain = true;

        while(doAgain && boxTriedNow <= 56 && boxTriedNow > 0){         //Gerak Ke atas
            boxTriedNow += 8;
            if(boxes[boxTriedNow - 1].firstElementChild.classList.contains('none')){
                availableMove.push(boxes[boxTriedNow - 1]);
            }
            else{
                let theChild = boxes[boxTriedNow - 1].firstElementChild.classList;
                theChild = theChild.value;
                theChild = theChild.slice(0, 5);
                if(theChild === 'white'){
                    takeableSquare.push(boxes[boxTriedNow - 1]);
                    doAgain = false;
                }
                else{
                    doAgain = false;
                }
            }
        }

        doAgain = true;
        boxTriedNow = Number(idBox);            //Gerak ke kiri

        while(doAgain){
            boxTriedNow -= 1;
            let result = findRow(boxTriedNow);
            let now = findRow(boxTriedNow + 1);
            if(now !== "A"){
                if(result === "A"){
                    doAgain = false;
                }
                if(boxTriedNow <= 64 && boxTriedNow > 0){
                    if(boxes[boxTriedNow - 1].firstElementChild.classList.contains('none')){
                        availableMove.push(boxes[boxTriedNow - 1]);
                    }
                    else{
                        let theChild = boxes[boxTriedNow - 1].firstElementChild.classList;
                        theChild = theChild.value;
                        theChild = theChild.slice(0, 5);
                        if(theChild === 'white'){
                            takeableSquare.push(boxes[boxTriedNow - 1]);
                            doAgain = false;
                        }
                        else{
                            doAgain = false;
                        }
                    }
                }
                else{
                    doAgain = false;
                }
            }
            else{
                doAgain = false;
            }
        }

        doAgain = true;
        boxTriedNow = Number(idBox);            //Gerak ke kiri

        while(doAgain){
            boxTriedNow += 1;
            let result = findRow(boxTriedNow);
            let now = findRow(boxTriedNow - 1);
            if(now !== "H"){
                if(result === "H"){
                    doAgain = false;
                }
                if(boxes[boxTriedNow - 1].firstElementChild.classList.contains('none')){
                    availableMove.push(boxes[boxTriedNow - 1]);
                }
                else{
                    let theChild = boxes[boxTriedNow - 1].firstElementChild.classList;
                    theChild = theChild.value;
                    theChild = theChild.slice(0, 5);
                    if(theChild === 'white'){
                        takeableSquare.push(boxes[boxTriedNow - 1]);
                        doAgain = false;
                    }
                    else{
                        doAgain = false;
                    }
                }
            }
            else{
                doAgain = false;
            }
        }

        boxTriedNow = Number(idBox);
        doAgain = true;

        if(thePosition === "A"){
            doAgain = false;
        }

        while(doAgain){         //Gerak Ke diagonal atas kiri
            boxTriedNow -= 9;
            if(boxTriedNow > 0 && boxTriedNow <= 64){
                let theRows = findRow(boxTriedNow);
                if(theRows === "A"){
                    doAgain = false;
                }
                if(boxes[boxTriedNow - 1].firstElementChild.classList.contains('none')){
                    availableMove.push(boxes[boxTriedNow - 1]);
                }
                else{
                    let theChild = boxes[boxTriedNow - 1].firstElementChild.classList;
                    theChild = theChild.value;
                    theChild = theChild.slice(0, 5);
                    if(theChild === 'white'){
                        takeableSquare.push(boxes[boxTriedNow - 1]);
                        doAgain = false;
                    }
                    else{
                        doAgain = false;
                    }
                }
            }
            else{
                doAgain = false;
            }
        }

        boxTriedNow = Number(idBox);
        doAgain = true;

        if(thePosition === "H"){
            doAgain = false;
        }

        while(doAgain){         //Gerak Ke diagonal atas kiri
            boxTriedNow -= 7;
            if(boxTriedNow > 0 && boxTriedNow <= 64){
                let theRows = findRow(boxTriedNow);
                if(theRows === "H"){
                    doAgain = false;
                }
                if(boxes[boxTriedNow - 1].firstElementChild.classList.contains('none')){
                    availableMove.push(boxes[boxTriedNow - 1]);
                }
                else{
                    let theChild = boxes[boxTriedNow - 1].firstElementChild.classList;
                    theChild = theChild.value;
                    theChild = theChild.slice(0, 5);
                    if(theChild === 'white'){
                        takeableSquare.push(boxes[boxTriedNow - 1]);
                        doAgain = false;
                    }
                    else{
                        doAgain = false;
                    }
                }
            }
            else{
                doAgain = false;
            }
        }

        doAgain = true;
        boxTriedNow = Number(idBox);            //Gerak ke kiri
        if(thePosition === "H"){
            doAgain = false;
        }

        while(doAgain){         //Gerak Ke diagonal atas kiri
            boxTriedNow += 9;
            if(boxTriedNow > 0 && boxTriedNow <= 64){
                let theRows = findRow(boxTriedNow);
                if(theRows === "H"){
                    doAgain = false;
                }
                if(boxes[boxTriedNow - 1].firstElementChild.classList.contains('none')){
                    availableMove.push(boxes[boxTriedNow - 1]);
                }
                else{
                    let theChild = boxes[boxTriedNow - 1].firstElementChild.classList;
                    theChild = theChild.value;
                    theChild = theChild.slice(0, 5);
                    if(theChild === 'white'){
                        takeableSquare.push(boxes[boxTriedNow - 1]);
                        doAgain = false;
                    }
                    else{
                        doAgain = false;
                    }
                }
            }
            else{
                doAgain = false;
            }
        }

        doAgain = true;
        boxTriedNow = Number(idBox);            //Gerak ke kiri

        if(thePosition === "A"){
            doAgain = false;
        }

        while(doAgain){         //Gerak Ke diagonal atas kiri
            boxTriedNow += 7;
            if(boxTriedNow > 0 && boxTriedNow <= 64){
                let theRows = findRow(boxTriedNow);
                if(theRows === "A"){
                    doAgain = false;
                }
                if(boxes[boxTriedNow - 1].firstElementChild.classList.contains('none')){
                    availableMove.push(boxes[boxTriedNow - 1]);
                }
                else{
                    let theChild = boxes[boxTriedNow - 1].firstElementChild.classList;
                    theChild = theChild.value;
                    theChild = theChild.slice(0, 5);
                    if(theChild === 'white'){
                        takeableSquare.push(boxes[boxTriedNow - 1]);
                        doAgain = false;
                    }
                    else{
                        doAgain = false;
                    }
                }
            }
            else{
                doAgain = false;
            }
        }

        if(toggleSquare){
            for (square in availableMove){
                if(availableMove[square] !== undefined){
                    availableMove[square].classList.add('availableSquare');
                }
            }
    
            for(taked in takeableSquare){
                takeableSquare[taked].classList.add('takeable');
            }
            isCheckFunc();
            changeSquares();
        }
        else if(!toggleSquare){
            if(returnAll){
                let alls = [];
                for(index in availableMove){
                    alls.push(availableMove[index]);
                }
                for(index in takeableSquare){
                    alls.push(takeableSquare[index]);
                }
                
                return(alls);
            }
            else if(!returnAll){
                return(takeableSquare);
            }
        }
    }
}

function kingMovement(place){
    const active = place.firstElementChild;
    if(active.classList.contains('white_King') && place.classList.contains('picked') || active.classList.contains('white_King') && !toggleSquare){
        let idBox = place.id;
        idBox = idBox.slice(3);
        let availableMove = [];
        let takeableSquare = [];
        let boxTried = Number(idBox);
        let theRow = findRow(boxTried);

        boxTried++;
        if(boxTried > 0 && boxTried <= 64){//kanan
            if(theRow !== "H"){
                if(boxes[boxTried - 1].firstElementChild.classList.contains('none')){
                    availableMove.push(boxes[boxTried - 1]);
                }
                else{
                    let theChild = boxes[boxTried - 1].firstElementChild.classList;
                    theChild = theChild.value;
                    theChild = theChild.slice(0, 5);
                    if(theChild === 'black'){
                        takeableSquare.push(boxes[boxTried - 1]);
                    }
                }
            }
        }

        boxTried = Number(idBox);
        boxTried--;

        if(theRow !== "A"){
        if(boxTried > 0 && boxTried <= 64){
            if(boxes[boxTried - 1].firstElementChild.classList.contains('none')){
                availableMove.push(boxes[boxTried - 1]);
            }
            else{
                let theChild = boxes[boxTried - 1].firstElementChild.classList;
                theChild = theChild.value;
                theChild = theChild.slice(0, 5);
                if(theChild === 'black'){
                    takeableSquare.push(boxes[boxTried - 1]);
            }
            }
            }
        }
        
        boxTried = Number(idBox);
        boxTried += 8;
        if(boxTried > 0 && boxTried <= 64){
            if(boxes[boxTried - 1].firstElementChild.classList.contains('none')){
                availableMove.push(boxes[boxTried - 1]);
            }
            else{
                let theChild = boxes[boxTried - 1].firstElementChild.classList;
                theChild = theChild.value;
                theChild = theChild.slice(0, 5);
                if(theChild === 'black'){
                    takeableSquare.push(boxes[boxTried - 1]);
            }
        }
        }

        boxTried = Number(idBox);
        boxTried += 7;
        if(theRow !== "A"){
            if(boxTried > 0 && boxTried <= 64){
                if(boxes[boxTried - 1].firstElementChild.classList.contains('none')){
                    availableMove.push(boxes[boxTried - 1]);
                }
                else{
                    let theChild = boxes[boxTried - 1].firstElementChild.classList;
                    theChild = theChild.value;
                    theChild = theChild.slice(0, 5);
                    if(theChild === 'black'){
                        takeableSquare.push(boxes[boxTried - 1]);
                }
            }
            }
        }

        boxTried = Number(idBox);
        boxTried += 9;

        if(theRow !== "H"){
            if(boxTried > 0 && boxTried <= 64){
                if(boxes[boxTried - 1].firstElementChild.classList.contains('none')){
                    availableMove.push(boxes[boxTried - 1]);
                }
                else{
                    let theChild = boxes[boxTried - 1].firstElementChild.classList;
                    theChild = theChild.value;
                    theChild = theChild.slice(0, 5);
                    if(theChild === 'black'){
                        takeableSquare.push(boxes[boxTried - 1]);
                }
            }
            }   
        }

        boxTried = Number(idBox);
        boxTried -= 7;

        if(theRow !== "H"){
            if(boxTried > 0 && boxTried <= 64){
                if(boxes[boxTried - 1].firstElementChild.classList.contains('none')){
                    availableMove.push(boxes[boxTried - 1]);
                }
                else{
                    let theChild = boxes[boxTried - 1].firstElementChild.classList;
                    theChild = theChild.value;
                    theChild = theChild.slice(0, 5);
                    if(theChild === 'black'){
                        takeableSquare.push(boxes[boxTried - 1]);
                }
            }
            }   
        }

        boxTried = Number(idBox);
        boxTried -= 8;
        if(boxTried > 0 && boxTried <= 64){
            if(boxes[boxTried - 1].firstElementChild.classList.contains('none')){
                availableMove.push(boxes[boxTried - 1]);
            }
            else{
                let theChild = boxes[boxTried - 1].firstElementChild.classList;
                theChild = theChild.value;
                theChild = theChild.slice(0, 5);
                if(theChild === 'black'){
                    takeableSquare.push(boxes[boxTried - 1]);
            }
        }
        }

        boxTried = Number(idBox);
        boxTried -= 9;

        if(theRow !== "A"){
            if(boxTried > 0 && boxTried <= 64){
                if(boxes[boxTried - 1].firstElementChild.classList.contains('none')){
                    availableMove.push(boxes[boxTried - 1]);
                }
                else{
                    let theChild = boxes[boxTried - 1].firstElementChild.classList;
                    theChild = theChild.value;
                    theChild = theChild.slice(0, 5);
                    if(theChild === 'black'){
                        takeableSquare.push(boxes[boxTried - 1]);
                }
            }
            }   
        }

        let castleMove = true;
        for(box in boxes){
            if(boxes[box].classList.contains('checks')){
                if(boxes[box].firstElementChild.classList.contains('white_King')){
                    castleMove = false;
                }
            }
        }

        if(castleMove){
            if(boxes[62].firstElementChild.classList.contains('none') && boxes[61].firstElementChild.classList.contains('none')){
                if(!whiteKingMoved && !whiteRockRightMoved){
                    availableMove.push(boxes[62]);
                }
            }
    
            if(boxes[57].firstElementChild.classList.contains('none') && boxes[58].firstElementChild.classList.contains('none') && boxes[59].firstElementChild.classList.contains('none')){
                if(!whiteKingMoved && !whiteRockLeftMoved){
                    availableMove.push(boxes[58]);
                }
            }
        }

        if(toggleSquare){
            for (square in availableMove){
                if(availableMove[square] !== undefined){
                    availableMove[square].classList.toggle('availableSquare');
                }
            }
    
            for(taked in takeableSquare){
                takeableSquare[taked].classList.toggle('takeable');
            }
            isCheckFunc();
            changeSquares();
        }
        else if(!toggleSquare){
            if(returnAll){
                let alls = [];
                for(index in availableMove){
                    if(availableMove[index].id == 'box63'){
                        delete availableMove[index];
                    }
                    else if(availableMove[index].id == 'box59'){
                        delete availableMove[index];
                    }
                    alls.push(availableMove[index]);
                }
                for(index in takeableSquare){
                    alls.push(takeableSquare[index]);
                }
                
                return(alls);
            }
            else{
                return(takeableSquare);
            }
        }
    }
    if(active.classList.contains('black_King') && place.classList.contains('picked') || active.classList.contains('black_King') && !toggleSquare){
        let idBox = place.id;
        idBox = idBox.slice(3);
        let availableMove = [];
        let takeableSquare = [];
        let boxTried = Number(idBox);
        let theRow = findRow(boxTried);

        boxTried++;
        if(theRow !== "H"){
            if(boxTried > 0 && boxTried <= 64){
                if(boxes[boxTried - 1].firstElementChild.classList.contains('none')){
                    availableMove.push(boxes[boxTried - 1]);
                }
                else{
                    let theChild = boxes[boxTried - 1].firstElementChild.classList;
                    theChild = theChild.value;
                    theChild = theChild.slice(0, 5);
                    if(theChild === 'white'){
                        takeableSquare.push(boxes[boxTried - 1]);
                }
            }
            }
        }


        boxTried = Number(idBox);
        boxTried--;
        if(theRow !== "A"){
            if(boxTried > 0 && boxTried <= 64){
                if(boxes[boxTried - 1].firstElementChild.classList.contains('none')){
                    availableMove.push(boxes[boxTried - 1]);
                }
                else{
                    let theChild = boxes[boxTried - 1].firstElementChild.classList;
                    theChild = theChild.value;
                    theChild = theChild.slice(0, 5);
                    if(theChild === 'white'){
                        takeableSquare.push(boxes[boxTried - 1]);
                }
            }
            }
        }
        
        boxTried = Number(idBox);
        boxTried += 8;
        if(boxTried > 0 && boxTried <= 64){
            if(boxes[boxTried - 1].firstElementChild.classList.contains('none')){
                availableMove.push(boxes[boxTried - 1]);
            }
            else{
                let theChild = boxes[boxTried - 1].firstElementChild.classList;
                theChild = theChild.value;
                theChild = theChild.slice(0, 5);
                if(theChild === 'white'){
                    takeableSquare.push(boxes[boxTried - 1]);
            }
        }
        }

        boxTried = Number(idBox);
        boxTried += 7;
        if(theRow !== "A"){
            if(boxTried > 0 && boxTried <= 64){
                if(boxes[boxTried - 1].firstElementChild.classList.contains('none')){
                    availableMove.push(boxes[boxTried - 1]);
                }
                else{
                    let theChild = boxes[boxTried - 1].firstElementChild.classList;
                    theChild = theChild.value;
                    theChild = theChild.slice(0, 5);
                    if(theChild === 'white'){
                        takeableSquare.push(boxes[boxTried - 1]);
                }
            }
            }
        }

        boxTried = Number(idBox);
        boxTried += 9;
        if(theRow !== "H"){
            if(boxTried > 0 && boxTried <= 64){
                if(boxes[boxTried - 1].firstElementChild.classList.contains('none')){
                    availableMove.push(boxes[boxTried - 1]);
                }
                else{
                    let theChild = boxes[boxTried - 1].firstElementChild.classList;
                    theChild = theChild.value;
                    theChild = theChild.slice(0, 5);
                    if(theChild === 'white'){
                        takeableSquare.push(boxes[boxTried - 1]);
                }
            }
            }
        }

        boxTried = Number(idBox);
        boxTried -= 7;
        if(theRow !== "H"){
            if(boxTried > 0 && boxTried <= 64){
                if(boxes[boxTried - 1].firstElementChild.classList.contains('none')){
                    availableMove.push(boxes[boxTried - 1]);
                }
                else{
                    let theChild = boxes[boxTried - 1].firstElementChild.classList;
                    theChild = theChild.value;
                    theChild = theChild.slice(0, 5);
                    if(theChild === 'white'){
                        takeableSquare.push(boxes[boxTried - 1]);
                }
            }
            }
        }

        boxTried = Number(idBox);
        boxTried -= 8;
        if(boxTried > 0 && boxTried <= 64){
            if(boxes[boxTried - 1].firstElementChild.classList.contains('none')){
                availableMove.push(boxes[boxTried - 1]);
            }
            else{
                let theChild = boxes[boxTried - 1].firstElementChild.classList;
                theChild = theChild.value;
                theChild = theChild.slice(0, 5);
                if(theChild === 'white'){
                    takeableSquare.push(boxes[boxTried - 1]);
            }
        }
        }

        boxTried = Number(idBox);
        boxTried -= 9;
        if(theRow !== "A"){
            if(boxTried > 0 && boxTried <= 64){
                if(boxes[boxTried - 1].firstElementChild.classList.contains('none')){
                    availableMove.push(boxes[boxTried - 1]);
                }
                else{
                    let theChild = boxes[boxTried - 1].firstElementChild.classList;
                    theChild = theChild.value;
                    theChild = theChild.slice(0, 5);
                    if(theChild === 'white'){
                        takeableSquare.push(boxes[boxTried - 1]);
                }
            }
            }
        }

        let castleMove = true;
        for(box in boxes){
            if(boxes[box].classList.contains('checks')){
                if(boxes[box].firstElementChild.classList.contains('black_King')){
                    castleMove = false;
                }
            }
        }

        if(castleMove){
            if(boxes[6].firstElementChild.classList.contains('none') && boxes[5].firstElementChild.classList.contains('none')){
                if(!blackKingMoved && !blackRockRightMoved){
                    availableMove.push(boxes[6]);
                }
            }
    
            if(boxes[1].firstElementChild.classList.contains('none') && boxes[2].firstElementChild.classList.contains('none') && boxes[3].firstElementChild.classList.contains('none')){
                if(!blackKingMoved && !blackRockLeftMoved){
                    availableMove.push(boxes[2]);
                }
            }
        }


        if(toggleSquare){
            for (square in availableMove){
                if(availableMove[square] !== undefined){
                    availableMove[square].classList.toggle('availableSquare');
                }
            }
    
            for(taked in takeableSquare){
                takeableSquare[taked].classList.toggle('takeable');
            }
            isCheckFunc();
            changeSquares();
        }
        else if(!toggleSquare){
            if(returnAll){
                let alls = [];
                for(index in availableMove){
                    if(availableMove[index].id == 'box7'){
                        delete availableMove[index];
                    }
                    else if(availableMove[index].id == 'box3'){
                        delete availableMove[index];
                    }
                    alls.push(availableMove[index]);
                }
                for(index in takeableSquare){
                    alls.push(takeableSquare[index]);
                }

                return(alls);
            }
            else{
                return(takeableSquare);
            }
        }
    }
}

function identifies(){                      //Event Listener awal
    for(inside in allOccupiedSquare){
        let squareFull = (allOccupiedSquare[inside]);
        squareFull.addEventListener('click', pickedSquare);
    }
    for (index in boxes){
        const tries = boxes[index];
        const active = tries.firstElementChild;
        if(active.classList.contains('none')){
            tries.addEventListener('click', togglePickedSquare);
        }
    }
}
identifies();

function togglePickedSquare(){              //Fungsi untuk kotak tanpa bidak!!!
    if(!event.currentTarget.classList.contains("availableSquare")){
        console.log('do function 1');
        let indexes = 1;
        let contents;
        while(indexes <= 64){
            if(boxes[indexes-1].classList.contains('picked')){
                contents = boxes[indexes-1];
                contents.classList.toggle('picked');
            }
            indexes++;
        }
        for(index in boxes){        //Remove All AvailSquare Class
            let box = boxes[index];
            if(box.classList.contains('availableSquare')){
                box.classList.remove('availableSquare');
                box.removeEventListener('click', clickFunc);
                box.addEventListener('click', togglePickedSquare);
            }
            if(box.classList.contains('takeable')){
                box.removeEventListener('click', takesFunc);
                box.addEventListener('click', pickedSquare);
                box.classList.remove('takeable');
            }
        }
    }
}

function pickedSquare(){                    //Fungsi untuk kotak dengan bidak!!!
    if(!event.currentTarget.classList.contains("none")){
        console.log('do function 2');
        let boxNow = event.currentTarget;
        let isDouble = false;
        let indexes = 1;
        let contents;
        while(indexes <= 64){
            if(boxes[indexes-1].classList.contains('picked')){
                contents = boxes[indexes-1];
                isDouble = true;
            }
            indexes++;
        }
        if(isDouble === false){
            boxNow.classList.toggle("picked");
        }
        else if(boxNow === contents){
            boxNow.classList.toggle("picked");
        }
        else{
            boxNow.classList.toggle("picked");
            contents.classList.toggle("picked");
        }
        findActive(boxNow);
    }
}

function changeSquares(){
    for (index in boxes){
        const tries = boxes[index];
        if(tries.classList.contains('availableSquare')){
            tries.addEventListener('click', clickFunc);
            tries.removeEventListener('click', togglePickedSquare);
        }
        else if(tries.classList.contains('takeable')){
            tries.removeEventListener('click', pickedSquare);
            tries.addEventListener('click', takesFunc);
        }
    }
}

function takesFunc(){                       //Fungsi Makan Bidak (TakeableSquare)
    if(event.currentTarget.classList.contains('takeable')){
        for(index in boxes){                //Remove All AvailSquare Class
            let box = boxes[index];
            if(box.classList.contains('availableSquare')){
                box.classList.remove('availableSquare');
                box.removeEventListener('click', clickFunc);
                box.addEventListener('click', togglePickedSquare);
            }
            if(box.classList.contains('takeable')){
                box.removeEventListener('click', takesFunc);
                box.addEventListener('click', pickedSquare);
                box.classList.remove('takeable');
            }
        }
        let boxBefore;                      //Kotak lokasi bidak sebelumnya
        let boxAfter;                       //Kotak bidak akan berpindah
        let execute = true;
        console.log('do function 4');
        for(box in boxes){
            if(boxes[box].classList.contains('availableSquare')){
                boxes[box].classList.toggle('availableSquare');
            }
            else if(boxes[box].classList.contains('picked')){
                boxes[box].classList.toggle('picked');
                boxBefore = boxes[box];
            }
            else if(boxes[box].classList.contains('takeable')){
                boxes[box].classList.remove('takeable');
            }
        }
        boxAfter = event.currentTarget;
        let boxBeforeChild = boxBefore.firstElementChild.classList;
        let boxAfterChild = boxAfter.firstElementChild.classList;

        if(boxBeforeChild == 'black_Pawn' && enPassant){            //Fungsi En Passant!
            if(boxAfterChild == 'none'){
                let thePawn = boxAfter.id;
                thePawn = thePawn.slice(3);
                thePawn = Number(thePawn) - 9;
                thePawn = boxes[thePawn];
                thePawn.firstElementChild.classList.remove('white_Pawn');
                thePawn.firstElementChild.classList.add('none');
                thePawn.removeEventListener('click', pickedSquare);
                thePawn.addEventListener('click', togglePickedSquare);
            }
        }
        else if(boxBeforeChild == 'white_Pawn' && enPassant){
            if(boxAfterChild == 'none'){
                let thePawn = boxAfter.id;
                thePawn = thePawn.slice(3);
                thePawn = Number(thePawn) + 7;
                thePawn = boxes[thePawn];
                thePawn.firstElementChild.classList.remove('black_Pawn');
                thePawn.firstElementChild.classList.add('none');
                thePawn.removeEventListener('click', pickedSquare);
                thePawn.addEventListener('click', togglePickedSquare);
            }
        }
        else if(boxBeforeChild == 'white_Pawn'){        //Mengetahui Pion yang bergerak
            let afterId = Number(boxAfter.id.slice(3));
            if(afterId > 0 && afterId <= 8){
                execute = false;
                boxAfter.firstElementChild.classList.remove(boxAfterChild);
                boxAfter.firstElementChild.classList.add('white_Queen');
        
                boxAfter.removeEventListener('click', takesFunc);
                boxAfter.addEventListener('click', pickedSquare);
        
                boxBeforeChild.remove(boxBeforeChild);
                boxBeforeChild.add('none');
        
                boxBefore.removeEventListener('click', pickedSquare);
                boxBefore.addEventListener('click', togglePickedSquare);
            }
        }
        else if(boxBeforeChild == 'black_Pawn'){        //Mengetahui Pion yang bergerak
            let afterId = Number(boxAfter.id.slice(3));
            if(afterId > 56 && afterId <= 64){
                execute = false;
                boxAfter.firstElementChild.classList.remove(boxAfterChild);
                boxAfter.firstElementChild.classList.add('black_Queen');
        
                boxAfter.removeEventListener('click', takesFunc);
                boxAfter.addEventListener('click', pickedSquare);
        
                boxBeforeChild.remove(boxBeforeChild);
                boxBeforeChild.add('none');
        
                boxBefore.removeEventListener('click', pickedSquare);
                boxBefore.addEventListener('click', togglePickedSquare);
            }
        }

        enPassant = false;

        if(execute){
            boxAfter.firstElementChild.classList.remove(boxAfterChild);
            boxAfter.firstElementChild.classList.add(boxBeforeChild);
    
            boxAfter.removeEventListener('click', takesFunc);
            boxAfter.addEventListener('click', pickedSquare);
    
            boxBeforeChild.remove(boxBeforeChild);
            boxBeforeChild.add('none');
    
            boxBefore.removeEventListener('click', pickedSquare);
            boxBefore.addEventListener('click', togglePickedSquare);
        }

        if(isWhiteMove){
            isWhiteMove = false;
        }
        else{
            isWhiteMove = true;
        }
        doIt = true;
        pieces();
    }
}

function clickFunc(){                       //Memindahkan bidak (Fungsi dari kotak availableSquare)
    if(event.currentTarget.classList.contains('availableSquare')){
        let boxBefore;
        let boxAfter;
        let execute = true;
        let skipEnpassant = true;
        console.log('do function 3');
        for(box in boxes){                              //Mengatur Event Listener
            if(boxes[box].classList.contains('availableSquare')){
                boxes[box].classList.toggle('availableSquare');
                boxes[box].removeEventListener('click', clickFunc);
                boxes[box].addEventListener('click', togglePickedSquare);
            }
            else if(boxes[box].classList.contains('picked')){
                boxes[box].classList.toggle('picked');
                boxBefore = boxes[box];
            }
            else if(boxes[box].classList.contains('takeable')){
                boxes[box].classList.remove('takeable');
                boxes[box].removeEventListener('click', takesFunc);
                boxes[box].addEventListener('click', pickedSquare);
            }
        }
        boxAfter = event.currentTarget;
        let boxBeforeChild = boxBefore.firstElementChild.classList;

        if(boxBeforeChild == 'white_Rock'){             //Mengetahui benteng yang bergerak
            let theId;
            if(boxBefore.firstElementChild.classList.contains('white_Rock')){
                theId = boxBefore.id;
                theId = theId.slice(3);
                theId = Number(theId);
                if(theId === 64){
                    whiteRockRightMoved = true;
                }
                else if(theId === 57){
                    whiteRockLeftMoved = true;
                }
            }
        }
        else if(boxBeforeChild == 'black_Rock'){        //Mengetahui benteng yang bergerak
            let theId;
            if(boxBefore.firstElementChild.classList.contains('black_Rock')){
                theId = boxBefore.id;
                theId = theId.slice(3);
                theId = Number(theId);
                if(theId === 8){
                    blackRockRightMoved = true;
                }
                else if(theId === 1){
                    blackRockLeftMoved = true;
                }
            }
        }
        else if(boxBeforeChild == 'white_King'){        //Mengetahui raja yang bergerak
            if(!whiteKingMoved){
                if(boxAfter.id == 'box63'){
                    boxBefore.firstElementChild.classList.remove('white_King');
                    boxBefore.firstElementChild.classList.add("none");
                    boxBefore.removeEventListener('click', pickedSquare);
                    boxBefore.addEventListener('click', togglePickedSquare);

                    boxAfter.firstElementChild.classList.remove('none');
                    boxAfter.firstElementChild.classList.add('white_King');
                    boxAfter.removeEventListener('click', togglePickedSquare);
                    boxAfter.addEventListener('click', pickedSquare);

                    let rockBefore = boxes[63];
                    rockBefore.firstElementChild.classList.remove('white_Rock');
                    rockBefore.firstElementChild.classList.add('none');
                    rockBefore.removeEventListener('click', pickedSquare);
                    rockBefore.addEventListener('click', togglePickedSquare);
                    execute = false;

                    let rockAfter = boxes[61];
                    rockAfter.firstElementChild.classList.remove('none');
                    rockAfter.firstElementChild.classList.add('white_Rock');
                    rockAfter.removeEventListener('click', togglePickedSquare);
                    rockAfter.addEventListener('click', pickedSquare);
                }
                else if(boxAfter.id == 'box59'){
                    boxBefore.firstElementChild.classList.remove('white_King');
                    boxBefore.firstElementChild.classList.add("none");
                    boxBefore.removeEventListener('click', pickedSquare);
                    boxBefore.addEventListener('click', togglePickedSquare);

                    boxAfter.firstElementChild.classList.remove('none');
                    boxAfter.firstElementChild.classList.add('white_King');
                    boxAfter.removeEventListener('click', togglePickedSquare);
                    boxAfter.addEventListener('click', pickedSquare);

                    let rockBefore = boxes[56];
                    rockBefore.firstElementChild.classList.remove('white_Rock');
                    rockBefore.firstElementChild.classList.add('none');
                    rockBefore.removeEventListener('click', pickedSquare);
                    rockBefore.addEventListener('click', togglePickedSquare);
                    execute = false;

                    let rockAfter = boxes[59];
                    rockAfter.firstElementChild.classList.remove('none');
                    rockAfter.firstElementChild.classList.add('white_Rock');
                    rockAfter.removeEventListener('click', togglePickedSquare);
                    rockAfter.addEventListener('click', pickedSquare);
                }
            }
            whiteKingMoved = true;
        }
        else if(boxBeforeChild == 'black_King'){        //Mengetahui raja yang bergerak
            if(!blackKingMoved){
                if(boxAfter.id == 'box3'){
                    boxBefore.firstElementChild.classList.remove('black_King');
                    boxBefore.firstElementChild.classList.add("none");
                    boxBefore.removeEventListener('click', pickedSquare);
                    boxBefore.addEventListener('click', togglePickedSquare);

                    boxAfter.firstElementChild.classList.remove('none');
                    boxAfter.firstElementChild.classList.add('black_King');
                    boxAfter.removeEventListener('click', togglePickedSquare);
                    boxAfter.addEventListener('click', pickedSquare);

                    let rockBefore = boxes[0];
                    rockBefore.firstElementChild.classList.remove('black_Rock');
                    rockBefore.firstElementChild.classList.add('none');
                    rockBefore.removeEventListener('click', pickedSquare);
                    rockBefore.addEventListener('click', togglePickedSquare);
                    execute = false;

                    let rockAfter = boxes[3];
                    rockAfter.firstElementChild.classList.remove('none');
                    rockAfter.firstElementChild.classList.add('black_Rock');
                    rockAfter.removeEventListener('click', togglePickedSquare);
                    rockAfter.addEventListener('click', pickedSquare);
                }
                else if(boxAfter.id == 'box7'){
                    boxBefore.firstElementChild.classList.remove('black_King');
                    boxBefore.firstElementChild.classList.add("none");
                    boxBefore.removeEventListener('click', pickedSquare);
                    boxBefore.addEventListener('click', togglePickedSquare);

                    boxAfter.firstElementChild.classList.remove('none');
                    boxAfter.firstElementChild.classList.add('black_King');
                    boxAfter.removeEventListener('click', togglePickedSquare);
                    boxAfter.addEventListener('click', pickedSquare);

                    let rockBefore = boxes[7];
                    rockBefore.firstElementChild.classList.remove('black_Rock');
                    rockBefore.firstElementChild.classList.add('none');
                    rockBefore.removeEventListener('click', pickedSquare);
                    rockBefore.addEventListener('click', togglePickedSquare);
                    execute = false;

                    let rockAfter = boxes[5];
                    rockAfter.firstElementChild.classList.remove('none');
                    rockAfter.firstElementChild.classList.add('black_Rock');
                    rockAfter.removeEventListener('click', togglePickedSquare);
                    rockAfter.addEventListener('click', pickedSquare);
                }
            }
            blackKingMoved = true;
        }
        else if(boxBeforeChild == 'white_Pawn'){        //Mengetahui Pion yang bergerak
            let beforeId = Number(boxBefore.id.slice(3));
            let afterId = Number(boxAfter.id.slice(3));
            if(beforeId - afterId === 16){
                enPassant = true;
                squareEnpassant = boxAfter;
                skipEnpassant = false;
            }
            else if(afterId > 0 && afterId <= 8){       //Promosi Menteri
                execute = false;
                boxAfter.firstElementChild.classList.remove('none');
                boxAfter.firstElementChild.classList.add('white_Queen');
                
                boxAfter.removeEventListener('click', togglePickedSquare);
                boxAfter.addEventListener('click', pickedSquare);
        
                boxBefore.firstElementChild.classList.remove(boxBeforeChild);
                boxBefore.firstElementChild.classList.add("none");
        
                boxBefore.removeEventListener('click', pickedSquare);
                boxBefore.addEventListener('click', togglePickedSquare);
            }
        }
        else if(boxBeforeChild == 'black_Pawn'){        //Mengetahui Pion yang bergerak
            let beforeId = Number(boxBefore.id.slice(3));
            let afterId = Number(boxAfter.id.slice(3));
            if(afterId - beforeId === 16){
                enPassant = true;
                squareEnpassant = boxAfter;
                skipEnpassant = false;
            }
            else if(afterId > 56 && afterId <= 64){       //Promosi Menteri
                execute = false;
                boxAfter.firstElementChild.classList.remove('none');
                boxAfter.firstElementChild.classList.add('black_Queen');
                
                boxAfter.removeEventListener('click', togglePickedSquare);
                boxAfter.addEventListener('click', pickedSquare);
        
                boxBefore.firstElementChild.classList.remove(boxBeforeChild);
                boxBefore.firstElementChild.classList.add("none");
        
                boxBefore.removeEventListener('click', pickedSquare);
                boxBefore.addEventListener('click', togglePickedSquare);
            }
        }
        if(skipEnpassant){
            enPassant = false;
        }
        if(execute){
            boxAfter.firstElementChild.classList.remove('none');
            boxAfter.firstElementChild.classList.add(boxBeforeChild);
            
            boxAfter.removeEventListener('click', togglePickedSquare);
            boxAfter.addEventListener('click', pickedSquare);
    
            boxBefore.firstElementChild.classList.remove(boxBeforeChild);
            boxBefore.firstElementChild.classList.add("none");
    
            boxBefore.removeEventListener('click', pickedSquare);
            boxBefore.addEventListener('click', togglePickedSquare);
        }

        if(isWhiteMove){
            isWhiteMove = false;
        }
        else{
            isWhiteMove = true;
        }
        doIt = true;
        pieces();
    }
}

function findCheck(){                       //Mengetahui skak raja  RETURN APAKAH ADA SKAK ATAU TIDAK
    let theCapturableSquare = [];
    let execute = true;
    takeableRock = [];
    function searchTheCaptured(Square, active){
        toggleSquare = false;
        returnAll = false;
        switch(true){
            case active.classList.contains('white_Rock'): {
                let theTries = rockMovement(Square);
                if(theTries.length > 0){
                    for(square in theTries){
                        theCapturableSquare.push(theTries[square]);
                    }
                }
                break;
            }
            case active.classList.contains('black_Rock'): {
                let theTries = rockMovement(Square);
                if(theTries.length > 0){
                    for(square in theTries){
                        theCapturableSquare.push(theTries[square]);
                    }
                }
                break;
            }
            case active.classList.contains('white_Pawn'): {
                let theTries = pawnMovement(Square);
                if(theTries.length > 0){
                    for(square in theTries){
                        theCapturableSquare.push(theTries[square]);
                    }
                }
                break;
            }
            case active.classList.contains('black_Pawn'): {
                let theTries = pawnMovement(Square);
                if(theTries.length > 0){
                    for(square in theTries){
                        theCapturableSquare.push(theTries[square]);
                    }
                }
                break;
            }
            case active.classList.contains('black_Bishop'): {
                let theTries = bishopMovement(Square);
                if(theTries.length > 0){
                    for(square in theTries){
                        theCapturableSquare.push(theTries[square]);
                    }
                }
                break;
            }
            case active.classList.contains('white_Bishop'): {
                let theTries = bishopMovement(Square);
                if(theTries.length > 0){
                    for(square in theTries){
                        theCapturableSquare.push(theTries[square]);
                    }
                }
                break;
            }
            case active.classList.contains('white_Queen'): {
                let theTries = queenMovement(Square);
                if(theTries.length > 0){
                    for(square in theTries){
                        theCapturableSquare.push(theTries[square]);
                    }
                }
                break;
            }
            case active.classList.contains('black_Queen'): {
                let theTries = queenMovement(Square);
                if(theTries.length > 0){
                    for(square in theTries){
                        theCapturableSquare.push(theTries[square]);
                    }
                }
                break;
            }
            case active.classList.contains('white_King'): {
                let theTries = kingMovement(Square);
                if(theTries.length > 0){
                    for(square in theTries){
                        theCapturableSquare.push(theTries[square]);
                    }
                }
                break;
            }
            case active.classList.contains('black_King'): {
                let theTries = kingMovement(Square);
                if(theTries.length > 0){
                    for(square in theTries){
                        theCapturableSquare.push(theTries[square]);
                    }
                }
                break;
            }
            case active.classList.contains('white_Knight'): {
                let theTries = knightMovement(Square);
                if(theTries.length > 0){
                    for(square in theTries){
                        theCapturableSquare.push(theTries[square]);
                    }
                }
                break;
            }
            case active.classList.contains('black_Knight'): {
                let theTries = knightMovement(Square);
                if(theTries.length > 0){
                    for(square in theTries){
                        theCapturableSquare.push(theTries[square]);
                    }
                }
                break;
            }
            default:
                break;
            
        }
    }
    for (index in allWhitePieceSquare){     //Buat bidak putih memakan bidak hitam
        let thePiece = allWhitePieceSquare[index];
        searchTheCaptured(thePiece, thePiece.firstElementChild);
    }
    if(theCapturableSquare.length !== 0){           //Fungsi Bidak Putih
        for(square in theCapturableSquare){
            let theSquare = theCapturableSquare[square];
            if(theSquare.firstElementChild.classList.contains('black_King')){
                if(doIt){
                    theSquare.classList.add('checks');
                    isCheckMateFunc('black');
                    for(box in boxes){
                        if(boxes[box].classList.contains('checks') && boxes[box].firstElementChild.classList.contains('white_King')){
                            boxes[box].classList.remove('checks');
                        }
                    }
                }
                if(!isWhiteMove){
                    isblackCheck = true;
                    isChecks = true;
                    execute = false;
                }
            }
            else if(theSquare.firstElementChild.classList.contains('black_Rock')){
                takeableRock.push(theSquare);
            }
        }
    }
    for (index in allBlackPieceSquare){     //Buat bidak hitam
        let thePiece = allBlackPieceSquare[index];
        searchTheCaptured(thePiece, thePiece.firstElementChild);
    }
    if(theCapturableSquare.length !== 0){           //Fungsi Bidak hitam
        for(square in theCapturableSquare){
            let theSquare = theCapturableSquare[square];
            if(theSquare.firstElementChild.classList.contains('white_King')){
                if(doIt){
                    theSquare.classList.add('checks');
                    isCheckMateFunc('white');
                    for(box in boxes){
                        if(boxes[box].classList.contains('checks') && boxes[box].firstElementChild.classList.contains('black_King')){
                            boxes[box].classList.remove('checks');
                        }
                    }
                }
                if(isWhiteMove){
                    iswhiteCheck = true;
                    isChecks = true;
                    execute = false;
                }
            }
            else if(theSquare.firstElementChild.classList.contains('white_Rock')){
                takeableRock.push(theSquare);
            }
        }
    }
    if(execute){
        isChecks = false;
        isblackCheck = false;
        iswhiteCheck = false;
    }
    if(!isChecks && !onlyCheck){
        for(box in boxes){
            iswhiteCheck = false;
            isblackCheck = false;
            if(boxes[box].classList.contains('checks')){
                boxes[box].classList.remove('checks');
            }
        }
        isStalemateFunc();
    }
}

async function isCheckFunc(){           //Gerak menghindari skak
    let activeSquare;
    let availableSquare = [];
    let takeableSquare = [];
    let allAvailSquare = [];
    let whiteChecked = false;
    let blackChecked = false;

    let nowWhiteCheck = false;
    let nowBlackCheck = false;
    onlyCheck = true;

    for(box in boxes){
        if(boxes[box].classList.contains('picked')){
            activeSquare = boxes[box];
        }
        else if(boxes[box].classList.contains('availableSquare')){
            availableSquare.push(boxes[box]);
            allAvailSquare.push(boxes[box]);
        }
        else if(boxes[box].classList.contains('takeable')){
            takeableSquare.push(boxes[box]);
            allAvailSquare.push(boxes[box]);
        }
    }

    let theActivePiece = activeSquare.firstElementChild.classList.value;

    activeSquare.firstElementChild.classList.remove(theActivePiece);
    activeSquare.firstElementChild.classList.add('none');

    for(indexes in availableSquare){
        nowBlackCheck = false;
        nowWhiteCheck = false;
        doIt = false;
        let theSquare = availableSquare[indexes];
        theSquare.firstElementChild.classList.remove('none');
        theSquare.firstElementChild.classList.add(theActivePiece);

        pieces();

        if(isChecks){
            let theColour = theActivePiece.slice(0, 5);
            if(iswhiteCheck){
                nowWhiteCheck = true;
                whiteChecked = true;
            }
            else if(isblackCheck){
                blackChecked = true;
                nowBlackCheck = true;
            }

            if(theColour === 'white' && nowWhiteCheck){
                if(theSquare.classList.contains('availableSquare')){
                    theSquare.classList.remove('availableSquare');
                }
                else if(theSquare.classList.contains('takeable')){
                    theSquare.classList.remove('takeable');
                }
            }
            else if(theColour === 'black' && nowBlackCheck){
                if(theSquare.classList.contains('availableSquare')){
                    theSquare.classList.remove('availableSquare');
                }
                else if(theSquare.classList.contains('takeable')){
                    theSquare.classList.remove('takeable');
                }
            }

        }

        theSquare.firstElementChild.classList.remove(theActivePiece);
        theSquare.firstElementChild.classList.add('none');
    }

    activeSquare.firstElementChild.classList.remove('none');
    activeSquare.firstElementChild.classList.add(theActivePiece);
    pieces();

    for(indexes in takeableSquare){
        nowBlackCheck = false;
        nowWhiteCheck = false;
        doIt = false;
        let theSquare = takeableSquare[indexes];
        let takedPiece = theSquare.firstElementChild.classList.value;
        activeSquare.firstElementChild.classList.remove(theActivePiece);
        activeSquare.firstElementChild.classList.add('none');

        theSquare.firstElementChild.classList.remove(takedPiece);
        theSquare.firstElementChild.classList.add(theActivePiece);

        pieces();

        if(isChecks){
            let theColour = theActivePiece.slice(0, 5);
            if(iswhiteCheck){
                nowWhiteCheck = true;
                whiteChecked = true;
            }
            else if(isblackCheck){
                blackChecked = true;
                nowBlackCheck = true;
            }

            if(theColour === 'white' && nowWhiteCheck){
                if(theSquare.classList.contains('availableSquare')){
                    theSquare.classList.remove('availableSquare');
                }
                else if(theSquare.classList.contains('takeable')){
                    theSquare.classList.remove('takeable');
                }
            }
            else if(theColour === 'black' && nowBlackCheck){
                if(theSquare.classList.contains('availableSquare')){
                    theSquare.classList.remove('availableSquare');
                }
                else if(theSquare.classList.contains('takeable')){
                    theSquare.classList.remove('takeable');
                }
            }
        }

        theSquare.firstElementChild.classList.remove(theActivePiece);
        theSquare.firstElementChild.classList.add(takedPiece);
    }
    activeSquare.firstElementChild.classList.remove('none');
    activeSquare.firstElementChild.classList.add(theActivePiece);
    pieces();

    if(activeSquare.firstElementChild.classList.contains('white_King') && !whiteKingMoved){
        for(indexes in availableSquare){
            if(availableSquare[indexes].id == 'box63' || availableSquare[indexes].id == 'box59'){
                if(!whiteKingMoved && !whiteRockRightMoved && availableSquare[indexes].id == 'box63'){ //putih rokade pendek
                    let theSquares = availableSquare[indexes];
                    activeSquare.firstElementChild.classList.remove('white_King');
                    activeSquare.firstElementChild.classList.add("none");

                    theSquares.firstElementChild.classList.remove('none');
                    theSquares.firstElementChild.classList.add('white_King');

                    let rockBefore = boxes[63];
                    rockBefore.firstElementChild.classList.remove('white_Rock');
                    rockBefore.firstElementChild.classList.add('none');

                    let rockAfter = boxes[61];
                    rockAfter.firstElementChild.classList.remove('none');
                    rockAfter.firstElementChild.classList.add('white_Rock');

                    pieces();

                    activeSquare.firstElementChild.classList.add('white_King');
                    activeSquare.firstElementChild.classList.remove("none");

                    theSquares.firstElementChild.classList.add('none');
                    theSquares.firstElementChild.classList.remove('white_King');

                    rockBefore.firstElementChild.classList.add('white_Rock');
                    rockBefore.firstElementChild.classList.remove('none');

                    rockAfter.firstElementChild.classList.add('none');
                    rockAfter.firstElementChild.classList.remove('white_Rock');

                    for(square in takeableRock){
                        if(takeableRock[square].id === 'box62'){
                            theSquares.classList.remove('availableSquare');
                        }
                    }
                }
                else if(!whiteKingMoved && !whiteRockLeftMoved && availableSquare[indexes].id == 'box59'){
                    let theSquares = availableSquare[indexes];
                    activeSquare.firstElementChild.classList.remove('white_King');
                    activeSquare.firstElementChild.classList.add("none");
    
                    theSquares.firstElementChild.classList.remove('none');
                    theSquares.firstElementChild.classList.add('white_King');
    
                    let rockBefore = boxes[56];
                    rockBefore.firstElementChild.classList.remove('white_Rock');
                    rockBefore.firstElementChild.classList.add('none');
    
                    let rockAfter = boxes[59];
                    rockAfter.firstElementChild.classList.remove('none');
                    rockAfter.firstElementChild.classList.add('white_Rock');
    
                    pieces();
    
                    activeSquare.firstElementChild.classList.add('white_King');
                    activeSquare.firstElementChild.classList.remove("none");
    
                    theSquares.firstElementChild.classList.add('none');
                    theSquares.firstElementChild.classList.remove('white_King');
    
                    rockBefore.firstElementChild.classList.add('white_Rock');
                    rockBefore.firstElementChild.classList.remove('none');
    
                    rockAfter.firstElementChild.classList.add('none');
                    rockAfter.firstElementChild.classList.remove('white_Rock');
    
                    for(square in takeableRock){
                        if(takeableRock[square].id === 'box60'){
                            theSquares.classList.remove('availableSquare');
                        }
                    }
                }
            }
        }
    }
    else if(activeSquare.firstElementChild.classList.contains('black_King') && !blackKingMoved){
        for(indexes in availableSquare){
            if(availableSquare[indexes].id == 'box3' || availableSquare[indexes].id == 'box7'){
                if(!blackKingMoved && !blackRockLeftMoved && availableSquare[indexes].id == 'box3'){ //putih rokade pendek
                    let theSquares = availableSquare[indexes];
                    activeSquare.firstElementChild.classList.remove('black_King');
                    activeSquare.firstElementChild.classList.add("none");

                    theSquares.firstElementChild.classList.remove('none');
                    theSquares.firstElementChild.classList.add('black_King');

                    let rockBefore = boxes[0];
                    rockBefore.firstElementChild.classList.remove('black_Rock');
                    rockBefore.firstElementChild.classList.add('none');

                    let rockAfter = boxes[3];
                    rockAfter.firstElementChild.classList.remove('none');
                    rockAfter.firstElementChild.classList.add('black_Rock');

                    pieces();

                    activeSquare.firstElementChild.classList.add('black_King');
                    activeSquare.firstElementChild.classList.remove("none");

                    theSquares.firstElementChild.classList.add('none');
                    theSquares.firstElementChild.classList.remove('black_King');

                    rockBefore.firstElementChild.classList.add('black_Rock');
                    rockBefore.firstElementChild.classList.remove('none');

                    rockAfter.firstElementChild.classList.add('none');
                    rockAfter.firstElementChild.classList.remove('black_Rock');
                    for(square in takeableRock){
                        if(takeableRock[square].id === 'box4'){
                            theSquares.classList.remove('availableSquare');
                        }
                    }
                }
                else if(!blackKingMoved && !blackRockRightMoved && availableSquare[indexes].id == 'box7'){ //putih rokade pendek
                    let theSquares = availableSquare[indexes];
                    activeSquare.firstElementChild.classList.remove('black_King');
                    activeSquare.firstElementChild.classList.add("none");

                    theSquares.firstElementChild.classList.remove('none');
                    theSquares.firstElementChild.classList.add('black_King');

                    let rockBefore = boxes[7];
                    rockBefore.firstElementChild.classList.remove('black_Rock');
                    rockBefore.firstElementChild.classList.add('none');

                    let rockAfter = boxes[5];
                    rockAfter.firstElementChild.classList.remove('none');
                    rockAfter.firstElementChild.classList.add('black_Rock');

                    pieces();

                    activeSquare.firstElementChild.classList.add('black_King');
                    activeSquare.firstElementChild.classList.remove("none");

                    theSquares.firstElementChild.classList.add('none');
                    theSquares.firstElementChild.classList.remove('black_King');

                    rockBefore.firstElementChild.classList.add('black_Rock');
                    rockBefore.firstElementChild.classList.remove('none');

                    rockAfter.firstElementChild.classList.add('none');
                    rockAfter.firstElementChild.classList.remove('black_Rock');
                    for(square in takeableRock){
                        if(takeableRock[square].id === 'box6'){
                            theSquares.classList.remove('availableSquare');
                        }
                    }
                }
            }
        }
    }
    onlyCheck = false;
}

function isCheckMateFunc(color){        //Apakah ada gerak yang tersedia
    let results;
    let whiteChecked = false;
    let blackChecked = false;

    let nowWhiteCheck = false;
    let nowBlackCheck = false;
    onlyCheck = true;
    doIt = false;
    toggleSquare = false;

    let isSafe = false;
    function allPossible(activeSquare, active){
        returnAll = true;
        results;
        switch (true){
            case active.classList.contains('white_Rock'): {
                results = rockMovement(activeSquare);
                break;
            }
            case active.classList.contains('black_Rock'): {
                results = rockMovement(activeSquare);
                break;
            }
            case active.classList.contains('white_Pawn'): {
                results = pawnMovement(activeSquare);
                break;
            }
            case active.classList.contains('black_Pawn'): {
                results = pawnMovement(activeSquare);
                break;
            }
            case active.classList.contains('black_Bishop'): {
                results = bishopMovement(activeSquare);
                break;
            }
            case active.classList.contains('white_Bishop'): {
                results = bishopMovement(activeSquare);
                break;
            }
            case active.classList.contains('white_Queen'): {
                results = queenMovement(activeSquare);
                break;
            }
            case active.classList.contains('black_Queen'): {
                results = queenMovement(activeSquare);
                break;
            }
            case active.classList.contains('white_King'): {
                results = kingMovement(activeSquare);
                break;
            }
            case active.classList.contains('black_King'): {
                results = kingMovement(activeSquare);
                break;
            }
            case active.classList.contains('white_Knight'): {
                results = knightMovement(activeSquare);
                break;
            }
            case active.classList.contains('black_Knight'): {
                results = knightMovement(activeSquare);
                break;
            }
            default:
                break;
        }
    }
    if(color === 'white'){
        for(index in allWhitePieceSquare){
            let activeSquare = allWhitePieceSquare[index];          //Kotak yang ada bidaknya
            let thePieceActive = activeSquare.firstElementChild.classList.value;
            activeSquare.classList.add('picked');
            allPossible(activeSquare, activeSquare.firstElementChild);

            for(index in results){
                let theSquare = results[index];
                if (theSquare !== undefined){
                    let theSquareChild = theSquare.firstElementChild.classList.value;
                    activeSquare.firstElementChild.classList.remove(thePieceActive);
                    activeSquare.firstElementChild.classList.add('none');

                    theSquare.firstElementChild.classList.remove(theSquareChild);
                    theSquare.firstElementChild.classList.add(thePieceActive);

                    findCheck();

                    if(isChecks){
                        let theColour = thePieceActive.slice(0, 5);
                        if(iswhiteCheck){
                            nowWhiteCheck = true;
                            whiteChecked = true;
                        }
                        else if(isblackCheck){
                            blackChecked = true;
                            nowBlackCheck = true;
                        }
            
                        if(theColour === 'white' && nowWhiteCheck){
                        }
                        else if(theColour === 'black' && nowBlackCheck){
                        }
                        else{
                            isSafe = true;
                        }
                    }
                    else{
                        isSafe = true;
                    }

                    activeSquare.firstElementChild.classList.add(thePieceActive);
                    activeSquare.firstElementChild.classList.remove('none');

                    theSquare.firstElementChild.classList.add(theSquareChild);
                    theSquare.firstElementChild.classList.remove(thePieceActive);
                }
            }
            activeSquare.classList.remove('picked');
        }
        if(!isSafe){
            checkmated('white');
        }
        onlyCheck = false;
    }
    else if(color === 'black'){
        for(index in allBlackPieceSquare){
            let activeSquare = allBlackPieceSquare[index];          //Kotak yang ada bidaknya
            let thePieceActive = activeSquare.firstElementChild.classList.value;
            activeSquare.classList.add('picked');
            allPossible(activeSquare, activeSquare.firstElementChild);

            for(index in results){
                let theSquare = results[index];

                if (theSquare !== undefined){
                    let theSquareChild = theSquare.firstElementChild.classList.value;
                    activeSquare.firstElementChild.classList.remove(thePieceActive);
                    activeSquare.firstElementChild.classList.add('none');

                    theSquare.firstElementChild.classList.remove(theSquareChild);
                    theSquare.firstElementChild.classList.add(thePieceActive);

                    findCheck();

                    if(!isChecks){
                        isSafe = true;
                    }

                    activeSquare.firstElementChild.classList.add(thePieceActive);
                    activeSquare.firstElementChild.classList.remove('none');

                    theSquare.firstElementChild.classList.add(theSquareChild);
                    theSquare.firstElementChild.classList.remove(thePieceActive);
                }
            }
            activeSquare.classList.remove('picked');
        }
        if(!isSafe){
            checkmated('black');
        }
        onlyCheck = false;
    }   
}

function isStalemateFunc(){
    let results;
    let whiteChecked = false;
    let blackChecked = false;

    let nowWhiteCheck = false;
    let nowBlackCheck = false;
    onlyCheck = true;
    doIt = false;
    toggleSquare = false;

    let isSafe = false;
    function allPossible(activeSquare, active){
        returnAll = true;
        results;
        switch (true){
            case active.classList.contains('white_Rock'): {
                results = rockMovement(activeSquare);
                break;
            }
            case active.classList.contains('black_Rock'): {
                results = rockMovement(activeSquare);
                break;
            }
            case active.classList.contains('white_Pawn'): {
                results = pawnMovement(activeSquare);
                break;
            }
            case active.classList.contains('black_Pawn'): {
                results = pawnMovement(activeSquare);
                break;
            }
            case active.classList.contains('black_Bishop'): {
                results = bishopMovement(activeSquare);
                break;
            }
            case active.classList.contains('white_Bishop'): {
                results = bishopMovement(activeSquare);
                break;
            }
            case active.classList.contains('white_Queen'): {
                results = queenMovement(activeSquare);
                break;
            }
            case active.classList.contains('black_Queen'): {
                results = queenMovement(activeSquare);
                break;
            }
            case active.classList.contains('white_King'): {
                results = kingMovement(activeSquare);
                break;
            }
            case active.classList.contains('black_King'): {
                results = kingMovement(activeSquare);
                break;
            }
            case active.classList.contains('white_Knight'): {
                results = knightMovement(activeSquare);
                break;
            }
            case active.classList.contains('black_Knight'): {
                results = knightMovement(activeSquare);
                break;
            }
            default:
                break;
        }
    }
    if(isWhiteMove){
        for(index in allWhitePieceSquare){
            let activeSquare = allWhitePieceSquare[index];          //Kotak yang ada bidaknya
            let thePieceActive = activeSquare.firstElementChild.classList.value;
            activeSquare.classList.add('picked');
            allPossible(activeSquare, activeSquare.firstElementChild);

            for(index in results){
                let theSquare = results[index];
                if (theSquare !== undefined){
                    let theSquareChild = theSquare.firstElementChild.classList.value;
                    activeSquare.firstElementChild.classList.remove(thePieceActive);
                    activeSquare.firstElementChild.classList.add('none');

                    theSquare.firstElementChild.classList.remove(theSquareChild);
                    theSquare.firstElementChild.classList.add(thePieceActive);

                    findCheck();

                    if(isChecks){
                        let theColour = thePieceActive.slice(0, 5);
                        if(iswhiteCheck){
                            nowWhiteCheck = true;
                            whiteChecked = true;
                        }
                        else if(isblackCheck){
                            blackChecked = true;
                            nowBlackCheck = true;
                        }
            
                        if(theColour === 'white' && nowWhiteCheck){
                        }
                        else if(theColour === 'black' && nowBlackCheck){
                        }
                        else{
                            isSafe = true;
                        }
                    }
                    else{
                        isSafe = true;
                    }

                    activeSquare.firstElementChild.classList.add(thePieceActive);
                    activeSquare.firstElementChild.classList.remove('none');

                    theSquare.firstElementChild.classList.add(theSquareChild);
                    theSquare.firstElementChild.classList.remove(thePieceActive);
                }
            }
            activeSquare.classList.remove('picked');
        }
        if(!isSafe){
            checkmated('stalemate');
        }
        onlyCheck = false;
    }
    else if(!isWhiteMove){
        for(index in allBlackPieceSquare){
            let activeSquare = allBlackPieceSquare[index];          //Kotak yang ada bidaknya
            let thePieceActive = activeSquare.firstElementChild.classList.value;
            activeSquare.classList.add('picked');
            allPossible(activeSquare, activeSquare.firstElementChild);

            for(index in results){
                let theSquare = results[index];
                if (theSquare !== undefined){
                    let theSquareChild = theSquare.firstElementChild.classList.value;
                    activeSquare.firstElementChild.classList.remove(thePieceActive);
                    activeSquare.firstElementChild.classList.add('none');

                    theSquare.firstElementChild.classList.remove(theSquareChild);
                    theSquare.firstElementChild.classList.add(thePieceActive);

                    findCheck();

                    if(isChecks){
                        let theColour = thePieceActive.slice(0, 5);
                        if(iswhiteCheck){
                            nowWhiteCheck = true;
                            whiteChecked = true;
                        }
                        else if(isblackCheck){
                            blackChecked = true;
                            nowBlackCheck = true;
                        }
            
                        if(theColour === 'white' && nowWhiteCheck){
                        }
                        else if(theColour === 'black' && nowBlackCheck){
                        }
                        else{
                            isSafe = true;
                        }
                    }
                    else{
                        isSafe = true;
                    }

                    activeSquare.firstElementChild.classList.add(thePieceActive);
                    activeSquare.firstElementChild.classList.remove('none');

                    theSquare.firstElementChild.classList.add(theSquareChild);
                    theSquare.firstElementChild.classList.remove(thePieceActive);
                }
            }
            activeSquare.classList.remove('picked');
        }
        if(!isSafe){
            checkmated('stalemate');
        }
        onlyCheck = false;
    }
}

function checkmated(colors){
    const checkmateDisplay = document.getElementById('checkmateDisplay');
    for(box in boxes){
        if(boxes[box].firstElementChild.classList.contains('none')){
            boxes[box].removeEventListener('click', togglePickedSquare);
        }
        else{
            boxes[box].removeEventListener('click', pickedSquare);
        }
    }
    if(colors === 'white'){
        checkmateDisplay.style.visibility = ('visible');
        document.getElementById('colorWinning').textContent = 'Black Wins!';
        checkmateDisplay.style.animation = ('slideAnimation 10s 0s 1 normal');

        setTimeout(event => {checkmateDisplay.style.visibility = ('hidden');}, 9000);
    }
    else if(colors === 'black'){
        checkmateDisplay.style.visibility = ('visible');
        document.getElementById('colorWinning').textContent = 'White Wins!';
        checkmateDisplay.style.animation = ('slideAnimation 10s 0s 1 normal');

        setTimeout(event => {checkmateDisplay.style.visibility = ('hidden');}, 9000);
    }
    else if(colors === 'stalemate'){
        checkmateDisplay.style.visibility = ('visible');
        document.getElementById('colorWinning').textContent = `It's Draws!`;
        document.getElementById('theTitle').textContent = 'STALEMATE';
        checkmateDisplay.style.animation = ('slideAnimation 10s 0s 1 normal');

        setTimeout(event => {checkmateDisplay.style.visibility = ('hidden');}, 9000);
    }
}

/*  Project Date :
    January 28th 2024 (Start) 
    February 8 2024 (Done)*/


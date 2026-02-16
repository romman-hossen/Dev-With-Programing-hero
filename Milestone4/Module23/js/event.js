// console.log('hello javaScript')
// way 2 to handle event
function makeYellow (){
            document.body.style.backgroundColor = 'yellow';
            document.getElementById('yello').style.backgroundColor = 'red'
        }
        function makeRed(){
            document.body.style.backgroundColor = 'red';
        }

        // way 3 to handle event
        const makeBlue = document.getElementById('make-blue');
            makeBlue.onclick = function makeBlue(){
            document.body.style.backgroundColor = 'blue';
       }
       //way 3 khalato vhai
       const makePurples = document.getElementById('make-purple');
        makePurples.onclick = makePurple;
        function makePurple(){
            document.body.style.backgroundColor = 'purple';
        }



let screen = document.getElementById('screen');   // show value in screen through button
 buttons = document.querySelectorAll('button');   // store button key press value
 let screenValue = '';
for(item of buttons) {
   item.addEventListener('click' , (e)=> {
       buttonText = e.target.innerText;
       console.log('button is text' , buttonText); // for see button are working or not

       if(buttonText == 'X') {
           buttonText = '*';
           screenValue += buttonText;
           screen.value = screenValue;
       } else if(buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
       }
       else if(buttonText == '='){
           screen.value = eval(screenValue);
    } else {
        screenValue += buttonText;
        screen.value = screenValue;
    }
   })
}

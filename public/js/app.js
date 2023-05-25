var display =  document.getElementById("display");

function getvalue(num){
   display.value += num;
   console.lod(num);
}

function calculatevalue(){
    var ans = eval(display.value);
    display.value = ans;
    console.log(ans);
}

function clearall(){
    display.value = "";
}
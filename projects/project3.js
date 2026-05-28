const clock = document.getElementById('#clock');
// const clock = document.querySelector('#clock')

setInterval(function (){
    let data = new Date();
    // console.log(data.toLocaleDateString());
    clock.innerHTML = date.toLocalTimeString();
}, 1000); 
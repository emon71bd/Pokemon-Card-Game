let main = document.getElementById("main");
let arr = ["https://i.pinimg.com/564x/5d/6d/23/5d6d23fd7adb44baba20a60c252da339.jpg",
"https://i.pinimg.com/736x/16/04/5f/16045f3343fd935bba94d09801143251.jpg",
"https://i.pinimg.com/564x/85/b3/d1/85b3d11ce6fa02fae323fc4c5f50473a.jpg",
"https://i.pinimg.com/564x/d7/7f/2e/d77f2e15f15e88fbe1e074ca62fc4ddd.jpg",
"https://i.pinimg.com/564x/2a/0f/20/2a0f20739ccb30b3800792c48ff5fac6.jpg",
"https://i.pinimg.com/564x/47/9a/09/479a09c2e260859dea3e242ad69d751b.jpg",
"https://i.pinimg.com/564x/aa/b6/bb/aab6bbef339848633e9cd1228c8de6e3.jpg"]
let s = "";
for(let i=1; i<=55; i++){
    let r = Math.floor(Math.random()*arr.length);
    s += `<div class="card">
            <img src =${arr[r]}>
       </div>`;
}
main.innerHTML = s;
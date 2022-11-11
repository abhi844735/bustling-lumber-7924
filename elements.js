let url="https://636e0e32b567eed48ad17fa2.mockapi.io/Exercise";
let bag = [];
async function data(){
    let res = await fetch(url);
    let out = await res.json();
    bag=out;
    displayData(out);
    // console.log(out);
}
data();
let parentDiv=document.querySelector("#exercise-section");
function displayData(out){
    parentDiv.innerHTML=null;
    out.forEach((elem,index)=>{
        let div=document.createElement("div");
        let imgDiv=document.createElement("div");
        let txtDiv=document.createElement("div");
        let img = document.createElement("img");
        img.src=elem.img;
        let title = document.createElement("h3");
        title.innerText=elem.Title;
        let muscle = document.createElement("h3");
        muscle.innerText="Muscle :"+elem.Muscles;
        imgDiv.append(img);
        txtDiv.append(title,muscle);
        div.append(imgDiv,txtDiv);
        parentDiv.append(div)
        
        imgDiv.append(img);
        
    });
};
// filteration Selection
document.querySelector("#filter").addEventListener("change",()=>{
    
    let q=document.querySelector("#filter").value;
    // console.log(q)
    if(q==""){
        displayData(bag);
    }else{
        let filterdata = bag.filter((elem)=>{
            return elem.Muscles==q
        })
        displayData(filterdata);
    }
    
});
document.querySelector("#sort").addEventListener("change",()=>{
    let q = document.querySelector("#sort").value;
    if(q==""){
        displayData(bag);
    }
    else if(q=="az"){
        // console.log(1)
        // console.log(bag)
        let sortedData = bag.sort((a,b)=>{
            return a.Title.localeCompare(b.Title);
        });
        // console.log(sortedData);
        displayData(sortedData);
    }else if(q=="za"){
        // console.log(2)
        let sortedData=bag.sort((a,b)=>{
            return b.Title.localeCompare(a.Title);
        });
        displayData(sortedData);
        console.log(sortedData);
    }
});
// searching category;
document.querySelector("#search").addEventListener("input",()=>{
    let q  = document.querySelector("#search").value;
    let filterdata= bag.filter((elem)=>{
        return elem.Title.toLowerCase().includes(q.toLowerCase());
    });
    displayData(filterdata);
})
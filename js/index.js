const loadData = async () => {
    return await fetch('https://openapi.programming-hero.com/api/ai/tools')
        .then(res => res.json())

}

function showData(data, showMore = false) {
    let n = data.length;
    if (!showMore) {

        n = 6;
        
    }

    document.getElementById('spinner').classList.add('hidden');
    for (let i = 0; i < n; i++) {

        let image = data[i].image;
        const parent = document.getElementById('loadedData');
    
        // document.getElementById("imgLoad").addEventListener("load",()=>{
        //     image=data.image;
        // })
        // document.getElementById("imgLoad").addEventListener("error",()=>{
        //     image='ChatGPT.jpg'
        // })
        const div = document.createElement('div');
        //console.log(IsImageOk(data2.image));
        div.innerHTML = `
        <div class="">
            <div class="card w-96 bg-base-100 shadow-xl p-5">
        <img class="w-25" id="imgLoad"   onload="${image = data[i].image}"
        onerror="${image = 'ChatGPT.jpg'}" src="${image}" alt="">
        <h2 class="text-xl mt-5 font-bold">Featchers</h2>
        <ol class="list-decimal ml-4 mb-4">
            <li class="mt-2">${data[i].features[1]}</li>
            <li class="mt-2">${data[i].features[2]}</li>
            <li class="mt-2">${data[i].features[2]}</li>
        </ol>
        <hr>
        <h2 class="text-2xl font-bold mt-5">${data[i].name}</h2>
        <div class="flex justify-between items-center">
            <h2 class="mt-2 "><span><i class="fa-regular fa-calendar-days"></i> date</span></h2>
        <button onclick ="loadModalData('${data[i].id}')"id="" class="button bg-red-200 p-3 rounded-xl"><i class="fa-solid fa-arrow-right"></i></button>
        </div>
        </div>
    </div>
        `;
        parent.appendChild(div);
    }
    document.getElementById('spinner').classList.add('hidden');
}


const loadModalData =(id) =>{
      fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`)
        .then(res => res.json())
        .then(json =>console.log(json.data))
}
document.getElementById('showMoreBtn').addEventListener('click', () => {
    const data = loadData();
    document.getElementById('loadedData').innerHTML = ``;
    document.getElementById('spinner').classList.remove('hidden');
    data.then(value => {
        showData(value.data.tools,true)
    }).catch(err => {
        console.log(err);
    });
    document.getElementById('showMoreBtn').style.display ="none";
    
})
const button= document.querySelectorAll('.button');
console.log(button);

const data = loadData();
data.then(value => {
    showData(value.data.tools)
}).catch(err => {
    console.log(err);
});
showData(data(), false);
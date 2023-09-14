const loadData = () => {
    fetch('https://openapi.programming-hero.com/api/ai/tools')
        .then(res => res.json())
        .then(json => showData(json))
}

function showData(data) {
    
    data.data.tools.forEach((data) => {
        let image=data.image;
        const parent = document.getElementById('loadedData');
        console.log(data.image);
        // document.getElementById("imgLoad").addEventListener("load",()=>{
        //     image=data.image;
        // })
        // document.getElementById("imgLoad").addEventListener("error",()=>{
        //     image='ChatGPT.jpg'
        // })
        const div = document.createElement('div');
        console.log(IsImageOk(data.image));
        div.innerHTML = `
        <div class="">
            <div class="card w-96 bg-base-100 shadow-xl p-5">
        <img class="w-25" id="imgLoad"   onload="${image=data.image}"
        onerror="${image='ChatGPT.jpg'}" src="${image}" alt="">
        <h2 class="text-xl mt-5 font-bold">Featchers</h2>
        <ol class="list-decimal ml-4 mb-4">
            <li class="mt-2">${data.features[1]}</li>
            <li class="mt-2">${data.features[2]}</li>
            <li class="mt-2">${data.features[2]}</li>
        </ol>
        <hr>
        <h2 class="text-2xl font-bold mt-5">${data.name}</h2>
        <div class="flex justify-between items-center">
            <h2 class="mt-2 "><span><i class="fa-regular fa-calendar-days"></i> date</span></h2>
        <h2 class="bg-red-200 p-3 rounded-xl"><i class="fa-solid fa-arrow-right"></i></h2>
        </div>
        </div>
    </div>
        `;
        parent.appendChild(div);
    })
}
document.getElementById('loadedData').addEventListener('click',()=>{
    console.log('tamim');
});
function IsImageOk(img) {
    // During the onload event, IE correctly identifies any images that
    // weren’t downloaded as not complete. Others should too. Gecko-based
    // browsers act like NS4 in that they report this incorrectly.
    if (!img.complete) {
        return false;
    }

    // However, they do have two very useful properties: naturalWidth and
    // naturalHeight. These give the true size of the image. If it failed
    // to load, either of these should be zero.
    if (img.naturalWidth === 0) {
        return false;
    }

    // No other way of checking: assume it’s ok.
    return true;
}
loadData();
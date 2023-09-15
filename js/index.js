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
        if(!isImgOk(image)){
            image='ChatGPT.jpg';
        }
        console.log(isImgOk(image));
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
        <img class="w-25"src=${image} alt="">
        <h2 class="text-xl mt-5 font-bold">Featchers</h2>
        <ol class="list-decimal ml-4 mb-4">
            <li class="mt-2">${data[i].features[1]}</li>
            <li class="mt-2">${data[i].features[2]}</li>
            <li class="mt-2">${data[i].features[2]}</li>
        </ol>
        <hr>
        <h2 class="text-2xl font-bold mt-5">${data[i].name}</h2>
        <div class="flex justify-between items-center">
            <h2 class="mt-2 "><span><i class="fa-regular fa-calendar-days"></i> ${data[i].published_in}</span></h2>
        <button onclick ="modalOpen('${data[i].id}')" onclick="my_modal_4.showModal() id="" class="button bg-red-200 p-3 rounded-xl"><i class="fa-solid fa-arrow-right"></i></button>
        </div>
        </div>
    </div>
        `;
        parent.appendChild(div);
    }
    document.getElementById('spinner').classList.add('hidden');
}

const modalOpen = (id) => {
    document.getElementById('my_modal_4').showModal();
    fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`)
        .then(res => res.json())
        .then(json => showModalData(json.data))
}

const showModalData = (data) => {
    let image = data.image_link[0];
    const img= isImgOk(image);
    img.then(value =>{
        console.log(value)
    })  
    
    console.log(isImgOk(image));
    const parent = document.getElementById('ai');
    const div = document.createElement('div');
    parent.innerHTML = ``;
    div.innerHTML = `
    <div class="flex justify-center items-center p-7 gap-5 ">
                        <div class="bg-red-100 p-9 rounded-xl border-red-700 border-5 w-50">
                            <h1 class="font-extrabold text-xl">${data.description}</h1>
                            <div class=" flex justify-center items-center gap-2 rounded-xl mt-7">
                                <h2 class="p-10 bg-white text-center rounded-xl"><span>${data.pricing[0].price}</span>
                                <span>${data.pricing[0].plan}</span></h2>
                                <h2 class="p-10 bg-white text-black text-center rounded-xl"><span>${data.pricing[1].price}</span>
                                <span>${data.pricing[1].plan}</span></h2>
                                <h2 class="p-10 bg-white text-black text-center rounded-xl"><span>${data.pricing[2].price}</span>
                                <span>${data.pricing[2].plan}</span></h2>
                            </div>
                            <div class="flex justify-between items-center mt-7">
                                <div class="">
                                    <h1 class="font-extrabold text-xl">Featchers</h1>
                                    <ol class="list-disc ml-3 mt-2">
                                        <li>${data.features['1'].feature_name}</li>
                                        <li>${data.features['2'].feature_name}</li>
                                        <li>${data.features['3'].feature_name}</li>
                                    </ol>
                                </div>
                                <div class="">
                                    <h1 class="font-extrabold text-xl">Intregrations</h1>
                                    <ol class="list-disc ml-3 mt-2">
                                    <li>${data.integrations[0]}</li>
                                    <li>${data.integrations[1]}</li>
                                    <li>${data.integrations[2]}</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <div class="border-solid border-2 border-gray-500   rounded-xl p-9 w-50">
                            <img src=${image} alt="" class="relative">
                            <h1 class="font-extrabold text-xl text-center mt-5 mb-5">${data.input_output_examples[1].input}</h1>
                            <h2 class="text-center mb-5">${data.input_output_examples[1].output}</h2>
                            <div class="badge badge-outline bg-red-400 text-white  absolute p-3 top-5 left-5">94% accuracy</div>
                            
                        </div>
                    </div>
    `
    parent.appendChild(div);
}
document.getElementById('showMoreBtn').addEventListener('click', () => {
    const data = loadData();
    document.getElementById('loadedData').innerHTML = ``;
    document.getElementById('spinner').classList.remove('hidden');
    data.then(value => {
        showData(value.data.tools, true)
    }).catch(err => {
        console.log(err);
    });
    document.getElementById('showMoreBtn').style.display = "none";

})
async function isImgOk(url) {
    const imageUrl = url;
    const image = new Image();
    
    image.onload = function() {
      // The image has loaded successfully
      console.log('Image is fully loaded.');
    };
    
    image.onerror = function() {
      // The image failed to load
      console.log('Image failed to load.');
    };
  }
  

const data = loadData();
data.then(value => {
    showData(value.data.tools)
}).catch(err => {
    console.log(err);
});
showData(data(), false);
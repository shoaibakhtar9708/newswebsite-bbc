const API_KEY = '47ca1436e8c94063aedcfb7f5ea60685';
const url = 'https://newsapi.org/v2/everything?q=football&from=2022-07-11&sortBy=popularity&apiKey=';

const form = document.querySelector('#search-addon');
const row = document.querySelector('#row');
const catNews = document.querySelector('#catNews');
const topnews = document.querySelector('#topnews');

const load = document.getElementById('load_ui');




// top news
async function  getTopNews() {
    var url_s = `https://newsapi.org/v2/top-headlines?country=in&apiKey=`;
    const reponse = await fetch(url_s + API_KEY);
    const responseData = await reponse.json();
   console.log(responseData);
    putNewsTocard(responseData.articles); 
}

getTopNews();

topnews.addEventListener('click',()=>{
    getTopNews();
    catNews.innerHTML='';
})




//search
// async function  getSearchedNews(search) {
//     var url_s = `https://newsapi.org/v2/everything?q=${search}&from=2022-07-11&sortBy=popularity&apiKey=`;
//     const reponse = await fetch(url_s + API_KEY);
//     const responseData = await reponse.json();
//     console.log(responseData);

//     putNewsTocard(responseData.articles); 
// }
// form.addEventListener('click',(e)=>{
//     e.preventDefault();
//     row.innerHTML='';
//     let search = document.getElementById('search').value;
//     getSearchedNews(search);
//     search='';
// })









const btnSport = document.getElementById('sports');
btnSport.addEventListener('click',()=>{
    load.style.display="block";
    catNews.innerHTML='';
    getCategoryNews(btnSport.innerText);
    row.innerHTML=''; 
})


const btnScience = document.getElementById('Science');
btnScience.addEventListener('click',()=>{
    catNews.innerHTML='';
    getCategoryNews(btnScience.innerText);
    row.innerHTML='';  
})
const btnEntertainment = document.getElementById('entertainment');
btnEntertainment.addEventListener('click',()=>{
    catNews.innerHTML='';
    getCategoryNews(btnEntertainment.innerText);
    row.innerHTML='';
})
const btnHealth = document.getElementById('health');
btnHealth.addEventListener('click',()=>{
    catNews.innerHTML='';
    getCategoryNews(btnHealth.innerText);
    row.innerHTML='';
})
const btnTech = document.getElementById('tech');
btnTech.addEventListener('click',()=>{
    catNews.innerHTML='';
    getCategoryNews(btnTech.innerText);
    row.innerHTML=''; 
})

const btnBusiness = document.getElementById('weather');
btnBusiness.addEventListener('click',()=>{
    catNews.innerHTML='';
    getCategoryNews(btnBusiness.innerText);
    row.innerHTML=''; 
})

async function  getCategoryNews(search) {

    var url_s = `https://newsapi.org/v2/top-headlines?country=in&category=${search}&apiKey=`
    const reponse = await fetch(url_s + API_KEY);
    const responseData = await reponse.json()
    console.log(responseData);
   putNewsToCategory(responseData.articles,search); 
   
}


function putNewsTocard(news){
    load.style.display="none";
    for (let i = 0; i < news.length; i++) {
        const card = document.createElement('div');
        card.classList.add('col-12', 'col-sm-6', 'col-md-4', 'col-lg-3');
        var html = `
        <div class="card my-4">
            <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src="${news[i].urlToImage}" class="img-fluid" />
                <a href="#!">
                    <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                </a>
                
            </div>
            <div class="card-body">
                <h5 class="card-title">${news[i].title.substring(0,80)}</h5>
                <a href="${news[i].url}"  target ="_blank" class="btn text-white mb-2"  style="background-color: #5a5959;">Read more</a>
                <h6>Source : ${news[i].source.name}</h6>
                </div>
        </div>`;
        card.innerHTML = html;
        row.appendChild(card);
    }
    
}


function putNewsToCategory(news,search){
    const h2 = document.createElement('div');
    var h = `<h2 class="text-center">${search}</h2>`
    h2.innerHTML = h;

    
    
    catNews.appendChild(h2); 
    for (let i = 0; i <news.length; i++) {
        const element = document.createElement('div');
        element.classList.add('d-flex', 'align-items-center', 'mb-5');
        var html = `
        <img src="${news[i].urlToImage}" alt="" style="width: 150px; height: 150px"
        class="rounded-circle" />
        <div class="ms-3">
            <p class="fw-bold mb-1">${news[i].title}</p>
            <p class="text-muted mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed reprehenderit
                vel quo excepturi maiores fugiat illum nostrum quam explicabo animi? Sapiente magni harum impedit
                aliquid placeat deserunt suscipit nihil modi?</p>
                <a  class"mx-4" href= ${news[i].url} target ="_blank">Read more..</a>
        </div>`
        element.innerHTML = html;
        catNews.appendChild(element);
    }
}




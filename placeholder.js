const photos = ()=>{
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => displayPhotos(data))
    .catch(err => console.log(err));
}
const displayPhotos=(photos)=>{

const container = document.getElementById('photos-container');
for(const photo of photos.slice(0,10)){
    console.log(photo.title)
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card  mt-3 m-auto" style="width: 18rem;">
  <img src="${photo.thumbnailUrl}" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text text-center">${photo.title}</p>
  </div>
</div>
    `
    container.appendChild(div);
}

}
photos();
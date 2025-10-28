const lightbox=document.getElementById('lightbox');
const lightboximg=document.getElementById('lightbox-img');
const captions=document.querySelectorAll('.caption');
const close=document.querySelector('.close');
const leftarrow=document.querySelector('.leftarrow');
const rightarrow=document.querySelector('.rightarrow');
const images=document.querySelectorAll('.gallery-item img');
images.forEach(img=>{
    img.addEventListener('click',()=>{
        lightbox.style.display='block';
        lightboximg.src=img.src;
        captions.textcontent=img.alt;
    });
});
// Close lightbox
close.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Close when clicked outside the image
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});
// Navigate images
let currentIndex=0;
const updateLightboxImage=(index)=>{
    lightboximg.src=images[index].src;
    captions.textcontent=images[index].alt;
}
leftarrow.addEventListener('click',()=>{
    currentIndex=(currentIndex-1+images.length)%images.length;
    updateLightboxImage(currentIndex);
});
rightarrow.addEventListener('click',()=>{
    currentIndex=(currentIndex+1)%images.length;
    updateLightboxImage(currentIndex);
});
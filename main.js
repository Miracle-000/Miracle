function getid (id) {
    return document.getElementById(id)
}

photos = ['./media/photo1.avif','./media/photo2.avif','./media/photo3.avif','./media/photo4.avif','./media/photo5.avif']
gallery = document.querySelector('#gallery')
for (i of photos) {
    gallery.innerHTML +=`<div class = "papa"></div>`
}


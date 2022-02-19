// product gallery sections
(function(){    

    const productData = [
        {
            id:1,
            image:'./assets/img/products/image 01.jpg',
            thumb:'./assets/img/products/temp01.jpg'
        },
        {
            id:2,
            image:'./assets/img/products/image 02.jpg',
            thumb:'./assets/img/products/temp02.jpg'
        },
        {
            id:3,
            image:'./assets/img/products/image 03.jpg',
            thumb:'./assets/img/products/temp03.jpg'
        },
        {
            id:4,
            image:'./assets/img/products/image 04.jpg',
            thumb:'./assets/img/products/temp04.jpg'
        },
        {
            id:5,
            image:'./assets/img/products/image 05.jpg',
            thumb:'./assets/img/products/temp05.jpg'
        },
        {
            id:6,
            image:'./assets/img/products/image 06.jpg',
            thumb:'./assets/img/products/temp06.jpg'
        },
        {
            id:7,
            image:'./assets/img/products/image 07.jpg',
            thumb:'./assets/img/products/temp07.jpg'
        },
        {
            id:8,
            image:'./assets/img/products/image 08.jpg',
            thumb:'./assets/img/products/temp08.jpg'
        },                                                        
    ];

    const productGalleryCanvas = document.querySelector(".productGalleryCanvas");
    const productDisplay = document.querySelector(".productDisplay img")

    console.log(productDisplay);

    productData.forEach(el => {
        const li = document.createElement("li");
        const img = document.createElement("img");
        productGalleryCanvas.append(li);
        li.appendChild(img);
        img.setAttribute("src", el.thumb);

        li.addEventListener("click", ()=>{
            productDisplay.setAttribute("src",el.image)
        });

    });
})();
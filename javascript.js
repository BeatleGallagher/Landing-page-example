function changeBackground() {
    //To keep count of the images in the array
    var number = 0;
    //This is the array containing the URL of the images found on the web
    const imagesArray = ['url(https://www.seriouseats.com/2018/06/20180625-no-churn-vanilla-ice-cream-vicky-wasik-13-1500x1125.jpg)',
        'url(http://www.pngall.com/wp-content/uploads/2016/04/Ice-Cream-Transparent.png)',
        'url(https://blog-assets.foodpairing.com/2015/08/PY1A0604-1-1380x680.jpg)',
        'url(https://hips.hearstapps.com/vidthumb/images/delish-marry-me-chicken-1523047305.png)',
        'url(https://blog-assets.foodpairing.com/2015/10/quiche_blog-1380x680.jpg)',
        'url(https://www.lurpak.co.uk/siteassets/final-recipe-assets/zesty-lemon-cake-1370.jpg',
        'url(https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190409-pizza-burger-horizontal-2-1555624827.png)',];

    //This sets the background image to the image in the array
    setInterval(() => {
        //This selects the body background and sets it to the image 
        document.body.style.backgroundImage = imagesArray[number];
        //This increases the number variable by one so that the next image will be loaded from the array
        number++;
        //This sets the number variable back to 0 if it gets more than 6
        if (number > 6) {
            number = 0;
        }
    }, 3500);
}
//Run function
changeBackground();




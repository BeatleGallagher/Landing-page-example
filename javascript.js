function changeBackground() {
    var number = 0;
    const imagesArray = ['url(https://www.seriouseats.com/2018/06/20180625-no-churn-vanilla-ice-cream-vicky-wasik-13-1500x1125.jpg)',
        'url(http://www.pngall.com/wp-content/uploads/2016/04/Ice-Cream-Transparent.png)',
        'url(https://blog-assets.foodpairing.com/2015/08/PY1A0604-1-1380x680.jpg)',
        'url(https://hips.hearstapps.com/vidthumb/images/delish-marry-me-chicken-1523047305.png)',
        'url(https://blog-assets.foodpairing.com/2015/10/quiche_blog-1380x680.jpg)',
        'url(https://www.lurpak.co.uk/siteassets/final-recipe-assets/zesty-lemon-cake-1370.jpg',
        'url(https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190409-pizza-burger-horizontal-2-1555624827.png)',];

    setInterval(() => {
        document.body.style.backgroundImage = imagesArray[number];
        number++;
        if (number > 6) {
            number = 0;
        }
    }, 3500);
}
//Run function
changeBackground();




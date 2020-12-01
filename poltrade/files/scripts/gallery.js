$(function () {
    $('#gallery_images a').fancybox({
        helpers: {
            overlay: {
                locked: false
            },
            title: {
                type: 'inside'
            }
        },
        openEffect: 'elastic',
        openSpeed: 150,
        closeEffect: 'elastic',
        closeSpeed: 150,
        closeClick: true,
        showCloseButton: false,
        padding: 30
    });
});
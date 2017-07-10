$(document).ready(function() {
    let pokImgs = [undefined];
    let clickCounter = 0;
    let player1 = true;

    $('.pok_img').on('click', clickHandler);

    function clickHandler() {
        if (pokImgs[0] !== $(this).attr('data-indx')) {

            pokImgs[0] = $(this).attr('data-indx');
            pokImgs.push($(this).attr('data-pokemon'));
            clickCounter += 1;
            $(this).attr('src', $(this).attr('data-pokemon'));

            if (clickCounter === 2) {
                pokImgs.push($(this).attr('data-pokemon'));

                if (!player1) {
                    let score = $('.player2');
                    if (correctPair(pokImgs[2], pokImgs[1], score)) {
                        alert('Pair!');
                        imgTagFinder(pokImgs);
                    };
                    player1 = true;
                } else {
                    let score = $('.player1');
                    if (correctPair(pokImgs[2], pokImgs[1], score)) {
                        alert('Pair!');
                        imgTagFinder(pokImgs);
                    };
                    player1 = false;
                };

                $('.pok_img').off('click');

                setTimeout(function() {
                    $('.pok_img').attr('src', "https://opengameart.org/sites/default/files/card%20back%20red.png");
                    clickCounter = 0;
                    pokImgs = [undefined];
                    $('.pok_img').on('click', clickHandler);
                }, 1000)
            };


        };
    }


    function correctPair(img1, img2,score) {
        let count = parseInt( score.text() ) + 1;
        
        if (img1 === img2) {
            score.text(count);
            return true;
        };
    };

    function imgTagFinder(pokImgs) {
        let pokemons = $('.pok_img');

        [].forEach.call(pokemons, function(pok) {
            if ($(pok).attr('data-pokemon') === pokImgs[1] || $(pok).attr('data-pokemon') === pokImgs[2]) {
                $(pok).removeClass('pok_img');
            };
        });
    };


});

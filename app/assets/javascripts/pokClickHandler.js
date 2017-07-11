$(document).ready(function() {
    let pokImgs = [undefined];
    let allImgs = [];
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
                        allImgs.push(pokImgs[1]);
                        allImgs.push(pokImgs[2]);

                        imgTagFinder(pokImgs);
                    };
                    player1 = true;
                } else {
                    let score = $('.player1');
                    if (correctPair(pokImgs[2], pokImgs[1], score)) {
                        alert('Pair!');
                        allImgs.push(pokImgs[1]);
                        allImgs.push(pokImgs[2]);

                        imgTagFinder(pokImgs);
                    };
                    player1 = false;
                };

                if (allImgs.length === 18) {
                    $('.new-game-div').append("<button class='new-game'>New Game</button>");
                    let p1 = parseInt($('.player1').text());
                    let p2 = parseInt($('.player2').text());

                    if (p1 > p2) {
                        alert('Game Over Player One wins!');
                    } else {
                        alert('Game Over Player Two wins!');
                    };
                };

                $('.pok_img').off('click');

                setTimeout(function() {
                    $('.pok_img').attr('src', "https://opengameart.org/sites/default/files/card%20back%20red.png");
                    clickCounter = 0;
                    pokImgs = [undefined];
                    $('.pok_img').on('click', clickHandler);
                }, 1000)
                console.log(allImgs);
            };


        };
    }


    function correctPair(img1, img2, score) {
        let count = parseInt(score.text()) + 1;

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


    $('.new-game-div').on('click', e => {
        window.location.href = "http://localhost:3000/games/new";
    });

});

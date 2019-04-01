let lastClicked;

$(document).ready(() => {
    $('.article').click(function () {
        let id = $(this).attr('data-article-id');
        muteLast(this);
        $(this).css('background-color', 'grey');
        $('#' + id).css('display', 'block');
    });
    $('.submit').click(function (event) {
        event.preventDefault();
        let id = $(this).attr('data-article-id');
        console.log($('#comment' + id).val());
        console.log($('#pin' + id).val());
    })
});


function muteLast(clickedElement) {
    if (lastClicked) {
        $(lastClicked).css('background-color', '#343A40');
        $('#' + $(lastClicked).attr('data-article-id')).css('display', 'none');
    };
    lastClicked = clickedElement;
};
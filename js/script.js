let tabButtons = document.querySelectorAll('.tabs__list-title');
let tabContents = document.querySelectorAll('.tabs__list-block');


for (let i = 0; i < tabButtons.length; i++) {
    tabButton_Click(tabButtons[i], i);
}


function tabButton_Click(element, tag) {
    element.addEventListener('click', function(evt) {
        evt.preventDefault();

        element.classList.toggle('active');
        $(".tabs__list-block").eq(tag).slideToggle();
    })
}
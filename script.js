let button = document.getElementById('submit-rating');
let ratings = document.getElementsByClassName('option')
let nowChosen;
let ratingCard = document.getElementById('rating');
let thankYouCard = document.getElementById('thank-you')


for (let i = 0; i <ratings.length; i++) {
    ratings[i].addEventListener("mouseover", function() {
        if (!ratings[i].className.match('option-choice')) {
            ratings[i].classList.add('option-hover')
        } 
    })

    ratings[i].addEventListener("mouseout", function() {
        if (!ratings[i].className.match('option-choice')) {
            ratings[i].classList.remove('option-hover')
        }
    })

    ratings[i].addEventListener('click', function() {
        if (nowChosen && nowChosen === ratings[i]) {
            ratings[i].classList.remove('option-choice')
            nowChosen = null;

        } else if (nowChosen) {
            nowChosen.classList.remove('option-choice')
            ratings[i].classList.add('option-choice')
            ratings[i].classList.remove('option-hover')
            nowChosen = ratings[i]
        } else {    
            ratings[i].classList.add('option-choice')
            ratings[i].classList.remove('option-hover')
            nowChosen = ratings[i]
        }
    })
}


button.addEventListener('click', function() {
    button.style.backgroundColor = '#FFFFFF';
    button.style.color = '#FC7614';
    if (nowChosen) {
        document.getElementById('user-rating').innerHTML = nowChosen.innerHTML;
        ratingCard.classList.add('hide');
        thankYouCard.classList.add('show')
    } else {
        alert("Please choose one of the ratings before submitting!")
    }
} )
const submitButton = document.querySelector('#submitButton');
const displayMemesDiv = document.querySelector('#displayMemes');
const memeArray = [];

//creates meme object, calls createMemeElement function on that object and stores that as a property of the meme object. Pushes the meme object to the meme array, then appends the html element to the div which contains the memes
submitButton.addEventListener('click', function (event) {
    event.preventDefault();

    if(imgUrl.value === "") {
        alert("Please add a URL to an image for your meme.");
        return;
    }

    if(topText.value === "" && bottomText.value === "") {
        alert("Please add at least one line of text to your meme.");
        return;
    }
    
    let newMemeObj = {};
    newMemeObj.imgUrl = imgUrl.value;
    newMemeObj.topText = topText.value;
    newMemeObj.bottomText = bottomText.value;
    newMemeObj.htmlElement = createMemeElement(newMemeObj);

    memeArray.push(newMemeObj);
    displayMemesDiv.append(newMemeObj.htmlElement);
    document.querySelector('form').reset();
});

//creates HTML element from meme object, adding img background and top and bottom text as well as click-to-delete event listener. Returns that newly created element
function createMemeElement(meme) {
    let newMeme = document.createElement('div');

    newMeme.classList.add('meme');
    newMeme.style.backgroundImage = `url(${meme.imgUrl})`;

    let topTextDiv = document.createElement('div');
    topTextDiv.classList.add('topText');
    topTextDiv.innerText = meme.topText;
    newMeme.append(topTextDiv);
    
    let bottomTextDiv = document.createElement('div');
    bottomTextDiv.classList.add('bottomText');
    bottomTextDiv.innerText = meme.bottomText;
    newMeme.append(bottomTextDiv);

    newMeme.addEventListener('click', function () {
        newMeme.remove();
        memeArray.splice(memeArray.indexOf(newMeme), 1);
    })

    return newMeme;
}




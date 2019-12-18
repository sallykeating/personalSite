function displayUXUI(){
    document.getElementByClassName('ux-ui').style.display = "block";
    document.getElementByClassName('web').style.display = "none";
    document.getElementByClassName('games').style.display = "none";
}

function displayWeb(){
    document.getElementByClassName('ux-ui').style.display = "none";
    document.getElementByClassName('web').style.display = "block";
    document.getElementByClassName('games').style.display = "none";
}

function displayGames(){
    document.getElementByClassName('ux-ui').style.display = "none";
    document.getElementByClassName('web').style.display = "none";
    document.getElementByClassName('games').style.display = "block";
}

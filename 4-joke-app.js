// https://api.blablagues.net/?rub=blagues

function jokeDisplay() {

    fetch("https://api.blablagues.net/?rub=blagues")
    .then((res) => res.json())
    .then((datas) => {
        console.log(datas.data);
        let joke = datas.data.content;



        header.textContent = joke.text_head;
        content.text !== "" ? 
        content.textContent = joke.text : content.textContent = joke.text_hidden;

        
        if (datas.data.like > "30") document.querySelector(".app").style.backgroundColor = "green";
        
        if (datas.data.is_adult != "0") document.querySelector(".app").styles.backgroundColor = "#99000";
    });
}

jokeDisplay();

document.body.addEventListener("click",jokeDisplay)
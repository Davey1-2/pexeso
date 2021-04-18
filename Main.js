window.onload = () => {
    let cards = ["😂", "🥰", "🤔", "🙂", "😍", "😎", "🤩", "😃"]
    let cards2 = cards.concat(cards)
    let count = 0

    function shuffleArray(array) {
        for (let i = 0; i < cards2.length; i++) {

            let randomized = Math.floor(Math.random() * cards2.length);

            let temp = array[i];
            array[i] = array[randomized];
            array[randomized] = temp;
        }
        return array;
    }


    let arrFinal = shuffleArray(cards2);
    let  board = document.createElement('div')
        board.id = "table"
    let a = document.getElementById("container")

    for (let i = 0; i < arrFinal.length; i++) {
        let lmao = document.createElement('div')
        lmao.id = "lmao"
        let text = document.createTextNode(arrFinal[i]);
        lmao.appendChild(text)
        board.appendChild(lmao)
    }
    a.appendChild(board)

    document.body.appendChild(a)
}


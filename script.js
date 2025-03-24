const cards = [
    '1', '2', '3', '4', '5',
    '6', '7', '8', '9', '10',
    '1', '2', '3', '4', '5',
    '6', '7', '8', '9', '10'
]

const pairs = [
    [1, 11], [2, 12], [3, 13], [4, 14], [5, 15], [6, 16], [7, 17], [8, 18], [9, 19], [10, 20]
]

let open = [];
let cardsLeft = 20;

for (let i = 1; i <= 20; i++) {
    let id = i.toString();
    document.getElementById(id).addEventListener("click", function(){
        document.getElementById(id).innerHTML = cards[id-1];
        document.getElementById(id).setAttribute("class", "open");
        open.push(i);
        if (open.length == 2) {
            var correct = false;
            for (k of pairs) {
                if (([Number(open[0]),Number(open[1])].join() == k.join()) || ([Number(open[1]),Number(open[0])].join() == k.join())) {
                    correct = true;
                }
            }
            if (correct) {
                for (j of open) {
                    document.getElementById(j).setAttribute("class", "correct");
                }
                cardsLeft -= 2;
                document.getElementById("cardsLeft").innerHTML =  cardsLeft;
                open = [];
                if (cardsLeft == 0) {
                    Swal.fire({
                        title: "Congratulations!",
                        text: "You finished the game! Refresh the page to restart.",
                        icon: "success"
                      });
                }
            }
            else {
                for (j of open) {
                    document.getElementById(j).setAttribute("class", "wrong");
                }
                setTimeout(function(){
                    for (j of open) {
                        document.getElementById(j).innerHTML = "Open me!";
                        document.getElementById(j).removeAttribute("class");
                    }
                    open = [];
                }, 1000);
            }
        }
    })
}
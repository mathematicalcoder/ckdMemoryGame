const cards = [
    'How many stages does CKD have? (Consider 3A and 3B to be one stage.)',
    'What is one cause of CKD that causes urine to back up into your kidneys?',
    'Maintaining a healthy weight',
    'Acute kidney failure',
    'What is the gradual loss of kidney function over time?',
    'Vesicoureteral reflex',
    'Diabetes',
    'Which is the sudden, reversible condition where the kidneys lose function quickly due to factors like dehydration or infection?',
    '4',
    '2',
    'What is a way to reduce your risk of CKD by addressing obesity?',
    'Which stage of CKD is considered as severe loss of kidney function, with an eGFR of 15 to 29?',
    '5',
    'What is a risk factor of CKD where the body can\'t absorb sugar easily?',
    'What is one cause of CKD that causes an inflammation of the kidney\'s tubules and surrounding structures?',
    'What is one cause of CKD that causes an inflammation of the kidney\'s filtering units?',
    'Interstitial nephritis',
    'Chronic kidney disease',
    'Glomerulonephritis',
    'Which stage of CKD is considered as a mild loss of kidney function, with an eGFR of 60 to 89?'
];


const pairs = [
    [1, 13], [12, 9], [2,6], [16,19], [15,17], [8,4], [14,7], [11,3], [5,18], [20,10]
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
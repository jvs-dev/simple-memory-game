let card1 = document.getElementById('card1')
let card2 = document.getElementById('card2')
let card3 = document.getElementById('card3')
let card4 = document.getElementById('card4')
let card5 = document.getElementById('card5')
let card6 = document.getElementById('card6')
let vez2 = document.getElementById('vez2')
let vez1 = document.getElementById('vez1')
let hp1pl1 = document.getElementById('hp1pl1')
let hp2pl1 = document.getElementById('hp2pl1')
let hp3pl1 = document.getElementById('hp3pl1')
let hp1pl2 = document.getElementById('hp1pl2')
let hp2pl2 = document.getElementById('hp2pl2')
let hp3pl2 = document.getElementById('hp3pl2')
let winnerposition = document.querySelector('.winnerposition')
let plrwnnnm = document.querySelector('.plrwnnnm')
let loadwindow = document.querySelector('.loadwindow')

localStorage.setItem('player1', 3)
localStorage.setItem('player2', 3)

card1.onclick = function() {
    if (card1.classList.contains('back')) {
        card1.classList.add('width0')
        setTimeout(() => {
            card1.classList.remove('back')
            card1.classList.remove('width0')
        }, 100);
    }
    if (card2.classList.contains('back') == false || card4.classList.contains('back') == false || card5.classList.contains('back') == false || card6.classList.contains('back') == false) {
        vez1.classList.toggle('dpnone')
        vez2.classList.toggle('dpnone')
        if (card2.classList.contains('back') == false) {
            setTimeout(() => {
                card2.classList.add('width0')
                setTimeout(() => {
                    card2.classList.add('back')
                    card2.classList.remove('width0')
                }, 100);
            }, 1000);
        }
        if (card4.classList.contains('back') == false) {
            setTimeout(() => {
                card4.classList.add('width0')
                setTimeout(() => {
                    card4.classList.add('back')
                    card4.classList.remove('width0')
                }, 100);
            }, 1000);
        }
        if (card5.classList.contains('back') == false) {
            setTimeout(() => {
                card5.classList.add('width0')
                setTimeout(() => {
                    card5.classList.add('back')
                    card5.classList.remove('width0')
                }, 100);
            }, 1000);
        }
        if (card6.classList.contains('back') == false) {
            setTimeout(() => {
                card6.classList.add('width0')
                setTimeout(() => {
                    card6.classList.add('back')
                    card6.classList.remove('width0')
                }, 100);
            }, 1000);
        }
        setTimeout(() => {
            card1.classList.add('width0')
            setTimeout(() => {
                card1.classList.add('back')
                card1.classList.remove('width0')
            }, 100);
        }, 1000);
    }
    if (card3.classList.contains('back') == false) {
        if (vez2.classList.contains('dpnone')) {
            localStorage.player2 = Number(localStorage.player2) - 1
            if (localStorage.player2 == 2) {
                hp3pl2.classList.add('semhp')
            }
            if (localStorage.player2 == 1) {
                hp1pl2.classList.add('semhp')
                hp2pl2.classList.add('semhp')
                hp3pl2.classList.add('semhp')
                setTimeout(() => {
                    winnerposition.classList.remove('dpnone')
                    winnerposition.classList.add('dpflex')
                    plrwnnnm.textContent="Player 1"
                }, 2000);
            }
        }
        if (vez1.classList.contains('dpnone')) {
            localStorage.player1 = Number(localStorage.player1) - 1
            if (localStorage.player1 == 2) {
                hp3pl1.classList.add('semhp')
            }
            if (localStorage.player1 == 1) {
                hp1pl1.classList.add('semhp')
                hp2pl1.classList.add('semhp')
                hp3pl1.classList.add('semhp')
                setTimeout(() => {
                    winnerposition.classList.remove('dpnone')
                    winnerposition.classList.add('dpflex')
                    plrwnnnm.textContent="Player 2"
                }, 2000);
            }
        }
        
        setTimeout(() => {
            card1.classList.add('width0')
            card3.classList.add('width0')
            setTimeout(() => {
                card1.classList.add('dpnone')
                card3.classList.add('dpnone')    
                card1.classList.add('back')
                card3.classList.add('back')
            }, 500);
        }, 1000);
    }
}



card2.onclick = function() {
    if (card2.classList.contains('back')) {
        card2.classList.add('width0')
        setTimeout(() => {
            card2.classList.remove('back')
            card2.classList.remove('width0')
        }, 100);
    }
    if (card1.classList.contains('back') == false || card3.classList.contains('back') == false || card5.classList.contains('back') == false || card6.classList.contains('back') == false) {
        vez1.classList.toggle('dpnone')
        vez2.classList.toggle('dpnone')
        if (card1.classList.contains('back') == false) {
            setTimeout(() => {
                card1.classList.add('width0')
                setTimeout(() => {
                    card1.classList.add('back')
                    card1.classList.remove('width0')
                }, 100);
            }, 1000);
        }
        if (card3.classList.contains('back') == false) {
            setTimeout(() => {
                card3.classList.add('width0')
                setTimeout(() => {
                    card3.classList.add('back')
                    card3.classList.remove('width0')
                }, 100);
            }, 1000);
        }
        if (card5.classList.contains('back') == false) {
            setTimeout(() => {
                card5.classList.add('width0')
                setTimeout(() => {
                    card5.classList.add('back')
                    card5.classList.remove('width0')
                }, 100);
            }, 1000);
        }
        if (card6.classList.contains('back') == false) {
            setTimeout(() => {
                card6.classList.add('width0')
                setTimeout(() => {
                    card6.classList.add('back')
                    card6.classList.remove('width0')
                }, 100);
            }, 1000);
        }
        setTimeout(() => {
            card2.classList.add('width0')
            setTimeout(() => {
                card2.classList.add('back')
                card2.classList.remove('width0')
            }, 100);
        }, 1000);
    }
    if (card4.classList.contains('back') == false) {
        if (vez2.classList.contains('dpnone')) {
            localStorage.player2 = Number(localStorage.player2) - 1
            if (localStorage.player2 == 2) {
                hp3pl2.classList.add('semhp')
            }
            if (localStorage.player2 == 1) {
                hp1pl2.classList.add('semhp')
                hp2pl2.classList.add('semhp')
                hp3pl2.classList.add('semhp')
                setTimeout(() => {
                    winnerposition.classList.remove('dpnone')
                    winnerposition.classList.add('dpflex')
                    plrwnnnm.textContent="Player 1"
                }, 2000);
            }
        }
        if (vez1.classList.contains('dpnone')) {
            localStorage.player1 = Number(localStorage.player1) - 1
            if (localStorage.player1 == 2) {
                hp3pl1.classList.add('semhp')
            }
            if (localStorage.player1 == 1) {
                hp1pl1.classList.add('semhp')
                hp2pl1.classList.add('semhp')
                hp3pl1.classList.add('semhp')
                setTimeout(() => {
                    winnerposition.classList.remove('dpnone')
                    winnerposition.classList.add('dpflex')
                    plrwnnnm.textContent="Player 2"
                }, 2000);
            }
        }
        setTimeout(() => {
            card2.classList.add('width0')
            card4.classList.add('width0')
            setTimeout(() => {
                card2.classList.add('dpnone')
                card4.classList.add('dpnone')
                card2.classList.add('back')
                card4.classList.add('back')
            }, 500);
        }, 1000);
    }
}



card3.onclick = function() {
    if (card3.classList.contains('back')) {
        card3.classList.add('width0')
        setTimeout(() => {
            card3.classList.remove('back')
            card3.classList.remove('width0')
        }, 100);
    }
    if (card2.classList.contains('back') == false || card4.classList.contains('back') == false || card5.classList.contains('back') == false || card6.classList.contains('back') == false) {
        vez1.classList.toggle('dpnone')
        vez2.classList.toggle('dpnone')
        if (card2.classList.contains('back') == false) {
            setTimeout(() => {
                card2.classList.add('width0')
                setTimeout(() => {
                    card2.classList.add('back')
                    card2.classList.remove('width0')
                }, 100);
            }, 1000);
        }
        if (card4.classList.contains('back') == false) {
            setTimeout(() => {
                card4.classList.add('width0')
                setTimeout(() => {
                    card4.classList.add('back')
                    card4.classList.remove('width0')
                }, 100);
            }, 1000);
        }
        if (card5.classList.contains('back') == false) {
            setTimeout(() => {
                card5.classList.add('width0')
                setTimeout(() => {
                    card5.classList.add('back')
                    card5.classList.remove('width0')
                }, 100);
            }, 1000);
        }
        if (card6.classList.contains('back') == false) {
            setTimeout(() => {
                card6.classList.add('width0')
                setTimeout(() => {
                    card6.classList.add('back')
                    card6.classList.remove('width0')
                }, 100);
            }, 1000);
        }
        setTimeout(() => {
            card3.classList.add('width0')
            setTimeout(() => {
                card3.classList.add('back')
                card3.classList.remove('width0')
            }, 100);
        }, 1000);
    }
    if (card1.classList.contains('back') == false) {
        if (vez2.classList.contains('dpnone')) {
            localStorage.player2 = Number(localStorage.player2) - 1
            if (localStorage.player2 == 2) {
                hp3pl2.classList.add('semhp')
            }
            if (localStorage.player2 == 1) {
                hp1pl2.classList.add('semhp')
                hp2pl2.classList.add('semhp')
                hp3pl2.classList.add('semhp')
                setTimeout(() => {
                    winnerposition.classList.remove('dpnone')
                    winnerposition.classList.add('dpflex')
                    plrwnnnm.textContent="Player 1"
                }, 2000);
            }
        }
        if (vez1.classList.contains('dpnone')) {
            localStorage.player1 = Number(localStorage.player1) - 1
            if (localStorage.player1 == 2) {
                hp3pl1.classList.add('semhp')
            }
            if (localStorage.player1 == 1) {
                hp1pl1.classList.add('semhp')
                hp2pl1.classList.add('semhp')
                hp3pl1.classList.add('semhp')
                setTimeout(() => {
                    winnerposition.classList.remove('dpnone')
                    winnerposition.classList.add('dpflex')
                    plrwnnnm.textContent="Player 2"
                }, 2000);
            }
        }
        setTimeout(() => {
            card1.classList.add('width0')
            card3.classList.add('width0')
            setTimeout(() => {
                card1.classList.add('dpnone')
                card3.classList.add('dpnone')
                card1.classList.add('back')
                card3.classList.add('back')
            }, 500);
        }, 1000);
    }
}



card4.onclick = function() {
    if (card4.classList.contains('back')) {
        card4.classList.add('width0')
        setTimeout(() => {
            card4.classList.remove('back')
            card4.classList.remove('width0')
        }, 100);
    }
    if (card1.classList.contains('back') == false || card3.classList.contains('back') == false || card5.classList.contains('back') == false || card6.classList.contains('back') == false) {
        vez1.classList.toggle('dpnone')
        vez2.classList.toggle('dpnone')
        if (card1.classList.contains('back') == false) {
            setTimeout(() => {
                card1.classList.add('width0')
                setTimeout(() => {
                    card1.classList.add('back')
                    card1.classList.remove('width0')
                }, 100);
            }, 1000);
        }
        if (card3.classList.contains('back') == false) {
            setTimeout(() => {
                card3.classList.add('width0')
                setTimeout(() => {
                    card3.classList.add('back')
                    card3.classList.remove('width0')
                }, 100);
            }, 1000);
        }
        if (card5.classList.contains('back') == false) {
            setTimeout(() => {
                card5.classList.add('width0')
                setTimeout(() => {
                    card5.classList.add('back')
                    card5.classList.remove('width0')
                }, 100);
            }, 1000);
        }
        if (card6.classList.contains('back') == false) {
            setTimeout(() => {
                card6.classList.add('width0')
                setTimeout(() => {
                    card6.classList.add('back')
                    card6.classList.remove('width0')
                }, 100);
            }, 1000);
        }
        setTimeout(() => {
            card4.classList.add('width0')
            setTimeout(() => {
                card4.classList.add('back')
                card4.classList.remove('width0')
            }, 100);
        }, 1000);
    }
    if (card2.classList.contains('back') == false) {
        if (vez2.classList.contains('dpnone')) {
            localStorage.player2 = Number(localStorage.player2) - 1
            if (localStorage.player2 == 2) {
                hp3pl2.classList.add('semhp')
            }
            if (localStorage.player2 == 1) {
                hp1pl2.classList.add('semhp')
                hp2pl2.classList.add('semhp')
                hp3pl2.classList.add('semhp')
                setTimeout(() => {
                    winnerposition.classList.remove('dpnone')
                    winnerposition.classList.add('dpflex')
                    plrwnnnm.textContent="Player 1"
                }, 2000);
            }
        }
        if (vez1.classList.contains('dpnone')) {
            localStorage.player1 = Number(localStorage.player1) - 1
            if (localStorage.player1 == 2) {
                hp3pl1.classList.add('semhp')
            }
            if (localStorage.player1 == 1) {
                hp1pl1.classList.add('semhp')
                hp2pl1.classList.add('semhp')
                hp3pl1.classList.add('semhp')
                setTimeout(() => {
                    winnerposition.classList.remove('dpnone')
                    winnerposition.classList.add('dpflex')
                    plrwnnnm.textContent="Player 2"
                }, 2000);
            }
        }
        setTimeout(() => {
            card2.classList.add('width0')
            card4.classList.add('width0')
            setTimeout(() => {
                card2.classList.add('dpnone')
                card4.classList.add('dpnone')
                card2.classList.add('back')
                card4.classList.add('back')
            }, 500);
        }, 1000);
    }
}



card5.onclick = function() {
    if (card5.classList.contains('back')) {
        card5.classList.add('width0')
        setTimeout(() => {
            card5.classList.remove('back')
            card5.classList.remove('width0')
        }, 100);
    }
    if (card1.classList.contains('back') == false || card2.classList.contains('back') == false || card3.classList.contains('back') == false || card4.classList.contains('back') == false) {
        vez1.classList.toggle('dpnone')
        vez2.classList.toggle('dpnone')
        if (card1.classList.contains('back') == false) {
            setTimeout(() => {
                card1.classList.add('width0')
                setTimeout(() => {
                    card1.classList.add('back')
                    card1.classList.remove('width0')
                }, 100);
            }, 1000);
        }
        if (card2.classList.contains('back') == false) {
            setTimeout(() => {
                card2.classList.add('width0')
                setTimeout(() => {
                    card2.classList.add('back')
                    card2.classList.remove('width0')
                }, 100);
            }, 1000);
        }
        if (card3.classList.contains('back') == false) {
            setTimeout(() => {
                card3.classList.add('width0')
                setTimeout(() => {
                    card3.classList.add('back')
                    card3.classList.remove('width0')
                }, 100);
            }, 1000);
        }
        if (card4.classList.contains('back') == false) {
            setTimeout(() => {
                card4.classList.add('width0')
                setTimeout(() => {
                    card4.classList.add('back')
                    card4.classList.remove('width0')
                }, 100);
            }, 1000);
        }
        setTimeout(() => {
            card5.classList.add('width0')
            setTimeout(() => {
                card5.classList.add('back')
                card5.classList.remove('width0')
            }, 100);
        }, 1000);
    }
    if (card6.classList.contains('back') == false) {
        if (vez2.classList.contains('dpnone')) {
            localStorage.player2 = Number(localStorage.player2) - 1
            if (localStorage.player2 == 2) {
                hp3pl2.classList.add('semhp')
            }
            if (localStorage.player2 == 1) {
                hp1pl2.classList.add('semhp')
                hp2pl2.classList.add('semhp')
                hp3pl2.classList.add('semhp')
                setTimeout(() => {
                    winnerposition.classList.remove('dpnone')
                    winnerposition.classList.add('dpflex')
                    plrwnnnm.textContent="Player 1"
                }, 2000);
            }
        }
        if (vez1.classList.contains('dpnone')) {
            localStorage.player1 = Number(localStorage.player1) - 1
            if (localStorage.player1 == 2) {
                hp3pl1.classList.add('semhp')
            }
            if (localStorage.player1 == 1) {
                hp1pl1.classList.add('semhp')
                hp2pl1.classList.add('semhp')
                hp3pl1.classList.add('semhp')
                setTimeout(() => {
                    winnerposition.classList.remove('dpnone')
                    winnerposition.classList.add('dpflex')
                    plrwnnnm.textContent="Player 2"
                }, 2000);
            }
        }
        setTimeout(() => {
            card6.classList.add('width0')
            card5.classList.add('width0')
            setTimeout(() => {
                card6.classList.add('dpnone')
                card5.classList.add('dpnone')
                card6.classList.add('back')
                card5.classList.add('back')
            }, 500);
        }, 1000);
    }
}



card6.onclick = function() {
    if (card6.classList.contains('back')) {
        card6.classList.add('width0')
        setTimeout(() => {
            card6.classList.remove('back')
            card6.classList.remove('width0')
        }, 100);
    }
    if (card1.classList.contains('back') == false || card2.classList.contains('back') == false || card3.classList.contains('back') == false || card4.classList.contains('back') == false) {
        vez1.classList.toggle('dpnone')
        vez2.classList.toggle('dpnone')
        if (card1.classList.contains('back') == false) {
            setTimeout(() => {
                card1.classList.add('width0')
                setTimeout(() => {
                    card1.classList.add('back')
                    card1.classList.remove('width0')
                }, 100);
            }, 1000);
        }
        if (card2.classList.contains('back') == false) {
            setTimeout(() => {
                card2.classList.add('width0')
                setTimeout(() => {
                    card2.classList.add('back')
                    card2.classList.remove('width0')
                }, 100);
            }, 1000);
        }
        if (card3.classList.contains('back') == false) {
            setTimeout(() => {
                card3.classList.add('width0')
                setTimeout(() => {
                    card3.classList.add('back')
                    card3.classList.remove('width0')
                }, 100);
            }, 1000);
        }
        if (card4.classList.contains('back') == false) {
            setTimeout(() => {
                card4.classList.add('width0')
                setTimeout(() => {
                    card4.classList.add('back')
                    card4.classList.remove('width0')
                }, 100);
            }, 1000);
        }
        setTimeout(() => {
            card6.classList.add('width0')
            setTimeout(() => {
                card6.classList.add('back')
                card6.classList.remove('width0')
            }, 100);
        }, 1000);
    }
    if (card5.classList.contains('back') == false) {
        if (vez2.classList.contains('dpnone')) {
            localStorage.player2 = Number(localStorage.player2) - 1
            if (localStorage.player2 == 2) {
                hp3pl2.classList.add('semhp')
            }
            if (localStorage.player2 == 1) {
                hp1pl2.classList.add('semhp')
                hp2pl2.classList.add('semhp')
                hp3pl2.classList.add('semhp')
                setTimeout(() => {
                    winnerposition.classList.remove('dpnone')
                    winnerposition.classList.add('dpflex')
                    plrwnnnm.textContent="Player 1"
                }, 2000);
            }
        }
        if (vez1.classList.contains('dpnone')) {
            localStorage.player1 = Number(localStorage.player1) - 1
            if (localStorage.player1 == 2) {
                hp3pl1.classList.add('semhp')
            }
            if (localStorage.player1 == 1) {
                hp1pl1.classList.add('semhp')
                hp2pl1.classList.add('semhp')
                hp3pl1.classList.add('semhp')
                setTimeout(() => {
                    winnerposition.classList.remove('dpnone')
                    winnerposition.classList.add('dpflex')
                    plrwnnnm.textContent="Player 2"
                }, 2000);
            }
        }
        setTimeout(() => {
            card6.classList.add('width0')
            card5.classList.add('width0')
            setTimeout(() => {
                card6.classList.add('dpnone')
                card5.classList.add('dpnone')
                card6.classList.add('back')
                card5.classList.add('back')
            }, 500);
        }, 1100);
    }
}

window.addEventListener('load', function () {
    card1.classList.add('back')
    card2.classList.add('back')
    card3.classList.add('back')
    card4.classList.add('back')
    card5.classList.add('back')
    card6.classList.add('back')
    setTimeout(() => {
        loadwindow.classList.remove('dpflex')
        loadwindow.classList.add('dpnone')
    }, 2000); 
})
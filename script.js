const display = $("#display");
const history = $("#history");

function keyPad() {
    $(".dis-btn").click(function() {
        $(".clear").text("C")
    
        var clickedBtn = $(this).text();
        display.val(display.val() + clickedBtn);
    });

    $(document).keypress(function(event) {
        var keyPressed = event.key;
        if (keyPressed === '1' || keyPressed === '2' || keyPressed === '3' || keyPressed === '4' || keyPressed === '5' || keyPressed === '6' || keyPressed === '7' || keyPressed === '8' || keyPressed === '9' || keyPressed === '0') {
            $(".clear").text("C")
        }
        if (keyPressed === '1' || keyPressed === '2' || keyPressed === '3' || keyPressed === '4' || keyPressed === '5' || keyPressed === '6' || keyPressed === '7' || keyPressed === '8' || keyPressed === '9' || keyPressed === '0' || keyPressed === '+' || keyPressed === '-' || keyPressed === '*' || keyPressed === '/' || keyPressed === '%') {
            display.val(display.val() + keyPressed);
        }
    });
}

function clear() {
    $(document).keydown(function(event) {
        if (event.key === 'c') {
            $(".clear").text("AC")
            display.val("");
        } else if (event.key === 'a') {
            display.val("");
            history.val("");
        }
    });

    $(".clear").click(function() {
        var clickedBtn = $(this).text();
        console.log(clickedBtn)
    
        if (clickedBtn == 'C') {
            $(".clear").text("AC")
            display.val("");
        } else if (clickedBtn == 'AC') {
            display.val("");
            history.val("");
        }
    });
}

function calc() {
    try {
        $(".calc").click(function() {
            const result = eval(display.val());
            history.val(history.val() + display.val() + ' = ' + result + '\n');
            display.val(result);
        });
        
        $(document).keypress(function(event) {
            if (event.key === '=' || event.key === 'Enter') {
                const result = eval(display.val());
                history.val(history.val() + display.val() + ' = ' + result + '\n');
                display.val(result);
            }
        });
    } catch (e) {
        display.val(display.val());
    };
}

function undo() {
    $(".del").click(function() {
        display.val(display.val().slice(0, -1));
    });

    $(document).keydown(function(event) {
        if (event.key === 'Backspace') {
            display.val(display.val().slice(0, -1));
        }
    });
}

keyPad()
clear()
calc()
undo()

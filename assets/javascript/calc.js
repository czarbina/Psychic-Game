let input = "";
let input_re = /(\d+)([*|-||+|/|^])(\d+)/;

$(document).ready(function() {
    $('.calc_button').click((btn)=>{
        input = input.concat($(btn.currentTarget).val());
        Array.prototype.forEach.call(document.getElementsByClassName('calc_input'), function(elem) {
            elem.textContent = input;
        });
    }
    );

    $('#equals_btn').click((btn)=>{
        let matches = input.match(input_re);
        if (matches) {
            let num1 = parseInt(matches[1]);
            let operator = matches[2];
            let num2 = parseInt(matches[3]);
            Array.prototype.forEach.call(document.getElementsByClassName('result'), function(elem) {
			elem.textContent = "Result: " + do_math(num1, operator, num2);
		});
            
        }
        
    }
    );

    $('.clear_btn').click((btn)=>{
        input = "";
        Array.prototype.forEach.call(document.getElementsByClassName('calc_input'), function(elem) {
            elem.textContent = input;
        });
    }
    );

    let do_math = function do_math(num1, op, num2) {
        switch (op) {
        case '+':
            return num1 + num2;
        case '*':
            return num1 * num2;
        case '^':
            return Math.exp(num1, num2);
        case '-':
            return num1 - num2;
        case '/':
            return num1 / num2;
        default:

        }
    }

});

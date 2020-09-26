let n1, op, n2, res, point, isFixed;
n1 = op = n2 = res = point = isFixed = null;
let div = 1;

function display() {
    let screen = "";

    for (let element of arguments) {
        switch (element) {
            case Math.PI:
                screen = `${screen}π `;
                break;
            case Math.E:
                screen = `${screen}e `;
                break;
            case res:
                screen = `${screen}Ans `;
                break;
            default:
                screen = `${screen}${element} `;
                break;
        }
    }

    document.getElementById("out").value = screen;
}

function set(num) {
    if (!isFixed) {
        if (op == null) {
            if (point) {
                div /= 10;
                n1 = num * div + n1;
            } else {
                n1 = num + n1 * 10;
            }

            display(n1);
        } else {
            if (point) {
                div /= 10;
                n2 = num * div + n2;
            } else {
                n2 = num + n2 * 10;
            }

            display(n1, op, n2);
        }
    }
}

function setFixed(num) {
    if (num && !isFixed && !point) {
        set(num);

        isFixed = true;
    }
}

function setop(operator) {
    if (n1 != null) {
        op = operator;

        point = false;
        isFixed = false;
        div = 1;
        n2 = null;

        display(n1, op);
    }
}

function float() {
    if (!point && !isFixed) {
        point = true;
        div = 1;

        if (op == null) {
            display(n1 + ".");
        } else {
            display(n1, op, n2 + ".");
        }
    }
}

function ce() {
    n1 = null;
    op = null;
    n2 = null;
    div = 1;
    point = false;
    isFixed = false;

    document.getElementById("out").value = 0;
}

function calculate() {
    switch (op) {
        case "+":
            res = n1 + n2;
            ce();
            document.getElementById("out").value = res;
            break;
        case "-":
            res = n1 - n2;
            ce();
            document.getElementById("out").value = res;
            break;
        case "*":
            res = n1 * n2;
            ce();
            document.getElementById("out").value = res;
            break;
        case "/":
            res = n1 / n2;
            ce();
            document.getElementById("out").value = res;
            break;
        case "^":
            res = n1 ** n2;
            ce();
            document.getElementById("out").value = res;
            break;
    }
}

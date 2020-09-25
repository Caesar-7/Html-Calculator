let n1, op, n2, res, point, isAns;
n1 = op = n2 = res = point = isAns = null;
let div = 1;

function display() {
	let screen = "";

	for (element of arguments) {
		screen = `${screen}${element} `;
	}

    document.getElementById("out").value = screen;
}

function set(num) {
	if (!isAns) {
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

function setop(operator) {
	if (n1 != null) {
        op = operator;

		point = false;
		isAns = false;
        div = 1;
        n2 = null;

        display(n1, op);
    }
}

function float() {
    if (!point && !isAns) {
		point = true;
		div = 1;

		if (op == null) {
			display(n1 + ".");
		} else {
			display(n1, op, n2 + ".")
		}
	}
}

function ans() {
	if (res && !isAns && !point) {
		set(res);

    	isAns = true;
	}
}

function ce() {
    n1 = null;
	op = null;
	n2 = null;
	div = 1;
    point = false;

    document.getElementById("out").value = 0;
}

function calculate() {
	switch(op) {
		case "+":
			res = n1 + n2;
			ce();
			document.getElementById("out").value = res;

			return;
		case "-":
			res = n1 - n2;
			ce();
			document.getElementById("out").value = res;

			return;
		case "*":
			res = n1 * n2;
			ce();
			document.getElementById("out").value = res;

			return;
		case "/":
			res = n1 / n2;
			ce();
			document.getElementById("out").value = res;

			return;
		case "**":
			res = n1 ** n2;
			ce();
			document.getElementById("out").value = res;

			return;
	}
}


window.onload = () =>
	{
		document.querySelector('#calculate').onclick = calculateTip;
	}

function calculateTip() {
	/*assign values of ID : amount, person and service to
	variables for further calculations.*/
	let amount = document.querySelector('#amount').value;
	let persons = document.querySelector('#persons').value;
	let service = document.querySelector('#services').value;

	console.log(service);
	if (amount === '' && service === 'Select') {
		alert("Please enter valid values");
		return;
	}

	if (persons === '1')
	//if there is only one person then we need not to display each.
		document.querySelector('#each').style.display = 'none';
	else
	//if there are more than one person we will display each.
		document.querySelector('#each').style.display = 'block';

	let total = (amount * service) / persons;
	total = total.toFixed(2);

	document.querySelector('.tip').style.display = 'block';
	document.querySelector('#total').innerHTML = total;
}

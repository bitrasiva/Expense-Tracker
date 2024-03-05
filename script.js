document.getElementById('expense-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const date = document.getElementById('date').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const category = document.getElementById('category').value;
    const description = document.getElementById('description').value;

    if (!date || !amount || !category || !description) {
        alert('Please fill in all fields');
        return;
    }

    const expenseList = document.getElementById('expense-list');
    const listItem = document.createElement('li');
    listItem.textContent = `${date}: $${amount} - ${category}: ${description}`;
    expenseList.appendChild(listItem);

    const totalExpense = parseFloat(document.getElementById('total-expense').textContent) + amount;
    document.getElementById('total-expense').textContent = totalExpense.toFixed(2);
});
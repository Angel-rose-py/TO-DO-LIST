import type { Transaction } from "../types/transaction";

interface BalanceProps {
  transactions: Transaction[];
}

function Balance({ transactions }: BalanceProps) {
  const income = transactions
    .filter((transaction) => transaction.type === "income")
    .reduce((total, transaction) => total + transaction.amount, 0);

  const expense = transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce((total, transaction) => total + transaction.amount, 0);

  const balance = income - expense;

  return (
    <section>
      <h2>Your Balance</h2>
      <h1>₹{balance.toFixed(2)}</h1>

      <div>
        <div>
          <h3>Income</h3>
          <p>₹{income.toFixed(2)}</p>
        </div>

        <div>
          <h3>Expense</h3>
          <p>₹{expense.toFixed(2)}</p>
        </div>
      </div>
    </section>
  );
}

export default Balance;
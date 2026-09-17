import { useState } from "react";
import type { Transaction } from "../types/transaction";

interface TransactionFormProps {
  addTransaction: (transaction: Transaction) => void;
}

function TransactionForm({ addTransaction }: TransactionFormProps) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState<"income" | "expense">("income");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!title || !amount) {
      alert("Please fill all fields");
      return;
    }

    const newTransaction: Transaction = {
      id: Date.now(),
      title: title,
      amount: Number(amount),
      type: type,
    };

    addTransaction(newTransaction);

    setTitle("");
    setAmount("");
    setType("income");
  }

  return (
    <section>
      <h2>Add Transaction</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>

          <input
            type="text"
            placeholder="Enter transaction name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label>Amount</label>

          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div>
          <label>Type</label>

          <select
            value={type}
            onChange={(e) =>
              setType(e.target.value as "income" | "expense")
            }
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>

        <button type="submit">Add Transaction</button>
      </form>
    </section>
  );
}

export default TransactionForm;
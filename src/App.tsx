import { useState } from "react";
import type { Transaction } from "./types/transaction";
import Header from "./components/Header";
import Balance from "./components/Balance";
import TransactionForm from "./components/TransactionForm";
import "./App.css";
function App() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  function addTransaction(transaction: Transaction) {
    setTransactions([...transactions, transaction]);
  }

  return (
    <div className="app-container">
      <div className="expense-container">
        <Header />

        <main>
          <Balance transactions={transactions} />

          <TransactionForm addTransaction={addTransaction} />

          <p>Total Transactions: {transactions.length}</p>
        </main>
      </div>
    </div>
  );
}

export default App;
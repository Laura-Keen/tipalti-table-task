import { useEffect, useState } from "react";
import Table from "./Components/Table";

export type Expenses = {
  amount: number;
  category: string;
  date: string;
  id: number;
  merchant: string;
};

export type Header = string;

function App() {
  const [expenses, setExpenses] = useState<Expenses[]>([]);

  useEffect(() => {
    fetch(`https://tip-transactions.vercel.app/api/transactions?page=1`)
      .then((res) => res.json())
      .then((data) => setExpenses(data.transactions))
      .catch((err) => console.log(err));
  });

  const tableHeaders = ["ID", "Date", "Amount", "Merchant", "Category"];

  return (
    <div className="px-4 md:px-16 py-2 md:py-8">
      <div className="flex justify-center mb-8 text-2xl font-bold">
        <h1>Expenses</h1>
      </div>
      <Table expenses={expenses} tableHeaders={tableHeaders} />
    </div>
  );
}

export default App;

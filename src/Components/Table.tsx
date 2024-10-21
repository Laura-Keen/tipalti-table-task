import { Expenses, Header } from "../App";

type TableProps = {
  expenses: Expenses[];
  tableHeaders: Header[];
};

export default function Table({ expenses, tableHeaders }: TableProps) {
  // Formatting
  const formatDate = (isoString: string): string => {
    const date = new Date(isoString);

    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString();

    return `${hours}:${minutes} - ${day}/${month}/${year}`;
  };

  function capitalise(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <table className="w-full text-sm">
      <thead>
        <tr className="text-left bg-primary">
          {tableHeaders.map((header, index) => (
            <th
              key={index}
              className="pr-2 md:pr-12 pl-2 py-2 border border-secondary"
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {expenses.map((transaction) => (
          <tr key={transaction.id}>
            <td className="pr-2 md:pr-12 pl-2 py-2 border border-secondary">
              {transaction.id ? <p>{transaction.id}</p> : <p>N/A</p>}
            </td>
            <td className="pr-2 md:pr-12 pl-2 py-2 border border-secondary">
              {transaction.date ? (
                <p>{formatDate(transaction.date)}</p>
              ) : (
                <p>N/A</p>
              )}
            </td>
            <td className="pr-2 md:pr-12 pl-2 py-2 border border-secondary">
              {transaction.amount ? <p>£{transaction.amount}</p> : <p>N/A</p>}
            </td>
            <td className="pr-2 md:pr-12 pl-2 py-2 border border-secondary">
              {transaction.merchant ? (
                <p>{transaction.merchant}</p>
              ) : (
                <p>N/A</p>
              )}
            </td>
            <td className="pr-2 md:pr-12 pl-2 py-2 border border-secondary">
              {transaction.category ? (
                <p>{capitalise(transaction.category)}</p>
              ) : (
                <p>N/A</p>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

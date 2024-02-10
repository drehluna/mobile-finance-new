import React, { createContext, useContext, useEffect, useState } from "react";

const TransactionContext = createContext();

const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions((prevTransactions) => [...prevTransactions, transaction]);
  };

  const clearTransactions = () => {
    setTransactions([]);
  };

  useEffect(() => {
    // console.log(transactions, "transaction");
  }, [transactions]);

  return (
    <TransactionContext.Provider
      value={{ transactions, addTransaction, clearTransactions }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

const useTransaction = () => {
  const context = useContext(TransactionContext);
  if (!context) {
    throw new Error("useTransaction must be used within a TransactionProvider");
  }
  return context;
};

export { TransactionProvider, useTransaction };

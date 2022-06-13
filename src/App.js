import Transaction from "./components/Transaction";
import FormComponent from "./components/FormComponent"
import './App.css'
import { useEffect, useReducer, useState } from "react";
import DataContext from "./data/DataContext";
import ReportComponent from "./components/ReportComponent";

function App() {
  const design = {color:'red',textAlign: 'center',fontSize:'1.5rem'}

  const [items, setItems] = useState([])
  const [reportIncome, setReportIncome] = useState(0)
  const [reportExpense, setReportExpense] = useState(0)
  
  const onAddNewItem = (newItem) => {
    setItems((prevItem)=>{
      return [newItem, ...prevItem]
    })
  }
  useEffect(() => {
    const amounts = items.map(item => item.amount)
    const income =  amounts.filter(element => element > 0).reduce((total,element) => total += element,0)
    const expense =  (amounts.filter(element => element < 0).reduce((total,element) => total += element,0))*(-1)
    setReportIncome(income);
    setReportExpense(expense);
  },[items,reportIncome,reportExpense])

  const [showReport, setShowReport] = useState(false)
  const reduce = (state, action) => {
    switch(action.type){
      case "SHOW" :
        return setShowReport(true)
      case "HIDE" : 
        return setShowReport(false)
    }
  }
  const [result, dispatch] = useReducer(reduce, showReport)

  return (
    <DataContext.Provider value={
      {
        income: reportIncome,
        expense: reportExpense
      }
    }>
      <div className="container">
        <h1 style={design}>แอพบัญชีรายรับ - รายจ่าย</h1>
        {showReport && <ReportComponent/>}
        <FormComponent onAddItem={onAddNewItem}/>
        <Transaction items = {items}/>
        <h1>{result}</h1>
        <button onClick={()=> dispatch({type:"SHOW"})}>แสดง</button>
        <button onClick={()=> dispatch({type:"HIDE"})}>ซ่อน</button>
      </div>
    </DataContext.Provider>
  );
}

export default App;

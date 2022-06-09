import Transaction from "./components/Transaction";


const Title =  () => <h1>แอพบัญชี - รายจ่าย</h1>
const Description = () => <p>บันทึกข้อมูลรายละเอียดในแต่ละวัน</p>

function App() {
  return (
    <div>
      <Title/>
      <Description/>
      <Transaction/>
    </div>
  );
}

export default App;

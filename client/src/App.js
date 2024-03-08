import MyTimesheets from './components/mytimesheets';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TimeSheet from './components/timesheet';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/admin' element={<TimeSheet />} />
          <Route path='/' element={<MyTimesheets />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

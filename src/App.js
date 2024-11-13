import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Courses from './components/Courses';
import About from './components/About';
import Contact from './components/Contact';
import BookCourse from './components/BookCourse';
import Payment from './components/Payment';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import StaffRegister from './components/StaffRegister';
import StaffLogin from './components/StaffLogin';
import ViewStaff from './components/ViewStaff';
import StaffHome from './components/StaffHome';
import StudentFeedback from './components/StudentFeedback';
import AdminFeedbackView from './components/AdminFeedbackView';



function App() {
  return (
 
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/StudentLogin" element={<SignIn />} />
      <Route path="/adminLogin" element={<AdminLogin />} />
      <Route path='/StudentReg' element={<SignUp/>}/>
      <Route path="/AdminDashboard*" element={<AdminDashboard />} />
      <Route path="/Staffsignup" element={<StaffRegister />} />
      <Route path="/staffsignin" element={<StaffLogin />} />
      <Route path="/staffHome" element={<StaffHome />} />
      <Route path='/Home' element={<Home/>}/>
      <Route path='/courses' element={<Courses/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/bookCourse' element={<BookCourse/>}/>
      <Route path='/processPayment' element={<Payment/>}/>
      <Route path='/viewStaff' element={<ViewStaff/>}/>
      <Route path='/submitFeedback' element={<StudentFeedback/>}/>
      <Route path='/viewFeedback' element={<AdminFeedbackView/>}/>
      
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;

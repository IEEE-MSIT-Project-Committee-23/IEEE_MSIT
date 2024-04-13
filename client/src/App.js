import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home";
import EventPage from "./Pages/Event";
import ExeCom from "./Pages/ExeCom";
import Navbar from "./components/Common/Navbar";
import Footer from "./components/Common/Footer";
import AdminLogin from "./Pages/Admin/Login";
import PostEvent from "./Pages/Admin/PostEvent";
import Oppurtunities from "./Pages/Oppurtunities";
import AboutPage from "./Pages/About";
import Newsletter from "./Pages/Newsletters";
import MembershipPage from "./Pages/Membership";
import NotFoundPage from "./Pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/events/:id/*" element={<EventPage />} />
        <Route path="/execom" element={<ExeCom />} />
        <Route path="/opportunities" element={<Oppurtunities />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/membership" element={<MembershipPage />} />
        {/* <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/postEvent" element={PostEvent} /> */}

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

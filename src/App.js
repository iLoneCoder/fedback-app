import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStat from "./components/FeedbackStat";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import MoveToAbout from "./components/MoveToAbout";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {

    return (
        <FeedbackProvider>
            <Router>
                <Routes>
                    <Route path="/" element={
                        <>
                            <Header />
                            <div className="container">
                                <FeedbackForm />
                                <FeedbackStat />
                                <FeedbackList />
                            </div>
                        </>
                    } />
                    <Route path="/about" element={
                        <>
                            <Header />
                            <AboutPage />
                        </>
                    } />
                </Routes>

                <MoveToAbout />

            </Router>
        </FeedbackProvider>
    )


}
export default App;
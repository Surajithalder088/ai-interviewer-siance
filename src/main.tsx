import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import InterviewCopilot from './pages/interview-copilot/page.tsx'
import AiResumeBuilder from './pages/aiResumeBuilder/page.tsx'
import AutoApply from './pages/autoApply/page.tsx'
import MockInterview from './pages/mockInterview/page.tsx'
import AiCareerCoach from './pages/aiCareerCoach/page.tsx'
import QuestionBank from './pages/questionBank/page.tsx'
import Interview from './pages/interview/page.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
   
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/interview-copilot" element={<InterviewCopilot />} />
      <Route path="/ai-resume-builder" element={<AiResumeBuilder />} />
      <Route path="/auto-apply" element={<AutoApply/>} />
      <Route path="/mock-interview" element={<MockInterview/>} />
      <Route path="/interview-coach" element={<AiCareerCoach/>} />
       <Route path="/question-bank" element={<QuestionBank/>} />
    <Route path="/interview/:id" element={<Interview />} />

    </Routes>
    </BrowserRouter>

  </StrictMode>,
)

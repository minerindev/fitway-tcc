import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Public Pages
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PublicReservePage from "./pages/PublicReservePage";

// Protected Pages
import StudentDashboard from "./pages/student/Dashboard";
import StudentPlans from "./pages/student/Plans";
import StudentCourts from "./pages/student/Courts";
import StudentClasses from "./pages/student/Classes";
import StudentPersonal from "./pages/student/Personal";
import StudentProfile from "./pages/student/Profile";

import PersonalDashboard from "./pages/personal/Dashboard";
import PersonalSchedule from "./pages/personal/Schedule";
import PersonalSlots from "./pages/personal/Slots";
import PersonalClasses from "./pages/personal/Classes";

import AdminDashboard from "./pages/admin/Dashboard";
import AdminPlans from "./pages/admin/Plans";
import AdminCourts from "./pages/admin/Courts";
import AdminClasses from "./pages/admin/Classes";
import AdminPersonals from "./pages/admin/Personals";
import AdminPayments from "./pages/admin/Payments";

import NotFound from "./pages/NotFound";
import Index from "./pages/Index";
import { ProtectedRoute } from "./components/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/reserve" element={<PublicReservePage />} />
          
          {/* Student Routes */}
          <Route path="/aluno" element={<ProtectedRoute allowedRoles={['aluno']} />}>
            <Route index element={<Navigate to="/aluno/dashboard" replace />} />
            <Route path="dashboard" element={<StudentDashboard />} />
            <Route path="planos" element={<StudentPlans />} />
            <Route path="quadras" element={<StudentCourts />} />
            <Route path="aulas" element={<StudentClasses />} />
            <Route path="personal" element={<StudentPersonal />} />
            <Route path="perfil" element={<StudentProfile />} />
          </Route>
          
          {/* Personal Routes */}
          <Route path="/personal" element={<ProtectedRoute allowedRoles={['personal']} />}>
            <Route index element={<Navigate to="/personal/dashboard" replace />} />
            <Route path="dashboard" element={<PersonalDashboard />} />
            <Route path="agenda" element={<PersonalSchedule />} />
            <Route path="slots" element={<PersonalSlots />} />
            <Route path="turmas" element={<PersonalClasses />} />
          </Route>
          
          {/* Admin Routes */}
          <Route path="/admin" element={<ProtectedRoute allowedRoles={['admin']} />}>
            <Route index element={<Navigate to="/admin/dashboard" replace />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="planos" element={<AdminPlans />} />
            <Route path="quadras" element={<AdminCourts />} />
            <Route path="aulas" element={<AdminClasses />} />
            <Route path="personais" element={<AdminPersonals />} />
            <Route path="pagamentos" element={<AdminPayments />} />
          </Route>
          
          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
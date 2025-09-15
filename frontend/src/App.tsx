import { Login } from './pages/auth/Login'
import { Register } from './pages/auth/Register'
import { Route, Routes, Navigate } from 'react-router'
import { Home } from './pages/Home'
import { Profile } from './pages/Profile'
import { ProtectedRoute } from './components/ProtectedRoute'

function App() {
  return (
    <Routes >
      <Route path='/' element={<Navigate to='/dashboard' />} />

      {/* Protected Routes Dashboard */}
      <Route index element={<ProtectedRoute><Home /></ProtectedRoute>} />
      <Route path="profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />

      {/* Public Routes */}
      <Route path='/login' element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default App

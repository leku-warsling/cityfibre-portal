import { Routes, Route } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import { Register, Login } from "./pages/auth"

export function App() {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<Register.Page />} />
        <Route path={Login.path} element={<Login.Page />} />
      </Routes>
    </AnimatePresence>
  )
}

export default App

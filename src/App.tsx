import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/Home/Home'

export const App: FC = () => {
  return (
    <Routes>
      <Route path={'/'} element={<HomePage />} />
    </Routes>
  )
}

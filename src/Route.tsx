/* Route.tsx 

・ページ遷移の定義をしている
・遷移の対象になるすべてのページをimport

*/

import { Routes, Route } from 'react-router-dom'

import Login from './LoginPage.tsx'
import Home from './MainPage.tsx'
import Basic_01 from './Documents/basic/01_LED/basic_01_LED.tsx'

export default function AppRoutes() {
  return (
    <Routes>

      {/* LoginPage */}
      <Route path="/" element={<Login />} />

      {/* MainPage */}
      <Route path="/home" element={<Home />} />

      {/* DocumentPages */}
      <Route path="/basic_01" element={<Basic_01 />} />

    </Routes>
  )
}

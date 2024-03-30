// import './App.css'
// import NewsFeedTable from './page/NewsFeed'
// import {Routes, Route} from 'react-router-dom'
// import AddNewsForm from './page/NewsForm'
// import ImageWithDescription from './page/ViewInDetails'
// import EditNewsForm from './page/EditNewsForm'
// import SignupPage from './page/Signup'
// import LoginPage from './page/Login'
// import AdminDashboard from './page/AdminDashboard'

// function App() {
//   return (
//     <div>
//       <AdminDashboard />
//       <Routes>
//         <Route path="/" element={<LoginPage />} />
//         <Route path="/form" element={<AddNewsForm />} />
//         <Route path="/view-in-details/:id" element={<ImageWithDescription />} />
//         <Route path="/edit-news-form/:id" element={<EditNewsForm />} />
//         <Route path="/signup" element={<SignupPage />} />
//         <Route path="/" element={<LoginPage />} />
//         <Route path="/all-news" element={<NewsFeedTable />} />
//       </Routes>
//     </div>
//   )
// }

// export default App

// https://newsapi.org/v2/everything?q=tesla&from=2024-02-26&sortBy=publishedAt&apiKey=e973fc7ea9ce4cde9ecec84c7e872f36

// https://fakenews.squirro.com/news/sport














import './App.css'
import NewsFeedTable from './page/NewsFeed'
import { Routes, Route, useLocation } from 'react-router-dom'
import AddNewsForm from './page/NewsForm'
import ImageWithDescription from './page/ViewInDetails'
import EditNewsForm from './page/EditNewsForm'
import SignupPage from './page/Signup'
import LoginPage from './page/Login'
import AdminDashboard from './page/AdminDashboard'
import AdminNewsFeed from './page/AdminNewsFeed'
import AdminViewDetails from './page/AdminViewDetails'

function App() {
  const location = useLocation();
  const hideAdminDashboard = location.pathname === '/' || location.pathname === '/signup' || location.pathname === '/all-news' || location.pathname.includes('/view-in-details/');

  return (
    <div>
      {!hideAdminDashboard && <AdminDashboard />}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/form" element={<AddNewsForm />} />
        <Route path="/view-in-details/:id" element={<ImageWithDescription />} />
        <Route path="/edit-news-form/:id" element={<EditNewsForm />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/all-news" element={<NewsFeedTable />} />
        <Route path="/admin-main-page" element={<AdminNewsFeed />} />
        <Route path="/admin-view-details/:id" element={<AdminViewDetails />} />
      </Routes>
    </div>
  )
}

export default App

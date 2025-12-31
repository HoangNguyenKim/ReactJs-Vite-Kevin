
import Header from './components/layout/header'
import Footer from './components/layout/footer'
import { Outlet } from 'react-router-dom'
import TodoApp from './components/todo/todoApp'
import { useContext, useEffect } from 'react'
import { AuthContext } from './components/context/auth.context'
import { getUserAPI } from './services/api.service'

const App = () => {
  const { user, setUser } = useContext(AuthContext);
  useEffect(() => {
    loadUserData();
  }, []);
  const loadUserData = async () => {
    const res = await getUserAPI();
    if (res.data) {
      setUser(res.data.user);
    }
  }




  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App

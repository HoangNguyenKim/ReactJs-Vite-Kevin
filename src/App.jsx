
import Header from './components/layout/header'
import Footer from './components/layout/footer'
import { Outlet } from 'react-router-dom'
import TodoApp from './components/todo/todoApp'
import { useContext, useEffect } from 'react'
import { AuthContext } from './components/context/auth.context'
import { getUserAPI } from './services/api.service'
import { Spin } from 'antd';

const App = () => {
  const { user, setUser, isLoading, setIsLoading } = useContext(AuthContext);
  useEffect(() => {
    loadUserData();
  }, []);
  const loadUserData = async () => {
    const res = await getUserAPI();
    if (res.data) {
      setUser(res.data.user);
    }
    setIsLoading(false);
  }




  return (
    <>
      {isLoading ?
        <Spin fullscreen tip="Đang tải..." />
        :
        <>
          <Header />
          <Outlet />
          <Footer /></>
      }
    </>
  )
}

export default App

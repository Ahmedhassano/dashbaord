import './globals.css'
import ThemeProvider from './components/themeProvider'
import Header from './components/Header'
import AsideBar from './components/AsideBar'
export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <body className='max-w-screen min-h-screen md:HomeLayout dark:bg-slate-900 bg-slate-100 '>
          <Header/>
          <AsideBar/> 
          {children}
      </body>
   </ThemeProvider>
  )
}

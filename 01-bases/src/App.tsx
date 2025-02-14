import './App.css'
// import { ObjectLiterals } from './typescript/ObjectLiterals'
// import { BasicTypes } from './typescript/BasicTypes';
// import { BasicFunctions } from './typescript/BasicFunctions';
// import { Counter } from './components/Counter';
import { AuthProvider } from './context/AuthContext';
// import { LoginPage } from './components/LoginPage';
// import { UsersPage } from './components/UsersPage';
import { FormsPage } from './components/FormsPage';

function App() {

  return (
    <AuthProvider>
      <div className='flex flex-col h-dvh justify-center items-center'>
        <p className='text-4xl mb-5'>React + TypeScript</p>
        {/* <h1 className="text-3xl font-bold underline">    Hello world!  </h1> */}
        {/* <BasicTypes /> */}
        {/* <ObjectLiterals /> */}
        {/* <BasicFunctions /> */}
        {/* <Counter /> */}
        {/* <LoginPage /> */}
        {/* <UsersPage /> */}
        <FormsPage />
      </div>
    </AuthProvider>
  )
}

export default App

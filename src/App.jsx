import React from 'react'
import './App.css'
import IPAddressInput from './components/IP'
import Loader from './components/Loader'
import 'semantic-ui-css/semantic.min.css'


const App = () => {
  return (
    <div className='bg-purple-700 w-full h-[100vh] flex justify-center py-10'>

      <IPAddressInput />
    </div>
  )
}

export default App
"use client"
import { useState } from 'react'
import CustomText from '@/components/custom-text'
import InputLabel from '@/components/input-label'
import { Button } from "@/components/ui/button"
import { validateEmail, validatePassword } from '@/helpers/validator'
import toast, { Toaster } from 'react-hot-toast'
import { AiOutlineLoading } from 'react-icons/ai'


export default function Home() {
  const [show, setShow] = useState(false)
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [password,setPassword] = useState('')
  const [alert, showAlert] = useState(false)

  const handleShowPassword = () => {
    setShow(!show)
  }

  const handleChangeEmail = (data:string) => {
    setTimeout(() => {
      setEmail(data)
    }, 1000)
  }

  const handleChangePassword = (data:string) => {
    setTimeout(() => {
      setPassword(data)
    }, 1000)
  }

  const handleSubmit = () => {
    setIsLoading(true)
    if (validateEmail(email) && validatePassword(password)){
      toast.success('Successfully login as ' + email, { duration: 2000 })
    } else if (validateEmail(email) === false && validatePassword(password)) {
      toast.error('Email is not valid', { duration: 2000 })
    } else if (validateEmail(email) && validatePassword(password) === false) {
      toast.error('Password is less than 8 character', { duration: 2000 })
    } else {
      toast.error('Email or password is invalid', { duration: 2000 })
    }

    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }
  return (
    <main>
      <Toaster position="top-right"/>
      <div className='lg:flex h-screen w-full font-inter'>
      <div className='hidden lg:block w-3/5 bg-primary-salt h-full'>
        <div className='bg-white/40 lg:m-20 lg:px-14 lg:pt-20 lg:pb-16 xl:m-32 lx:px-16 xl:pt-24 xl:pb-20 2xl:m-44 2xl:px-[88px] 2xl:pt-[138px] 2xl:pb-[104px]'>
          <CustomText
            size='banner'
            variant='secondary'
            decoration='semibold'
            className='lg:leading-[42px] xl:leading-[45px] 2xl:leading-[57.6px]'
          >
            Lorem ipsum <br/> dolor si <br/> amet 
            <span className='text-salt-black block'>consectetur</span>
          </CustomText>
          <CustomText
            size='h3'
            variant='primary'
            className='mt-10 lg:w-[300px] 2xl:w-[347px] !leading-[27px]'
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </CustomText>
        </div>
      </div>
      <div className='w-full lg:w-2/5'>
        <div className='mt-[83px] lg:mx-6 lg:mt-16 xl:mx-16 xl:mt-28 2xl:mx-32 2xl:mt-[160px]'>
          <div className='px-6 lg:px-8'>
            <CustomText
              variant='primary'
              decoration='bold'
              className='text-[32px] md:text-3xl 2xl:text-[32px]'
            >
              Hello
            </CustomText>
            <CustomText
              size='h3'
              variant='primary'
            >
              Enter your email and password to login.
            </CustomText>
          </div>
          <div className='mt-12 px-6 block lg:hidden'>
            <CustomText
              size='h1'
              variant='primary'
              decoration='semibold'
            >
              Login
            </CustomText>
          </div>
          <div className='mt-6 lg:mt-[80px] px-6 lg:px-8 space-y-6'>
            <InputLabel
              label='Email'
              type='email'
              placeholder='Email'
              onChange={handleChangeEmail}
            />
            <InputLabel
              label='Password'
              type='password'
              placeholder='Password'
              showPassword={show}
              handleShowPassword={handleShowPassword}
              onChange={handleChangePassword}
            />

            <div className='flex items-center justify-between'>
              <div className='flex items-center space-x-2'>
                <input
                  type='checkbox'
                  className='accent-primary'
                />
                <span className='block text-sm 2xl:text-base'>Remember me</span>
              </div>
              <span className='block underline text-sm 2xl:text-base'>Forgot password?</span>
            </div>

            <div className='grid grid-cols-2 gap-6'>
              <Button className='bg-primary-salt hover:bg-primary-salt/80' onClick={handleSubmit}>
                {isLoading && <AiOutlineLoading className="mr-2 h-4 w-4 animate-spin"/>}
                Login
              </Button>
              <Button variant="outline">
                Sign Up
              </Button>
            </div>

            <div className='pt-6'>
              <CustomText
                size='h5'
                className='text-center'
              >
                Or, login with
              </CustomText>
              <div className='mt-4 grid grid-cols-3 gap-4'>
                <Button variant="outline">
                  Facebook
                </Button>
                <Button variant="outline">
                  Linked In
                </Button>
                <Button variant="outline">
                  Google
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </main>
  )
}

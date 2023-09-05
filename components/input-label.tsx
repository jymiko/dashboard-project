import { SyntheticEvent } from 'react'
import { HiEye, HiEyeOff } from 'react-icons/hi'

interface InputWithLabelProps {
  label: string
  value?: string
  type: string
  placeholder: string
  showPassword?: boolean
  handleShowPassword?: () => void
  onChange: (data:string) => void
}

const InputLabel = (props: InputWithLabelProps) => {
  const { label, value, type, placeholder, showPassword, handleShowPassword, onChange } = props
  return (
    <div>
      <label className='font-semibold text-sm 2xl:text-base'>
        { label }
      </label>
      <div className='mt-2 relative'>
        <input
          className='outline-none px-4 py-2 border border-secondary rounded-lg w-full text-sm 2xl:text-base'
          value={value}
          type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
          placeholder={placeholder}
          onChange={(e:SyntheticEvent) => {
            const event = e.target as HTMLInputElement
            onChange(event.value)
          }}
        />
        {
          type === 'password' && (
            showPassword
              ? <HiEyeOff onClick={() => handleShowPassword && handleShowPassword()}
                size={24} className='absolute top-2 right-2.5 text-third cursor-pointer' />
              : <HiEye onClick={() => handleShowPassword && handleShowPassword()}
                size={24} className='absolute top-2 right-2.5 text-third cursor-pointer' />
          )
        }
      </div>
    </div>
  )
}

export default InputLabel
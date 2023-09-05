import { FC, ReactNode } from "react"
import { AlertCircle } from "lucide-react"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"


interface AlertDestructiveProps {
  children: ReactNode
}
 
const AlertDestructive:FC<AlertDestructiveProps> = ({children}) => {
  return (
    <Alert variant="destructive" className="absolute bg-white top-10 right-10 max-w-[200px]">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        {children}
      </AlertDescription>
    </Alert>
  )
}

export default AlertDestructive
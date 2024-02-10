
import { useToast } from '@chakra-ui/react'
function Toaster({ data }) {
    console.log("ToastData:", data)

    const toast = useToast();
    return (

        toast({
            title: data.title,
            description: data.description,
            status: data.status,
            duration: 5000,
            isClosable: true,
        })
    )
}

export default Toaster
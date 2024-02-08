import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    color,
    Button,
} from "@chakra-ui/react"


const CreateUser = () => {
    return (
        <form action="POST">
            <FormControl id="name">
                <FormLabel>Name</FormLabel>
                <Input type="text" name="name" style={{ color: "#fff" }} />



            </FormControl>

            <FormControl id="email">
                <FormLabel>E-Mail</FormLabel>
                <Input type="email" name="email" style={{ color: "#fff" }} />



            </FormControl>


            <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" name="password" style={{ color: "#fff" }} />



            </FormControl>
            <FormControl id="contact-no">
                <FormLabel>Contact Number</FormLabel>
                <Input type="text" name="contact" style={{ color: "#fff" }} />



            </FormControl>

            <Button variant='action' mt={2}>Create</Button>
        </form>
    );
};

export default CreateUser;
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    color,
    Button,
} from "@chakra-ui/react"
import api from "Controllers/api";
import { useEffect, useState } from "react";

const CreateUser = ({ formResponse }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        contact_no: '',
        status: ''

    });
    const [submitData, setSubmitData] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,

        });
    };

    console.log(setFormData);



    const handleCreateUser = async (e) => {
        e.preventDefault();
        console.log('FormData:', formData);
        try {

            setIsLoading(true);
            // Call the createUser function from apiService
            const response = await api.createUser({
                ...formData,
            });

            if (response.status === "OK") {
                setIsLoading(false);
                setSubmitData((prevSubmitData) => {
                    const updatedSubmitData = response;
                    // Call the formResponse prop function with the updatedSubmitData
                    formResponse(updatedSubmitData);
                    return updatedSubmitData;
                });
            }
            // Handle the response or update the UI as needed

            console.log('User created successfully:', response);
        } catch (error) {
            // Handle errors
            console.error('Error creating user:', error);
        }
    };
    useEffect(() => {
        console.log(formData)
    })

    return (
        <form action="POST" onSubmit={handleCreateUser}>
            <FormControl id="name">
                <FormLabel>Name</FormLabel>
                <Input type="text" name="name" value={formData.name} onChange={handleInputChange} style={{ color: "#fff" }} />



            </FormControl>

            <FormControl id="email">
                <FormLabel>E-Mail</FormLabel>
                <Input type="email" name="email" value={formData.email} onChange={handleInputChange} style={{ color: "#fff" }} />



            </FormControl>


            <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" name="password" value={formData.password} onChange={handleInputChange} style={{ color: "#fff" }} />



            </FormControl>
            <FormControl id="contact-no">
                <FormLabel>Contact Number</FormLabel>
                <Input type="text" name="contact_no" value={formData.contact} onChange={handleInputChange} style={{ color: "#fff" }} />



            </FormControl>
            <FormControl id="contact-no">
                <FormLabel>Status</FormLabel>
                <Input type="text" name="status" value={formData.status} onChange={handleInputChange} style={{ color: "#fff" }} />



            </FormControl>

            <Button
                isLoading={isLoading}
                loadingText='Submitting'
                variant='action' type="submit" mt={2}>Create</Button>
        </form>
    );
};

export default CreateUser;
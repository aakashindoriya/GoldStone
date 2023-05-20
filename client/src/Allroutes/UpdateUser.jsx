import React, { useEffect, useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import axios from "axios";
const UserForm = () => {
  const [data, setData] = useState({});
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    axios
      .post(`http://localhost:8080/user/update/${id}`, { ...data })
      .then((res) => {
        setData({ ...res.data });
        alert("updated");
      })
      .catch((err) => console.log(err));
  };
  const { id } = useParams();
  function HandleInput(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    axios
      .get(`http://localhost:8080/user/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Box
      maxWidth="400px"
      margin="0 auto"
      padding="20px"
      borderRadius="md"
      boxShadow="md"
      bg="white"
    >
      <form onSubmit={handleSubmit}>
        <FormControl mb={4}>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            placeholder="Enter name"
            name="name"
            value={data.name}
            onChange={(e) => HandleInput(e)}
          />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            placeholder="Enter email"
            name="email"
            value={data.email}
            onChange={(e) => HandleInput(e)}
          />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Gender</FormLabel>
          <Select
            placeholder="Select gender"
            name="gender"
            value={data.gender}
            onChange={(e) => HandleInput(e)}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Select>
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Status</FormLabel>
          <Select
            placeholder="Select status"
            name="status"
            value={data.status}
            onChange={(e) => HandleInput(e)}
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </Select>
        </FormControl>

        <Button type="submit" colorScheme="teal" onClick={handleSubmit}>
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default UserForm;

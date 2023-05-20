import React from "react";
import { Box, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const ListUser = ({ users }) => {
  const navigate = useNavigate();
  return (
    <VStack spacing={4} align="stretch">
      {users.map((user) => (
        <Box
          key={user.Id}
          bg="gray.100"
          p={4}
          borderRadius="md"
          boxShadow="sm"
          onClick={() => navigate(`/${user._id}`)}
        >
          <Text fontSize="xl" fontWeight="bold">
            {user.name}
          </Text>
          <Text>Email: {user.email}</Text>
          <Text>Status: {user.status}</Text>
          <Text>Gender: {user.gender}</Text>
        </Box>
      ))}
    </VStack>
  );
};

export default ListUser;

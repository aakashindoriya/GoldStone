import React from "react";
import { Box, Button } from "@chakra-ui/react";

const Getusers = ({ getuserdata, loading }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Box bg="gray.100" p={6} borderRadius="md" boxShadow="lg">
        <Button
          colorScheme="teal"
          size="lg"
          isDisabled={loading ? true : false}
          onClick={getuserdata}
        >
          Add Users
        </Button>
      </Box>
    </Box>
  );
};

export default Getusers;

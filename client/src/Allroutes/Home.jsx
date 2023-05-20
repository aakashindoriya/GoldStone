import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box } from "@chakra-ui/react";
import ListUser from "../components/UserList";
import Getusers from "../components/Getusers";
async function GetData() {
  return await axios.get("http://localhost:8080/user");
}
export default function Home() {
  const [users, setUsers] = useState([]);
  const [loading, SetLoading] = useState(false);
  async function GetUsersData() {
    try {
      SetLoading(true);
      let res = await axios.get("http://localhost:8080/user/adduser");
      setUsers([...res.data]);
      SetLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    GetData().then((res) => setUsers([...res.data]));
  }, []);

  if (users.length == 0) {
    return <Getusers getuserdata={GetUsersData} loading={loading} />;
  }
  return (
    <Box>
      <ListUser users={users} />
    </Box>
  );
}

import {
  Button,
  FormControl,
  FormLabel,
  Stack,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";

import UsersService from "../services/UsersService";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { register , handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    try {
      const response = await new UsersService().login(data);
      localStorage.setItem('codetunes_token', response.data.token);

      // cuando obtenemos el token navegamos a la pagina principal
      navigate("/");
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack>
          <FormControl sx={{ marginBottom: "10px" }}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <TextField
              margin="dense"
              id="email"
              placeholder="email"
              fullWidth
              size="small"
              {...register("email")}
            ></TextField>
          </FormControl>

          <FormControl sx={{ marginBottom: "10px" }}>
            <FormLabel htmlFor="password">Password</FormLabel>
            <TextField
              margin="dense"
              id="password"
              placeholder="password"
              fullWidth
              size="small"
              {...register("password")}
            ></TextField>
          </FormControl>
        </Stack>

        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Login;

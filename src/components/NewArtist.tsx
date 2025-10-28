import {
  Button,
  FormControl,
  FormLabel,
  Stack,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArtistsService from "../services/ArtistsService";
import { useForm } from "react-hook-form";

const NewArtist = () => {
    const { register, handleSubmit } = useForm();
      const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    try {
      const response = await new ArtistsService().create(data);
      console.log(response);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };     

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack>
          <FormControl sx={{ marginBottom: "10px" }}>
            <FormLabel htmlFor="name">Name</FormLabel>
            <TextField
              margin="dense"
              id="name"
              placeholder="name"
              fullWidth
              size="small"
              {...register("name")}
            ></TextField>
          </FormControl>
          <FormControl sx={{ marginBottom: "10px" }}>
            <FormLabel htmlFor="bio">Bio</FormLabel>
            <TextField
              margin="dense"
              id="bio"
              placeholder="bio"
              fullWidth
              size="small"
              {...register("bio")}
            ></TextField>
          </FormControl>
          <FormControl sx={{ marginBottom: "10px" }}>
            <FormLabel htmlFor="genre">Genre</FormLabel>
            <TextField
              margin="dense"
              id="genre"
              placeholder="genre"
              fullWidth
              size="small"
              {...register("genre")}
            ></TextField>
          </FormControl>
          <FormControl sx={{ marginBottom: "10px" }}>
            <FormLabel htmlFor="coverImg">Cover Img</FormLabel>
            <TextField
              margin="dense"
              id="coverImg"
              placeholder="coverImg"
              fullWidth
              size="small"
              {...register("coverImg")}
            ></TextField>
          </FormControl>          
        </Stack>
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default NewArtist ;
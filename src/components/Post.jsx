import React from "react";
import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  Collapse,
  IconButton,
  Typography,
} from "@mui/material";

const Post = () => {
  return (
    <Box>
      <Card sx={{ margin: 5 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label='recipe'>
              R
            </Avatar>
          }
          action={
            <IconButton aria-label='settings'>
              <MoreVert />
            </IconButton>
          }
          title='John Doe'
          subheader='September 14, 2021'
        />

        <CardMedia
          component='img'
          height='20%'
          image='https://images.unsplash.com/photo-1651425550316-141792ed005e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80'
          alt='Paella dish'
        />
        <CardContent>
          <Typography variant='body2' color='text.secondary'>
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label='add to favorites'>
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label='share'>
            <Share />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Post;

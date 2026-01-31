import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";

export default function UserDetailsCard({ user, onBack, onEdit }) {
  const fullName = `${user.firstName} ${user.lastName}`;
  const src = user.profileImageUrl
    ? `${import.meta.env.VITE_API_BASE_URL || "http://localhost:5000"}${user.profileImageUrl}`
    : "";

  return (
    <Card elevation={0}>
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={2} sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" } }}>
            <Avatar src={src} alt={fullName} sx={{ width: 84, height: 84 }} />
          </Grid>
          <Grid item xs={12} md={10}>
            <Typography variant="h4" sx={{ fontWeight: 700, textAlign: { xs: "center", md: "left" } }}>
              {fullName}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ textAlign: { xs: "center", md: "left" } }}>
              User details overview
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle2">Email</Typography>
            <Typography variant="body1">{user.email}</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle2">Mobile</Typography>
            <Typography variant="body1">{user.mobile}</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle2">Gender</Typography>
            <Typography variant="body1">{user.gender}</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle2">Status</Typography>
            <Chip label={user.status} color={user.status === "Active" ? "primary" : "default"} />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle2">Location</Typography>
            <Typography variant="body1">{user.location}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle2">Created</Typography>
            <Typography variant="body2" color="text.secondary">
              {new Date(user.createdAt).toLocaleString()}
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={1} sx={{ mt: 2 }}>
          <Grid item xs={12} sm={6}>
            <Button fullWidth variant="outlined" onClick={onBack}>Back to List</Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button fullWidth variant="contained" onClick={onEdit}>Edit User</Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

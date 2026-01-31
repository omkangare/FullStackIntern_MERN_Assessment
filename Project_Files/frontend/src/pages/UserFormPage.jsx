import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Box,
  Paper,
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Select,
  MenuItem,
  InputLabel,
  Avatar,
  Typography,
  Grid,
  FormHelperText,
} from '@mui/material';
import { useSnackbar } from 'notistack';
import { createUser, updateUser, getUserById } from '../services/userService';
import { userValidationSchema } from '../utils/validation';
import LoadingSpinner from '../components/common/LoadingSpinner';

const UserFormPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const isEditMode = Boolean(id);

  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(isEditMode);
  const [previewImage, setPreviewImage] = useState(null);

  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userValidationSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      mobile: '',
      gender: 'Male',
      status: 'Active',
      location: '',
      profile: null,
    },
  });

  const profileFile = watch('profile');

  useEffect(() => {
    if (isEditMode) {
      fetchUser();
    }
  }, [id]);

  useEffect(() => {
    if (profileFile && typeof profileFile !== 'string') {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(profileFile);
    } else if (typeof profileFile === 'string') {
      setPreviewImage(`${import.meta.env.VITE_API_BASE_URL?.replace('/api', '') || 'http://localhost:5000'}${profileFile}`);
    }
  }, [profileFile]);

  const fetchUser = async () => {
    try {
      setInitialLoading(true);
      const response = await getUserById(id);
      const user = response.data;
      
      setValue('firstName', user.firstName);
      setValue('lastName', user.lastName);
      setValue('email', user.email);
      setValue('mobile', user.mobile);
      setValue('gender', user.gender);
      setValue('status', user.status);
      setValue('location', user.location);
      if (user.profile) {
        setValue('profile', user.profile);
      }
    } catch (error) {
      enqueueSnackbar(error.response?.data?.message || 'Failed to fetch user', {
        variant: 'error',
      });
      navigate('/users');
    } finally {
      setInitialLoading(false);
    }
  };

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      
      if (isEditMode) {
        await updateUser(id, data);
        enqueueSnackbar('User updated successfully', { variant: 'success' });
      } else {
        await createUser(data);
        enqueueSnackbar('User created successfully', { variant: 'success' });
      }
      
      navigate('/users');
    } catch (error) {
      const errorMessage = error.response?.data?.errors 
        ? error.response.data.errors.join(', ')
        : error.response?.data?.message || 'An error occurred';
      enqueueSnackbar(errorMessage, { variant: 'error' });
    } finally {
      setLoading(false);
    }
  };

  if (initialLoading) {
    return <LoadingSpinner />;
  }

  return (
    <Box>
      <Paper sx={{ p: 4, maxWidth: 800, mx: 'auto' }}>
        <Typography variant="h5" align="center" gutterBottom>
          Register Your Details
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', my: 3 }}>
          <Avatar
            src={previewImage}
            sx={{ width: 100, height: 100 }}
          />
        </Box>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Controller
                name="firstName"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="First name"
                    placeholder="Enter FirstName"
                    error={!!errors.firstName}
                    helperText={errors.firstName?.message}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Controller
                name="lastName"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Last Name"
                    placeholder="Enter LastName"
                    error={!!errors.lastName}
                    helperText={errors.lastName?.message}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Email address"
                    placeholder="Enter Email"
                    type="email"
                    error={!!errors.email}
                    helperText={errors.email?.message}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Controller
                name="mobile"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Mobile"
                    placeholder="Enter Mobile"
                    error={!!errors.mobile}
                    helperText={errors.mobile?.message}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Controller
                name="gender"
                control={control}
                render={({ field }) => (
                  <FormControl component="fieldset" error={!!errors.gender}>
                    <FormLabel component="legend">Select Your Gender</FormLabel>
                    <RadioGroup {...field} row>
                      <FormControlLabel value="Male" control={<Radio />} label="Male" />
                      <FormControlLabel value="Female" control={<Radio />} label="Female" />
                    </RadioGroup>
                    {errors.gender && (
                      <FormHelperText>{errors.gender.message}</FormHelperText>
                    )}
                  </FormControl>
                )}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Controller
                name="status"
                control={control}
                render={({ field }) => (
                  <FormControl fullWidth error={!!errors.status}>
                    <InputLabel>Select Your Status</InputLabel>
                    <Select {...field} label="Select Your Status">
                      <MenuItem value="">Select...</MenuItem>
                      <MenuItem value="Active">Active</MenuItem>
                      <MenuItem value="InActive">InActive</MenuItem>
                    </Select>
                    {errors.status && (
                      <FormHelperText>{errors.status.message}</FormHelperText>
                    )}
                  </FormControl>
                )}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Controller
                name="profile"
                control={control}
                render={({ field: { onChange, value, ...field } }) => (
                  <Box>
                    <FormLabel>Select Your Profile</FormLabel>
                    <Button
                      variant="outlined"
                      component="label"
                      fullWidth
                      sx={{ mt: 1, justifyContent: 'flex-start' }}
                    >
                      {value && typeof value !== 'string' 
                        ? value.name 
                        : value 
                        ? 'Change file' 
                        : 'Choose file'}
                      <input
                        {...field}
                        type="file"
                        hidden
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files[0];
                          onChange(file || null);
                        }}
                      />
                    </Button>
                    {errors.profile && (
                      <FormHelperText error>{errors.profile.message}</FormHelperText>
                    )}
                  </Box>
                )}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Controller
                name="location"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Enter Your Location"
                    placeholder="Enter Your Location"
                    error={!!errors.location}
                    helperText={errors.location?.message}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={loading}
                sx={{ py: 1.5 }}
              >
                {loading ? 'Submitting...' : 'Submit'}
              </Button>
            </Grid>

            <Grid item xs={12}>
              <Button
                variant="outlined"
                fullWidth
                onClick={() => navigate('/users')}
                disabled={loading}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default UserFormPage;

import {useState, useEffect, useContext} from 'react';
import { Button, TextField, Container, Paper, Typography, Box, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { UserContext } from '../Provider/loginContext';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';

const LoginPage = () => {
    
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');
    const { setUser, setLogin } = useContext(UserContext)
    const navigate = useNavigate()

    async function handleLogin(event){

        event.preventDefault()

            async function loginUser(mail, pass){
                console.log(mail, pass)
                await axios.get("http://localhost:5124/User/login", {params:{ email:mail, password:pass }}).then((response)=>{
                    if(response.data !== null){
                        setUser(response.data)
                        setLogin(true)
                    }
                })
            }
        await loginUser(email, password)
        navigate('/')
    }


    return (
        <Grid>
            <Paper elevation={3} style={{ padding: "10px 20px", width: 300, margin: "20px auto" }}>
                <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography>
                        Login
                    </Typography>
                    <Box component='form' onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin='normal'
                            required
                            fullWidth
                            id='email'
                            label='Email'
                            name='email'
                            autoComplete='email'
                            autoFocus
                            value={email}
                            onChange={(event) => setemail(event.target.value)}
                        />

                        <TextField
                            margin='normal'
                            required
                            fullWidth
                            name='password'
                            label='Password'
                            type='password'
                            id='password'
                            autoComplete='current-password'
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />

                        <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
                            Login
                        </Button>
                        <Grid container>
                            <Grid item>

                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Paper>
        </Grid>
    )
};

export default LoginPage;
import React, { useState, useEffect, useContext } from 'react';
import {
    Container,
    Grid,
    Card,
    CardContent,
    Typography,
    Button,
    Drawer,
    List,
    ListItem,
    ListItemText,
    AppBar,
    Toolbar,
    IconButton,
    Box
    
} from '@mui/material';
import { UserContext } from '../Provider/loginContext';
import Navbar from './Navbar';
import axios from 'axios';

const projects = [
    { id: 1, title: 'Project A', description: 'Description for Project A' },
    { id: 2, title: 'Project B', description: 'Description for Project B' },
    { id: 3, title: 'Project C', description: 'Description for Project C' },
];

const Home = () => {
    let [project, setProjects] = useState([]);
    let [task, setTasks] = useState([]);
    let [req,setReq] = useState([]);
    let {user} = useContext(UserContext);

    useEffect(() => {
        async function getData(){
            while(req === false){
                await axios.get('http://127.0.0.1:5124/Projects', {params:{id:user[0].id}}).then((response) => {
                    console.log(response.data)
                    setProjects(response.data)
                })
                await axios.get('http://127.0.0.1:5124/api/Tasks/created', {params:{id:user[0].id}}).then((response) => {
                    console.log(response.data)
                    setTasks(response.data)
                })
            }
        }
    })

    return (
        <div sx={{ flexGrow: 1, position: 'relative'}}>
            <Navbar/>
            <Container maxWidth="lg" style={{ marginTop: 40, marginLeft: 24 }}>
                <Typography variant="h4" gutterBottom>
                    Active Projects
                </Typography>
                <Grid container spacing={3}>
                    {projects.map((project) => (
                        <Grid item key={project.id} xs={12} sm={6} md={4}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        {project.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {project.description}
                                    </Typography>
                                    <Button variant="contained" color="primary" style={{ marginTop: 10 }}>
                                        View Project
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <Container maxWidth="lg" style={{ marginTop: 40, marginLeft: 240 }}>
                <Typography variant="h4" gutterBottom>
                    Tasks
                </Typography>
                <Grid container spacing={3}>
                    {projects.map((project) => (
                        <Grid item key={project.id} xs={12} sm={6} md={4}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        {project.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {project.description}
                                    </Typography>
                                    <Button variant="contained" color="primary" style={{ marginTop: 10 }}>
                                        View Project
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
};

export default Home;

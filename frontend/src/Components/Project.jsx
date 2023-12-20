// ProjectList.js
import React, { useState } from 'react';
import {
    Button,
    Drawer,
    List,
    ListItem,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    TextField,
    Grid,
    Divider,
    Container,
    Card,
    CardContent
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import GroupIcon from '@mui/icons-material/Group';
import Navbar from './Navbar';

const projects = [
    {
        id: 1,
        name: 'Project A',
        creationDate: '2023-01-01',
        closureDate: '2023-02-01',
        ownerID: 'user123',
        description: 'Description for Project A',
        status: 'Active',
    },
    {
        id: 2,
        name: 'Project B',
        creationDate: '2023-02-01',
        closureDate: '2023-03-01',
        ownerID: 'user456',
        description: 'Description for Project B',
        status: 'Inactive',
    },
    {
        id: 3,
        name: 'Project C',
        creationDate: '2023-03-01',
        closureDate: '2023-04-01',
        ownerID: 'user789',
        description: 'Description for Project C',
        status: 'Active',
    },
];

const Project = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [bottomDrawerOpen, setBottomDrawerOpen] = useState(false);
    const [editedProject, setEditedProject] = useState({});

    const handleEditClick = (project) => {
        setSelectedProject(project);
        setEditedProject({ ...project });
        setDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setDrawerOpen(false);
    };

    const handleSaveChanges = () => {
        // Implement your logic to save changes here
        console.log('Saving changes for project:', editedProject);
        setDrawerOpen(false);
    };

    const handleManageMembersClick = () => {
        setBottomDrawerOpen(true);
    };

    const handleBottomDrawerClose = () => {
        setBottomDrawerOpen(false);
    };

    return (
        <div sx={{ flexGrow: 1, position: 'relative' }}>
            <Navbar/>
            <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerClose}>
                <div style={{ width: '300px', padding: '20px' }}>
                    <Typography variant="h6" gutterBottom>
                        Edit Project
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                label="ID"
                                fullWidth
                                value={editedProject.id || ''}
                                disabled
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Name"
                                fullWidth
                                value={editedProject.name || ''}
                                onChange={(e) => setEditedProject({ ...editedProject, name: e.target.value })}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Creation Date"
                                fullWidth
                                value={editedProject.creationDate || ''}
                                disabled
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Closure Date"
                                fullWidth
                                value={editedProject.closureDate || ''}
                                disabled
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Owner ID"
                                fullWidth
                                value={editedProject.ownerID || ''}
                                disabled
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Description"
                                fullWidth
                                multiline
                                rows={4}
                                value={editedProject.description || ''}
                                onChange={(e) => setEditedProject({ ...editedProject, description: e.target.value })}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Status"
                                fullWidth
                                value={editedProject.status || ''}
                                onChange={(e) => setEditedProject({ ...editedProject, status: e.target.value })}
                            />
                        </Grid>
                    </Grid>
                    <Button variant="contained" color="primary" onClick={handleSaveChanges}>
                        Save Changes
                    </Button>
                </div>
            </Drawer>
            <Drawer anchor="bottom" open={bottomDrawerOpen} onClose={handleBottomDrawerClose}>
                <div style={{ width: '100%', padding: '20px' }}>
                    <Typography variant="h6" gutterBottom>
                        Project Members
                    </Typography>
                    {/* Implement your project members management UI here */}
                </div>
            </Drawer>
            <Container maxWidth="lg" style={{ marginTop: 40, marginLeft: 150 }}>
                <Typography variant="h4" gutterBottom>
                    Projects
                </Typography>
                <Grid container spacing={3} sx={{ flexGrow: 1, position: 'relative' }}>
                    {projects.map((project) => (
                        <Grid item key={project.id} xs={12} sm={6} md={4}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6">
                                        ID: {project.id}
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        Name: {project.name}
                                    </Typography>
                                    <Typography variant="body2">
                                        Description: {project.description}
                                    </Typography>
                                    <IconButton edge="end" onClick={() => handleEditClick(project)} sx={{ paddingRight: 2 }}>
                                        <EditIcon />
                                    </IconButton>
                                    <Button variant="outlined" color="primary" onClick={handleManageMembersClick}>
                                        Manage Members
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

export default Project;


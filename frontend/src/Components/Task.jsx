// ProjectList.js
import React, { useState, useEffect } from 'react';
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

const task = [
    {
        id: 1,
        Taskname: 'Task 1',
        description: 'Description 1',
        createdAt: '2022-01-01',
        closedAt: '2022-01-01',
        created_by: 'John Doe',
        assignedTo: 'Jane Doe',
        projectId: 1,
        status: 'Completed'
    }
]



const Tasks = () => {
    const [selectedTask, setSelectedTask] = useState(null);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [bottomDrawerOpen, setBottomDrawerOpen] = useState(false);
    const [editedTask, setEditedTask] = useState({});

    useEffect(()=>{
        async function fetchUser(){
            
        }
    })

    const handleEditClick = (select) => {
        setSelectedTask(select);
        setEditedTask({ ...select });
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
            <Navbar />
            <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerClose}>
                <div style={{ width: '300px', padding: '20px' }}>
                    <Typography variant="h6" gutterBottom>
                        Edit Task
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                label="ID"
                                fullWidth
                                value={editedTask.id || ''}
                                disabled
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Task Name"
                                fullWidth
                                value={editedTask.taskname || ''}
                                onChange={(e) => handleFieldChange('taskName', e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Description"
                                fullWidth
                                multiline
                                rows={4}
                                value={editedTask.description || ''}
                                onChange={(e) => handleFieldChange('description', e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Created By"
                                fullWidth
                                value={editedTask.created_by || ''}
                                disabled
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Created At"
                                fullWidth
                                value={editedTask.createdAt || ''}
                                disabled
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Closed At"
                                fullWidth
                                value={editedTask.closedAt || ''}
                                disabled
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Assigned To"
                                fullWidth
                                value={editedTask.assignedTo || ''}
                                onChange={(e) => handleFieldChange('assignedTo', e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Project ID"
                                fullWidth
                                value={editedTask.projectId || ''}
                                disabled
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Status"
                                fullWidth
                                value={editedTask.status || ''}
                                onChange={(e) => handleFieldChange('status', e.target.value)}
                            />
                        </Grid>
                    </Grid>
                    <Button variant="contained" color="primary" onClick={handleSaveChanges}>
                        Save Changes
                    </Button>
                </div>
            </Drawer>
            <Container maxWidth="lg" style={{ marginTop: 40, marginLeft: 150 }}>
                <Typography variant="h4" gutterBottom>
                    Task
                </Typography>
                <Grid container spacing={3} sx={{ flexGrow: 1, position: 'relative' }}>
                    {task.map((i) => (
                        <Grid item key={i.id} xs={12} sm={6} md={4}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6">
                                        ID: {i.id}
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        Name: {i.Taskname}
                                    </Typography>
                                    <Typography variant="body2">
                                        Description: {i.description}
                                    </Typography>
                                    <IconButton edge="end" onClick={() => handleEditClick(i)} sx={{ paddingRight: 2 }}>
                                        <EditIcon />
                                    </IconButton>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
};

export default Tasks;
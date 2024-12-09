import React, { useState } from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import '../App.css';
import cooking from '../Images/Fashion.webp'
import cooking2 from '../Images/cooking2.jpg'
import Fashion from '../Images/Fashion.webp'
import Fashion2 from '../Images/fashion2.jpg'
import review from '../Images/review.jpg'
import imageRevenu2 from '../Images/ImageRevenu2.jpg'

const playlists = [
  {
    name: 'Cooking Stories Playlist',
    image: cooking,
    videos: [
      { title: 'How to Make Pizza', products: 3, status: 'Active' },
      { title: 'Easy Salad Recipes', products: 2, status: 'Inactive' },
      { title: 'Baking Basics', products: 5, status: 'Active' },
    ],
  },
  {
    name: 'Tech Reviews Playlist',
    image: cooking2,
    videos: [
      { title: 'Latest Smartphone Review', products: 4, status: 'Active' },
      { title: 'Best Laptops of 2024', products: 1, status: 'Inactive' },
    ],
  },
  {
    name: 'Fashion Inspiration Playlist',
    image: Fashion,
    videos: [
      { title: 'Seasonal Outfit Ideas', products: 2, status: 'Active' },
    ],
  },
  {
    name: 'Travel Vlogs Playlist',
    image: Fashion2,
    videos: [
      { title: 'Exploring Paris', products: 5, status: 'Active' },
      { title: 'Top 5 Destinations in Asia', products: 3, status: 'Inactive' },
      { title: 'Adventures in the Amazon', products: 7, status: 'Active' },
    ],
  },
  {
    name: 'Music Playlist',
    image: review,
    videos: [
      { title: 'Rock Classics Playlist', products: 4, status: 'Active' },
      { title: 'Top 50 Pop Hits', products: 2, status: 'Inactive' },
      { title: 'Electronic Dance Mix', products: 6, status: 'Active' },
    ],
  },
  {
    name: 'Fitness Journey Playlist',
    image: imageRevenu2,
    videos: [
      { title: 'Morning Yoga Routine', products: 3, status: 'Active' },
      { title: 'HIIT Workouts', products: 5, status: 'Inactive' },
      { title: 'Strength Training at Home', products: 8, status: 'Active' },
    ],
  },
  {
    name: 'Tech Tutorials Playlist',
    image: cooking2,
    videos: [
      { title: 'How to Build a PC', products: 4, status: 'Active' },
      { title: 'Best Coding Practices', products: 3, status: 'Inactive' },
      { title: 'Mastering Python Programming', products: 7, status: 'Active' },
    ],
  },
  {
    name: 'Art and Design Playlist',
    image: Fashion,
    videos: [
      { title: 'Basic Drawing Techniques', products: 5, status: 'Active' },
      { title: 'Design Principles for Beginners', products: 2, status: 'Inactive' },
      { title: 'Photography Tips and Tricks', products: 4, status: 'Active' },
    ],
  },
  {
    name: 'Gaming Reviews Playlist',
    image: cooking,
    videos: [
      { title: 'Top 10 RPG Games', products: 4, status: 'Active' },
      { title: 'Best Multiplayer Games', products: 1, status: 'Inactive' },
      { title: 'Console vs PC Gaming', products: 6, status: 'Active' },
    ],
  },
  {
    name: 'Home Improvement Playlist',
    image: Fashion2,
    videos: [
      { title: 'DIY Home Renovations', products: 3, status: 'Active' },
      { title: 'Furniture Restoration Projects', products: 5, status: 'Inactive' },
      { title: 'Gardening Tips and Tricks', products: 6, status: 'Active' },
    ],
  },
  {
    name: 'Educational Videos Playlist',
    image: review,
    videos: [
      { title: 'Physics for Beginners', products: 4, status: 'Active' },
      { title: 'Math Fundamentals', products: 2, status: 'Inactive' },
      { title: 'History of the World', products: 6, status: 'Active' },
    ],
  },
  {
    name: 'Movie Reviews Playlist',
    image: imageRevenu2,
    videos: [
      { title: 'Best Movies of 2024', products: 5, status: 'Active' },
      { title: 'Classic Movies to Watch', products: 2, status: 'Inactive' },
      { title: 'Top Sci-Fi Films', products: 7, status: 'Active' },
    ],
  },
  {
    name: 'Business and Finance Playlist',
    image: cooking2,
    videos: [
      { title: 'How to Invest in Stocks', products: 3, status: 'Active' },
      { title: 'Starting Your Own Business', products: 4, status: 'Inactive' },
      { title: 'Financial Planning for Beginners', products: 5, status: 'Active' },
    ],
  },
  {
    name: 'Cooking Hacks Playlist',
    image: Fashion,
    videos: [
      { title: 'Quick Breakfast Recipes', products: 4, status: 'Active' },
      { title: 'Cooking for Beginners', products: 3, status: 'Inactive' },
      { title: 'Secrets of a Perfect Roast', products: 6, status: 'Active' },
    ],
  },
];



const sideNavPlaylists = [
  {
    name: 'Revenue',
    playlists: [playlists[0], playlists[1], playlists[3], playlists[4], playlists[5]],
  },
  {
    name: 'Shopable Video',
    playlists: [playlists[4], playlists[5], playlists[6], playlists[7], playlists[8]],
  },
  {
    name: 'Story',
    playlists: [playlists[6], playlists[7], playlists[8], playlists[9], playlists[10]],
  },
];

const App = () => {
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  const [filteredPlaylists, setFilteredPlaylists] = useState(playlists);
  const [activeSection, setActiveSection] = useState(null);

  const handlePlaylistClick = (index) => {
    setSelectedPlaylist(filteredPlaylists[index]);
  };

  const handleSideNavClick = (sectionName) => {
    const section = sideNavPlaylists.find((item) => item.name === sectionName);
    if (section) {
      setFilteredPlaylists(section.playlists);
      setSelectedPlaylist(null);
      setActiveSection(sectionName);
    }
  };

  const getTitle = () => {
    if (activeSection) {
      return `${activeSection} Playlists`;
    }
    return 'Product Playlists';
  };

  const movePlaylist = (draggedIndex, targetIndex) => {
    const updatedPlaylists = [...filteredPlaylists];
    const [draggedItem] = updatedPlaylists.splice(draggedIndex, 1);
    updatedPlaylists.splice(targetIndex, 0, draggedItem);
    setFilteredPlaylists(updatedPlaylists);
  };

  const DraggableCard = ({ index, playlist }) => {
    const [, drag] = useDrag(() => ({
      type: 'playlist',
      item: { index },
    }));

    const [, drop] = useDrop(() => ({
      accept: 'playlist',
      hover: (item) => {
        if (item.index !== index) {
          movePlaylist(item.index, index);
          item.index = index;
        }
      },
    }));

    return (
      <Card
        ref={(node) => drag(drop(node))}
        key={index}
        sx={{
          backgroundColor: '#1E1E1E',
          color: '#FFF',
          cursor: 'move',
          boxShadow: 3,
          '&:hover': { boxShadow: 6, transform: 'scale(1.02)', transition: '0.3s' },
        }}
        onClick={() => handlePlaylistClick(index)}
      >
        <CardMedia
          component="img"
          height="120"
          image={playlist.image} // Use the playlist image URL
          alt={playlist.name}
        />
        <CardContent style={{ backgroundColor: 'gray', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="subtitle1" fontWeight="bold">{playlist.name}</Typography>
          <Typography variant="body2" color="text.primary">
            {playlist.videos.length} Videos
          </Typography>
        </CardContent>
      </Card>
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Box display="flex" height="100vh">
        <Drawer
          variant="permanent"
          sx={{
            width: 240,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box', backgroundColor: '#212121', color: '#FFFFFF' },
          }}
        >
          <Typography variant="h6" align="center" sx={{ my: 2, fontWeight: 'bold' }}>
            Menu
          </Typography>

          <List>
            {sideNavPlaylists.map((section, index) => (
              <Accordion key={index} sx={{ backgroundColor: '#333', color: '#fff', boxShadow: 2 }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
                  aria-controls={`${section.name}-content`}
                  id={`${section.name}-header`}
                  sx={{
                    backgroundColor: activeSection === section.name ? '#444' : '#333',
                  }}
                  onClick={() => handleSideNavClick(section.name)}
                >
                  <Typography variant="body1">{section.name}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <List>
                    {section.playlists.map((playlist, playlistIndex) => (
                      <ListItem
                        button
                        key={playlistIndex}
                        onClick={() => handlePlaylistClick(playlistIndex)}
                        sx={{
                          '&:hover': { backgroundColor: '#444' },
                        }}
                      >
                        <ListItemText primary={playlist.name} />
                      </ListItem>
                    ))}
                  </List>
                </AccordionDetails>
              </Accordion>
            ))}
          </List>
        </Drawer>

        <Box flex={1} p={3} bgcolor="#121212" color="#FFFFFF" overflow="auto">
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
            <Typography variant="h5" fontWeight="bold">{getTitle()}</Typography>
            <Box>
              <Button variant="contained" color="secondary" sx={{ mr: 2 }}>
                Import From YouTube
              </Button>
              <Button variant="contained" color="primary">Product Tour</Button>
            </Box>
          </Box>

          <Box display="grid" gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={2}>
            {filteredPlaylists.map((playlist, index) => (
              <DraggableCard key={index} index={index} playlist={playlist} />
            ))}
          </Box>
        </Box>

        <Box width={300} bgcolor="#2D2D2D" color="#FFF" p={3} overflow="auto">
          {selectedPlaylist ? (
            <>
              <Typography variant="h6" gutterBottom fontWeight="bold">
                {selectedPlaylist.name}
              </Typography>
              <Stack spacing={2}>
                {selectedPlaylist.videos.map((video, index) => (
                  <Box
                    key={index}
                    p={2}
                    bgcolor="gray"
                    borderRadius={2}
                    boxShadow={2}
                    sx={{ '&:hover': { backgroundColor: '#555', transition: '0.3s' } }}
                  >
                    <Typography variant="subtitle1">{video.title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Products Attached: {video.products}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {video.status}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </>
          ) : (
            <Typography variant="body1" align="center">
              Select a playlist to view videos
            </Typography>
          )}
        </Box>
      </Box>
    </DndProvider>
  );
};

export default App;

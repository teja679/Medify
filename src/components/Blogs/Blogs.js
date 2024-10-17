import { Box, Container, Grid2, Typography } from "@mui/material";
import BlogCard from "./BlogsCard";

export default function Blogs() {
    return (
        <Box py={6} sx={{ boxSizing: 'border-box' }}>
            <Container>
                <Typography color='primary.main' fontWeight={600} textAlign='center'>
                    Blog & News
                </Typography>
                <Typography textAlign='center' variant='h2' mb={2}>
                    Read Our Latest News
                </Typography>

                <Box sx={{ display: 'flex', gap: '1rem' }} >
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                </Box>
                {/* <Grid2 container spacing={2}>
                    <Grid2 item xs={12} md={4}>
                        <BlogCard />
                    </Grid2>
                    <Grid2 item xs={12} md={4}>
                        <BlogCard />
                    </Grid2>
                    <Grid2 item xs={12} md={4}>
                        <BlogCard />
                    </Grid2>
                </Grid2> */}

            </Container>
        </Box>
    )
}
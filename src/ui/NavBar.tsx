import { MenuOutlined } from '@mui/icons-material'
import { AppBar, Grid, IconButton, Link, Toolbar, Typography } from '@mui/material'
import NextLink from "next/link"

const NavBar = () => {
    return (
        <AppBar position="sticky" elevation={0}>
            <Toolbar>
                <IconButton size="large" edge="start">
                    <MenuOutlined />
                </IconButton>
                {/* el passHref le pasa al Link de material el href */}
                <NextLink href="/" passHref>
                    <Typography variant='h6' color="white">CookieMaster</Typography>
                </NextLink>
                <Grid flex={1} />
                <NextLink href="/theme-changer" passHref>
                    <Typography variant='h6' color="white">Cambiar Tema</Typography>
                </NextLink>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar
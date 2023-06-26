import React, { ChangeEvent, FC, PropsWithChildren, useEffect, useState } from 'react'
import Layout from '@/components/Layout'
import { Button, Card, CardContent, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import Cookies from "js-cookie"
import { GetServerSideProps } from 'next'
import axios from 'axios'



interface Props {
    theme:string
}


const ThemeChanger:FC<Props> = ({theme}) => {
    const [currentTheme, setCurrentTheme] = useState(theme)


    
    const onThemeChange = (event:ChangeEvent<HTMLInputElement>) => {
        const selectedTheme = event.target.value
        setCurrentTheme(selectedTheme)
        Cookies.set("theme", selectedTheme)
    }

    const onClick = async () => {
        const {data} = await axios.get("/api/hello")
        console.log({data});
    }

    useEffect(() => {
        console.log("Cookies", Cookies.get("theme"));
    }, [])
    

    return (
        <Layout>
            <Card>
                <CardContent>
                    <FormControl>
                        <FormLabel>Tema</FormLabel>
                        <RadioGroup value={currentTheme} onChange={onThemeChange}>
                            <FormControlLabel value="light" control={<Radio />}
                                label="Light" />
                            <FormControlLabel value="dark" control={<Radio />}
                                label="Dark" />
                            <FormControlLabel value="custom" control={<Radio />}
                                label="Custom" />
                        </RadioGroup>
                    </FormControl>
                    <Button onClick={onClick}>
                        Solicitud
                    </Button>
                </CardContent>
            </Card>
        </Layout>
    )
}

// Regresamos las cookies al cliente, el componente las recibe y las usa
export const getServerSideProps: GetServerSideProps = async ({req}) => {
// dentro del context tenemos la request y dentro tenemos las cookies

    const {theme = "light", name = "no name"} = req.cookies

    // los temas validos
    const validThemes = ["light", "dark", "custom"]

    return {
        props: {
            // si incluye el tema que estoy recibiendo, entonces regresamos ese tema
            // sino va a ser dark
            theme: validThemes.includes(theme) ? theme : "dark",
            name
        }
    }
}

export default ThemeChanger
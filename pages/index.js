import Head from 'next/head'
import NavigationBar from '../components/NavigationBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Intro from '../components/Intro'


export default function Home() {
    return ( <
        div className = 'htmlAll' >
        <
        Head >
        <
        title > Movie List < /title> <
        meta name = "description"
        content = "Movie List" / >
        <
        link rel = "icon"
        href = '/favicon.ico' / >
        <
        /Head>

        <
        div className = 'myBG border' >
        <
        NavigationBar > < /NavigationBar>   <
        div className = 'border intro' >
        <
        Intro > < /Intro> < /
        div >

        <
        /div >  < /
        div >
    )
}
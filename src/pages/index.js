import * as React from 'react'
import Layout from '../components/layout/Layout'
import { Link } from 'gatsby'
import { SectionHero } from "../components/general/SectionHero";
import { LinksSection } from "../components/layout/LinksSection";

const IndexPage = () => {
    return (
        <Layout>
            <SectionHero>
                <h1>Welcome to my site!</h1>
            </SectionHero>
            <LinksSection>
                <h3>Index of noteworthy items:</h3>
                <div className='cardsContainer'>
                    <Link className='bg-experiments' to={'experiments'}>
                        <div>A few frontend experiments, mainly color theming.</div>
                    </Link>
                    <Link className='bg-about' to={'about'}>
                        <div>A few technical detail about this website.</div>
                    </Link>
                    <Link className='bg-blog' to={'blog'}>
                        <div>A fairly simple placeholder blog.</div>
                    </Link>
                </div>
            </LinksSection>
        </Layout>
    )
}

export default IndexPage


/* Addinng a head to sites */
export function Head() {
    return (
        <>
            <title>Hello World</title>
            <meta property="og:title" content="Aksels Nordvigs small site" />
            <meta name="description" content="Links to resources, portfolio and coding adventures" />
            <meta property="og:description" content="Links to resources, portfolio and coding adventures" />

            <meta name="keywords" content="design, engineering, denmark" />

            <meta name="author" content="Aksel Nordvig" />
            <meta property="og:type" content="website" />

            {/*{
            <meta property="og:image" content="https://www.example.com/image.jpg" />
            <meta property="og:url" content="https://www.example.com" /> */}

        </>
    )
}
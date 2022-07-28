import * as React    from 'react'
import {Link}        from 'gatsby'
import Layout        from '../components/layout/Layout'
import Section       from '../components/general/Section'
import {StaticImage} from "gatsby-plugin-image";

// markup
const NotFoundPage = () => {
    return (
        <Layout>
            <Section>
                <h1>Page not found</h1>
                <StaticImage
                    src="../images/test.jpg"
                    alt="A dinosaur"
                    placeholder="blurred"
                    layout="fixed"
                    width={200}
                    height={200}
                />
                <Link to={'/'}>Frontpage</Link>
            </Section>
        </Layout>
    )
}

export default NotFoundPage

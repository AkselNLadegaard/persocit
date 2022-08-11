import React                     from 'react'
import styled                    from '@emotion/styled'
import {graphql, useStaticQuery} from 'gatsby'

const FooterContainer = styled.footer`
  &.footerContainer {
    width: 100%;
    border-top: 0.3em solid var(--primary);
    background: var(--background);
    color: var(--backgroundText);
    margin: 3rem 0 0;
  }

  .inner-container {
    width: 100%;
    margin: 0 auto;
    max-width: var(--siteWidth);
    padding: 2rem 24px;
  }
`

const Footer = ({theme, type, ...props}) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                    author
                }
            }
        }
    `)

    const siteTitle = data.site.siteMetadata.title
    const siteDescription = data.site.siteMetadata.description
    const siteAuthor = data.site.siteMetadata.author
    const FooterContent = (type) => {
        if (!type || type === "default") {
            return (
                <>
                    <h4>{siteTitle}</h4>
                    <p>{siteDescription}</p>
                    <p>By: {siteAuthor}</p>
                </>
            )
        } else if (type === "climate") {
            return (
                <>
                    <h4>Klimastrikkeklub</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus autem debitis dolor dolore
                        ipsum mollitia necessitatibus porro quis recusandae, suscipit vero voluptates! Consequatur
                        eligendi ex laboriosam provident reprehenderit, sed suscipit?</p>
                </>
            )
        }
    }
    return (
        <FooterContainer
            {...props}
            className={`set-${theme}-alt footerContainer`}
        >
            <div className={` inner-container`}>
                <div className={'about'}>
                    FooterContent

                </div>
            </div>
        </FooterContainer>
    )
}

export default Footer

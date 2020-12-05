import { useStaticQuery, graphql } from 'gatsby'

const useSiteMetadata = () => {
    const { site } = useStaticQuery(
        graphql`
            query SiteMetaData {
                site {
                    siteMetadata {
                        title
                    }
                    pathPrefix
                }
            }
        `
    )

    return {
        pathPrefix: site.pathPrefix,
        siteTitle: site.siteMetadata.title
    }
}

export default useSiteMetadata

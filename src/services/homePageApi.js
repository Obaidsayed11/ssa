import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const homepageApi  = createApi({
    reducerPath:'homePageApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://astralpaints.kwebmakerdigitalagency.com/graphql'
    }),
    endpoints: (builder) => ({
        getHomePage: builder.query({
            query: () => ({
                url: '',
                method: 'POST',
                body: {
          query: `
            {
              pages(where: {name: "Homepage"}) {
                nodes {
                  homepage {
                    banners {
                      bannerImage {
                        node {
                          sourceUrl
                        }
                      }
                      bannersTitle
                      bannerDescription
                      bannerButton {
                        title
                        url
                        target
                      }
                    }
                    homeAboutTitle
                    homeAboutSubtitle
                    homeAboutButton {
                      target
                      title
                      url
                    }
                    homeAboutVideoImage {
                      node {
                        sourceUrl
                      }
                    }
                    homeAboutVideoUrl
                    homeAboutDescription
                    homeCategoryTitle
                    homeCategorySubtitle
                    homeServicesTitle
                    homeServicesSubtitle
                    homeColoursTitle
                    homeColoursSubtitle
                    homeColoursButton {
                      target
                      title
                      url
                    }
                    homeJoinBackgroundImage {
                      node {
                        sourceUrl
                      }
                    }
                    homeJoinTitle
                    homeJoinSubtitle
                    homeJoinButton {
                      target
                      title
                      url
                    }
                    homeJoinDescription
                    blogTitle
                    blogSubtitle
                    categories {
                      link
                      title
                      image {
                        node {
                          sourceUrl
                        }
                      }
                    }
                  }
                }
              }
            }
          `
        },
                headers: {
                    'Content-Type': 'application/json',
                },
            })
        })
    })
})

export const { useGetHomePageQuery } = homepageApi ;
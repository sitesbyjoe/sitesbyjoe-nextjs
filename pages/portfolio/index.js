import React from 'react'
import Head from 'next/head'
import Header from '../../components/header'
import executeQuery from '../../lib/db'

export async function getStaticProps(context) {
// export async function getServerSideProps(context) {

  const pageQuery = `SELECT * FROM pages WHERE slug = "portfolio-list"`

  const portfolioQuery = `
    SELECT photos.image_path, portfolio.*  
    FROM portfolio 
    LEFT JOIN photos 
    ON photos.portfolio_id = portfolio.id 
    AND photos.sort_order = 1 
    ORDER BY portfolio.rank ASC`

  console.log('context', context)
  let pageData = await executeQuery(pageQuery, [])
  let portfolioData = await executeQuery(portfolioQuery, [])

  pageData = JSON.parse(JSON.stringify(pageData))
  portfolioData = JSON.parse(JSON.stringify(portfolioData))

  return {
    props: { 
      pageData: { ...pageData },
      portfolioData: { ...portfolioData }
    }
  }
  
}

function PortfolioList({ pageData, portfolioData }) {
  return (
    <div>
      <Head>
        <title>{pageData[0].title}</title>
        <meta name="description" key="description" content={pageData[0].description } />
        <meta name="keywords" key="keywords" content={pageData[0].keywords } />
      </Head>

      <Header />

      <pre>{JSON.stringify(portfolioData, null, 2)}</pre>
      
    </div>
  )
}

export default PortfolioList

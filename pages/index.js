import React from 'react'
import Head from 'next/head'
import Header from '../components/header'
import executeQuery from '../lib/db'

export async function getStaticProps(context) {
  console.log('context', context)
  return executeQuery('SELECT * FROM pages WHERE slug = "homepage"', [])
  .then(res => {
    const data = JSON.parse(JSON.stringify(res))
    return {
      props: { ...data }
    }
  })
  
}

function HomePage(props) {
  console.log('props', props)
  return (
    <div>
      <Head>
        <title>{props[0].title}</title>
        <meta name="description" key="description" content={props[0].description } />
        <meta name="keywords" key="keywords" content={props[0].keywords } />
      </Head>

      <Header />

      <h1 dangerouslySetInnerHTML={{ __html: props[0].heading }} />
      <hr />
      <div dangerouslySetInnerHTML={{ __html: props[0].content }} />
    </div>
  )
}

export default HomePage

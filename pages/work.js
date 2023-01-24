import Hero from '@/components/Hero'
import Portfolio from '@/components/Portfolio'
import React from 'react'

function work() {
  return (
    <div>
      <Hero heading='My work' message='This is some of my recent work traveling the world.' />
      <Portfolio />
    </div>
  )
}

export default work
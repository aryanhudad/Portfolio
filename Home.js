import React from 'react'

export default function Home() {
  return (
    <Router>
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  </Router>
      
    
  )
}

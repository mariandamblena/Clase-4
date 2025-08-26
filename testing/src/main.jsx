import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Card from './componentes/Card.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <OnOff /> */}
    {/* <ProductCard /> */}
    {/* <TwitterCard userName='jperez' initialIsFollowing={false} > @ssanchez </TwitterCard> */}
    {/* <Video /> */}
    
    <Card 
      userName='jsuarez'
      onFollow='true'
      formatUserName={(name) => name.toUpperCase()}
    >
      Me gustan los deportes de montaña
    </Card>
    
    <Card 
      userName="jperez"
      onFollow='true'
      formatUserName={(name) => name.toUpperCase()}
    >
      Me gusta la tecnología
      <div>
        <a href="">link a bio</a>
      </div>
    </Card>
  </StrictMode>,
)

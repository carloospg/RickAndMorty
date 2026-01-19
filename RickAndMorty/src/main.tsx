import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import {RickAndMortyApp} from './RickAndMortyApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RickAndMortyApp />
  </StrictMode>,
)

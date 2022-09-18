import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {createMemoryHistory} from 'history'
import {Router} from 'react-router-dom'
import '@testing-library/jest-dom'
import {App} from './app'

test('full app rendering/navigating', async () => {
  const history = createMemoryHistory()
  render(
    <Router history={history}>
      <App />
    </Router>,
  )
  const user = userEvent.setup()
 
  expect(screen.getByText(/peliculas/i)).toBeInTheDocument()

  await user.click(screen.getByText(/pelicula/id))

 
  expect(screen.getByText(/fechaestreno/i)).toBeInTheDocument()
})

test('landing on a bad page', () => {
  const history = createMemoryHistory()
  history.push('/some/bad/route')
  render(
    <Router history={history}>
      <App />
    </Router>,
  )

  expect(screen.getByText(/no match/i)).toBeInTheDocument()
})
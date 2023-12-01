import { Button } from '../_components/Button'
import { Gutter } from '../_components/Gutter'
import { VerticalPadding } from '../_components/VerticalPadding'

export default function NotFound() {
  return (
    <Gutter>
      <VerticalPadding top="none" bottom="large">
        <h1 style={{ marginBottom: 0 }}>404</h1>
        <p>This page could not be found. Please navigate back to the home page</p>
        <Button href="/" label="Go Home" appearance="primary" />
      </VerticalPadding>
    </Gutter>
  )
}

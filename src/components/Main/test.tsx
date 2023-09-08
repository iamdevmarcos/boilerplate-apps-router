import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = render(
      <Main
        title={'boilerplate apps router'}
        description={'TypeScript, ReactJS, NextJS e Styled Components'}
      />
    )

    expect(
      screen.getByRole('heading', { name: /boilerplate apps router/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})

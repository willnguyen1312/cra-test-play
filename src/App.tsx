import * as React from 'react'
import styled from 'styled-components'

const AppWrapper = styled.div`
  display: flex;
`

export default class App extends React.Component {
  public render() {
    return <AppWrapper>
      <h1>Hi there</h1>
    </AppWrapper>
  }
}
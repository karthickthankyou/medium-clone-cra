import { Client as Styletron } from 'styletron-engine-atomic'
import { Provider as StyletronProvider } from 'styletron-react'
import { ReactElement } from 'react'
import { LightTheme, BaseProvider, styled } from 'baseui'

export interface IBaseUIWrapper {
  children: ReactElement | string
}

const engine = new Styletron()
const Centered = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
})
export default ({ children }: IBaseUIWrapper) => (
  <StyletronProvider value={engine}>
    <BaseProvider theme={LightTheme}>
      <Centered>{children}</Centered>
    </BaseProvider>
  </StyletronProvider>
)

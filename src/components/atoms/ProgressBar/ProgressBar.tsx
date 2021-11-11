import { ProgressBar, ProgressBarOverrides } from 'baseui/progress-bar'
import { useState } from 'react'
import tw from 'twin.macro'
import BaseUI from '../BaseUIWrapper'

export default () => {
  const [value, setValue] = useState(10)
  return (
    <BaseUI>
      <ProgressBar
        value={value}
        successValue={100}
        overrides={{
          Bar: { style: tw`h-3 bg-red-50` },
          BarProgress: { style: tw`h-3 bg-red-600` },
        }}
      />
    </BaseUI>
  )
}

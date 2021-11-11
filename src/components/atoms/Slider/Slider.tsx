import * as React from 'react'
import { Slider } from 'baseui/slider'
import BaseUI from '../BaseUIWrapper'

export interface ISliderProps {}

export default () => {
  const [num, setNum] = React.useState([10])
  return (
    <BaseUI>
      <Slider
        value={num}
        onChange={({ value }) => value && setNum(value)}
        onFinalChange={({ value }) => console.log(value)}
      />
    </BaseUI>
  )
}

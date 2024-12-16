/* eslint-disable react/jsx-key, react-native/no-inline-styles */
import { useState } from "react"
import { TextStyle, View, ViewStyle } from "react-native"
import {
  Checkbox,
  CheckboxToggleProps,
  Radio,
  RadioToggleProps,
  Switch,
  SwitchToggleProps,
  Text,
} from "@/components"
import { Demo } from "../DemoShowroomScreen"
import { DemoDivider } from "../DemoDivider"
import { DemoUseCase } from "../DemoUseCase"
import { $styles, type ThemedStyle } from "@/theme"
import { translate } from "@/i18n"

function ControlledCheckbox(props: CheckboxToggleProps) {
  const [value, setValue] = useState(props.value || false)
  return <Checkbox {...props} value={value} onPress={() => setValue(!value)} />
}

function ControlledRadio(props: RadioToggleProps) {
  const [value, setValue] = useState(props.value || false)
  return <Radio {...props} value={value} onPress={() => setValue(!value)} />
}

function ControlledSwitch(props: SwitchToggleProps) {
  const [value, setValue] = useState(props.value || false)
  return <Switch {...props} value={value} onPress={() => setValue(!value)} />
}

const $centeredOneThirdCol: ViewStyle = {
  width: "33.33333%",
  alignItems: "center",
  justifyContent: "center",
}
const $centeredText: ThemedStyle<TextStyle> = ({ spacing }) => ({
  textAlign: "center",
  width: "100%",
  marginTop: spacing.xs,
})

export const DemoToggle: Demo = {
  name: "Toggle",
  description: "demoToggle:description",
  data: ({ theme, themed }) => [
    <DemoUseCase
      name="demoToggle:useCase.variants.name"
      description="demoToggle:useCase.variants.description"
    >
      <ControlledCheckbox label="label" />
      <DemoDivider size={24} />
      <ControlledRadio label="label" />
      <DemoDivider size={24} />
      <ControlledSwitch label="label" />
    </DemoUseCase>,

    <DemoUseCase
      name="demoToggle:useCase.statuses.name"
      description="demoToggle:useCase.statuses.description"
      layout="row"
      itemStyle={$styles.flexWrap}
    >
      <ControlledCheckbox containerStyle={$centeredOneThirdCol} />
      <ControlledRadio containerStyle={$centeredOneThirdCol} />
      <ControlledSwitch containerStyle={$centeredOneThirdCol} />
      <DemoDivider style={{ width: "100%" }} />
      <ControlledCheckbox value containerStyle={$centeredOneThirdCol} />
      <ControlledRadio value containerStyle={$centeredOneThirdCol} />
      <ControlledSwitch value containerStyle={$centeredOneThirdCol} />
      <Text preset="formHelper" style={themed($centeredText)}>
        Default
      </Text>

      <DemoDivider size={24} style={{ width: "100%" }} />

      <ControlledCheckbox status="error" containerStyle={$centeredOneThirdCol} />
      <ControlledRadio status="error" containerStyle={$centeredOneThirdCol} />
      <ControlledSwitch status="error" containerStyle={$centeredOneThirdCol} />
      <DemoDivider style={{ width: "100%" }} />
      <ControlledCheckbox value status="error" containerStyle={$centeredOneThirdCol} />
      <ControlledRadio value status="error" containerStyle={$centeredOneThirdCol} />
      <ControlledSwitch value status="error" containerStyle={$centeredOneThirdCol} />
      <Text preset="formHelper" style={themed($centeredText)}>
        Error
      </Text>

      <DemoDivider size={24} style={{ width: "100%" }} />

      <ControlledCheckbox status="disabled" containerStyle={$centeredOneThirdCol} />
      <ControlledRadio status="disabled" containerStyle={$centeredOneThirdCol} />
      <ControlledSwitch status="disabled" containerStyle={$centeredOneThirdCol} />
      <DemoDivider style={{ width: "100%" }} />
      <ControlledCheckbox value status="disabled" containerStyle={$centeredOneThirdCol} />
      <ControlledRadio value status="disabled" containerStyle={$centeredOneThirdCol} />
      <ControlledSwitch value status="disabled" containerStyle={$centeredOneThirdCol} />
      <Text preset="formHelper" style={themed($centeredText)}>
        Disabled
      </Text>
    </DemoUseCase>,

    <DemoUseCase
      name="demoToggle:useCase.passingContent.name"
      description="demoToggle:useCase.passingContent.description"
    >
      <ControlledCheckbox value label="label" />
      <DemoDivider size={24} />
      <ControlledRadio value label="label" />
      <DemoDivider size={24} />
      <ControlledCheckbox value label="label" editable={false} />
      <DemoDivider size={24} />
      <ControlledRadio value label="label" labelPosition="left" />
      <DemoDivider size={24} />
      <ControlledCheckbox value status="error" icon="ladybug" label="label" />
      <DemoDivider size={24} />
      <ControlledSwitch value accessibilityMode="text" label="label" status="error" />
      <DemoDivider size={24} />
      <ControlledSwitch value labelPosition="left" accessibilityMode="icon" label="label" />
    </DemoUseCase>,

    <DemoUseCase
      name="demoToggle:useCase.styling.name"
      description="demoToggle:useCase.styling.description"
      layout="row"
      itemStyle={$styles.flexWrap}
    >
      <ControlledCheckbox
        containerStyle={$centeredOneThirdCol}
        inputOuterStyle={{
          width: 50,
          height: 50,
          backgroundColor: theme.colors.palette.white.s100,
          borderColor: theme.colors.palette.red.s100,
        }}
      />
      <ControlledRadio
        containerStyle={$centeredOneThirdCol}
        inputOuterStyle={{
          width: 50,
          height: 50,
          borderRadius: 25,
          backgroundColor: theme.colors.palette.red.s100,
          borderColor: theme.colors.palette.yellow.s100,
        }}
      />
      <ControlledSwitch
        containerStyle={$centeredOneThirdCol}
        inputOuterStyle={{
          width: 70,
          height: 50,
          borderRadius: 25,
          backgroundColor: theme.colors.palette.red.s100,
          borderColor: theme.colors.palette.yellow.s100,
        }}
      />
      <Text preset="formHelper" style={themed($centeredText)}>
        asfafasfa
      </Text>

      <DemoDivider style={{ width: "100%" }} />

      <ControlledCheckbox
        value
        containerStyle={$centeredOneThirdCol}
        inputOuterStyle={{
          width: 50,
          height: 50,
          backgroundColor: theme.colors.palette.red.s100,
          borderColor: theme.colors.palette.yellow.s100,
        }}
        inputInnerStyle={{
          backgroundColor: theme.colors.palette.blue.s100,
        }}
      />
      <ControlledRadio
        value
        containerStyle={$centeredOneThirdCol}
        inputOuterStyle={{
          width: 50,
          height: 50,
          borderRadius: 25,
          backgroundColor: theme.colors.palette.red.s100,
          borderColor: theme.colors.palette.yellow.s100,
        }}
        inputInnerStyle={{
          backgroundColor: theme.colors.palette.blue.s100,
        }}
      />
      <ControlledSwitch
        value
        containerStyle={$centeredOneThirdCol}
        inputOuterStyle={{
          width: 70,
          height: 50,
          borderRadius: 25,
          backgroundColor: theme.colors.palette.red.s100,
          borderColor: theme.colors.palette.yellow.s100,
        }}
        inputInnerStyle={{
          backgroundColor: theme.colors.palette.blue.s100,
          paddingLeft: 10,
          paddingRight: 10,
        }}
      />
      <Text preset="formHelper" style={themed($centeredText)}>
        asfasfaf
      </Text>

      <DemoDivider style={{ width: "100%" }} />

      <ControlledCheckbox
        value
        icon="ladybug"
        containerStyle={$centeredOneThirdCol}
        inputOuterStyle={{
          width: 50,
          height: 50,
          backgroundColor: theme.colors.palette.red.s100,
          borderColor: theme.colors.palette.yellow.s100,
        }}
        inputInnerStyle={{
          backgroundColor: theme.colors.palette.blue.s100,
        }}
        inputDetailStyle={{
          tintColor: theme.colors.tint,
          height: 35,
          width: 35,
        }}
      />
      <ControlledRadio
        value
        containerStyle={$centeredOneThirdCol}
        inputOuterStyle={{
          width: 50,
          height: 50,
          borderRadius: 25,
          backgroundColor: theme.colors.palette.red.s100,
          borderColor: theme.colors.palette.blue.s100,
        }}
        inputInnerStyle={{
          backgroundColor: theme.colors.palette.red.s100,
        }}
        inputDetailStyle={{
          backgroundColor: theme.colors.tint,
          height: 36,
          width: 36,
          borderRadius: 18,
        }}
      />

      <ControlledSwitch
        value
        containerStyle={$centeredOneThirdCol}
        inputOuterStyle={{
          width: 70,
          height: 50,
          borderRadius: 25,
          backgroundColor: theme.colors.palette.red.s100,
          borderColor: theme.colors.palette.yellow.s100,
        }}
        inputInnerStyle={{
          backgroundColor: theme.colors.tint,
          paddingLeft: 10,
          paddingRight: 10,
        }}
        inputDetailStyle={{
          backgroundColor: theme.colors.palette.red.s100,
          height: 36,
          width: 18,
          borderRadius: 36,
        }}
        accessibilityMode="icon"
      />

      <Text preset="formHelper" style={themed($centeredText)}>
        asfasfaf
      </Text>

      <DemoDivider size={32} style={{ width: "100%" }} />

      <View style={{ width: "100%" }}>
        <ControlledRadio
          value
          label="label"
          LabelTextProps={{ size: "xs", weight: "bold" }}
          status="error"
          labelStyle={{
            backgroundColor: theme.colors.error,
            color: theme.colors.palette.blue.s100,
            paddingHorizontal: 5,
          }}
        />
      </View>

      <DemoDivider size={24} style={{ width: "100%" }} />

      <View style={{ width: "100%" }}>
        <ControlledRadio
          value
          labelPosition="left"
          containerStyle={{ padding: 10, backgroundColor: theme.colors.error }}
          label="label"
          status="error"
          labelStyle={{ color: theme.colors.palette.blue.s100 }}
        />
      </View>
    </DemoUseCase>,
  ],
}

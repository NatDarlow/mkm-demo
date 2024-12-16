import { FC, useEffect, useState } from "react"
import { TextStyle, View, ViewStyle } from "react-native"
import { Button, Text, Screen } from "@/components"
import { AppStackScreenProps } from "../navigators"
import type { ThemedStyle } from "@/theme"
import { useHeader } from "../utils/useHeader"
import { useAppTheme } from "@/utils/useAppTheme"
import * as Location from "expo-location"

interface WelcomeScreenProps extends AppStackScreenProps<"Welcome"> {}

export const WelcomeScreen: FC<WelcomeScreenProps> = (props) => {
  const [location, setLocation] = useState<Location.LocationObject | null>(null)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const { themed, theme } = useAppTheme()

  const { navigation } = props
  const isAuthenticated = false // TODO: TEMPORARY VALUE - replace with alternative state management solution

  function goNext() {
    navigation.navigate("Demo", { screen: "DemoShowroom", params: {} })
  }

  useHeader(
    {
      leftText: "Welcome Screen",
    },
    [],
  )

  useEffect(() => {
    async function getCurrentLocation() {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied")
        return
      }

      let location = await Location.getCurrentPositionAsync({})
      setLocation(location)
    }

    getCurrentLocation()
  }, [])

  let text = "Waiting..."
  if (errorMsg) {
    text = errorMsg
  } else if (location) {
    text = JSON.stringify(location)
  }

  return (
    <Screen preset="fixed">
      <View style={themed($topContainer)}>
        <Text>{text}</Text>
        <Button testID="next-screen-button" preset="reversed" text="Go Next" onPress={goNext} />
      </View>
    </Screen>
  )
}

const $topContainer: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  flexShrink: 1,
  flexGrow: 1,
  flexBasis: "57%",
  justifyContent: "center",
  paddingHorizontal: spacing.lg,
})

import { ComponentType, FC, useEffect, useMemo, useRef, useState } from "react"
import { TextInput, TextStyle, ViewStyle } from "react-native"
import { Button, Icon, Screen, Text, TextField, TextFieldAccessoryProps } from "../components"
import { AppStackScreenProps } from "../navigators"
import type { ThemedStyle } from "@/theme"
import { useAppTheme } from "@/utils/useAppTheme"
import { authenticateAsync } from "expo-local-authentication"
import { useDispatch } from "react-redux"
import { login } from "@/redux/authSlice"

interface LoginScreenProps extends AppStackScreenProps<"Login"> {}

export const LoginScreen: FC<LoginScreenProps> = (props) => {
  const authPasswordInput = useRef<TextInput>(null)

  const [authPassword, setAuthPassword] = useState<string>("")
  const [authEmail, setAuthEmail] = useState<string>("")
  const [isAuthPasswordHidden, setIsAuthPasswordHidden] = useState<boolean>(true)
  const dispatch = useDispatch()

  const {
    themed,
    theme: { colors },
  } = useAppTheme()

  useEffect(() => {
    setAuthEmail("test@mkm.com")
    setAuthPassword("password1")

    // Return a "cleanup" function that React will run when the component unmounts
    return () => {
      setAuthPassword("")
      setAuthEmail("")
    }
  }, [setAuthEmail])

  // Markup for biometrics
  const authenticate = async () => {
    const res = await authenticateAsync()
    console.log(res)
  }
  useEffect(() => {
    authenticate()
  }, [])

  const handleLogin = (): void => {
    const email = "user@example.com"
    const authToken = "exampleAuthToken"

    dispatch(login({ email, authToken }))
  }

  const PasswordRightAccessory: ComponentType<TextFieldAccessoryProps> = useMemo(
    () =>
      function PasswordRightAccessory(props: TextFieldAccessoryProps) {
        return (
          <Icon
            icon={isAuthPasswordHidden ? "view" : "hidden"}
            color={colors.palette.black.s100}
            containerStyle={props.style}
            size={20}
            onPress={() => setIsAuthPasswordHidden(!isAuthPasswordHidden)}
          />
        )
      },
    [isAuthPasswordHidden, colors.palette.black.s100],
  )

  return (
    <Screen
      preset="auto"
      contentContainerStyle={themed($screenContentContainer)}
      safeAreaEdges={["top", "bottom"]}
    >
      <Text testID="login-heading" text="Login" preset="heading" style={themed($logIn)} />
      <Text preset="subheading" text="Enter details" style={themed($enterDetails)} />

      <TextField
        value={authEmail}
        onChangeText={setAuthEmail}
        containerStyle={themed($textField)}
        autoCapitalize="none"
        autoComplete="email"
        autoCorrect={false}
        keyboardType="email-address"
        onSubmitEditing={() => authPasswordInput.current?.focus()}
      />

      <TextField
        ref={authPasswordInput}
        value={authPassword}
        onChangeText={setAuthPassword}
        containerStyle={themed($textField)}
        autoCapitalize="none"
        autoComplete="password"
        autoCorrect={false}
        secureTextEntry={isAuthPasswordHidden}
        onSubmitEditing={handleLogin}
        RightAccessory={PasswordRightAccessory}
      />

      <Button
        testID="login-button"
        text="Login"
        style={themed($tapButton)}
        preset="filled"
        onPress={handleLogin}
      />
      <Button
        testID="biometric"
        text="Biometric Test"
        style={themed($tapButton)}
        preset="reversed"
        onPress={authenticate}
      />
    </Screen>
  )
}

const $screenContentContainer: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  paddingVertical: spacing.xxl,
  paddingHorizontal: spacing.lg,
})

const $logIn: ThemedStyle<TextStyle> = ({ spacing }) => ({
  marginBottom: spacing.sm,
})

const $enterDetails: ThemedStyle<TextStyle> = ({ spacing }) => ({
  marginBottom: spacing.lg,
})

const $hint: ThemedStyle<TextStyle> = ({ colors, spacing }) => ({
  color: colors.tint,
  marginBottom: spacing.md,
})

const $textField: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  marginBottom: spacing.lg,
})

const $tapButton: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  marginTop: spacing.xs,
})

import { ErrorInfo } from "react"
import { ScrollView, TextStyle, View, ViewStyle } from "react-native"
import { Button, Icon, Screen, Text } from "../../components"
import type { ThemedStyle } from "@/theme"
import { useAppTheme } from "@/utils/useAppTheme"

export interface ErrorDetailsProps {
  error: Error
  errorInfo: ErrorInfo | null
  onReset(): void
}

/**
 * Renders the error details screen.
 * @param {ErrorDetailsProps} props - The props for the `ErrorDetails` component.
 * @returns {JSX.Element} The rendered `ErrorDetails` component.
 */
export function ErrorDetails(props: ErrorDetailsProps) {
  const { themed } = useAppTheme()
  return (
    <Screen
      preset="fixed"
      safeAreaEdges={["top", "bottom"]}
      contentContainerStyle={themed($contentContainer)}
    >
      <View style={$topSection}>
        <Icon icon="ladybug" size={64} />
        <Text style={themed($heading)} preset="subheading" text="Something went wrong!" />
        <Text text="This is the screen that your users will see in production when an error is thrown. You'll want to customize this message (located in `app/i18n/en.ts`) and probably the layout as well (`app/screens/ErrorScreen`). If you want to remove this entirely, check `app/app.tsx` for the <ErrorBoundary> component." />
      </View>

      <ScrollView
        style={themed($errorSection)}
        contentContainerStyle={themed($errorSectionContentContainer)}
      >
        <Text style={themed($errorContent)} weight="bold" text={`${props.error}`.trim()} />
        <Text
          selectable
          style={themed($errorBacktrace)}
          text={`${props.errorInfo?.componentStack ?? ""}`.trim()}
        />
      </ScrollView>

      <Button
        preset="reversed"
        style={themed($resetButton)}
        onPress={props.onReset}
        text="RESET APP"
      />
    </Screen>
  )
}

const $contentContainer: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  alignItems: "center",
  paddingHorizontal: spacing.lg,
  paddingTop: spacing.xl,
  flex: 1,
})

const $topSection: ViewStyle = {
  flex: 1,
  alignItems: "center",
}

const $heading: ThemedStyle<TextStyle> = ({ colors, spacing }) => ({
  color: colors.error,
  marginBottom: spacing.md,
})

const $errorSection: ThemedStyle<ViewStyle> = ({ colors, spacing }) => ({
  flex: 2,
  backgroundColor: colors.separator,
  marginVertical: spacing.md,
  borderRadius: 6,
})

const $errorSectionContentContainer: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  padding: spacing.md,
})

const $errorContent: ThemedStyle<TextStyle> = ({ colors }) => ({
  color: colors.error,
})

const $errorBacktrace: ThemedStyle<TextStyle> = ({ colors, spacing }) => ({
  marginTop: spacing.md,
  color: colors.textDim,
})

const $resetButton: ThemedStyle<ViewStyle> = ({ colors, spacing }) => ({
  backgroundColor: colors.error,
  paddingHorizontal: spacing.xxl,
})

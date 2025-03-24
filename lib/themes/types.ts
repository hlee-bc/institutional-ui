export interface Typography {
  fontSize: number
  fontWeight: number
  lineHeight: number
}

export interface Spacing {
  padding: Record<string, number>
  borderRadius: Record<string, number>
}

export type Color = Record<string, string>

export interface Theme {
  antdConfig: {
    themeConfig: object // NOTE: Compilation issues in themeSlice, if typed as ThemeConfig
    themeAlgo: "dark" | "light"
  }
  theme: {
    typography: Record<string, Typography>
    color: Record<string, Color>
    spacing: Spacing
  }
}

export interface ThemeState {
  currentTheme: Theme
  defaultDarkTheme: Theme
  defaultLightTheme: Theme
}

import design from "@/design.json"
import { Theme } from "./types"

export const defaultDarkTheme: Theme["antdConfig"] = {
  themeAlgo: "dark",
  themeConfig: {
    inherit: false,
    components: {
      Table: {
        cellFontSize: design.typography.body1.fontSize,
        headerBg: design.color.darkMode["800"],
        headerColor: design.color.grey["500"],
        borderColor: design.color.darkMode["700"],
        colorBgContainer: "transparent",
        rowHoverBg: design.color.darkMode["600"],
        filterDropdownBg: design.color.darkMode["800"],
        filterDropdownMenuBg: design.color.darkMode["800"],
      },
      Input: {
        colorBgContainer: "transparent",
      },
      InputNumber: {
        colorBgContainer: "transparent",
      },
      Button: {
        defaultGhostBorderColor: "#dfe3eb",
        defaultHoverColor: design.color.base.white,
        defaultHoverBorderColor: "transparent",
        primaryShadow: "transparent",
      },
      Menu: {
        darkItemBg: design.color.darkMode["800"],
        darkItemHoverBg: design.color.darkMode["700"],
      },
      Tabs: {
        itemColor: design.color.grey["700"],
        colorBorderSecondary: design.color.darkMode["700"],
        itemSelectedColor: design.color.base.primaryMuted,
        inkBarColor: design.color.base.primaryMuted,
      },
      Segmented: {
        trackBg: design.color.darkMode["700"],
        itemSelectedBg: design.color.extend.spotlight,
        itemSelectedColor: design.color.base.primaryMuted,
        itemHoverBg: design.color.darkMode["600"],
        controlPaddingHorizontal: 16,
        fontSizeLG: design.typography.para1.fontSize,
      },
      Select: {
        optionPadding: 12,
        colorBgContainer: "transparent",
        colorTextPlaceholder: design.color.base.white,
        optionActiveBg: design.color.base.ghostWhite,
        optionSelectedBg: design.color.base.shadow,
      },
      Empty: {
        colorTextDescription: design.color.base.textMuted,
      },
      Spin: {
        colorBgContainer: design.color.darkMode["800"],
      },
    },
    /* eslint-disable sort-keys */
    token: {
      // Typography
      fontWeightStrong: design.typography.display.fontWeight,
      fontSizeHeading1: design.typography.display.fontSize,
      lineHeightHeading1: design.typography.display.lineHeight,
      fontSizeHeading2: design.typography.title1.fontSize,
      lineHeightHeading2: design.typography.title1.lineHeight,
      fontSizeHeading3: design.typography.title2.fontSize,
      lineHeightHeading3: design.typography.title2.lineHeight,
      fontSizeHeading4: design.typography.title3.fontSize,
      lineHeightHeading4: design.typography.title3.lineHeight,
      fontSizeHeading5: design.typography.subHeading.fontSize,
      lineHeightHeading5: design.typography.subHeading.lineHeight,
      fontSizeSM: design.typography.cap1.fontSize,
      lineHeightSM: design.typography.cap1.lineHeight,
      fontSize: design.typography.para1.fontSize,
      lineHeight: design.typography.para1.lineHeight,
      fontSizeLG: design.typography.body1.fontSize,
      lineHeightLG: design.typography.body1.lineHeight,
      // Color
      colorBgBase: design.color.darkMode["900"],
      colorBgContainer: design.color.darkMode["900"],
      colorBgElevated: design.color.darkMode["800"],
      colorBgSpotlight: design.color.extend.spotlight,
      colorBorder: design.color.grey["700"],
      colorPrimary: design.color.base.primary,
      colorPrimaryBorder: design.color.base.primaryMuted,
      colorSuccess: design.color.base.success,
      colorWarning: design.color.base.warning,
      colorError: design.color.base.error,
      colorText: design.color.base.white,
      colorTextSecondary: design.color.base.textMuted,
      colorErrorText: design.color.base.errorMuted,
      colorSuccessText: design.color.base.successMuted,
      colorWarningText: design.color.base.warningMuted,
      colorTextQuaternary: design.color.base.softWhite,
      colorSplit: design.color.base.softBlue,
    },
  },
}

export const defaultLightTheme: Theme["antdConfig"] = {
  themeAlgo: "light",
  themeConfig: {
    inherit: false,
    token: {
      // Typography
      fontWeightStrong: design.typography.display.fontWeight,
      fontSizeHeading1: design.typography.display.fontSize,
      lineHeightHeading1: design.typography.display.lineHeight,
      fontSizeHeading2: design.typography.title1.fontSize,
      lineHeightHeading2: design.typography.title1.lineHeight,
      fontSizeHeading3: design.typography.title2.fontSize,
      lineHeightHeading3: design.typography.title2.lineHeight,
      fontSizeHeading4: design.typography.title3.fontSize,
      lineHeightHeading4: design.typography.title3.lineHeight,
      fontSizeHeading5: design.typography.subHeading.fontSize,
      lineHeightHeading5: design.typography.subHeading.lineHeight,
      fontSizeSM: design.typography.cap1.fontSize,
      lineHeightSM: design.typography.cap1.lineHeight,
      fontSize: design.typography.para1.fontSize,
      lineHeight: design.typography.para1.lineHeight,
      fontSizeLG: design.typography.body1.fontSize,
      lineHeightLG: design.typography.body1.lineHeight,
      // Color
      colorPrimary: design.color.base.primary,
      colorSuccess: design.color.base.success,
      colorWarning: design.color.base.warning,
      colorError: design.color.base.error,
      colorErrorText: design.color.base.errorMuted,
      colorSuccessText: design.color.base.successMuted,
      colorWarningText: design.color.base.warningMuted,
    },
  },
}

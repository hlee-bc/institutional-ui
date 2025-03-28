import { Button, Select } from "antd"

const LANGUAGE_OPTIONS = [{ label: "English", value: "english" }]

export function Footer() {
  return (
    <div className="w-full flex items-center justify-between p-4">
      <Select
        variant="borderless"
        options={LANGUAGE_OPTIONS}
        defaultValue="english"
        disabled
      />
      <Button
        type="link"
        className="!text-base-white"
        href="https://www.blockchain.com"
        target="_blank"
      >
        © Blockchain.com Group Holdings, Inc.
      </Button>
    </div>
  )
}

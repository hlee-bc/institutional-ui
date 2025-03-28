import { ExclamationCircleFilled } from "@ant-design/icons"
import { notification } from "antd"
import { NotificationConfig } from "antd/es/notification/interface"
import { useCallback } from "react"

interface Props {
  placement?: NotificationConfig["placement"]
}

export default function useToast(props?: Props) {
  const { placement } = props || {}

  const [api, contextHolder] = notification.useNotification({
    placement: placement || "topRight",
  })

  const showErrorToast = useCallback(
    (message: string, description: string, duration?: number) => {
      api.error({
        message,
        description,
        duration: duration || null,
        icon: <ExclamationCircleFilled className="text-base-errormuted" />,
      })
    },
    [api]
  )

  const showInfoToast = useCallback(
    (message: string, description: string, duration?: number) => {
      api.info({
        message,
        description,
        duration: duration || null,
      })
    },
    [api]
  )

  return {
    contextHolder,
    showErrorToast,
    showInfoToast,
  }
}

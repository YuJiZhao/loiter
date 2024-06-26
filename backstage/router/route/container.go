package route

import (
	"github.com/julienschmidt/httprouter"
	"loiter/backstage/controller"
)

/**
 * 容器相关路由
 * @auth eyesYeager
 * @date 2024/1/8 20:01
 */

func InitContainerRoute(routerRoot *httprouter.Router, group string) {
	routerRoot.GET(group+"/refreshAllContainer/:appId", controller.RefreshAllContainer)
	routerRoot.GET(group+"/refreshAppContainer/:appId", controller.RefreshAppContainer)
	routerRoot.GET(group+"/refreshBalancer/:appId", controller.RefreshBalancer)
	routerRoot.GET(group+"/refreshProcessor/:appId", controller.RefreshProcessor)
	routerRoot.GET(group+"/refreshLimiter/:appId", controller.RefreshLimiter)
	routerRoot.GET(group+"/refreshNameList/:appId", controller.RefreshNameList)
}

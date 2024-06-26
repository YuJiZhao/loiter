package config

import (
	"gorm.io/gorm"
	"loiter/model/entity"
)

/**
 * 初始数据
 * @auth eyesYeager
 * @date 2024/1/11 15:47
 */

/*******************************************************
 *                      角色数据
 *******************************************************/

type roleConfig struct {
	SuperAdmin RoleStruct
	Admin      RoleStruct
	User       RoleStruct
}

type RoleStruct struct {
	Entity entity.Role
	Name   string
}

var RoleConfig = roleConfig{
	SuperAdmin: RoleStruct{
		Entity: entity.Role{
			Model:   gorm.Model{ID: 1},
			Name:    "super_admin",
			Weight:  100,
			Remarks: "超级管理员",
		},
		Name: "super_admin",
	},
	Admin: RoleStruct{
		Entity: entity.Role{
			Model:   gorm.Model{ID: 2},
			Name:    "admin",
			Weight:  50,
			Remarks: "管理员",
		},
		Name: "admin",
	},
	User: RoleStruct{
		Entity: entity.Role{
			Model:   gorm.Model{ID: 3},
			Name:    "user",
			Weight:  1,
			Remarks: "用户",
		},
		Name: "user",
	},
}

/*******************************************************
 *                       用户数据
 *******************************************************/

var UserConfig = []entity.User{
	{
		Model:    gorm.Model{ID: 1},
		Username: "loiter",
		Password: "loiter",
		Rid:      1,
		Remarks:  "默认用户，超级管理员",
	},
}

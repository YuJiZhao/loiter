package foundation

import (
	"errors"
	"loiter/global"
	"loiter/kernel/backstage/model/entity"
)

/**
 * 角色服务
 * @author eyesYeager
 * @date 2023/11/26 18:20
 */

type roleFoundation struct {
	weightByRoleMap map[string]uint // map[role]weight 结构
}

var RoleFoundation = roleFoundation{}

// InitRoleContainer 初始化角色容器
func (roleFoundation *roleFoundation) InitRoleContainer() error {
	// 获取角色信息
	var roleSlice []entity.Role
	tx := global.MDB.Find(&roleSlice)
	// 获取角色信息异常
	if tx.Error != nil {
		return errors.New("role information query failed, error:" + tx.Error.Error())
	}
	// role表没有角色数据
	if tx.RowsAffected == 0 {
		return errors.New("there is no role data in the role table. Please initialize the database before starting it")
	}

	// 初始化/清空 weightByRoleMap
	roleFoundation.weightByRoleMap = make(map[string]uint)
	// 填充 weightByRoleMap
	for _, roleEntity := range roleSlice {
		roleFoundation.weightByRoleMap[roleEntity.Name] = roleEntity.Weight
	}
	return nil
}

// GetWeightByRole 获取角色对应的权重
func (roleFoundation *roleFoundation) GetWeightByRole(role string) (error, uint) {
	weight := roleFoundation.weightByRoleMap[role]
	if weight == 0 {
		return errors.New("role " + role + " not defined"), 0
	}
	return nil, weight
}

// GetWeightByRole 获取角色对应的权重
// int 大于 0 则 role1 大于 role2
// int 等于 0 则 role1 等于 role2
// int 小于 0 则 role1 小于 role2
func (roleFoundation *roleFoundation) compareRole(role1 string, role2 string) (error, int) {
	weight1 := roleFoundation.weightByRoleMap[role1]
	if weight1 == 0 {
		return errors.New("role " + role1 + " not defined"), 0
	}
	weight2 := roleFoundation.weightByRoleMap[role2]
	if weight2 == 0 {
		return errors.New("role " + role2 + " not defined"), 0
	}
	return nil, int(weight1 - weight2)
}

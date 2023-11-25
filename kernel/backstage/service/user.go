package service

import (
	"errors"
	"golang.org/x/crypto/bcrypt"
	"loiter/global"
	"loiter/kernel/backstage/constant"
	"loiter/kernel/backstage/model/po"
	"loiter/kernel/backstage/model/receiver"
	"loiter/kernel/utils"
	"net/http"
)

/**
 * @author eyesYeager
 * @date 2023/9/26 15:33
 */

type userService struct {
}

var UserService = userService{}

// DoLogin 用户登录
func (userService *userService) DoLogin(w http.ResponseWriter, data receiver.DoLogin) error {
	// 获取用户密码
	var checkUser po.LoginUserRole
	if tx := global.MDB.Raw(
		"SELECT user.id userId, user.password, role.weight FROM user, role WHERE user.username = ? AND user.role_id = role.id",
		data.Username).Scan(&checkUser); tx.RowsAffected != 1 {
		global.BackstageLogger.Warn("a user with username " + data.Username + " does not exist")
		return errors.New("账号或密码错误")
	}

	// 密码校验
	err := bcrypt.CompareHashAndPassword([]byte(checkUser.Password), []byte(data.Password))
	if err != nil {
		global.BackstageLogger.Warn("the password with username " + data.Username + " is not " + data.Password)
		return errors.New("账号或密码错误")
	}

	// 生成token
	if token, err := utils.GenerateToken(checkUser.UserId, checkUser.Weight); err != nil {
		global.BackstageLogger.Warn("token generation failed for user with username " + data.Username + "; error info:" + err.Error())
		return errors.New("令牌生成失败:" + err.Error())
	} else {
		w.Header().Set(constant.ResponseHead.Token, token)
	}

	//// 添加登录日志
	//remarks, _ := json.Marshal(data)
	//go LogService.AppOperateLog(r, LogService.OperateType["addApp"], string(remarks))
	return nil
}

package utils

import (
	"errors"
	"strings"
)

/**
 * 脱敏相关工具
 * @author eyesYeager
 * @date 2023/9/26 15:14
 */

// SensitiveEmail 邮箱脱敏(例：e*********@163.com)
func SensitiveEmail(email string) (err error, result string) {
	split := strings.Split(email, "@")
	if len(split) != 2 {
		return errors.New("bad mailbox format"), result
	}
	result = string(split[0][0])
	for i := 1; i < len(split[0]); i++ {
		result += "*"
	}
	result += "@" + split[1]
	return err, result
}

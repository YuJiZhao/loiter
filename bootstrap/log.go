package bootstrap

import (
	"fmt"
	"go.uber.org/zap"
	"go.uber.org/zap/zapcore"
	"gopkg.in/natefinch/lumberjack.v2"
	"time"
	"zliway/global"
)

/**
 * 日志启动文件
 * @author eyesYeager
 * @date 2023/4/10 13:42
 */

var (
	level   zapcore.Level // zap 日志等级
	options []zap.Option  // zap 配置项
)

// initializeLog 初始化日志配置
func initializeLog() {
	fmt.Println("start initializing the logging tool...")

	// 设置日志等级
	setLogLevel()

	if global.Config.Log.ShowLine {
		options = append(options, zap.AddCaller())
	}

	// 初始化 zap
	global.Log = zap.New(getZapCore(), options...)

	fmt.Println("log tool initialization completed")
}

func setLogLevel() {
	switch global.Config.Log.Level {
	case "debug":
		level = zap.DebugLevel
		options = append(options, zap.AddStacktrace(level))
	case "info":
		level = zap.InfoLevel
	case "warn":
		level = zap.WarnLevel
	case "error":
		level = zap.ErrorLevel
		options = append(options, zap.AddStacktrace(level))
	case "dpanic":
		level = zap.DPanicLevel
	case "panic":
		level = zap.PanicLevel
	case "fatal":
		level = zap.FatalLevel
	default:
		level = zap.InfoLevel
	}
}

// 扩展 Zap
func getZapCore() zapcore.Core {
	var encoder zapcore.Encoder

	// 调整编码器默认配置
	encoderConfig := zap.NewProductionEncoderConfig()
	encoderConfig.EncodeTime = func(time time.Time, encoder zapcore.PrimitiveArrayEncoder) {
		encoder.AppendString(time.Format("[" + "2006-01-02 15:04:05.000" + "]"))
	}
	encoderConfig.EncodeLevel = func(l zapcore.Level, encoder zapcore.PrimitiveArrayEncoder) {
		encoder.AppendString(global.Profiles.Active + "." + l.String())
	}

	// 设置编码器
	if global.Config.Log.Format == "json" {
		encoder = zapcore.NewJSONEncoder(encoderConfig)
	} else {
		encoder = zapcore.NewConsoleEncoder(encoderConfig)
	}

	return zapcore.NewCore(encoder, getLogWriter(), level)
}

// 使用 lumberjack 作为日志写入器
func getLogWriter() zapcore.WriteSyncer {
	file := &lumberjack.Logger{
		Filename:   global.Config.Log.RootDir + "/" + global.Config.Log.LogFolderApp + "/" + time.Now().Format("2006-01-02") + ".log",
		MaxSize:    global.Config.Log.MaxSize,
		MaxBackups: global.Config.Log.MaxBackups,
		MaxAge:     global.Config.Log.MaxAge,
		Compress:   global.Config.Log.Compress,
	}

	return zapcore.AddSync(file)
}

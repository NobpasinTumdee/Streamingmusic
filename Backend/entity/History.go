package entity

import (
	"time"
	"gorm.io/gorm"
)

type History struct {
	gorm.Model
	DateHistory  time.Time 		`json:"DateHistory"`

	UserID uint 		`json:"UserID"`
	User   User 		`gorm:"foreignKey:UserID"`

	MusicID uint			`json:"MusicID"`
	Music Music				`gorm:"foreignKey:MusicID"`

}
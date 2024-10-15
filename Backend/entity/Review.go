package entity

import (
	"time"
	"gorm.io/gorm"
)

type Review struct {
	gorm.Model
	DateReview  	time.Time 	`json:"DateReview"`
	Rating  		int 		`json:"Rating"`

	UserID 			uint 		`json:"UserID"`
	User   			User 		`gorm:"foreignKey:UserID"`

	MusicID 		uint		`json:"MusicID"`
	Music 			Music		`gorm:"foreignKey:MusicID"`

}
package entity

import (
	"gorm.io/gorm"
)

type Music struct {
	gorm.Model
	MusicName  		string 	`json:"MusicName"`
	Length     		string 	`json:"Length"`
	PicMusic     	string 	`json:"PicMusic"`
	DetailsMusic    string 	`json:"DetailsMusic"`

	History []History 		`gorm:"foreignKey:MusicID"`
	Review []Review 		`gorm:"foreignKey:MusicID"`
	UserID uint 			`json:"UserID"`
	User   User 			`gorm:"foreignKey:UserID"`
}
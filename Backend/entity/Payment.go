package entity

import (
	"time"
	"gorm.io/gorm"
)

type Payment struct {
	gorm.Model
	DatePay  		time.Time 	`json:"DatePay"`
	ExpirationDate  time.Time 	`json:"ExpirationDate"`

	UserID 			uint 		`json:"UserID"`
	User   			User 		`gorm:"foreignKey:UserID"`

	PackageID 		uint		`json:"PackageID"`
	Package 		Package		`gorm:"foreignKey:PackageID"`

}
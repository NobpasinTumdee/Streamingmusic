package entity

import (
	"gorm.io/gorm"
)

type Package struct {
	gorm.Model
	Price  				int 	`json:"Price"`
	PaymentMethod     	string 	`json:"PaymentMethod"`
	PaymentDetails     	string 	`json:"PaymentDetails"`

	Payment []Payment 	`gorm:"foreignKey:PackageID"`
}
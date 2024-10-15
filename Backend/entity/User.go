package entity

import (
	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	UserName  		string 		`json:"UserName"`
	Password     	string 		`json:"Password"`
	Email     		string 		`json:"Email"`
	FirstName 		string		`json:"FirstName"`
	Lastname 		string		`json:"Lastname"`
	ArtistName 		string		`json:"ArtistName"`
	Age 			string		`json:"Age"`
	UserPic 		string		`json:"UserPic"`
	Status 			string 		`json:"Status"`


	History []History `gorm:"foreignKey:UserID"`
	Music []Music `gorm:"foreignKey:UserID"`
	Review []Review `gorm:"foreignKey:UserID"`

	// 1 User เป็นเจ้าของได้หลาย Paylist
	//Paylist []Paylist `gorm:"foreignKey:UserID"`

	// 1 User เป็นเจ้าของได้หลาย Payment
	//Payment []Payment `gorm:"foreignKey:UserID"`


}
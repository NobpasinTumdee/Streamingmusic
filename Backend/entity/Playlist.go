package entity

import (
	"gorm.io/gorm"
)

type Playlist struct {
	gorm.Model
	PlayListName  	string 	`json:"PlayListName"`
	Details     	string 	`json:"Details"`

	MusicList []MusicList 	`gorm:"foreignKey:PlaylistID"`
	UserID 			uint 	`json:"UserID"`
	User   			User 	`gorm:"foreignKey:UserID"`
	
}
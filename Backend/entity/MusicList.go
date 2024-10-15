package entity

import (
	"gorm.io/gorm"
)

type MusicList struct {
	gorm.Model

	PlaylistID 	uint 		`json:"PlaylistID"`
	Playlist   	Playlist 	`gorm:"foreignKey:PlaylistID"`

	MusicID 	uint		`json:"MusicID"`
	Music 		Music		`gorm:"foreignKey:MusicID"`

}
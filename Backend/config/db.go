package config

import (
	"music/entity"
	"fmt"
	//"time"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var db *gorm.DB

func DB() *gorm.DB {
	return db
}

func ConnectionDB() {
	database, err := gorm.Open(sqlite.Open("MusicData.db?cache=shared"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}
	fmt.Println("connected database")
	db = database
}

func SetupDatabase() {
	db.AutoMigrate(
		&entity.User{},
		&entity.History{},
		&entity.Music{},
		&entity.MusicList{},
		&entity.Playlist{},
		&entity.Payment{},
		&entity.Package{},
		&entity.Review{},
	)

	//Music
	Music := []entity.Music{
		{MusicName: "Chimera",Length:  "4.50",PicMusic:  "https://musicart.xboxlive.com/7/e08a5200-0000-0000-0000-000000000002/504/image.jpg"   ,DetailsMusic:  "Lolem asd iov lsid ksf eeiv feina iosad ;olofeh Lofeox msoem kkmek." , UserID: 0 },
		{MusicName: "Smell of the Game",Length:  "4.50",PicMusic:  "https://musicart.xboxlive.com/7/e08a5200-0000-0000-0000-000000000002/504/image.jpg"   ,DetailsMusic:  "Lolem asd iov lsid ksf eeiv feina iosad ;olofeh Lofeox msoem kkmek." , UserID: 0 },
	}
	for _, pkg := range Music {
		db.FirstOrCreate(&pkg,entity.Music{MusicName: pkg.MusicName})
	}

}

package main

import (
	"music/entity"

	"github.com/gin-gonic/gin"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

const PORT = "8000"

func main() {
  db, err := gorm.Open(sqlite.Open("MusicData.db"), &gorm.Config{})
  if err != nil {
    panic("failed to connect database")
  }
  db.AutoMigrate(&entity.User{},&entity.History{},&entity.Music{},&entity.MusicList{},&entity.Playlist{},&entity.Payment{},&entity.Package{},&entity.Review{},)
}

func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT, DELETE, PATCH")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}
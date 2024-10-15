package controller

import (
	"music/config"
	"music/entity"
	"github.com/gin-gonic/gin"
	"net/http"
)





// GET /Music
func ListMusics(c *gin.Context) {

	var Music []entity.Music
	db := config.DB()
	results := db.Select("id, music_name, length, pic_music, details_music , user_id").Find(&Music)
	if results.Error != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": results.Error.Error()})
		return
	}
	c.JSON(http.StatusOK, Music)
}
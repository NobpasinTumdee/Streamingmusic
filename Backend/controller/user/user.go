package user

import (
	"music/config"
	"music/entity"
	"github.com/gin-gonic/gin"
	"net/http"
	"errors"
	"gorm.io/gorm"
)





// GET /User
func ListUsers(c *gin.Context) {

	var User []entity.User
	db := config.DB()
	results := db.Select("id, user_name, password, email, first_name , lastname ,artist_name,age,user_pic,status").Find(&User)
	if results.Error != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": results.Error.Error()})
		return
	}
	c.JSON(http.StatusOK, User)
}
// GET /user/:id
func GetUser(c *gin.Context) {
	ID := c.Param("id")
	var user entity.User

	db := config.DB()


	// Query the user by ID
	results := db.Where("id = ?", ID).First(&user)
	if results.Error != nil {
		if errors.Is(results.Error, gorm.ErrRecordNotFound) {
			c.JSON(http.StatusNotFound, gin.H{"error": "User not found"})
		} else {
			c.JSON(http.StatusInternalServerError, gin.H{"error": results.Error.Error()})
		}
		return
	}

	c.JSON(http.StatusOK, user)
}
package main

import (
	"music/config"
	"github.com/gin-gonic/gin"
	"music/controller"
  	"net/http"
	"music/middlewares"
	"music/controller/user"
)

const PORT = "8000"

func main() {
  	// open connection database
	config.ConnectionDB()

	// Generate databases
	config.SetupDatabase()

	r := gin.Default()

	r.Use(CORSMiddleware())

	r.POST("/signin", user.SignIn) //Sign in == login 
	r.GET("/user" , user.ListUsers)
	router := r.Group("")
	{
		router.Use(middlewares.Authorizes())


		//User
		router.GET("/user/:id", user.GetUser)
		//Music
		router.GET("/music", controller.ListMusics) 

	}

	r.GET("/", func(c *gin.Context) {
		c.String(http.StatusOK, "API RUNNING... PORT: %s", PORT)
	})
	r.Run("localhost:" + PORT)
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
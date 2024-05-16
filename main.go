package main

import (
	"errors"
	"fmt"
	"net/http"
)


func aboutSection(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "about.html")
}
// func projectsSection(w http.ResponseWriter, r *http.Request) {
// 	http.ServeFile(w, r, "about.html")
// }

func main() {
	
	ss := http.FileServer(http.Dir("."))
	http.Handle("/static/", http.StripPrefix("/static/", ss))

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "sample.html")
	})
	http.HandleFunc("/about", aboutSection)
	fmt.Println("Server is running on port 8080")
	err := http.ListenAndServe(":8080", nil)
	if errors.Is(err, http.ErrServerClosed) {
		fmt.Println("Server is closed")
		return
	} else if err != nil {
		fmt.Println("Error starting server: ", err.Error())
		return
	}
	
}

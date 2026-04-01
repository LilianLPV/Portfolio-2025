package main

import (
	"fmt"
	"net/http"
	"template/pages"
	"template/templates"
)

func main() {
	templates.InitTemplates()
	http.HandleFunc("/", pages.PortfolioHandler)
	http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("static"))))
	fmt.Println("Le serveur est lancé http://localhost:8081")
	http.ListenAndServe(":8081", nil)
}

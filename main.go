package main

import (
	"fmt"
	"net/http"
	"template/pages"
	"template/templates"
)

func main() {
	templates.InitTemplates()
<<<<<<< HEAD
	http.HandleFunc("/", pages.PortfolioHandler)
=======
	http.HandleFunc("/", pages.AccueilHandler)
>>>>>>> 711e8ff828967bd6e211c9f69f76610c48781804
	http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("static"))))
	fmt.Println("Le serveur est lancé http://localhost:8081")
	http.ListenAndServe(":8081", nil)
}

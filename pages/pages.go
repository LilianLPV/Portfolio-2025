package pages

import (
	"log"
	"net/http"
	"template/templates"
)

func PortfolioHandler(w http.ResponseWriter, r *http.Request) {
	err := templates.Tpl.ExecuteTemplate(w, "portfolio", nil)
	if err != nil {
		log.Println("Erreur template portfolio:", err)
		http.Error(w, "Erreur serveur", http.StatusInternalServerError)
	}
}
package main

import (
	"fmt"
	"net/http"
	"template/pages"
	"template/templates"
)

func main() {
	templates.InitTemplates()
	http.HandleFunc("/", pages.AccueilHandler)
	http.HandleFunc("/techniques_de_combat", pages.TechniquesDeCombatHandler)
	http.HandleFunc("/camp_d_entrainement", pages.CampDEntrainementHandler)
	http.HandleFunc("/mon_palmares", pages.MonPalmaresHandler)
	http.HandleFunc("/arbitres_et_supporters", pages.ArbitresEtSupportersHandler)
	http.HandleFunc("/provoque_moi_en_duel", pages.ProvoqueMoiEnDuelHandler)

	http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("./assets"))))
	fmt.Println("Le serveur est lancé http://localhost:8080")
	http.ListenAndServe(":8080", nil)
}

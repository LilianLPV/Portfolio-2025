package pages

import (
	"log"
	"net/http"
	"template/templates"
)

func AccueilHandler(w http.ResponseWriter, r *http.Request) {
	err := templates.Tpl.ExecuteTemplate(w, "accueil", nil)
	if err != nil {
		log.Println("Erreur template accueil:", err)
		http.Error(w, "Erreur serveur", http.StatusInternalServerError)
	}
}

func TechniquesDeCombatHandler(w http.ResponseWriter, r *http.Request) {
	err := templates.Tpl.ExecuteTemplate(w, "techniques_de_combat", nil)
	if err != nil {
		log.Println("Erreur template techniques_de_combat:", err)
		http.Error(w, "Erreur serveur", http.StatusInternalServerError)
	}
}

func CampDEntrainementHandler(w http.ResponseWriter, r *http.Request) {
	err := templates.Tpl.ExecuteTemplate(w, "camp_d_entrainement", nil)
	if err != nil {
		log.Println("Erreur template camp_d_entrainement:", err)
		http.Error(w, "Erreur serveur", http.StatusInternalServerError)
	}
}

func MonPalmaresHandler(w http.ResponseWriter, r *http.Request) {
	err := templates.Tpl.ExecuteTemplate(w, "mon_palmares", nil)
	if err != nil {
		log.Println("Erreur template mon_palmares:", err)
		http.Error(w, "Erreur serveur", http.StatusInternalServerError)
	}
}

func ArbitresEtSupportersHandler(w http.ResponseWriter, r *http.Request) {
	err := templates.Tpl.ExecuteTemplate(w, "arbitres_et_supporters", nil)
	if err != nil {
		log.Println("Erreur template arbitres_et_supporters:", err)
		http.Error(w, "Erreur serveur", http.StatusInternalServerError)
	}
}

func ProvoqueMoiEnDuelHandler(w http.ResponseWriter, r *http.Request) {
	err := templates.Tpl.ExecuteTemplate(w, "provoque_moi_en_duel", nil)
	if err != nil {
		log.Println("Erreur template provoque_moi_en_duel:", err)
		http.Error(w, "Erreur serveur", http.StatusInternalServerError)
	}
}
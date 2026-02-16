# Light Services - Frontend (MVP) - V10 (Formulaire V1 figé)

Cette version finalise la structure définitive du formulaire avant le backend.

- Segments : Particulier / Commerce / Entreprise / Chantier
- Champs obligatoires marqués (*)
- Formulaire dynamique selon segment (champs apparaissent/disparaissent)
- Localisation : GPS + suggestions + lat/lon
- Heure souhaitée (datetime-local)
- Urgence (Oui/Non)
- Photo(s) optionnelles + aperçu (preview)
- Traductions FR/EN

V12:
- Restaure le design V10/V9 (services visibles sur accueil)
- Correction définitive des étoiles rouges (JS ne supprime plus les <span class='req'>)
- Alignement Urgence (Oui/Non) amélioré

V13:
- Description rendue optionnelle
- Urgence Oui/Non alignée et plus harmonieuse

V15:
- Phrase d'accueil mise à jour (etc.) FR/EN
- Détails par service (clic sur carte) avec listes de réparations

V16:
- Détails des sous-services visibles au clic sur chaque service (Accueil + Services)
- Résumés des services restaurés sur la page d'accueil (FR/EN)

V17:
- Fix résumés services (clés de traduction s1Text..s8Text)
- Fix affichage détails au clic (CSS toggle)

V18:
- Accueil: suppression du texte 'Cliquer pour voir les détails' (retour style V13)
- Page Services: détails (liste de dépannages) affichés au clic pour chaque service

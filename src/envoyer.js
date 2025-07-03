
export  const envoyer = (data,setIsPopReuseOpen,setPopupMsg) =>{
  

    const { type_contribuable, denomination, caractere, rc, nif, nom, prenom, pieceIdentite, numeroIdentite, sexe, dateNaissance, lieuNaissance, provinceNaissance, communeNaissance, zoneNaissance, nom_pere, nom_mere, telephone, email, provinceActuelle, communeActuelle, zoneActuelle, quartierActuelle, avenueActuelle, maisonActuelle, cni, photo, note_impot, bordereau, rc_copie, status, nif_copie, decret, agrement } = data

    const physique = { nom, prenom, pieceIdentite, numeroIdentite, sexe, dateNaissance, lieuNaissance, provinceNaissance, communeNaissance, zoneNaissance, nom_pere, nom_mere, telephone, email, provinceActuelle, communeActuelle, zoneActuelle, quartierActuelle, avenueActuelle, maisonActuelle, cni, photo, note_impot, bordereau }

    const moral_prive = { denomination, caractere, rc, nif, rc_copie, status, nif_copie, decret, agrement, telephone, email, provinceActuelle, communeActuelle, zoneActuelle, quartierActuelle, avenueActuelle, maisonActuelle, note_impot, bordereau }
    const moral_public = { denomination, caractere, rc, nif, rc_copie, status, nif_copie, decret, agrement, telephone, email, provinceActuelle, communeActuelle, zoneActuelle, quartierActuelle, avenueActuelle, maisonActuelle, note_impot, bordereau }
    const moral_asbl = { denomination, caractere, rc, nif, rc_copie, status, nif_copie, decret, agrement, telephone, email, provinceActuelle, communeActuelle, zoneActuelle, quartierActuelle, avenueActuelle, maisonActuelle, note_impot, bordereau }


    if(type_contribuable && type_contribuable === "physique"){
        console.log(physique)
        setPopupMsg("contribuable physique")
        setIsPopReuseOpen(true)
    }else if(type_contribuable && type_contribuable === "morale"){
        if(caractere === "prive"){
                console.log(moral_prive)
                setPopupMsg("Contribuable morale prive")
                setIsPopReuseOpen(true)
        }else if(caractere === "public"){
                setPopupMsg("Contribuable morale public")
                console.log(moral_public)
                setIsPopReuseOpen(true)
        }else if(caractere === "asbl"){
                setPopupMsg("Contribuable morale asbl")
                console.log(moral_asbl)
                setIsPopReuseOpen(true)
        }else{
            console.log("Error")
        }
    }
}
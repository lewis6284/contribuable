import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  // Utilisateur connecté
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Popups & affichages généraux
  const [popupOpen, setPopupOpen] = useState(true);
  const [showPopup, setShowPopup] = useState(true);
  const [showCarousel, setShowCarousel] = useState(true);
  const [showImageCarousel, setShowImageCarousel] = useState(true);
  const [showNavbar, setShowNavbar] = useState(true);

  // Affichage spécifique des formulaires ou sections
  const [showDeclarationForm, setShowDeclarationForm] = useState(false);
  const [showInscriptionForm, setShowInscriptionForm] = useState(false);
  const [showDeclaration, setShowDeclaration] = useState(false);

  // États liés à la validation et affichage de certains champs
  const [formValid, setFormValid] = useState(false);
  const [showNumeroAS, setShowNumeroAS] = useState(false);

  // Données liées à un formulaire ou paiement
  const [nic, setNic] = useState("");
  const [numeroAS, setNumeroAS] = useState("");
  const [refPaiement, setRefPaiement] = useState("");
  const [montant, setMontant] = useState("");
  const [password, setPassword] = useState("");


  //pupup reusable
  const [popupMsg, setPopupMsg] = useState("")

  // Exemple d’état pour gérer le formulaire d’inscription en un seul objet
  const [formInscription, setFormInscription] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    adresse: '',
    numeroIdentification: '',
  });

  return (
    <GlobalContext.Provider
      value={{
        user,
        setUser,
        isAuthenticated,
        setIsAuthenticated,
        popupOpen,
        setPopupOpen,
        showPopup,
        setShowPopup,
        showCarousel,
        setShowCarousel,
        showImageCarousel,
        setShowImageCarousel,
        showNavbar,
        setShowNavbar,
        showDeclarationForm,
        setShowDeclarationForm,
        showInscriptionForm,
        setShowInscriptionForm,
        showDeclaration,
        setShowDeclaration,
        formValid,
        setFormValid,
        showNumeroAS,
        setShowNumeroAS,
        nic,
        setNic,
        password,
        setPassword,
        numeroAS,
        setNumeroAS,
        refPaiement,
        setRefPaiement,
        formInscription,
        setFormInscription,
        montant,
        setMontant,
        popupMsg,
        setPopupMsg,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
export default GlobalProvider;
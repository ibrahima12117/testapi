const mongoose = require('mongoose');

// Importation des modèles
const Category = require('../models/category');
const Product = require('../models/product');



// Définition du schéma (exemple)
const objetSchema = new mongoose.Schema({
  nom: String,
  valeur: Number,
  date: { type: Date, default: Date.now }
});

// Création du modèle
const Objet = mongoose.model('Objet', objetSchema);

// Fonction pour créer un nouvel objet
async function creerObjet(nom, valeur) {
  const nouvelObjet = new Objet({
    nom: nom,
    valeur: valeur
  });

  try {
    const resultat = await nouvelObjet.save();
    console.log('Objet créé avec succès:', resultat);
  } catch (err) {
    console.error('Erreur lors de la création de l\'objet:', err);
  }
}


